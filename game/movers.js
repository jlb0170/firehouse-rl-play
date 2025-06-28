"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movers = void 0;
const utils_1 = require("../utils");
class Move {
    constructor(drawable, from, to, direction) {
        this.drawable = drawable;
        this.from = from;
        this.to = to;
        this.direction = direction;
    }
}
class Movers {
    constructor(map) {
        this.map = map;
        this.moves = [];
    }
    queue(drawable, from, to) {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        (0, utils_1.bombUnless)(Math.abs(dx) + Math.abs(dy) === 1, 'only cardinal moves allowed');
        let direction;
        if (dx === 1)
            direction = 'right';
        else if (dx === -1)
            direction = 'left';
        else if (dy === 1)
            direction = 'down';
        else
            direction = 'up';
        this.moves.push(new Move(drawable, from, to, direction));
    }
    clear() {
        this.moves = [];
    }
    move() {
        const by = new Map();
        this.moves.forEach(m => {
            if (!by.has(m.to))
                by.set(m.to, []);
            by.get(m.to).push(m);
        });
        const groups = Array.from(by.entries()).map(([xyl, moves]) => ({
            xyl,
            moves,
            direction: moves[0].direction
        }));
        groups.sort((a, b) => {
            if (a.direction !== b.direction) {
                const dirOrder = { up: 0, down: 1, left: 2, right: 3 };
                return dirOrder[a.direction] - dirOrder[b.direction];
            }
            if (a.direction === 'up')
                return b.xyl.y - a.xyl.y;
            if (a.direction === 'down')
                return a.xyl.y - b.xyl.y;
            if (a.direction === 'left')
                return a.xyl.x - b.xyl.x;
            if (a.direction === 'right')
                return b.xyl.x - a.xyl.x;
            return 0;
        });
        this.moves.forEach(m => {
            // TODO this is scary because we might not be able to put it in the new place. 
            if (m.from !== m.to)
                this.map.get(m.from.xy).remove(m.drawable);
        });
        groups.forEach(g => this.processXYL(g.xyl, g.moves));
        this.clear();
    }
    processXYL(xyl, movesToThisXYL) {
        const target = this.map.get(xyl.xy);
        const sources = [...movesToThisXYL];
        if (sources.length === 1) {
            const src = (0, utils_1.the)(sources);
            if (!target.occupied(src.drawable.layer))
                target.set(src.drawable);
            else {
                console.log('merge into', xyl.toString(), [target.layers.data[src.drawable.layer], src.drawable]);
                const from = this.map.get(src.from.xy);
                if (!from.occupied(src.drawable.layer))
                    from.set(src.drawable);
            }
        }
        else if (sources.length > 1) {
            console.log('merge into', xyl.toString(), sources);
        }
    }
}
exports.Movers = Movers;
//# sourceMappingURL=movers.js.map
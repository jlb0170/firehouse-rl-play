"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const layers_1 = require("./layers");
const utils_1 = require("../utils");
const xyl_1 = require("./xyl");
class Cell {
    constructor(xy, map) {
        this.layers = new layers_1.CellLayers();
        this.passable = () => this.layers.passable();
        this.wall = () => this.layers.data.walls;
        this.pawn = () => this.layers.data.pawn;
        this.fire = () => this.layers.data.fire;
        this.smoke = () => this.layers.data.smoke;
        this.floor = () => this.layers.data.floor;
        this.items = () => this.layers.data.items;
        this.ui = () => this.layers.data.ui;
        this.neighbors = () => this.xy.cardinals().map(xy => this.map.get(xy));
        this.u = (y = 1) => this.map.get(this.xy.u(y));
        this.d = (y = 1) => this.map.get(this.xy.d(y));
        this.l = (x = 1) => this.map.get(this.xy.l(x));
        this.r = (x = 1) => this.map.get(this.xy.r(x));
        this.xy = xy;
        this.map = map;
    }
    draw(showLighting, visibleLayers, showNothing, debug) {
        const illumination = this.map.lighting.at(this);
        if (showLighting) {
            const char = Math.floor(illumination).toString();
            if (char !== '0') {
                this.map.drawAt(this.xy.x, this.xy.y, char, '#fff', '#000');
                return;
            }
        }
        if (showNothing) {
            // Don't draw anything - clear board
        }
        else {
            this.layers.draw(visibleLayers, debug, illumination);
        }
    }
    step() {
        this.layers.step();
    }
    replace(drawable) {
        this.layers.onExisting(drawable, (existing) => {
            this.died(existing);
        });
        this.set(drawable);
    }
    set(drawable) {
        this.layers.onExisting(drawable, (existing) => {
            (0, utils_1.bomb)(`tried to replace ${existing.desc()} with ${drawable.desc()}`);
        });
        this.layers.set(drawable);
        drawable.cell = this;
    }
    remove(drawable) {
        this.layers.remove(drawable);
        this.map.lighting.update(this);
    }
    died(drawable) {
        // drawable.died() later if the drawable needs to have onDeath behavior
        this.remove(drawable);
    }
    occupied(layer) {
        return !!this.layers.data[layer];
    }
    move(drawable, xy) {
        this.remove(drawable);
        this.map.set(xy, drawable);
    }
    queueMove(drawable, xyl) {
        this.map.moving(drawable, xyl_1.XYL.at(this.xy, drawable.layer), xyl);
    }
    create(drawable) {
        return this.map.create(this.xy.x, this.xy.y, drawable);
    }
}
exports.Cell = Cell;
//# sourceMappingURL=cell.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fire = void 0;
const utils_1 = require("../utils");
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
const smoke_1 = require("./smoke");
const xyl_1 = require("../game/xyl");
class Fire extends drawable_1.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'fire';
        this.passable = false;
        this.light = () => 5;
        this.char = () => "▲"; // "🔥"
        this.color = () => colors_1.FIRE.random();
    }
    step() {
        if (!(0, utils_1.oneIn)(this.age)) {
            this.cell.died(this);
            return;
        }
        this.cell.replace(new smoke_1.Smoke());
        if (this.cell.layers.data.walls) {
            this.cell.layers.data.walls.ignite();
        }
        if ((0, utils_1.oneIn)(4)) {
            (0, utils_1.randFrom)(this.cell.neighbors()).replace(new Fire());
        }
        if ((0, utils_1.oneIn)(4)) {
            const neighbor = (0, utils_1.randFrom)(this.cell.neighbors());
            if (!neighbor.passable())
                return;
            this.cell.queueMove(this, xyl_1.XYL.at(neighbor.xy, this.layer));
        }
    }
}
exports.Fire = Fire;
//# sourceMappingURL=fire.js.map
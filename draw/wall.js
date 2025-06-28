"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
const fire_1 = require("./fire");
const utils_1 = require("../utils");
const smoke_1 = require("./smoke");
class Wall extends drawable_1.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'walls';
        this.passable = false;
        this.transparency = 0;
        this.isDoor = false;
        this.burningFor = null;
        this.char = () => this.isDoor ? '+' : '#';
        this.color = () => this.isBurning() ? colors_1.SMOLDERING : this.isDoor ? colors_1.WOOD : colors_1.BORDER;
        this.light = () => this.isBurning() ? 1 : 0;
        this.desc = () => this.isDoor ? 'Door' : 'Wall';
        this.makeDoor = () => {
            this.isDoor = true;
            this.passable = true;
        };
        this.isBurning = () => this.burningFor !== null;
    }
    step() {
        if (!this.isBurning())
            return;
        if ((0, utils_1.oneIn)(2))
            this.cell.replace(new smoke_1.Smoke());
        if (this.burningFor <= 0) {
            this.cell.died(this);
            return;
        }
        this.burningFor--;
        if ((0, utils_1.oneIn)(2))
            this.cell.replace(new fire_1.Fire());
    }
    ignite() {
        if (this.isBurning())
            return;
        this.burningFor = 20;
    }
}
exports.Wall = Wall;
//# sourceMappingURL=wall.js.map
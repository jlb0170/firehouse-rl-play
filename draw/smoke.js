"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smoke = void 0;
const utils_1 = require("../utils");
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
const xyl_1 = require("../game/xyl");
class Smoke extends drawable_1.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'smoke';
        this.transparency = 0.1;
        this.light = () => 0;
        this.char = () => '+';
        this.color = () => colors_1.SMOKE.random();
    }
    draw(_debug, _illumination) {
        const fg = this.color();
        this.cell.map.drawAtSmoke(this.cell.xy.x, this.cell.xy.y, this.char(), fg, 'transparent');
        return false;
    }
    agedOut() {
        if (utils_1.isInTestMode) {
            return this.age > 3;
        }
        return !(0, utils_1.oneIn)(this.age / 3);
    }
    shouldDrift() {
        if (utils_1.isInTestMode) {
            return this.age % 4 === 0;
        }
        return (0, utils_1.oneIn)(4);
    }
    drift() {
        const xy = utils_1.isInTestMode ? this.cell.xy.r() : this.cell.xy.random();
        if (this.cell.map.get(xy).passable())
            this.cell.queueMove(this, xyl_1.XYL.at(xy, this.layer));
    }
    step() {
        if (this.agedOut()) {
            this.cell.died(this);
            return;
        }
        if (this.shouldDrift())
            this.drift();
    }
}
exports.Smoke = Smoke;
//# sourceMappingURL=smoke.js.map
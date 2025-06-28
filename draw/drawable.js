"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawable = void 0;
const colors_1 = require("../game/colors");
const xy_1 = require("../game/xy");
class Drawable {
    constructor() {
        this.age = 0;
        this.passable = true;
        this.transparency = 1;
        this.cell = null;
    }
    step() { }
    desc() { return this.constructor.name; }
    draw(_debug, illumination) {
        const fg = this.applyIllumination(this.color(), illumination);
        this.cell.map.drawAt(this.cell.xy.x, this.cell.xy.y, this.char(), fg, colors_1.BACKGROUND);
        return true;
    }
    applyIllumination(color, illumination) {
        if (!color.startsWith('#'))
            return color;
        const clamped = Math.min(illumination, 9);
        const normalized = clamped / 9;
        const factor = Math.max(0, normalized);
        let r, g, b;
        if (color.length === 4) {
            // 3-char hex like #0a0
            r = parseInt(color[1] + color[1], 16);
            g = parseInt(color[2] + color[2], 16);
            b = parseInt(color[3] + color[3], 16);
        }
        else if (color.length === 7) {
            // 6-char hex like #00aa00
            r = parseInt(color.slice(1, 3), 16);
            g = parseInt(color.slice(3, 5), 16);
            b = parseInt(color.slice(5, 7), 16);
        }
        else {
            return color;
        }
        const darkR = Math.floor(r * factor);
        const darkG = Math.floor(g * factor);
        const darkB = Math.floor(b * factor);
        return `#${darkR.toString(16).padStart(2, '0')}${darkG.toString(16).padStart(2, '0')}${darkB.toString(16).padStart(2, '0')}`;
    }
    r() { return this.cell.r(); }
    l() { return this.cell.l(); }
    u() { return this.cell.u(); }
    d() { return this.cell.d(); }
    queueMove(to) {
        this.cell.queueMove(this, to instanceof xy_1.XY ? to.on(this.layer) : to.cell.xy.on(this.layer));
    }
}
exports.Drawable = Drawable;
//# sourceMappingURL=drawable.js.map
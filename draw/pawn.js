"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
class Pawn extends drawable_1.Drawable {
    constructor(name) {
        super();
        this.name = name;
        this.layer = 'pawn';
        this.passable = false;
        this.transparency = 0;
        this.light = () => 3;
        this.char = () => '@';
        this.color = () => colors_1.FOREGROUND;
    }
    desc() {
        return this.name ?? super.desc();
    }
    draw(debug, _illumination) {
        return super.draw(debug, 9);
    }
}
exports.Pawn = Pawn;
//# sourceMappingURL=pawn.js.map
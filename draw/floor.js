"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Floor = void 0;
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
class Floor extends drawable_1.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'floor';
        this.light = () => 0;
        this.char = () => '.';
        this.color = () => colors_1.BORDER;
    }
}
exports.Floor = Floor;
//# sourceMappingURL=floor.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
class UI extends drawable_1.Drawable {
    constructor(c, textColor = colors_1.FOREGROUND) {
        super();
        this.c = c;
        this.textColor = textColor;
        this.layer = 'ui';
        this.light = () => 9;
        this.char = () => this.c;
        this.color = () => this.textColor;
        this.step = () => this.cell.remove(this);
    }
}
exports.UI = UI;
//# sourceMappingURL=ui.js.map
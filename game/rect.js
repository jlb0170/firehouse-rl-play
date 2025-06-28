"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
const utils_1 = require("../utils");
class Rect {
    constructor(xy, w, h) {
        this.xy = xy;
        this.w = w;
        this.h = h;
        this.eachCell = (onXY) => (0, utils_1.times)(this.w, x => (0, utils_1.times)(this.h, y => onXY(this.xy.add(x, y))));
    }
    get ul() { return this.xy; }
    get ur() { return this.xy.add(this.w - 1, 0); }
    get bl() { return this.xy.add(0, this.h - 1); }
    get br() { return this.xy.add(this.w - 1, this.h - 1); }
    get cb() { return this.xy.add((0, utils_1.half)(this.w), this.h - 1); }
    get cl() { return this.xy.add(0, (0, utils_1.half)(this.h)); }
    get cr() { return this.xy.add(this.w - 1, (0, utils_1.half)(this.h)); }
    get uc() { return this.xy.add((0, utils_1.half)(this.w), 0); }
    eachBorder(onXY) {
        (0, utils_1.times)(this.w, x => {
            onXY(this.xy.add(x, 0)); // top edge
            onXY(this.xy.add(x, this.h - 1)); // bottom edge
        });
        (0, utils_1.times)(this.h - 2, y => {
            onXY(this.xy.add(0, y + 1));
            onXY(this.xy.add(this.w - 1, y + 1));
        });
    }
}
exports.Rect = Rect;
Rect.xyWH = (topLeft, width, height) => new Rect(topLeft, width, height);
//# sourceMappingURL=rect.js.map
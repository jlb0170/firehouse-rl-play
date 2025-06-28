"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XY = void 0;
const colors_1 = require("./colors");
const utils_1 = require("../utils");
const xyl_1 = require("./xyl");
const config_1 = require("./config");
class XY {
    static setSize(w, h) { XY.w = w; XY.h = h; }
    static oob(x, y) { return x < 0 || x >= XY.w || y < 0 || y >= XY.h; }
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.add = (x, y) => {
            if (!Number.isInteger(x) || !Number.isInteger(y)) {
                throw new Error(`XY coordinates must be integers: got ${x}, ${y}`);
            }
            return new XY(this.x + x, this.y + y);
        };
        this.sub = (x, y) => this.add(-x, -y);
        this.subXY = (other) => this.add(-other.x, -other.y);
        this.u = (n = 1) => this.add(0, -n);
        this.ur = (n = 1) => this.add(n, -n);
        this.r = (n = 1) => this.add(n, 0);
        this.dr = (n = 1) => this.add(n, n);
        this.d = (n = 1) => this.add(0, n);
        this.dl = (n = 1) => this.add(-n, n);
        this.l = (n = 1) => this.add(-n, 0);
        this.ul = (n = 1) => this.add(-n, -n);
        this.draw = (display, char, fg, bg = colors_1.BACKGROUND) => display.draw(this.x, this.y, char, fg, bg);
        this.cell = (grid) => grid[this.y][this.x];
        this.cardinals = () => [this.u(1), this.d(1), this.l(1), this.r(1)].filter(xy => !XY.oob(xy.x, xy.y));
        this.neighbors = () => [this.u(1), this.ur(1), this.r(1), this.dr(1), this.d(1), this.dl(1), this.l(1), this.ul(1)].filter(xy => !XY.oob(xy.x, xy.y));
        this.toString = () => `${this.x}, ${this.y}`;
        this.on = (layer) => xyl_1.XYL.at(this, layer);
        (0, utils_1.bombUnless)(Number.isInteger(x) && Number.isInteger(y), () => `XY coordinates must be integers: got ${x}, ${y}`);
    }
    random() {
        (0, utils_1.bombIf)(utils_1.isInTestMode, () => "can't use random functions in test mode");
        const dirs = this.cardinals();
        return (0, utils_1.randFrom)(dirs);
    }
    onR(fn, n = 1) { const xy = this.r(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
    onL(fn, n = 1) { const xy = this.l(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
    onU(fn, n = 1) { const xy = this.u(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
    onD(fn, n = 1) { const xy = this.d(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
}
exports.XY = XY;
XY.w = config_1.Config.WIDTH;
XY.h = config_1.Config.HEIGHT;
XY.at = (x, y) => new XY(x, y);
//# sourceMappingURL=xy.js.map
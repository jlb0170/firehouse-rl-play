"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XYL = void 0;
class XYL {
    constructor(xy, layer) {
        this.xy = xy;
        this.layer = layer;
        this.toString = () => XYL.toString(this.xy, this.layer);
    }
    get x() { return this.xy.x; }
    get y() { return this.xy.y; }
    static toString(xy, layer) {
        return `${layer}@(${xy.x}, ${xy.y})`;
    }
    static key(xy, layer) {
        return XYL.toString(xy, layer);
    }
    static at(xy, layer) {
        const key = XYL.toString(xy, layer);
        let cached = this._cache.get(key);
        if (!cached) {
            cached = new XYL(xy, layer);
            this._cache.set(key, cached);
        }
        return cached;
    }
}
exports.XYL = XYL;
XYL._cache = new Map();
//# sourceMappingURL=xyl.js.map
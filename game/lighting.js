"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighting = void 0;
const xy_1 = require("./xy");
class Lighting {
    constructor(map) {
        this.map = map;
        this._sources = new Set();
        this.atXY = (xy) => {
            if (xy_1.XY.oob(xy.x, xy.y))
                return 0;
            return this._illumination[xy.y][xy.x] ?? 0;
        };
        this.at = (cell) => this.atXY(cell.xy);
        this._illumination = Array.from({ length: map.h }, () => new Array(map.w));
        this.clear();
    }
    clear() {
        this._illumination.forEach(row => row.fill(0));
    }
    add(cell) {
        this._sources.add(cell);
    }
    remove(cell) {
        this._sources.delete(cell);
    }
    update(cell) {
        if (cell.layers.lit())
            this.add(cell);
        else
            this.remove(cell);
    }
    transparencyOf(x, y) {
        if (xy_1.XY.oob(x, y))
            return 1;
        const cell = this.map.get(xy_1.XY.at(x, y));
        const transparency = cell.layers.transparency();
        return transparency;
    }
    eachLine(x0, y0, x1, y1, fn) {
        let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
        let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
        let err = dx + dy;
        while (true) {
            if (fn(x0, y0) === false)
                break; // caller stopped ray
            if (x0 === x1 && y0 === y1)
                break;
            const e2 = err << 1;
            if (e2 >= dy) {
                err += dy;
                x0 += sx;
            }
            if (e2 <= dx) {
                err += dx;
                y0 += sy;
            }
        }
    }
    redraw() {
        this.clear();
        for (const cell of this._sources) {
            const radius = Math.min(Object.values(cell.layers.data)
                .reduce((sum, drawable) => sum + (drawable?.light() ?? 0), 0), 9);
            if (radius <= 0)
                continue;
            /* tiles in a square; cheap for r ≤ 9 */
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    const tx = cell.xy.x + dx;
                    const ty = cell.xy.y + dy;
                    if (xy_1.XY.oob(tx, ty))
                        continue;
                    /* quick circle check */
                    if (dx * dx + dy * dy > radius * radius)
                        continue;
                    /* trace ray, accumulate translucency */
                    let vis = 1;
                    this.eachLine(cell.xy.x, cell.xy.y, tx, ty, (x, y) => {
                        const dx = x - cell.xy.x, dy = y - cell.xy.y;
                        const base = Lighting.quadraticFallOff(radius, dx, dy);
                        const bright = Math.round(base * vis);
                        if (bright > this.atXY(xy_1.XY.at(x, y)))
                            this.set(xy_1.XY.at(x, y), bright);
                        if (x === cell.xy.x && y === cell.xy.y)
                            return true; // skip torch tile
                        vis *= this.transparencyOf(x, y);
                        return vis > 0;
                    });
                    if (vis <= 0)
                        continue; // ray blocked
                    const base = Lighting.quadraticFallOff(radius, dx, dy);
                    const bright = Math.round(base * vis);
                    if (bright > this._illumination[ty][tx])
                        this._illumination[ty][tx] = bright;
                }
            }
        }
    }
    set(xy, intensity) {
        this._illumination[xy.y][xy.x] = intensity;
    }
    sources() {
        return this._sources;
    }
    lit(cell) {
        return this._sources.has(cell);
    }
    static quadraticFallOff(radius, dx, dy) {
        const d2 = dx * dx + dy * dy;
        if (d2 > radius * radius)
            return 0;
        return radius - ((d2 + (radius >> 1)) / radius | 0);
    }
}
exports.Lighting = Lighting;
//# sourceMappingURL=lighting.js.map
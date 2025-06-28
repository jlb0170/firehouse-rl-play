"use strict";
/* flood.ts  ── coordinate-aware, domain-agnostic propagator */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flood = void 0;
const utils_1 = require("../utils");
class Flood {
    constructor(permeabilityOfXY, falloffFromTo, combineAtXY) {
        this.permeabilityOfXY = permeabilityOfXY;
        this.falloffFromTo = falloffFromTo;
        this.combineAtXY = combineAtXY;
        this.heap = []; // max-heap on load
    }
    clear() { this.heap.length = 0; }
    seed(posXY, radius, payload) {
        this.push({ pos: posXY, src: posXY, load: payload, radius });
    }
    run() {
        for (let node; (node = this.pop());) {
            const { pos, src, load, radius } = node;
            if (!this.combineAtXY(pos, load))
                continue; // caller kept/ignored
            this.forOpenNeighbors(pos, (nbr, tau) => {
                const next = this.falloffFromTo(src, nbr, radius) * tau;
                if (next > 0)
                    this.push({ pos: nbr, src, load: next, radius });
            });
        }
    }
    // ── internals ────────────────────────────────────────────
    forOpenNeighbors(pos, fn) {
        (0, utils_1.each)(pos.cardinals(), n => {
            const tau = this.permeabilityOfXY(n);
            if (tau)
                fn(n, tau);
        });
    }
    push(n) {
        const h = this.heap;
        let i = h.push(n) - 1;
        while (i && h[(i - 1) >> 1].load < h[i].load) {
            [h[i], h[(i - 1) >> 1]] = [h[(i - 1) >> 1], h[i]];
            i = (i - 1) >> 1;
        }
    }
    pop() {
        const h = this.heap;
        if (!h.length)
            return;
        const top = h[0], tail = h.pop();
        if (h.length) {
            h[0] = tail;
            for (let i = 0;;) {
                const l = i * 2 + 1, r = l + 1;
                let hi = i;
                if (l < h.length && h[l].load > h[hi].load)
                    hi = l;
                if (r < h.length && h[r].load > h[hi].load)
                    hi = r;
                if (hi === i)
                    break;
                [h[i], h[hi]] = [h[hi], h[i]];
                i = hi;
            }
        }
        return top;
    }
}
exports.Flood = Flood;
//# sourceMappingURL=flood.js.map
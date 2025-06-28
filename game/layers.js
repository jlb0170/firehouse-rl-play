"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellLayers = void 0;
class CellLayers {
    constructor() {
        this.data = {};
    }
    draw(visibleLayers, debug, illumination) {
        CellLayers.layerNames.some(name => {
            if (visibleLayers.size > 0 && !visibleLayers.has(name))
                return false;
            const drawable = this.data[name];
            if (drawable?.draw) {
                return drawable.draw(debug, illumination);
            }
            return false;
        });
    }
    step() {
        CellLayers.layerNames.forEach(name => {
            const drawable = this.data[name];
            if (!drawable)
                return;
            drawable.step();
            drawable.age++;
        });
    }
    set(drawable) {
        this.data[drawable.layer] = drawable;
    }
    onExisting(layerOrDrawable, fOfExisting) {
        const layer = typeof layerOrDrawable === 'string' ? layerOrDrawable : layerOrDrawable.layer;
        const existing = this.data[layer];
        if (!existing)
            return;
        fOfExisting(existing);
    }
    remove(drawable) {
        delete this.data[drawable.layer];
        drawable.cell = null;
    }
    passable() {
        return CellLayers.layerNames.every(name => {
            const drawable = this.data[name];
            return drawable?.passable ?? true;
        });
    }
    transparency() {
        if (this.data.ui)
            return this.data.ui.transparency;
        const transparencies = CellLayers.layerNames
            .map(name => this.data[name]?.transparency)
            .filter(t => t !== undefined);
        return transparencies.length > 0 ? Math.min(...transparencies) : 1;
    }
    lit() {
        return CellLayers.layerNames.some(name => {
            const drawable = this.data[name];
            return drawable && drawable.light() > 0;
        });
    }
}
exports.CellLayers = CellLayers;
CellLayers.layerNames = ['ui', 'pawn', 'smoke', 'fire', 'walls', 'items', 'floor'];
//# sourceMappingURL=layers.js.map
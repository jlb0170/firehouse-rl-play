"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminalLines = void 0;
const layers_1 = require("../game/layers");
const terminalLines = (cell) => {
    if (!cell)
        return ['no cell selected'];
    const lines = [`${cell.xy.x}, ${cell.xy.y}`];
    const layers = cell.layers.data;
    const present = layers_1.CellLayers.layerNames.filter(n => layers[n]);
    if (present.length === 0)
        lines.push('empty');
    else
        present.forEach(name => {
            const d = layers[name];
            const l = d.light() > 0 ? ` (light: ${d.light()})` : '';
            lines.push(`${name}: ${d.desc()}${l}`);
        });
    return lines;
};
exports.terminalLines = terminalLines;
//# sourceMappingURL=terminal-info.js.map
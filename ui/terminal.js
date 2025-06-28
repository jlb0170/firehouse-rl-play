"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terminal = void 0;
const utils_1 = require("../utils");
const terminal_info_1 = require("./terminal-info");
class Terminal {
    constructor(elementId) {
        this.currentCell = null;
        this.setCurrent = (cell) => this.currentCell = cell;
        this.clear = () => this.element.innerHTML = '';
        this.element = (0, utils_1.$1)(elementId);
    }
    draw() {
        const lines = (0, terminal_info_1.terminalLines)(this.currentCell);
        this.element.innerHTML = lines.map(l => `<div class="layer-info">${l}</div>`).join('');
    }
}
exports.Terminal = Terminal;
//# sourceMappingURL=terminal.js.map
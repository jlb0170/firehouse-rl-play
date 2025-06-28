"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleTerminal = void 0;
const terminal_info_1 = require("./terminal-info");
class ConsoleTerminal {
    constructor() {
        this.cell = null;
        this.setCurrent = (c) => this.cell = c;
        this.clear = () => { };
    }
    draw() {
        (0, terminal_info_1.terminalLines)(this.cell).forEach(l => console.log(l));
    }
}
exports.ConsoleTerminal = ConsoleTerminal;
//# sourceMappingURL=console-terminal.js.map
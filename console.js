"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const node_readline_1 = __importDefault(require("node:readline"));
const map_1 = require("./game/map");
const config_1 = require("./game/config");
const initializer_1 = require("./game/initializer");
const xy_1 = require("./game/xy");
const console_terminal_1 = require("./ui/console-terminal");
const dom = new jsdom_1.JSDOM('<!doctype html><html><body></body></html>');
const { window } = dom;
const g = global;
g.window = window;
g.document = window.document;
g.requestAnimationFrame = (cb) => setTimeout(cb, 0);
g.window.requestAnimationFrame = g.requestAnimationFrame;
const map = new map_1.Map(config_1.Config.WIDTH, config_1.Config.HEIGHT);
new initializer_1.Initializer(map).initialize();
map.lighting.redraw();
const term = new console_terminal_1.ConsoleTerminal();
const show = () => console.log(map.renderToChars());
const rl = node_readline_1.default.createInterface({ input: process.stdin, output: process.stdout });
rl.setPrompt('> ');
rl.prompt();
rl.on('line', line => {
    const [cmd, a, b] = line.trim().split(/\s+/);
    if (cmd === 'step') {
        map.step();
        map.lighting.redraw();
        show();
    }
    else if (cmd === 'hover') {
        const x = parseInt(a, 10);
        const y = parseInt(b, 10);
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            const cell = map.get(xy_1.XY.at(x, y));
            term.setCurrent(cell);
            term.draw();
        }
    }
    else if (cmd === 'draw') {
        show();
    }
    else if (cmd === 'quit' || cmd === 'exit') {
        rl.close();
        return;
    }
    else {
        console.log('commands: step, draw, hover x y, quit');
    }
    rl.prompt();
});
rl.on('close', () => process.exit(0));
//# sourceMappingURL=console.js.map
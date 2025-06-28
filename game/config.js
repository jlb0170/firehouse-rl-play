"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const rot_js_1 = require("rot-js");
const colors_1 = require("./colors");
class Config {
    static createDisplay(width, height) {
        return new rot_js_1.Display({
            width,
            height,
            fontSize: Config.FONT_SIZE,
            fontFamily: Config.FONT_FAMILY,
            forceSquareRatio: true,
            fg: colors_1.FOREGROUND,
            bg: colors_1.BACKGROUND
        });
    }
}
exports.Config = Config;
Config.WIDTH = 90;
Config.HEIGHT = 50;
Config.FONT_SIZE = 16;
Config.FONT_FAMILY = "Courier, monospace";
//# sourceMappingURL=config.js.map
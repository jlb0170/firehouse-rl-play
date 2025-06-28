"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMOKE = exports.FIRE = exports.Colors = exports.SMOLDERING = exports.WOOD = exports.BORDER = exports.BACKGROUND = exports.FOREGROUND = void 0;
const utils_1 = require("../utils");
exports.FOREGROUND = "#0a0";
exports.BACKGROUND = "#000";
exports.BORDER = "#444";
exports.WOOD = "#8B4513";
exports.SMOLDERING = '#6c200e';
class Colors {
    constructor(colors) {
        this.colors = colors;
    }
    random() {
        return utils_1.isInTestMode ? this.colors[0] : (0, utils_1.randFrom)(this.colors);
    }
}
exports.Colors = Colors;
exports.FIRE = new Colors(['#ff6600', '#ff9900', '#ffcc00', '#ff3300']);
exports.SMOKE = new Colors(['#333', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc']);
//# sourceMappingURL=colors.js.map
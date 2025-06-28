"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Torch = void 0;
const utils_1 = require("../utils");
const colors_1 = require("../game/colors");
const drawable_1 = require("./drawable");
const smoke_1 = require("./smoke");
class Torch extends drawable_1.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'items';
        this.transparency = 1;
        this.light = () => 5;
        this.char = () => '*';
        this.color = () => colors_1.FIRE.random();
    }
    smoking() {
        return utils_1.isInTestMode ? true : (0, utils_1.oneIn)(3);
    }
    step() {
        if (this.smoking())
            this.cell.replace(new smoke_1.Smoke());
    }
}
exports.Torch = Torch;
//# sourceMappingURL=torch.js.map
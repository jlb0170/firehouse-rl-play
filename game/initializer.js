"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializer = void 0;
const utils_1 = require("../utils");
const fire_1 = require("../draw/fire");
const wall_1 = require("../draw/wall");
const ui_1 = require("../draw/ui");
const xy_1 = require("./xy");
const rect_1 = require("./rect");
const floor_1 = require("../draw/floor");
const torch_1 = require("../draw/torch");
const pawn_1 = require("../draw/pawn");
const TITLE = [
    "#   #  ###  ####  #     ####       ###  #   #      ##### ##### ####  #####",
    "#   # #   # #   # #     #   #     #   # ##  #      #       #   #   # #    ",
    "# # # #   # ####  #     #   #     #   # # # #      ####    #   ####  #### ",
    "# # # #   # #   # #     #   #     #   # #  ##      #       #   #   # #    ",
    "## ## #   # #   # #     #   #     #   # #   #      #       #   #   # #    ",
    "#   #  ###  #   # ##### ####       ###  #   #      #     ##### #   # #####"
];
class Initializer {
    constructor(map) {
        this.map = map;
    }
    initialize() {
        this.addField();
        this.addTitle();
        this.addWelcomeText();
        this.addPawn();
        this.addBarracks();
        this.addUserSuggestion();
    }
    addField() {
        rect_1.Rect.xyWH(xy_1.XY.at(0, 0), this.map.w, this.map.h).eachCell(xy => {
            this.map.set(xy, new floor_1.Floor());
        });
    }
    addTitle() {
        const w = TITLE[0].length;
        const h = TITLE.length;
        const startX = (0, utils_1.centeredStart)(this.map.w, TITLE[0]);
        const startY = Math.floor((this.map.h - h) / 2);
        const start = xy_1.XY.at(startX, startY);
        this.addRoom(rect_1.Rect.xyWH(start.add(-1, -1), w + 2, h + 2));
        (0, utils_1.each)(TITLE, (line, y) => {
            (0, utils_1.each)(line, (c, x) => {
                if (c === '#')
                    this.map.set(start.add(x, y), new fire_1.Fire());
            });
        });
    }
    addWelcomeText() {
        this.addCenteredText("Welcome to Fire House RL", -13);
        this.addCenteredText("press space to unpause", 13);
    }
    addCenteredText(text, yOffset) {
        const centerY = (0, utils_1.half)(this.map.h);
        const y = centerY + yOffset;
        const startX = (0, utils_1.centeredStart)(this.map.w, text);
        this.addUIText(text, xy_1.XY.at(startX, y));
    }
    addPawn() {
        this.map.set(xy_1.XY.at(55, 24), new pawn_1.Pawn());
    }
    addRoom(rect) {
        //rect.eachCell(xy => this.map.set(xy, new Floor()))
        rect.eachBorder(xy => {
            this.map.set(xy, new wall_1.Wall());
        });
        [rect.ul.add(1, 1), rect.ur.add(-1, 1), rect.bl.add(1, -1), rect.br.add(-1, -1)].forEach(xy => {
            this.map.set(xy, new torch_1.Torch());
        });
    }
    addBarracks() {
        const rect = rect_1.Rect.xyWH(xy_1.XY.at(60, 8), 9, 9);
        this.addRoom(rect);
        const entrance = this.map.get(rect.cl);
        const wall = entrance.wall();
        wall.makeDoor();
        entrance.l().u().set(new torch_1.Torch());
        entrance.l().d().set(new torch_1.Torch());
    }
    addUserSuggestion() {
        this.map.runOnStep('user.suggest', (frameNumber) => {
            if (frameNumber % 5 !== 0)
                return;
            const y = this.map.h - 1;
            const text = 'click the @ symbol';
            const startX = (0, utils_1.centeredStart)(this.map.w, text);
            this.addUIText(text, xy_1.XY.at(startX, y));
        });
    }
    addUIText(text, xy) {
        (0, utils_1.each)(text, (c, i) => this.map.set(xy.add(i, 0), new ui_1.UI(c)));
    }
}
exports.Initializer = Initializer;
//# sourceMappingURL=initializer.js.map
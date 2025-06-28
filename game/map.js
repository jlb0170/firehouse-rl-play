"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const utils_1 = require("../utils");
const xy_1 = require("./xy");
const cell_1 = require("./cell");
const config_1 = require("./config");
const lighting_1 = require("./lighting");
const movers_1 = require("./movers");
class Map {
    constructor(width, height) {
        this.stepCallbacks = {};
        this.frameNumber = 0;
        this.get = (xy) => {
            const result = xy.cell(this.grid);
            (0, utils_1.bombUnless)(result, () => 'No cell at ' + xy);
            return result;
        };
        this.display = config_1.Config.createDisplay(width, height);
        this.smokeDisplay = config_1.Config.createDisplay(width, height);
        this.w = width;
        this.h = height;
        this.grid = [];
        (0, utils_1.times)(height, y => {
            this.grid[y] = [];
            (0, utils_1.times)(width, x => {
                this.grid[y][x] = new cell_1.Cell(xy_1.XY.at(x, y), this);
            });
        });
        xy_1.XY.setSize(width, height);
        this.lighting = new lighting_1.Lighting(this);
        this.movers = new movers_1.Movers(this);
    }
    drawAt(x, y, char, fg, bg) {
        this.display.draw(x, y, char, fg, bg);
    }
    drawAtSmoke(x, y, char, fg, bg) {
        this.smokeDisplay.draw(x, y, char, fg, bg);
    }
    draw(showLighting, visibleLayers, showNothing, debug) {
        this.display.clear();
        this.smokeDisplay.clear();
        (0, utils_1.times)(this.h, y => {
            (0, utils_1.times)(this.w, x => {
                this.grid[y][x].draw(showLighting, visibleLayers, showNothing, debug);
            });
        });
    }
    step() {
        // we don't clear movers here because we want the tests to be able to queue moves between steps
        (0, utils_1.times)(this.h, y => {
            (0, utils_1.times)(this.w, x => {
                this.grid[y][x].step();
            });
        });
        this.frameNumber++;
        Object.values(this.stepCallbacks).forEach(onStep => onStep(this.frameNumber));
        this.movers.move();
    }
    runOnStep(name, onStepOfFrameNumber) {
        (0, utils_1.bombIf)(name in this.stepCallbacks, () => `Step callback '${name}' already exists`);
        this.stepCallbacks[name] = onStepOfFrameNumber;
    }
    set(xy, drawable) {
        const cell = xy.cell(this.grid);
        (0, utils_1.bombUnless)(cell, () => 'No cell at ' + xy);
        cell.set(drawable);
        this.lighting.update(cell);
        return cell;
    }
    create(x, y, drawable) {
        this.set(xy_1.XY.at(x, y), drawable);
        return drawable;
    }
    moving(drawable, from, to) {
        this.movers.queue(drawable, from, to);
    }
    onMousemove(canvas, callback) {
        (0, utils_1.onMousemove)(canvas, e => {
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / config_1.Config.FONT_SIZE);
            const y = Math.floor((e.clientY - rect.top) / config_1.Config.FONT_SIZE);
            if (x >= 0 && x < config_1.Config.WIDTH && y >= 0 && y < config_1.Config.HEIGHT) {
                const cell = this.get(xy_1.XY.at(x, y));
                callback(cell);
            }
        });
    }
    renderToChars(replace = 'drawAt') {
        const chars = [];
        (0, utils_1.times)(this.h, y => {
            chars[y] = [];
            (0, utils_1.times)(this.w, x => {
                chars[y][x] = '.';
            });
        });
        const originalDrawAt = this[replace];
        this[replace] = (x, y, char, _fg, _bg) => {
            const cell = this.get(xy_1.XY.at(x, y));
            if (replace === 'drawAt' && cell.pawn()) {
                chars[y][x] = cell.pawn().desc()[0];
            }
            else {
                chars[y][x] = char;
            }
        };
        this.draw(false, new Set(), false, false);
        this[replace] = originalDrawAt;
        let result = '\n';
        (0, utils_1.times)(this.h, y => {
            (0, utils_1.times)(this.w, x => {
                result += chars[y][x];
            });
            result += '\n';
        });
        return result;
    }
    fill(drawableConstructor) {
        (0, utils_1.times)(this.h, y => {
            (0, utils_1.times)(this.w, x => {
                this.create(x, y, drawableConstructor());
            });
        });
    }
}
exports.Map = Map;
//# sourceMappingURL=map.js.map
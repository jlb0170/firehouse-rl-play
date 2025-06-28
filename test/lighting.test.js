"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("../game/map");
const xy_1 = require("../game/xy");
const torch_1 = require("../draw/torch");
const smoke_1 = require("../draw/smoke");
const lighting_1 = require("../game/lighting");
const utils_1 = require("../utils");
const wall_1 = require("../draw/wall");
describe('Illumination Test', () => {
    test('basic flood fill illumination', () => {
        const map = new map_1.Map(11, 11);
        map.set(xy_1.XY.at(5, 5), new torch_1.Torch());
        map.lighting.redraw();
        const result = (0, utils_1.mapToGridDigits)(11, xy => {
            return map.lighting.atXY(xy);
        });
        expect(result).toBeGridChars(`
            00000000000
            00012221000
            00123332100
            01234443210
            02345554320
            02345554320
            02345554320
            01234443210
            00123332100
            00012221000
            00000000000
        `);
    });
    test('basic flood fill illumination with multiple sources', () => {
        const map = new map_1.Map(11, 11);
        map.set(xy_1.XY.at(5, 5), new torch_1.Torch());
        map.set(xy_1.XY.at(2, 4), new torch_1.Torch());
        map.lighting.redraw();
        const result = (0, utils_1.mapToGridDigits)(11, xy => {
            return map.lighting.atXY(xy);
        });
        expect(result).toBeGridChars(`
            12221000000
            23332221000
            34443332100
            45554443210
            45555554320
            45555554320
            34445554320
            23334443210
            12223332100
            00012221000
            00000000000
        `);
    });
    test('illumination with smoke', () => {
        const map = new map_1.Map(11, 11);
        const torch = map.set(xy_1.XY.at(5, 5), new torch_1.Torch());
        map.set(torch.xy.r(), new smoke_1.Smoke());
        map.lighting.redraw();
        const result = (0, utils_1.mapToGridDigits)(11, xy => {
            return map.lighting.atXY(xy);
        });
        expect(result).toBeGridChars(`
            00000000000
            00012221000
            00123332100
            01234443210
            02345554000
            02345550000
            02345554000
            01234443210
            00123332100
            00012221000
            00000000000
        `);
    });
    test('illumination with wall', () => {
        const map = new map_1.Map(6, 6);
        const torch = map.set(xy_1.XY.at(3, 3), new torch_1.Torch());
        const wall = torch.xy.ur();
        (0, utils_1.times)(3, i => {
            map.set(wall.add(0, i), new wall_1.Wall());
        });
        map.lighting.redraw();
        const result = (0, utils_1.mapToGridDigits)(6, xy => {
            return map.lighting.atXY(xy);
        });
        expect(result).toBeGridChars(`
            123330
            234440
            345550
            345550
            345550
            234400
        `);
    });
    test('quadratic fall off', () => {
        const results = (0, utils_1.mapi)(6, i => lighting_1.Lighting.quadraticFallOff(5, i, 0));
        expect(results).toEqual([5, 5, 4, 3, 2, 0]);
        expect(lighting_1.Lighting.quadraticFallOff(1, 0, 1)).toBe(0); // dist = 1
        expect(lighting_1.Lighting.quadraticFallOff(1, 1, 1)).toBe(0); // dist ≈ 1.4 > 1
    });
    test('circular fall off', () => {
        const center = xy_1.XY.at(5, 5);
        const radius = 5;
        const result = (0, utils_1.mapToGridDigits)(11, xy => {
            const delta = xy.subXY(center);
            return lighting_1.Lighting.quadraticFallOff(radius, delta.x, delta.y);
        });
        expect(result).toBeGridChars(`
            00000000000
            00012221000
            00123332100
            01234443210
            02345554320
            02345554320
            02345554320
            01234443210
            00123332100
            00012221000
            00000000000
        `);
    });
    test('circular fall off radius 3', () => {
        const center = xy_1.XY.at(3, 3);
        const radius = 3;
        const result = (0, utils_1.mapToGridDigits)(7, xy => {
            const delta = xy.subXY(center);
            return lighting_1.Lighting.quadraticFallOff(radius, delta.x, delta.y);
        });
        expect(result).toBeGridChars(`
            0000000
            0012100
            0123210
            0233320
            0123210
            0012100
            0000000
        `);
    });
});
//# sourceMappingURL=lighting.test.js.map
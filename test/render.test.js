"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("../game/map");
const torch_1 = require("../draw/torch");
const smoke_1 = require("../draw/smoke");
const pawn_1 = require("../draw/pawn");
const fire_1 = require("../draw/fire");
const utils_1 = require("../utils");
describe('rendering', () => {
    test('torch and smoke', () => {
        const map = new map_1.Map(5, 5);
        const torch = map.create(2, 2, new torch_1.Torch());
        const smoke = torch.r().create(new smoke_1.Smoke());
        expect(smoke.age).toBe(0);
        expect(map.renderToChars()).toBeGridChars(`
            .....
            .....
            ..*..
            .....
            .....
        `);
        expect(map.renderToChars('drawAtSmoke')).toBeGridChars(`
            .....
            .....
            ...+.
            .....
            .....
        `);
        map.step();
        expect(smoke.age).toBe(1);
        expect(map.renderToChars('drawAtSmoke')).toBeGridChars(`
            .....
            .....
            ..+.+
            .....
            .....
        `);
    });
    test('double smoke drift', () => {
        const map = new map_1.Map(5, 5);
        const smoke1 = map.create(2, 2, new smoke_1.Smoke());
        smoke1.r().create(new smoke_1.Smoke());
        expect(map.renderToChars('drawAtSmoke')).toBeGridChars(`
            .....
            .....
            ..++.
            .....
            .....
        `);
        map.step();
        expect(map.renderToChars('drawAtSmoke')).toBeGridChars(`
            .....
            .....
            ...++
            .....
            .....
        `);
    });
    test('test pawn collision', () => {
        const map = new map_1.Map(5, 5);
        const a = map.create(2, 2, new pawn_1.Pawn('a'));
        const b = a.cell.r().create(new pawn_1.Pawn('b'));
        expect(map.renderToChars()).toBeGridChars(`
            .....
            .....
            ..ab.
            .....
            .....
        `);
        a.queueMove(b);
        b.queueMove(a);
        map.step();
        expect(map.renderToChars()).toBeGridChars(`
            .....
            .....
            ..ba.
            .....
            .....
        `);
        b.queueMove(a);
        map.step();
        expect(map.renderToChars()).toBeGridChars(`
            .....
            .....
            ..ba.
            .....
            .....
        `);
    });
    test('fire', () => {
        const map = new map_1.Map(5, 5);
        (0, utils_1.setTestMode)(false);
        map.fill(() => new fire_1.Fire());
        map.step();
        expect(map.renderToChars()).toBeGridChars(`
            ▲▲▲▲▲
            ▲▲▲▲▲
            ▲▲▲▲▲
            ▲▲▲▲▲
            ▲▲▲▲▲
        `);
        (0, utils_1.times)(10, () => map.step());
    });
});
//# sourceMappingURL=render.test.js.map
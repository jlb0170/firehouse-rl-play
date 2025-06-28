"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMousemove = exports.onMouseover = exports.onClick = exports.$1 = exports.centeredStart = exports.half = exports.randTo = exports.oneIn = exports.setTestMode = exports.isInTestMode = void 0;
exports.bomb = bomb;
exports.bombIf = bombIf;
exports.bombUnless = bombUnless;
exports.randFrom = randFrom;
exports.times = times;
exports.mapi = mapi;
exports.each = each;
exports.mapToGridDigits = mapToGridDigits;
exports.the = the;
exports.isInTestMode = false;
const setTestMode = (value) => { exports.isInTestMode = value; };
exports.setTestMode = setTestMode;
function bomb(msg) {
    throw new Error(msg);
}
function bombIf(cond, msgOrFn) {
    if (cond)
        bomb(typeof msgOrFn === "function" ? msgOrFn() : msgOrFn);
}
function bombUnless(value, msgOrFn) {
    bombIf(!value, msgOrFn);
    return value;
}
function randFrom(ts) {
    bombIf(exports.isInTestMode, () => "can't use random functions in test mode");
    bombIf(ts.length === 0, 'need at least one element');
    return ts[Math.floor(Math.random() * ts.length)];
}
function times(n, fOfIndex) {
    bombIf(n < 0, 'Cannot iterate negatively');
    for (let i = 0; i < n; i++)
        fOfIndex(i);
}
function mapi(n, fOfIndex) {
    bombIf(n < 0, 'Cannot iterate negatively');
    return Array.from({ length: n }, (_, i) => fOfIndex(i));
}
function each(xs, fOfTandI) {
    for (let i = 0; i < xs.length; i++)
        fOfTandI(xs[i], i);
}
function mapToGridDigits(size, mapFn) {
    const { XY } = require('./game/xy');
    let result = '\n';
    times(size, y => {
        times(size, x => {
            const digit = mapFn(XY.at(x, y));
            bombUnless(digit <= 9, () => `grid digit ${digit} at (${x},${y}) is not a single digit`);
            result += digit.toString();
        });
        result += '\n';
    });
    return result;
}
const oneIn = (n) => {
    bombIf(exports.isInTestMode, () => "can't use random functions in test mode");
    return Math.random() < 1 / n;
};
exports.oneIn = oneIn;
const randTo = (n) => {
    bombIf(exports.isInTestMode, () => "can't use random functions in test mode");
    return Math.floor(Math.random() * n);
};
exports.randTo = randTo;
const half = (n) => Math.floor(n / 2);
exports.half = half;
const centeredStart = (fullWidth, text) => Math.floor((fullWidth - text.length) / 2);
exports.centeredStart = centeredStart;
const $1 = (id) => bombUnless(document.getElementById(id), () => `No ${id} element`);
exports.$1 = $1;
const onClick = (e, f) => e.addEventListener('click', f);
exports.onClick = onClick;
const onMouseover = (e, f) => e.addEventListener('mouseover', f);
exports.onMouseover = onMouseover;
const onMousemove = (e, f) => e.addEventListener('mousemove', f);
exports.onMousemove = onMousemove;
function the(list, label) {
    bombIf(list.length !== 1, `Expected exactly one ${label ?? 'item'}, but got ${list.length}`);
    return list[0];
}
//# sourceMappingURL=utils.js.map
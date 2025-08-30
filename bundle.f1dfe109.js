/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XY: () => (/* binding */ XY)
/* harmony export */ });
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1919);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6185);
/* harmony import */ var _xyl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6830);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6457);




class XY {
    static setSize(w, h) { XY.w = w; XY.h = h; }
    static oob(x, y) {
        if (x instanceof XY)
            return XY.oob(x.x, x.y);
        return x < 0 || x >= XY.w || y < 0 || y >= XY.h;
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.add = (x, y) => {
            if (!Number.isInteger(x) || !Number.isInteger(y)) {
                throw new Error(`XY coordinates must be integers: got ${x}, ${y}`);
            }
            return new XY(this.x + x, this.y + y);
        };
        this.sub = (x, y) => this.add(-x, -y);
        this.subXY = (other) => this.add(-other.x, -other.y);
        this.u = (n = 1) => this.add(0, -n);
        this.ur = (n = 1) => this.add(n, -n);
        this.r = (n = 1) => this.add(n, 0);
        this.dr = (n = 1) => this.add(n, n);
        this.d = (n = 1) => this.add(0, n);
        this.dl = (n = 1) => this.add(-n, n);
        this.l = (n = 1) => this.add(-n, 0);
        this.ul = (n = 1) => this.add(-n, -n);
        this.draw = (display, char, fg, bg = _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .BACKGROUND */ .h4) => display.draw(this.x, this.y, char, fg, bg);
        this.cell = (grid) => grid[this.y][this.x];
        this.cardinals = () => [this.u(1), this.d(1), this.l(1), this.r(1)].filter(xy => !XY.oob(xy.x, xy.y));
        this.neighbors = () => [this.u(1), this.ur(1), this.r(1), this.dr(1), this.d(1), this.dl(1), this.l(1), this.ul(1)].filter(xy => !XY.oob(xy.x, xy.y));
        this.toString = () => `${this.x}, ${this.y}`;
        this.on = (layer) => _xyl__WEBPACK_IMPORTED_MODULE_2__/* .XYL */ .Y.at(this, layer);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(Number.isInteger(x) && Number.isInteger(y), () => `XY coordinates must be integers: got ${x}, ${y}`);
    }
    random() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombIf */ .av)(_utils__WEBPACK_IMPORTED_MODULE_1__/* .isInTestMode */ .Jo, () => "can't use random functions in test mode");
        const dirs = this.cardinals();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .randFrom */ .Kt)(dirs);
    }
    onR(fn, n = 1) { const xy = this.r(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
    onL(fn, n = 1) { const xy = this.l(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
    onU(fn, n = 1) { const xy = this.u(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
    onD(fn, n = 1) { const xy = this.d(n); if (!XY.oob(xy.x, xy.y))
        fn(xy); }
}
XY.w = _config__WEBPACK_IMPORTED_MODULE_3__/* .Config */ .T.WIDTH;
XY.h = _config__WEBPACK_IMPORTED_MODULE_3__/* .Config */ .T.HEIGHT;
XY.matches = (a, b) => a && b ? a.x === b.x && a.y === b.y : a === b;
XY.at = (x, y) => new XY(x, y);


/***/ }),

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Lamp)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1721);
/* harmony import */ var _smoke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4502);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2994);





class Lamp extends _drawable__WEBPACK_IMPORTED_MODULE_2__.Drawable {
    constructor() {
        super(_material__WEBPACK_IMPORTED_MODULE_4__/* .WOOD */ .wB);
        this.layer = 'items';
        this.transparency = 1;
        this.passable = true;
        this.light = () => this.material.light(5);
        this.char = () => '*';
        this.color = () => this.material.color(_ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .LAMP */ .zu.random());
        this.desc = () => this.material.desc('Lamp');
    }
    smoking() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo ? true : (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(3);
    }
    step() {
        if (this.smoking())
            this.cell.reborn(new _smoke__WEBPACK_IMPORTED_MODULE_3__/* .Smoke */ ._());
        this.material.step(() => { });
    }
}


/***/ }),

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ Wall)
/* harmony export */ });
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1919);
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1721);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2994);



class Wall extends _drawable__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    constructor(materialType = _material__WEBPACK_IMPORTED_MODULE_2__/* .WOOD */ .wB) {
        super(materialType);
        this.layer = 'walls';
        this.passable = false;
        this.transparency = 0;
        this.char = () => '#';
        this.color = () => this.material.color(_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .BORDER */ .XE);
        this.light = () => this.material.light(0);
        this.desc = () => this.material.desc('Wall');
    }
    step() {
        this.material.step(() => { });
    }
}


/***/ }),

/***/ 334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Signal),
/* harmony export */   Y: () => (/* binding */ SignalWithCurrent)
/* harmony export */ });
class Signal {
    constructor() {
        this.listeners = new Set();
        this.q = [];
        this.emitting = false;
    }
    emit(t) {
        this.q.push(t);
        if (this.emitting)
            return;
        this.emitting = true;
        try {
            while (this.q.length) {
                const n = this.q.shift();
                const ls = Array.from(this.listeners);
                for (const onT of ls)
                    onT(n);
            }
        }
        finally {
            this.emitting = false;
        }
    }
    on(onT) {
        this.listeners.add(onT);
        return () => this.listeners.delete(onT);
    }
}
class SignalWithCurrent extends Signal {
    constructor() {
        super(...arguments);
        this.current = null;
    }
    emit(t) {
        this.current = t;
        super.emit(t);
    }
    when(onT) {
        if (this.current)
            onT(this.current);
    }
}


/***/ }),

/***/ 452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d1: () => (/* binding */ d1)
/* harmony export */ });
/* unused harmony export dListFor */
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9273);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8227);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6185);



const S = d3_selection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay;
S.prototype.updateFrom = function (d, on, miss) { d == null ? miss() : on(d); return this; };
S.prototype.d1 = function (sel) { const c = this.select(sel); (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(c.node(), `Child element not found: ${sel}`); return c; };
S.prototype.dList = function (sel) { return dListFor(this, sel); };
S.prototype.focus = function () { const n = this.node(); (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(n?.focus, 'Node or focus not found'); n.focus(); };
S.prototype.show = function () { const n = this.node(); if (n)
    n.classList.remove('hidden'); return this; };
S.prototype.hide = function () { const n = this.node(); if (n)
    n.classList.add('hidden'); return this; };
S.prototype.showing = function () { const n = this.node(); return n ? !n.classList.contains('hidden') : false; };
S.prototype.getVal = function () { const n = this.node(); return n?.value || ''; };
S.prototype.setVal = function (v) { const n = this.node(); if (n)
    n.value = v; return this; };
S.prototype.trimmed = function () { return this.getVal().trim(); };
S.prototype.disable = function (b) { const n = this.node(); if (n && 'disabled' in n)
    n.disabled = b; return this; };
S.prototype.enable = function (b) { const n = this.node(); if (n && 'disabled' in n)
    n.disabled = !b; return this; };
S.prototype.onClick = function (h) { this.on('click', h); return this; };
S.prototype.onInput = function (h) { this.on('input', h); return this; };
S.prototype.onKeyDown = function (h) { this.on('keydown', h); return this; };
S.prototype.href = function (u) { this.attr('href', u); return this; };
S.prototype.htmlData = function (n) { const el = this.node(); return el ? el.getAttribute(`data-${n}`) : null; };
S.prototype.bounds = function () { const el = this.node(); (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(el, 'Node not found for bounds()'); return el.getBoundingClientRect(); };
const templateCache = new Map();
let templateIdCounter = 0;
function dListFor(parent, selector) {
    const parentNode = parent.node();
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(parentNode, 'Parent node missing for dList');
    const templateAttr = `data-template-${selector.replace(/[^a-zA-Z0-9]/g, '-')}`;
    let templateId = parentNode.getAttribute(templateAttr);
    let template;
    if (!templateId || !templateCache.has(templateId)) {
        const templateSel = parent.d1(`${selector}.template`);
        const templateNode = templateSel.node();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(templateNode, `Template not found: ${selector}.template`);
        template = templateNode.cloneNode(true);
        template.classList.remove('template');
        templateSel.remove();
        templateId = `template-${templateIdCounter++}`;
        templateCache.set(templateId, template);
        parentNode.setAttribute(templateAttr, templateId);
    }
    else {
        template = templateCache.get(templateId);
    }
    return {
        updateFrom(data, onNodeAndDatum) {
            const items = parent.selectAll(selector).data(data);
            items.exit().remove();
            const enterItems = items.enter().append(() => template.cloneNode(true));
            const allItems = enterItems.merge(items);
            allItems.each(function (datum) {
                const itemSel = d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ltv(this);
                onNodeAndDatum(itemSel, datum);
            });
        }
    };
}
const d1 = (selector) => {
    const sel = d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ltv(selector);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(sel.node(), `Element not found: ${selector}`);
    const x = sel;
    x.appendFileHtml = function (htmlContent) {
        const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
        const fileDiv = doc.body.firstElementChild;
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(fileDiv && fileDiv.tagName === 'DIV' && fileDiv.id, 'Template must start with a div element with an id');
        const target = this.node();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(target, 'Target div not found');
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .bombUnless */ .Nb)(target.id === fileDiv.id, `ID mismatch: target=${target.id}, file=${fileDiv.id}`);
        target.innerHTML = fileDiv.innerHTML;
    };
    return x;
};


/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ 747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ 891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ Stroke)
/* harmony export */ });
class Stroke {
    constructor(cells, colorFn, isValid, zIndex) {
        this.cells = cells;
        this.colorFn = colorFn;
        this.zIndex = zIndex;
        this.isValid = typeof isValid === 'number' ? Stroke.timeout(isValid) : isValid;
    }
    add(cell, char, bg) {
        this.cells.push({ cell, char, bg });
    }
    static timeout(ms) {
        const start = Date.now();
        return () => Date.now() - start < ms;
    }
}


/***/ }),

/***/ 1113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 1208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Layout System */
.hidden { display: none !important; }

:root {
  --color-background: #000;
  --color-background-1: #111;
  --color-background-2: #222;
  --color-background-3: #333;
  --color-foreground: #0a0;
  --color-border: #444;
  --color-accent: #0f0;
}

/* Utilities */
.modal-window button { background: var(--color-background-3); color: #fff; border: 1px solid #666; border-radius: 3px; cursor: pointer; font-family: monospace; font-size: 14px; padding: 6px 12px }
.modal-window button:hover { background: #555 }
.modal-window button:disabled { background: #222; color: #666; cursor: not-allowed }
.button-primary { background: var(--color-foreground); color: #000; border: 1px solid var(--color-foreground); border-radius: 3px; cursor: pointer; font-family: monospace; font-size: 14px; padding: 6px 12px }
.button-primary:hover:not(:disabled) { background: #0c0 }
.button-secondary { background: var(--color-background-3); color: var(--color-foreground); border: 1px solid #666; border-radius: 3px; cursor: pointer; font-family: monospace; font-size: 14px; padding: 6px 12px }
.button-secondary:hover { background: #555 }
.button-secondary:disabled { background: #222; color: #666; cursor: not-allowed }
.button-link { background: #2a4a5d; color: #fff; border: 1px solid #3a5a7d; padding: 4px 8px; border-radius: 3px; font-weight: bold }
.button-link:hover { background: #3a5a7d }

/* Button size modifier */
.button-large { font-size: 16px; padding: 8px 12px }

/* Button state modifiers */
button.muted { background: #666; color: #999 }
button.solo { background: #060; color: #fff }

/* Text utilities */
.text-subtle { color: #444 }
.text-danger { color: #f44 }
.bold { font-weight: bold }
.clickable { cursor: pointer }

.spacer { height: 10px }

.input { padding: 8px; background: var(--color-background-1); border: 1px solid var(--color-border); color: var(--color-foreground); border-radius: 4px; font-family: monospace; font-size: 14px }
.input:focus { outline: none; border-color: var(--color-foreground); box-shadow: 0 0 5px rgba(0,170,0,.3) }

.border { border: 1px solid var(--color-border) }
.border-dashed { border-style: dashed }
.border-top { border-top: 1px solid var(--color-border) }
.border-right { border-right: 1px solid var(--color-border) }
.border-bottom { border-bottom: 1px solid var(--color-border) }
.border-left { border-left: 1px solid var(--color-border) }

.panel { background: var(--color-background-1); border: 1px solid var(--color-border); border-radius: 4px; padding: 8px }
.panel-dark { background: #1a1a1a }
.panel-dashed { border: 1px dashed var(--color-border); padding: 6px; border-radius: 4px }
.panel-title { margin: 0 0 5px 0; color: #0a0; background-color: #1a1a1a; padding: 8px 10px; border-bottom: 2px solid #444; margin: -5px -5px 4px -5px }

/* Base Layout Classes - compact by default */
.row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 0 0 auto;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 0 0 auto;
}

/* Alignment - Main Axis */
.aligned-start { justify-content: flex-start; }
.aligned-end { justify-content: flex-end; }
.aligned-center { justify-content: center; }

/* Alignment - Cross Axis */
.cross-aligned-start { align-items: flex-start; }
.cross-aligned-end { align-items: flex-end; }
.cross-aligned-center { align-items: center; }

/* Item Distribution */
.items-fill > * { flex: 1; }
.items-spread { justify-content: space-evenly; }
.items-between { justify-content: space-between; }

/* Individual Overrides */
.individual-fill { flex: 1 !important; }
.individual-spread { flex: 0 0 auto !important; }

/* Container Sizing */
.fill { flex: 1; }
.full-width { width: 100%; }
.fit-content-width { width: fit-content; }
.fit-container { width: 100%; }

/* Semantic Gap Classes */
.gap-body { gap: 20px; }
.gap-controls { gap: 10px; }
.gap-buttons { gap: 5px; }
.gap-button-group { gap: 2px; }
.gap-branch-actions { gap: 8px; }
.gap-form { gap: 15px; }
.gap-modal-header { gap: 20px; }
.gap-terminal-info { gap: 4px; }

/* Modal Base */
.modal-window {
    background: #222;
    border: 1px solid #666;
    border-radius: 8px;
    color: #0a0;
    font-family: monospace;
    padding: 20px;
    position: absolute;
    z-index: 1000;
}

body {
    margin: 0;
    padding: 20px;
    background-color: #000;
    min-height: 100vh;
    font-family: monospace;
}

/* Branch Runner Styles */
.branch-item {
    padding: 8px 12px;
    margin: 4px 0;
    background: #333;
    border: 1px solid #555;
    border-radius: 4px;
}

.branch-item:hover {
    background: #444;
    border-color: #666;
}

.branch-info {
    flex: 1;
    margin-right: 12px;
}

.branch-name {
    font-family: monospace;
    font-size: 12px;
    color: #fff;
    word-break: break-all;
}

.branch-title {
    font-family: sans-serif;
    font-size: 10px;
    color: #aaa;
    margin-top: 2px;
    font-style: italic;
}

.branches {
    max-height: 400px;
    overflow-y: auto;
    margin: 10px 0;
}

#controls {
    z-index: 1000;
}

#step-info {
    color: #fff;
    font-family: monospace;
    font-size: 14px;
    margin-left: 10px;
}

.button-group {
    border: 1px solid #666;
    border-radius: 3px;
    padding: 2px;
}

#game-container {
    flex-shrink: 0;
}

#terminal {
    background: #000;
    border: 1px solid #0a0;
    color: #0a0;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    width: 300px;
    height: 800px;
    display: flex;
    flex-direction: column;
}

#terminal-content {
    flex: 1;
    padding: 8px;
    overflow-y: auto;
    border-bottom: 1px dashed #0a0;
}

#selected-info {
    flex: 1;
    padding: 8px;
    overflow-y: auto;
}

.capabilities { width: 100%; border-collapse: collapse }
.capabilities td.score { width: 2ch; text-align: right; padding-right: 6px }
.capabilities td.name { width: 4ch; padding-right: 6px }
.capabilities td.skill-score { width: 2ch; text-align: right; padding-right: 6px }

#terminal-content::-webkit-scrollbar {
    width: 8px;
}

#terminal-content::-webkit-scrollbar-track {
    background: #000;
}

#terminal-content::-webkit-scrollbar-thumb {
    background: #0a0;
    border-radius: 4px;
}

.cell-info {
    background: #000;
    color: #0a0;
}

.cell-coord {
    color: #0a0;
    font-weight: bold;
    margin-bottom: 4px;
}

.layer-info {
    color: #0a0;
}

.error-overlay {
    white-space: pre-wrap;
}

.error-close {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.error-close:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}

.help-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    color: #0f0;
    font-family: monospace;
    font-size: 16px;
    border: 2px solid #0f0;
    padding: 30px;
    border-radius: 5px;
    z-index: 10000;
    max-width: 80vw;
    max-height: 80vh;
    overflow: auto;
    box-shadow: 0 0 20px #0f0;
}

.help-popup.hidden {
    display: none;
}

/* Feedback Modal */
#feedback-modal {
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
}

.feedback-header {
    margin-bottom: 20px;
    padding-bottom: 10px;
}

.feedback-header h3 {
    margin: 0;
    color: #0a0;
    font-size: 18px;
}

.close-button {
    background: none;
    border: none;
    color: #f44;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-button:hover {
    background: #333;
    border-radius: 3px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-group label {
    color: #0a0;
    font-weight: bold;
    font-size: 14px;
}

#feedback-title, #feedback-screenshot {
    font-family: monospace;
    font-size: 14px;
}

#feedback-body {
    font-family: monospace;
    font-size: 14px;
    resize: vertical;
    min-height: 120px;
}

.feedback-actions { margin-top: 10px; }

.feedback-status {
    padding: 10px;
    border-radius: 4px;
    background: #111;
    border: 1px solid #444;
    font-family: monospace;
    font-size: 14px;
    text-align: center;
}

.feedback-status.hidden {
    display: none;
}

.help-text {
    color: #0f0;
    font-family: monospace;
    line-height: 1.4;
}

.help-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}
.help-table th, .help-table td {
    border: 1px solid #0f0;
    padding: 4px;
    text-align: left;
}

.popup-title {
    margin: 0 0 20px 0;
    color: #0a0;
    font-size: 18px;
    padding-bottom: 10px;
}

.save-slot {
    margin: 10px 0;
    padding: 12px;
    background: #111;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.save-slot:hover {
    background: #333;
}

.save-slot.slot-exists {
    border-color: #0a0;
}

.save-slot.slot-exists:hover {
    border-color: #0c0;
}

.save-slot.slot-empty {
    border-color: #080;
}

.save-slot.slot-empty:hover {
    border-color: #0a0;
}

.slot-number {
    font-weight: bold;
    color: #0a0;
    font-size: 16px;
}

.slot-header {
    margin-bottom: 8px;
}

.slot-delete {
    font-size: 16px;
    width: 20px;
    height: 20px;
}

.slot-status {
    color: #0a0;
    font-weight: bold;
}

.slot-details {
    font-size: 12px;
    color: #666;
}

.popup-help-text {
    margin-top: 20px;
    text-align: center;
    color: #666;
    font-size: 12px;
}

.imported-save-section {
    margin-bottom: 15px;
    padding-bottom: 15px;
}

.imported-save-section .slot-number {
    color: #fa0;
    font-size: 14px;
}

.save-actions {
    margin-top: 15px;
} 

/* Firehouse Modal */
#firehouse-modal { width: fit-content; }

.firehouse-header {
    margin-bottom: 10px;
    padding-bottom: 5px;
}
.firehouse-header h3 {
    margin: 0;
    color: #0a0;
    font-size: 18px;
}

.names {
    margin: 0;
}

.firefighter { display: grid; grid-template-columns: 1fr 6ch; align-items: center }
.firefighter { padding: 4px 8px; cursor: pointer; border-radius: 3px; transition: background-color 0.2s; width: 100% }
.firefighter .n { overflow: hidden; text-overflow: ellipsis }
.firefighter .m { text-align: right }
.firefighter.selected .m::after { content: '====>' }

.firefighter:hover {
    background-color: #2a2a2a;
}

.firefighter.selected {
    background-color: #1a3a1a;
    border-left: 3px solid #0a0;
    padding-left: 5px;
}

.firehouse-panel {
    margin: 0;
}

.people {
    padding: 5px;
}

.firehouse-panel h4 {
    margin: 0 0 5px 0;
    color: #0a0;
    background-color: #1a1a1a;
    padding: 8px 10px;
    border-bottom: 2px solid #444;
    margin: -5px -5px 4px -5px;
}
.inspector {
    padding: 5px;
}

.inspector .capabilities {
    width: 100%;
    border-collapse: collapse;
}

.inspector .capability-value {
    text-align: right;
    padding-right: 8px;
    width: 20px;
}

.inspector .capability-name {
    padding-right: 8px;
    position: relative;
}

.inspector .capability-skills {
    color: #888;
}

.capability-tooltip {
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    background: #1a1a1a;
    border: 1px solid #444;
    padding: 8px;
    z-index: 1000;
    white-space: nowrap;
    margin-left: 10px;
}

.capability:hover .capability-tooltip {
    display: block;
}

.capability-tooltip div {
    color: #0a0;
    padding: 2px 0;
}

.firehouse-actions {
    margin-top: 10px;
}

.play-controls-wrapper { position: relative }
.speed-buttons { position: absolute; top: 100% }
.speed-buttons button { width: 100% }

#terminal .row { }

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fire: () => (/* binding */ Fire)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1721);
/* harmony import */ var _smoke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4502);
/* harmony import */ var _game_fires__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6746);





class Fire extends _drawable__WEBPACK_IMPORTED_MODULE_2__.Drawable {
    constructor() {
        super();
        this.layer = 'fire';
        this.light = () => 3;
        this.char = () => Fire.CHAR;
        this.color = () => _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .FIRE */ .ZK.random();
        _game_fires__WEBPACK_IMPORTED_MODULE_4__/* .Fires */ .UQ.increment(this);
    }
    step() {
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(this.age)) {
            this.cell.died(this);
            return;
        }
        this.cell.reborn(new _smoke__WEBPACK_IMPORTED_MODULE_3__/* .Smoke */ ._());
        this.cell.ignite();
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(4)) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .randFrom */ .Kt)(this.cell.neighbors()).reborn(new Fire());
        }
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(4)) {
            const neighbor = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .randFrom */ .Kt)(this.cell.neighbors());
            if (!neighbor.passable())
                return;
            this.cell.queueMove(this, neighbor.xy);
        }
    }
    merge(other) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .bombUnless */ .Nb)(other instanceof Fire, 'merge mismatch');
        return other.olderThan(this) ? 'replace' : 'kill';
    }
    dying() {
        _game_fires__WEBPACK_IMPORTED_MODULE_4__/* .Fires */ .UQ.decrement(this);
        super.dying();
    }
}
Fire.CHAR = "▲";


/***/ }),

/***/ 1364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nl: () => (/* reexport */ Display),
  wA: () => (/* reexport */ path)
});

// UNUSED EXPORTS: Color, DEFAULT_HEIGHT, DEFAULT_WIDTH, DIRS, Engine, EventQueue, FOV, KEYS, Lighting, Map, Noise, RNG, Scheduler, StringGenerator, Text, Util

;// ./node_modules/rot-js/lib/rng.js
/**
 * This code is an implementation of Alea algorithm; (C) 2010 Johannes Baagøe.
 * Alea is licensed according to the http://en.wikipedia.org/wiki/MIT_License.
 */
const FRAC = 2.3283064365386963e-10; /* 2^-32 */
class rng_RNG {
    constructor() {
        this._seed = 0;
        this._s0 = 0;
        this._s1 = 0;
        this._s2 = 0;
        this._c = 0;
    }
    getSeed() { return this._seed; }
    /**
     * Seed the number generator
     */
    setSeed(seed) {
        seed = (seed < 1 ? 1 / seed : seed);
        this._seed = seed;
        this._s0 = (seed >>> 0) * FRAC;
        seed = (seed * 69069 + 1) >>> 0;
        this._s1 = seed * FRAC;
        seed = (seed * 69069 + 1) >>> 0;
        this._s2 = seed * FRAC;
        this._c = 1;
        return this;
    }
    /**
     * @returns Pseudorandom value [0,1), uniformly distributed
     */
    getUniform() {
        let t = 2091639 * this._s0 + this._c * FRAC;
        this._s0 = this._s1;
        this._s1 = this._s2;
        this._c = t | 0;
        this._s2 = t - this._c;
        return this._s2;
    }
    /**
     * @param lowerBound The lower end of the range to return a value from, inclusive
     * @param upperBound The upper end of the range to return a value from, inclusive
     * @returns Pseudorandom value [lowerBound, upperBound], using ROT.RNG.getUniform() to distribute the value
     */
    getUniformInt(lowerBound, upperBound) {
        let max = Math.max(lowerBound, upperBound);
        let min = Math.min(lowerBound, upperBound);
        return Math.floor(this.getUniform() * (max - min + 1)) + min;
    }
    /**
     * @param mean Mean value
     * @param stddev Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
     * @returns A normally distributed pseudorandom value
     */
    getNormal(mean = 0, stddev = 1) {
        let u, v, r;
        do {
            u = 2 * this.getUniform() - 1;
            v = 2 * this.getUniform() - 1;
            r = u * u + v * v;
        } while (r > 1 || r == 0);
        let gauss = u * Math.sqrt(-2 * Math.log(r) / r);
        return mean + gauss * stddev;
    }
    /**
     * @returns Pseudorandom value [1,100] inclusive, uniformly distributed
     */
    getPercentage() {
        return 1 + Math.floor(this.getUniform() * 100);
    }
    /**
     * @returns Randomly picked item, null when length=0
     */
    getItem(array) {
        if (!array.length) {
            return null;
        }
        return array[Math.floor(this.getUniform() * array.length)];
    }
    /**
     * @returns New array with randomized items
     */
    shuffle(array) {
        let result = [];
        let clone = array.slice();
        while (clone.length) {
            let index = clone.indexOf(this.getItem(clone));
            result.push(clone.splice(index, 1)[0]);
        }
        return result;
    }
    /**
     * @param data key=whatever, value=weight (relative probability)
     * @returns whatever
     */
    getWeightedValue(data) {
        let total = 0;
        for (let id in data) {
            total += data[id];
        }
        let random = this.getUniform() * total;
        let id, part = 0;
        for (id in data) {
            part += data[id];
            if (random < part) {
                return id;
            }
        }
        // If by some floating-point annoyance we have
        // random >= total, just return the last id.
        return id;
    }
    /**
     * Get RNG state. Useful for storing the state and re-setting it via setState.
     * @returns Internal state
     */
    getState() { return [this._s0, this._s1, this._s2, this._c]; }
    /**
     * Set a previously retrieved state.
     */
    setState(state) {
        this._s0 = state[0];
        this._s1 = state[1];
        this._s2 = state[2];
        this._c = state[3];
        return this;
    }
    /**
     * Returns a cloned RNG
     */
    clone() {
        let clone = new rng_RNG();
        return clone.setState(this.getState());
    }
}
/* harmony default export */ const rng = (new rng_RNG().setSeed(Date.now()));

;// ./node_modules/rot-js/lib/display/backend.js
/**
 * @class Abstract display backend module
 * @private
 */
class Backend {
    getContainer() { return null; }
    setOptions(options) { this._options = options; }
}

;// ./node_modules/rot-js/lib/display/canvas.js

class Canvas extends Backend {
    constructor() {
        super();
        this._ctx = document.createElement("canvas").getContext("2d");
    }
    schedule(cb) { requestAnimationFrame(cb); }
    getContainer() { return this._ctx.canvas; }
    setOptions(opts) {
        super.setOptions(opts);
        const style = (opts.fontStyle ? `${opts.fontStyle} ` : ``);
        const font = `${style} ${opts.fontSize}px ${opts.fontFamily}`;
        this._ctx.font = font;
        this._updateSize();
        this._ctx.font = font;
        this._ctx.textAlign = "center";
        this._ctx.textBaseline = "middle";
    }
    clear() {
        const oldComposite = this._ctx.globalCompositeOperation;
        this._ctx.globalCompositeOperation = "copy";
        this._ctx.fillStyle = this._options.bg;
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
        this._ctx.globalCompositeOperation = oldComposite;
    }
    eventToPosition(x, y) {
        let canvas = this._ctx.canvas;
        let rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
    }
}

;// ./node_modules/rot-js/lib/util.js
/**
 * Always positive modulus
 * @param x Operand
 * @param n Modulus
 * @returns x modulo n
 */
function mod(x, n) {
    return (x % n + n) % n;
}
function util_clamp(val, min = 0, max = 1) {
    if (val < min)
        return min;
    if (val > max)
        return max;
    return val;
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}
/**
 * Format a string in a flexible way. Scans for %s strings and replaces them with arguments. List of patterns is modifiable via String.format.map.
 * @param {string} template
 * @param {any} [argv]
 */
function format(template, ...args) {
    let map = format.map;
    let replacer = function (match, group1, group2, index) {
        if (template.charAt(index - 1) == "%") {
            return match.substring(1);
        }
        if (!args.length) {
            return match;
        }
        let obj = args[0];
        let group = group1 || group2;
        let parts = group.split(",");
        let name = parts.shift() || "";
        let method = map[name.toLowerCase()];
        if (!method) {
            return match;
        }
        obj = args.shift();
        let replaced = obj[method].apply(obj, parts);
        let first = name.charAt(0);
        if (first != first.toLowerCase()) {
            replaced = capitalize(replaced);
        }
        return replaced;
    };
    return template.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, replacer);
}
format.map = {
    "s": "toString"
};

;// ./node_modules/rot-js/lib/display/hex.js


/**
 * @class Hexagonal backend
 * @private
 */
class Hex extends Canvas {
    constructor() {
        super();
        this._spacingX = 0;
        this._spacingY = 0;
        this._hexSize = 0;
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let px = [
            (x + 1) * this._spacingX,
            y * this._spacingY + this._hexSize
        ];
        if (this._options.transpose) {
            px.reverse();
        }
        if (clearBefore) {
            this._ctx.fillStyle = bg;
            this._fill(px[0], px[1]);
        }
        if (!ch) {
            return;
        }
        this._ctx.fillStyle = fg;
        let chars = [].concat(ch);
        for (let i = 0; i < chars.length; i++) {
            this._ctx.fillText(chars[i], px[0], Math.ceil(px[1]));
        }
    }
    computeSize(availWidth, availHeight) {
        if (this._options.transpose) {
            availWidth += availHeight;
            availHeight = availWidth - availHeight;
            availWidth -= availHeight;
        }
        let width = Math.floor(availWidth / this._spacingX) - 1;
        let height = Math.floor((availHeight - 2 * this._hexSize) / this._spacingY + 1);
        return [width, height];
    }
    computeFontSize(availWidth, availHeight) {
        if (this._options.transpose) {
            availWidth += availHeight;
            availHeight = availWidth - availHeight;
            availWidth -= availHeight;
        }
        let hexSizeWidth = 2 * availWidth / ((this._options.width + 1) * Math.sqrt(3)) - 1;
        let hexSizeHeight = availHeight / (2 + 1.5 * (this._options.height - 1));
        let hexSize = Math.min(hexSizeWidth, hexSizeHeight);
        // compute char ratio
        let oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        let width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        let ratio = width / 100;
        hexSize = Math.floor(hexSize) + 1; // closest larger hexSize
        // FIXME char size computation does not respect transposed hexes
        let fontSize = 2 * hexSize / (this._options.spacing * (1 + ratio / Math.sqrt(3)));
        // closest smaller fontSize
        return Math.ceil(fontSize) - 1;
    }
    _normalizedEventToPosition(x, y) {
        let nodeSize;
        if (this._options.transpose) {
            x += y;
            y = x - y;
            x -= y;
            nodeSize = this._ctx.canvas.width;
        }
        else {
            nodeSize = this._ctx.canvas.height;
        }
        let size = nodeSize / this._options.height;
        y = Math.floor(y / size);
        if (mod(y, 2)) { /* odd row */
            x -= this._spacingX;
            x = 1 + 2 * Math.floor(x / (2 * this._spacingX));
        }
        else {
            x = 2 * Math.floor(x / (2 * this._spacingX));
        }
        return [x, y];
    }
    /**
     * Arguments are pixel values. If "transposed" mode is enabled, then these two are already swapped.
     */
    _fill(cx, cy) {
        let a = this._hexSize;
        let b = this._options.border;
        const ctx = this._ctx;
        ctx.beginPath();
        if (this._options.transpose) {
            ctx.moveTo(cx - a + b, cy);
            ctx.lineTo(cx - a / 2 + b, cy + this._spacingX - b);
            ctx.lineTo(cx + a / 2 - b, cy + this._spacingX - b);
            ctx.lineTo(cx + a - b, cy);
            ctx.lineTo(cx + a / 2 - b, cy - this._spacingX + b);
            ctx.lineTo(cx - a / 2 + b, cy - this._spacingX + b);
            ctx.lineTo(cx - a + b, cy);
        }
        else {
            ctx.moveTo(cx, cy - a + b);
            ctx.lineTo(cx + this._spacingX - b, cy - a / 2 + b);
            ctx.lineTo(cx + this._spacingX - b, cy + a / 2 - b);
            ctx.lineTo(cx, cy + a - b);
            ctx.lineTo(cx - this._spacingX + b, cy + a / 2 - b);
            ctx.lineTo(cx - this._spacingX + b, cy - a / 2 + b);
            ctx.lineTo(cx, cy - a + b);
        }
        ctx.fill();
    }
    _updateSize() {
        const opts = this._options;
        const charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._hexSize = Math.floor(opts.spacing * (opts.fontSize + charWidth / Math.sqrt(3)) / 2);
        this._spacingX = this._hexSize * Math.sqrt(3) / 2;
        this._spacingY = this._hexSize * 1.5;
        let xprop;
        let yprop;
        if (opts.transpose) {
            xprop = "height";
            yprop = "width";
        }
        else {
            xprop = "width";
            yprop = "height";
        }
        this._ctx.canvas[xprop] = Math.ceil((opts.width + 1) * this._spacingX);
        this._ctx.canvas[yprop] = Math.ceil((opts.height - 1) * this._spacingY + 2 * this._hexSize);
    }
}

;// ./node_modules/rot-js/lib/display/rect.js

/**
 * @class Rectangular backend
 * @private
 */
class Rect extends Canvas {
    constructor() {
        super();
        this._spacingX = 0;
        this._spacingY = 0;
        this._canvasCache = {};
    }
    setOptions(options) {
        super.setOptions(options);
        this._canvasCache = {};
    }
    draw(data, clearBefore) {
        if (Rect.cache) {
            this._drawWithCache(data);
        }
        else {
            this._drawNoCache(data, clearBefore);
        }
    }
    _drawWithCache(data) {
        let [x, y, ch, fg, bg] = data;
        let hash = "" + ch + fg + bg;
        let canvas;
        if (hash in this._canvasCache) {
            canvas = this._canvasCache[hash];
        }
        else {
            let b = this._options.border;
            canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = this._spacingX;
            canvas.height = this._spacingY;
            ctx.fillStyle = bg;
            ctx.fillRect(b, b, canvas.width - b, canvas.height - b);
            if (ch) {
                ctx.fillStyle = fg;
                ctx.font = this._ctx.font;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                let chars = [].concat(ch);
                for (let i = 0; i < chars.length; i++) {
                    ctx.fillText(chars[i], this._spacingX / 2, Math.ceil(this._spacingY / 2));
                }
            }
            this._canvasCache[hash] = canvas;
        }
        this._ctx.drawImage(canvas, x * this._spacingX, y * this._spacingY);
    }
    _drawNoCache(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        if (clearBefore) {
            let b = this._options.border;
            this._ctx.fillStyle = bg;
            this._ctx.fillRect(x * this._spacingX + b, y * this._spacingY + b, this._spacingX - b, this._spacingY - b);
        }
        if (!ch) {
            return;
        }
        this._ctx.fillStyle = fg;
        let chars = [].concat(ch);
        for (let i = 0; i < chars.length; i++) {
            this._ctx.fillText(chars[i], (x + 0.5) * this._spacingX, Math.ceil((y + 0.5) * this._spacingY));
        }
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._spacingX);
        let height = Math.floor(availHeight / this._spacingY);
        return [width, height];
    }
    computeFontSize(availWidth, availHeight) {
        let boxWidth = Math.floor(availWidth / this._options.width);
        let boxHeight = Math.floor(availHeight / this._options.height);
        /* compute char ratio */
        let oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        let width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        let ratio = width / 100;
        let widthFraction = ratio * boxHeight / boxWidth;
        if (widthFraction > 1) { /* too wide with current aspect ratio */
            boxHeight = Math.floor(boxHeight / widthFraction);
        }
        return Math.floor(boxHeight / this._options.spacing);
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._spacingX), Math.floor(y / this._spacingY)];
    }
    _updateSize() {
        const opts = this._options;
        const charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._spacingX = Math.ceil(opts.spacing * charWidth);
        this._spacingY = Math.ceil(opts.spacing * opts.fontSize);
        if (opts.forceSquareRatio) {
            this._spacingX = this._spacingY = Math.max(this._spacingX, this._spacingY);
        }
        this._ctx.canvas.width = opts.width * this._spacingX;
        this._ctx.canvas.height = opts.height * this._spacingY;
    }
}
Rect.cache = false;

;// ./node_modules/rot-js/lib/display/tile.js

/**
 * @class Tile backend
 * @private
 */
class Tile extends Canvas {
    constructor() {
        super();
        this._colorCanvas = document.createElement("canvas");
    }
    draw(data, clearBefore) {
        let [x, y, ch, fg, bg] = data;
        let tileWidth = this._options.tileWidth;
        let tileHeight = this._options.tileHeight;
        if (clearBefore) {
            if (this._options.tileColorize) {
                this._ctx.clearRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
            else {
                this._ctx.fillStyle = bg;
                this._ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
        if (!ch) {
            return;
        }
        let chars = [].concat(ch);
        let fgs = [].concat(fg);
        let bgs = [].concat(bg);
        for (let i = 0; i < chars.length; i++) {
            let tile = this._options.tileMap[chars[i]];
            if (!tile) {
                throw new Error(`Char "${chars[i]}" not found in tileMap`);
            }
            if (this._options.tileColorize) { // apply colorization
                let canvas = this._colorCanvas;
                let context = canvas.getContext("2d");
                context.globalCompositeOperation = "source-over";
                context.clearRect(0, 0, tileWidth, tileHeight);
                let fg = fgs[i];
                let bg = bgs[i];
                context.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
                if (fg != "transparent") {
                    context.fillStyle = fg;
                    context.globalCompositeOperation = "source-atop";
                    context.fillRect(0, 0, tileWidth, tileHeight);
                }
                if (bg != "transparent") {
                    context.fillStyle = bg;
                    context.globalCompositeOperation = "destination-over";
                    context.fillRect(0, 0, tileWidth, tileHeight);
                }
                this._ctx.drawImage(canvas, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
            else { // no colorizing, easy
                this._ctx.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.tileWidth);
        let height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
    }
    computeFontSize() {
        throw new Error("Tile backend does not understand font size");
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
    _updateSize() {
        const opts = this._options;
        this._ctx.canvas.width = opts.width * opts.tileWidth;
        this._ctx.canvas.height = opts.height * opts.tileHeight;
        this._colorCanvas.width = opts.tileWidth;
        this._colorCanvas.height = opts.tileHeight;
    }
}

;// ./node_modules/rot-js/lib/color.js


function fromString(str) {
    let cached, r;
    if (str in CACHE) {
        cached = CACHE[str];
    }
    else {
        if (str.charAt(0) == "#") { // hex rgb
            let matched = str.match(/[0-9a-f]/gi) || [];
            let values = matched.map((x) => parseInt(x, 16));
            if (values.length == 3) {
                cached = values.map((x) => x * 17);
            }
            else {
                for (let i = 0; i < 3; i++) {
                    values[i + 1] += 16 * values[i];
                    values.splice(i, 1);
                }
                cached = values;
            }
        }
        else if ((r = str.match(/rgb\(([0-9, ]+)\)/i))) { // decimal rgb
            cached = r[1].split(/\s*,\s*/).map((x) => parseInt(x));
        }
        else { // html name
            cached = [0, 0, 0];
        }
        CACHE[str] = cached;
    }
    return cached.slice();
}
/**
 * Add two or more colors
 */
function add(color1, ...colors) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            result[i] += colors[j][i];
        }
    }
    return result;
}
/**
 * Add two or more colors, MODIFIES FIRST ARGUMENT
 */
function add_(color1, ...colors) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            color1[i] += colors[j][i];
        }
    }
    return color1;
}
/**
 * Multiply (mix) two or more colors
 */
function multiply(color1, ...colors) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            result[i] *= colors[j][i] / 255;
        }
        result[i] = Math.round(result[i]);
    }
    return result;
}
/**
 * Multiply (mix) two or more colors, MODIFIES FIRST ARGUMENT
 */
function multiply_(color1, ...colors) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < colors.length; j++) {
            color1[i] *= colors[j][i] / 255;
        }
        color1[i] = Math.round(color1[i]);
    }
    return color1;
}
/**
 * Interpolate (blend) two colors with a given factor
 */
function interpolate(color1, color2, factor = 0.5) {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}
const lerp = (/* unused pure expression or super */ null && (interpolate));
/**
 * Interpolate (blend) two colors with a given factor in HSL mode
 */
function interpolateHSL(color1, color2, factor = 0.5) {
    let hsl1 = rgb2hsl(color1);
    let hsl2 = rgb2hsl(color2);
    for (let i = 0; i < 3; i++) {
        hsl1[i] += factor * (hsl2[i] - hsl1[i]);
    }
    return hsl2rgb(hsl1);
}
const lerpHSL = (/* unused pure expression or super */ null && (interpolateHSL));
/**
 * Create a new random color based on this one
 * @param color
 * @param diff Set of standard deviations
 */
function randomize(color, diff) {
    if (!(diff instanceof Array)) {
        diff = Math.round(RNG.getNormal(0, diff));
    }
    let result = color.slice();
    for (let i = 0; i < 3; i++) {
        result[i] += (diff instanceof Array ? Math.round(RNG.getNormal(0, diff[i])) : diff);
    }
    return result;
}
/**
 * Converts an RGB color value to HSL. Expects 0..255 inputs, produces 0..1 outputs.
 */
function rgb2hsl(color) {
    let r = color[0] / 255;
    let g = color[1] / 255;
    let b = color[2] / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;
    if (max == min) {
        s = 0; // achromatic
    }
    else {
        let d = max - min;
        s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
}
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
/**
 * Converts an HSL color value to RGB. Expects 0..1 inputs, produces 0..255 outputs.
 */
function hsl2rgb(color) {
    let l = color[2];
    if (color[1] == 0) {
        l = Math.round(l * 255);
        return [l, l, l];
    }
    else {
        let s = color[1];
        let q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
        let p = 2 * l - q;
        let r = hue2rgb(p, q, color[0] + 1 / 3);
        let g = hue2rgb(p, q, color[0]);
        let b = hue2rgb(p, q, color[0] - 1 / 3);
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
}
function toRGB(color) {
    let clamped = color.map(x => clamp(x, 0, 255));
    return `rgb(${clamped.join(",")})`;
}
function toHex(color) {
    let clamped = color.map(x => clamp(x, 0, 255).toString(16).padStart(2, "0"));
    return `#${clamped.join("")}`;
}
const CACHE = {
    "black": [0, 0, 0],
    "navy": [0, 0, 128],
    "darkblue": [0, 0, 139],
    "mediumblue": [0, 0, 205],
    "blue": [0, 0, 255],
    "darkgreen": [0, 100, 0],
    "green": [0, 128, 0],
    "teal": [0, 128, 128],
    "darkcyan": [0, 139, 139],
    "deepskyblue": [0, 191, 255],
    "darkturquoise": [0, 206, 209],
    "mediumspringgreen": [0, 250, 154],
    "lime": [0, 255, 0],
    "springgreen": [0, 255, 127],
    "aqua": [0, 255, 255],
    "cyan": [0, 255, 255],
    "midnightblue": [25, 25, 112],
    "dodgerblue": [30, 144, 255],
    "forestgreen": [34, 139, 34],
    "seagreen": [46, 139, 87],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "limegreen": [50, 205, 50],
    "mediumseagreen": [60, 179, 113],
    "turquoise": [64, 224, 208],
    "royalblue": [65, 105, 225],
    "steelblue": [70, 130, 180],
    "darkslateblue": [72, 61, 139],
    "mediumturquoise": [72, 209, 204],
    "indigo": [75, 0, 130],
    "darkolivegreen": [85, 107, 47],
    "cadetblue": [95, 158, 160],
    "cornflowerblue": [100, 149, 237],
    "mediumaquamarine": [102, 205, 170],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "slateblue": [106, 90, 205],
    "olivedrab": [107, 142, 35],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "mediumslateblue": [123, 104, 238],
    "lawngreen": [124, 252, 0],
    "chartreuse": [127, 255, 0],
    "aquamarine": [127, 255, 212],
    "maroon": [128, 0, 0],
    "purple": [128, 0, 128],
    "olive": [128, 128, 0],
    "gray": [128, 128, 128],
    "grey": [128, 128, 128],
    "skyblue": [135, 206, 235],
    "lightskyblue": [135, 206, 250],
    "blueviolet": [138, 43, 226],
    "darkred": [139, 0, 0],
    "darkmagenta": [139, 0, 139],
    "saddlebrown": [139, 69, 19],
    "darkseagreen": [143, 188, 143],
    "lightgreen": [144, 238, 144],
    "mediumpurple": [147, 112, 216],
    "darkviolet": [148, 0, 211],
    "palegreen": [152, 251, 152],
    "darkorchid": [153, 50, 204],
    "yellowgreen": [154, 205, 50],
    "sienna": [160, 82, 45],
    "brown": [165, 42, 42],
    "darkgray": [169, 169, 169],
    "darkgrey": [169, 169, 169],
    "lightblue": [173, 216, 230],
    "greenyellow": [173, 255, 47],
    "paleturquoise": [175, 238, 238],
    "lightsteelblue": [176, 196, 222],
    "powderblue": [176, 224, 230],
    "firebrick": [178, 34, 34],
    "darkgoldenrod": [184, 134, 11],
    "mediumorchid": [186, 85, 211],
    "rosybrown": [188, 143, 143],
    "darkkhaki": [189, 183, 107],
    "silver": [192, 192, 192],
    "mediumvioletred": [199, 21, 133],
    "indianred": [205, 92, 92],
    "peru": [205, 133, 63],
    "chocolate": [210, 105, 30],
    "tan": [210, 180, 140],
    "lightgray": [211, 211, 211],
    "lightgrey": [211, 211, 211],
    "palevioletred": [216, 112, 147],
    "thistle": [216, 191, 216],
    "orchid": [218, 112, 214],
    "goldenrod": [218, 165, 32],
    "crimson": [220, 20, 60],
    "gainsboro": [220, 220, 220],
    "plum": [221, 160, 221],
    "burlywood": [222, 184, 135],
    "lightcyan": [224, 255, 255],
    "lavender": [230, 230, 250],
    "darksalmon": [233, 150, 122],
    "violet": [238, 130, 238],
    "palegoldenrod": [238, 232, 170],
    "lightcoral": [240, 128, 128],
    "khaki": [240, 230, 140],
    "aliceblue": [240, 248, 255],
    "honeydew": [240, 255, 240],
    "azure": [240, 255, 255],
    "sandybrown": [244, 164, 96],
    "wheat": [245, 222, 179],
    "beige": [245, 245, 220],
    "whitesmoke": [245, 245, 245],
    "mintcream": [245, 255, 250],
    "ghostwhite": [248, 248, 255],
    "salmon": [250, 128, 114],
    "antiquewhite": [250, 235, 215],
    "linen": [250, 240, 230],
    "lightgoldenrodyellow": [250, 250, 210],
    "oldlace": [253, 245, 230],
    "red": [255, 0, 0],
    "fuchsia": [255, 0, 255],
    "magenta": [255, 0, 255],
    "deeppink": [255, 20, 147],
    "orangered": [255, 69, 0],
    "tomato": [255, 99, 71],
    "hotpink": [255, 105, 180],
    "coral": [255, 127, 80],
    "darkorange": [255, 140, 0],
    "lightsalmon": [255, 160, 122],
    "orange": [255, 165, 0],
    "lightpink": [255, 182, 193],
    "pink": [255, 192, 203],
    "gold": [255, 215, 0],
    "peachpuff": [255, 218, 185],
    "navajowhite": [255, 222, 173],
    "moccasin": [255, 228, 181],
    "bisque": [255, 228, 196],
    "mistyrose": [255, 228, 225],
    "blanchedalmond": [255, 235, 205],
    "papayawhip": [255, 239, 213],
    "lavenderblush": [255, 240, 245],
    "seashell": [255, 245, 238],
    "cornsilk": [255, 248, 220],
    "lemonchiffon": [255, 250, 205],
    "floralwhite": [255, 250, 240],
    "snow": [255, 250, 250],
    "yellow": [255, 255, 0],
    "lightyellow": [255, 255, 224],
    "ivory": [255, 255, 240],
    "white": [255, 255, 255]
};

;// ./node_modules/rot-js/lib/display/tile-gl.js


/**
 * @class Tile backend
 * @private
 */
class TileGL extends Backend {
    constructor() {
        super();
        this._uniforms = {};
        try {
            this._gl = this._initWebGL();
        }
        catch (e) {
            if (typeof e === "string") {
                alert(e);
            }
            else if (e instanceof Error) {
                alert(e.message);
            }
        }
    }
    static isSupported() {
        return !!document.createElement("canvas").getContext("webgl2", { preserveDrawingBuffer: true });
    }
    schedule(cb) { requestAnimationFrame(cb); }
    getContainer() { return this._gl.canvas; }
    setOptions(opts) {
        super.setOptions(opts);
        this._updateSize();
        let tileSet = this._options.tileSet;
        if (tileSet && "complete" in tileSet && !tileSet.complete) {
            tileSet.addEventListener("load", () => this._updateTexture(tileSet));
        }
        else {
            this._updateTexture(tileSet);
        }
    }
    draw(data, clearBefore) {
        const gl = this._gl;
        const opts = this._options;
        let [x, y, ch, fg, bg] = data;
        let scissorY = gl.canvas.height - (y + 1) * opts.tileHeight;
        gl.scissor(x * opts.tileWidth, scissorY, opts.tileWidth, opts.tileHeight);
        if (clearBefore) {
            if (opts.tileColorize) {
                gl.clearColor(0, 0, 0, 0);
            }
            else {
                gl.clearColor(...parseColor(bg));
            }
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        if (!ch) {
            return;
        }
        let chars = [].concat(ch);
        let bgs = [].concat(bg);
        let fgs = [].concat(fg);
        gl.uniform2fv(this._uniforms["targetPosRel"], [x, y]);
        for (let i = 0; i < chars.length; i++) {
            let tile = this._options.tileMap[chars[i]];
            if (!tile) {
                throw new Error(`Char "${chars[i]}" not found in tileMap`);
            }
            gl.uniform1f(this._uniforms["colorize"], opts.tileColorize ? 1 : 0);
            gl.uniform2fv(this._uniforms["tilesetPosAbs"], tile);
            if (opts.tileColorize) {
                gl.uniform4fv(this._uniforms["tint"], parseColor(fgs[i]));
                gl.uniform4fv(this._uniforms["bg"], parseColor(bgs[i]));
            }
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        /*
        
        
                for (let i=0;i<chars.length;i++) {
        
                    if (this._options.tileColorize) { // apply colorization
                        let canvas = this._colorCanvas;
                        let context = canvas.getContext("2d") as CanvasRenderingContext2D;
                        context.globalCompositeOperation = "source-over";
                        context.clearRect(0, 0, tileWidth, tileHeight);
        
                        let fg = fgs[i];
                        let bg = bgs[i];
        
                        context.drawImage(
                            this._options.tileSet!,
                            tile[0], tile[1], tileWidth, tileHeight,
                            0, 0, tileWidth, tileHeight
                        );
        
                        if (fg != "transparent") {
                            context.fillStyle = fg;
                            context.globalCompositeOperation = "source-atop";
                            context.fillRect(0, 0, tileWidth, tileHeight);
                        }
        
                        if (bg != "transparent") {
                            context.fillStyle = bg;
                            context.globalCompositeOperation = "destination-over";
                            context.fillRect(0, 0, tileWidth, tileHeight);
                        }
        
                        this._ctx.drawImage(canvas, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
                    } else { // no colorizing, easy
                        this._ctx.drawImage(
                            this._options.tileSet!,
                            tile[0], tile[1], tileWidth, tileHeight,
                            x*tileWidth, y*tileHeight, tileWidth, tileHeight
                        );
                    }
                }
        
        */
    }
    clear() {
        const gl = this._gl;
        gl.clearColor(...parseColor(this._options.bg));
        gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    computeSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.tileWidth);
        let height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
    }
    computeFontSize() {
        throw new Error("Tile backend does not understand font size");
    }
    eventToPosition(x, y) {
        let canvas = this._gl.canvas;
        let rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
    }
    _initWebGL() {
        let gl = document.createElement("canvas").getContext("webgl2", { preserveDrawingBuffer: true });
        window.gl = gl;
        let program = createProgram(gl, VS, FS);
        gl.useProgram(program);
        createQuad(gl);
        UNIFORMS.forEach(name => this._uniforms[name] = gl.getUniformLocation(program, name));
        this._program = program;
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.SCISSOR_TEST);
        return gl;
    }
    _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
    }
    _updateSize() {
        const gl = this._gl;
        const opts = this._options;
        const canvasSize = [opts.width * opts.tileWidth, opts.height * opts.tileHeight];
        gl.canvas.width = canvasSize[0];
        gl.canvas.height = canvasSize[1];
        gl.viewport(0, 0, canvasSize[0], canvasSize[1]);
        gl.uniform2fv(this._uniforms["tileSize"], [opts.tileWidth, opts.tileHeight]);
        gl.uniform2fv(this._uniforms["targetSize"], canvasSize);
    }
    _updateTexture(tileSet) {
        createTexture(this._gl, tileSet);
    }
}
const UNIFORMS = ["targetPosRel", "tilesetPosAbs", "tileSize", "targetSize", "colorize", "bg", "tint"];
const VS = `
#version 300 es

in vec2 tilePosRel;
out vec2 tilesetPosPx;

uniform vec2 tilesetPosAbs;
uniform vec2 tileSize;
uniform vec2 targetSize;
uniform vec2 targetPosRel;

void main() {
	vec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;
	vec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;
	targetPosNdc.y *= -1.0;

	gl_Position = vec4(targetPosNdc, 0.0, 1.0);
	tilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;
}`.trim();
const FS = `
#version 300 es
precision highp float;

in vec2 tilesetPosPx;
out vec4 fragColor;
uniform sampler2D image;
uniform bool colorize;
uniform vec4 bg;
uniform vec4 tint;

void main() {
	fragColor = vec4(0, 0, 0, 1);

	vec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);

	if (colorize) {
		texel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;
		fragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;
		fragColor.a = texel.a + (1.0-texel.a)*bg.a;
	} else {
		fragColor = texel;
	}
}`.trim();
function createProgram(gl, vss, fss) {
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vss);
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(vs) || "");
    }
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fss);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(fs) || "");
    }
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(p) || "");
    }
    return p;
}
function createQuad(gl) {
    const pos = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
}
function createTexture(gl, data) {
    let t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
    return t;
}
let colorCache = {};
function parseColor(color) {
    if (!(color in colorCache)) {
        let parsed;
        if (color == "transparent") {
            parsed = [0, 0, 0, 0];
        }
        else if (color.indexOf("rgba") > -1) {
            parsed = (color.match(/[\d.]+/g) || []).map(Number);
            for (let i = 0; i < 3; i++) {
                parsed[i] = parsed[i] / 255;
            }
        }
        else {
            parsed = fromString(color).map($ => $ / 255);
            parsed.push(1);
        }
        colorCache[color] = parsed;
    }
    return colorCache[color];
}

;// ./node_modules/rot-js/lib/display/term.js


function clearToAnsi(bg) {
    return `\x1b[0;48;5;${termcolor(bg)}m\x1b[2J`;
}
function colorToAnsi(fg, bg) {
    return `\x1b[0;38;5;${termcolor(fg)};48;5;${termcolor(bg)}m`;
}
function positionToAnsi(x, y) {
    return `\x1b[${y + 1};${x + 1}H`;
}
function termcolor(color) {
    const SRC_COLORS = 256.0;
    const DST_COLORS = 6.0;
    const COLOR_RATIO = DST_COLORS / SRC_COLORS;
    let rgb = fromString(color);
    let r = Math.floor(rgb[0] * COLOR_RATIO);
    let g = Math.floor(rgb[1] * COLOR_RATIO);
    let b = Math.floor(rgb[2] * COLOR_RATIO);
    return r * 36 + g * 6 + b * 1 + 16;
}
class Term extends Backend {
    constructor() {
        super();
        this._offset = [0, 0];
        this._cursor = [-1, -1];
        this._lastColor = "";
    }
    schedule(cb) { setTimeout(cb, 1000 / 60); }
    setOptions(options) {
        super.setOptions(options);
        let size = [options.width, options.height];
        let avail = this.computeSize();
        this._offset = avail.map((val, index) => Math.floor((val - size[index]) / 2));
    }
    clear() {
        process.stdout.write(clearToAnsi(this._options.bg));
    }
    draw(data, clearBefore) {
        // determine where to draw what with what colors
        let [x, y, ch, fg, bg] = data;
        // determine if we need to move the terminal cursor
        let dx = this._offset[0] + x;
        let dy = this._offset[1] + y;
        let size = this.computeSize();
        if (dx < 0 || dx >= size[0]) {
            return;
        }
        if (dy < 0 || dy >= size[1]) {
            return;
        }
        if (dx !== this._cursor[0] || dy !== this._cursor[1]) {
            process.stdout.write(positionToAnsi(dx, dy));
            this._cursor[0] = dx;
            this._cursor[1] = dy;
        }
        // terminals automatically clear, but if we're clearing when we're
        // not otherwise provided with a character, just use a space instead
        if (clearBefore) {
            if (!ch) {
                ch = " ";
            }
        }
        // if we're not clearing and not provided with a character, do nothing
        if (!ch) {
            return;
        }
        // determine if we need to change colors
        let newColor = colorToAnsi(fg, bg);
        if (newColor !== this._lastColor) {
            process.stdout.write(newColor);
            this._lastColor = newColor;
        }
        if (ch != '\t') {
            // write the provided symbol to the display
            let chars = [].concat(ch);
            process.stdout.write(chars[0]);
        }
        // update our position, given that we wrote a character
        this._cursor[0]++;
        if (this._cursor[0] >= size[0]) {
            this._cursor[0] = 0;
            this._cursor[1]++;
        }
    }
    computeFontSize() { throw new Error("Terminal backend has no notion of font size"); }
    eventToPosition(x, y) { return [x, y]; }
    computeSize() { return [process.stdout.columns, process.stdout.rows]; }
}

;// ./node_modules/rot-js/lib/text.js
/**
 * @namespace
 * Contains text tokenization and breaking routines
 */
const RE_COLORS = /%([bc]){([^}]*)}/g;
// token types
const TYPE_TEXT = 0;
const TYPE_NEWLINE = 1;
const TYPE_FG = 2;
const TYPE_BG = 3;
/**
 * Measure size of a resulting text block
 */
function measure(str, maxWidth) {
    let result = { width: 0, height: 1 };
    let tokens = tokenize(str, maxWidth);
    let lineWidth = 0;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TYPE_TEXT:
                lineWidth += token.value.length;
                break;
            case TYPE_NEWLINE:
                result.height++;
                result.width = Math.max(result.width, lineWidth);
                lineWidth = 0;
                break;
        }
    }
    result.width = Math.max(result.width, lineWidth);
    return result;
}
/**
 * Convert string to a series of a formatting commands
 */
function tokenize(str, maxWidth) {
    let result = [];
    /* first tokenization pass - split texts and color formatting commands */
    let offset = 0;
    str.replace(RE_COLORS, function (match, type, name, index) {
        /* string before */
        let part = str.substring(offset, index);
        if (part.length) {
            result.push({
                type: TYPE_TEXT,
                value: part
            });
        }
        /* color command */
        result.push({
            type: (type == "c" ? TYPE_FG : TYPE_BG),
            value: name.trim()
        });
        offset = index + match.length;
        return "";
    });
    /* last remaining part */
    let part = str.substring(offset);
    if (part.length) {
        result.push({
            type: TYPE_TEXT,
            value: part
        });
    }
    return breakLines(result, maxWidth);
}
/* insert line breaks into first-pass tokenized data */
function breakLines(tokens, maxWidth) {
    if (!maxWidth) {
        maxWidth = Infinity;
    }
    let i = 0;
    let lineLength = 0;
    let lastTokenWithSpace = -1;
    while (i < tokens.length) { /* take all text tokens, remove space, apply linebreaks */
        let token = tokens[i];
        if (token.type == TYPE_NEWLINE) { /* reset */
            lineLength = 0;
            lastTokenWithSpace = -1;
        }
        if (token.type != TYPE_TEXT) { /* skip non-text tokens */
            i++;
            continue;
        }
        /* remove spaces at the beginning of line */
        while (lineLength == 0 && token.value.charAt(0) == " ") {
            token.value = token.value.substring(1);
        }
        /* forced newline? insert two new tokens after this one */
        let index = token.value.indexOf("\n");
        if (index != -1) {
            token.value = breakInsideToken(tokens, i, index, true);
            /* if there are spaces at the end, we must remove them (we do not want the line too long) */
            let arr = token.value.split("");
            while (arr.length && arr[arr.length - 1] == " ") {
                arr.pop();
            }
            token.value = arr.join("");
        }
        /* token degenerated? */
        if (!token.value.length) {
            tokens.splice(i, 1);
            continue;
        }
        if (lineLength + token.value.length > maxWidth) { /* line too long, find a suitable breaking spot */
            /* is it possible to break within this token? */
            let index = -1;
            while (1) {
                let nextIndex = token.value.indexOf(" ", index + 1);
                if (nextIndex == -1) {
                    break;
                }
                if (lineLength + nextIndex > maxWidth) {
                    break;
                }
                index = nextIndex;
            }
            if (index != -1) { /* break at space within this one */
                token.value = breakInsideToken(tokens, i, index, true);
            }
            else if (lastTokenWithSpace != -1) { /* is there a previous token where a break can occur? */
                let token = tokens[lastTokenWithSpace];
                let breakIndex = token.value.lastIndexOf(" ");
                token.value = breakInsideToken(tokens, lastTokenWithSpace, breakIndex, true);
                i = lastTokenWithSpace;
            }
            else { /* force break in this token */
                token.value = breakInsideToken(tokens, i, maxWidth - lineLength, false);
            }
        }
        else { /* line not long, continue */
            lineLength += token.value.length;
            if (token.value.indexOf(" ") != -1) {
                lastTokenWithSpace = i;
            }
        }
        i++; /* advance to next token */
    }
    tokens.push({ type: TYPE_NEWLINE }); /* insert fake newline to fix the last text line */
    /* remove trailing space from text tokens before newlines */
    let lastTextToken = null;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TYPE_TEXT:
                lastTextToken = token;
                break;
            case TYPE_NEWLINE:
                if (lastTextToken) { /* remove trailing space */
                    let arr = lastTextToken.value.split("");
                    while (arr.length && arr[arr.length - 1] == " ") {
                        arr.pop();
                    }
                    lastTextToken.value = arr.join("");
                }
                lastTextToken = null;
                break;
        }
    }
    tokens.pop(); /* remove fake token */
    return tokens;
}
/**
 * Create new tokens and insert them into the stream
 * @param {object[]} tokens
 * @param {int} tokenIndex Token being processed
 * @param {int} breakIndex Index within current token's value
 * @param {bool} removeBreakChar Do we want to remove the breaking character?
 * @returns {string} remaining unbroken token value
 */
function breakInsideToken(tokens, tokenIndex, breakIndex, removeBreakChar) {
    let newBreakToken = {
        type: TYPE_NEWLINE
    };
    let newTextToken = {
        type: TYPE_TEXT,
        value: tokens[tokenIndex].value.substring(breakIndex + (removeBreakChar ? 1 : 0))
    };
    tokens.splice(tokenIndex + 1, 0, newBreakToken, newTextToken);
    return tokens[tokenIndex].value.substring(0, breakIndex);
}

;// ./node_modules/rot-js/lib/constants.js
/** Default with for display and map generators */
let DEFAULT_WIDTH = 80;
/** Default height for display and map generators */
let DEFAULT_HEIGHT = 25;
const DIRS = {
    4: [[0, -1], [1, 0], [0, 1], [-1, 0]],
    8: [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]],
    6: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1], [-2, 0]]
};
const KEYS = {
    /** Cancel key. */
    VK_CANCEL: 3,
    /** Help key. */
    VK_HELP: 6,
    /** Backspace key. */
    VK_BACK_SPACE: 8,
    /** Tab key. */
    VK_TAB: 9,
    /** 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key. */
    VK_CLEAR: 12,
    /** Return/enter key on the main keyboard. */
    VK_RETURN: 13,
    /** Reserved, but not used. */
    VK_ENTER: 14,
    /** Shift key. */
    VK_SHIFT: 16,
    /** Control key. */
    VK_CONTROL: 17,
    /** Alt (Option on Mac) key. */
    VK_ALT: 18,
    /** Pause key. */
    VK_PAUSE: 19,
    /** Caps lock. */
    VK_CAPS_LOCK: 20,
    /** Escape key. */
    VK_ESCAPE: 27,
    /** Space bar. */
    VK_SPACE: 32,
    /** Page Up key. */
    VK_PAGE_UP: 33,
    /** Page Down key. */
    VK_PAGE_DOWN: 34,
    /** End key. */
    VK_END: 35,
    /** Home key. */
    VK_HOME: 36,
    /** Left arrow. */
    VK_LEFT: 37,
    /** Up arrow. */
    VK_UP: 38,
    /** Right arrow. */
    VK_RIGHT: 39,
    /** Down arrow. */
    VK_DOWN: 40,
    /** Print Screen key. */
    VK_PRINTSCREEN: 44,
    /** Ins(ert) key. */
    VK_INSERT: 45,
    /** Del(ete) key. */
    VK_DELETE: 46,
    /***/
    VK_0: 48,
    /***/
    VK_1: 49,
    /***/
    VK_2: 50,
    /***/
    VK_3: 51,
    /***/
    VK_4: 52,
    /***/
    VK_5: 53,
    /***/
    VK_6: 54,
    /***/
    VK_7: 55,
    /***/
    VK_8: 56,
    /***/
    VK_9: 57,
    /** Colon (:) key. Requires Gecko 15.0 */
    VK_COLON: 58,
    /** Semicolon (;) key. */
    VK_SEMICOLON: 59,
    /** Less-than (<) key. Requires Gecko 15.0 */
    VK_LESS_THAN: 60,
    /** Equals (=) key. */
    VK_EQUALS: 61,
    /** Greater-than (>) key. Requires Gecko 15.0 */
    VK_GREATER_THAN: 62,
    /** Question mark (?) key. Requires Gecko 15.0 */
    VK_QUESTION_MARK: 63,
    /** Atmark (@) key. Requires Gecko 15.0 */
    VK_AT: 64,
    /***/
    VK_A: 65,
    /***/
    VK_B: 66,
    /***/
    VK_C: 67,
    /***/
    VK_D: 68,
    /***/
    VK_E: 69,
    /***/
    VK_F: 70,
    /***/
    VK_G: 71,
    /***/
    VK_H: 72,
    /***/
    VK_I: 73,
    /***/
    VK_J: 74,
    /***/
    VK_K: 75,
    /***/
    VK_L: 76,
    /***/
    VK_M: 77,
    /***/
    VK_N: 78,
    /***/
    VK_O: 79,
    /***/
    VK_P: 80,
    /***/
    VK_Q: 81,
    /***/
    VK_R: 82,
    /***/
    VK_S: 83,
    /***/
    VK_T: 84,
    /***/
    VK_U: 85,
    /***/
    VK_V: 86,
    /***/
    VK_W: 87,
    /***/
    VK_X: 88,
    /***/
    VK_Y: 89,
    /***/
    VK_Z: 90,
    /***/
    VK_CONTEXT_MENU: 93,
    /** 0 on the numeric keypad. */
    VK_NUMPAD0: 96,
    /** 1 on the numeric keypad. */
    VK_NUMPAD1: 97,
    /** 2 on the numeric keypad. */
    VK_NUMPAD2: 98,
    /** 3 on the numeric keypad. */
    VK_NUMPAD3: 99,
    /** 4 on the numeric keypad. */
    VK_NUMPAD4: 100,
    /** 5 on the numeric keypad. */
    VK_NUMPAD5: 101,
    /** 6 on the numeric keypad. */
    VK_NUMPAD6: 102,
    /** 7 on the numeric keypad. */
    VK_NUMPAD7: 103,
    /** 8 on the numeric keypad. */
    VK_NUMPAD8: 104,
    /** 9 on the numeric keypad. */
    VK_NUMPAD9: 105,
    /** * on the numeric keypad. */
    VK_MULTIPLY: 106,
    /** + on the numeric keypad. */
    VK_ADD: 107,
    /***/
    VK_SEPARATOR: 108,
    /** - on the numeric keypad. */
    VK_SUBTRACT: 109,
    /** Decimal point on the numeric keypad. */
    VK_DECIMAL: 110,
    /** / on the numeric keypad. */
    VK_DIVIDE: 111,
    /** F1 key. */
    VK_F1: 112,
    /** F2 key. */
    VK_F2: 113,
    /** F3 key. */
    VK_F3: 114,
    /** F4 key. */
    VK_F4: 115,
    /** F5 key. */
    VK_F5: 116,
    /** F6 key. */
    VK_F6: 117,
    /** F7 key. */
    VK_F7: 118,
    /** F8 key. */
    VK_F8: 119,
    /** F9 key. */
    VK_F9: 120,
    /** F10 key. */
    VK_F10: 121,
    /** F11 key. */
    VK_F11: 122,
    /** F12 key. */
    VK_F12: 123,
    /** F13 key. */
    VK_F13: 124,
    /** F14 key. */
    VK_F14: 125,
    /** F15 key. */
    VK_F15: 126,
    /** F16 key. */
    VK_F16: 127,
    /** F17 key. */
    VK_F17: 128,
    /** F18 key. */
    VK_F18: 129,
    /** F19 key. */
    VK_F19: 130,
    /** F20 key. */
    VK_F20: 131,
    /** F21 key. */
    VK_F21: 132,
    /** F22 key. */
    VK_F22: 133,
    /** F23 key. */
    VK_F23: 134,
    /** F24 key. */
    VK_F24: 135,
    /** Num Lock key. */
    VK_NUM_LOCK: 144,
    /** Scroll Lock key. */
    VK_SCROLL_LOCK: 145,
    /** Circumflex (^) key. Requires Gecko 15.0 */
    VK_CIRCUMFLEX: 160,
    /** Exclamation (!) key. Requires Gecko 15.0 */
    VK_EXCLAMATION: 161,
    /** Double quote () key. Requires Gecko 15.0 */
    VK_DOUBLE_QUOTE: 162,
    /** Hash (#) key. Requires Gecko 15.0 */
    VK_HASH: 163,
    /** Dollar sign ($) key. Requires Gecko 15.0 */
    VK_DOLLAR: 164,
    /** Percent (%) key. Requires Gecko 15.0 */
    VK_PERCENT: 165,
    /** Ampersand (&) key. Requires Gecko 15.0 */
    VK_AMPERSAND: 166,
    /** Underscore (_) key. Requires Gecko 15.0 */
    VK_UNDERSCORE: 167,
    /** Open parenthesis (() key. Requires Gecko 15.0 */
    VK_OPEN_PAREN: 168,
    /** Close parenthesis ()) key. Requires Gecko 15.0 */
    VK_CLOSE_PAREN: 169,
    /* Asterisk (*) key. Requires Gecko 15.0 */
    VK_ASTERISK: 170,
    /** Plus (+) key. Requires Gecko 15.0 */
    VK_PLUS: 171,
    /** Pipe (|) key. Requires Gecko 15.0 */
    VK_PIPE: 172,
    /** Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0 */
    VK_HYPHEN_MINUS: 173,
    /** Open curly bracket ({) key. Requires Gecko 15.0 */
    VK_OPEN_CURLY_BRACKET: 174,
    /** Close curly bracket (}) key. Requires Gecko 15.0 */
    VK_CLOSE_CURLY_BRACKET: 175,
    /** Tilde (~) key. Requires Gecko 15.0 */
    VK_TILDE: 176,
    /** Comma (,) key. */
    VK_COMMA: 188,
    /** Period (.) key. */
    VK_PERIOD: 190,
    /** Slash (/) key. */
    VK_SLASH: 191,
    /** Back tick (`) key. */
    VK_BACK_QUOTE: 192,
    /** Open square bracket ([) key. */
    VK_OPEN_BRACKET: 219,
    /** Back slash (\) key. */
    VK_BACK_SLASH: 220,
    /** Close square bracket (]) key. */
    VK_CLOSE_BRACKET: 221,
    /** Quote (''') key. */
    VK_QUOTE: 222,
    /** Meta key on Linux, Command key on Mac. */
    VK_META: 224,
    /** AltGr key on Linux. Requires Gecko 15.0 */
    VK_ALTGR: 225,
    /** Windows logo key on Windows. Or Super or Hyper key on Linux. Requires Gecko 15.0 */
    VK_WIN: 91,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_KANA: 21,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_HANGUL: 21,
    /** 英数 key on Japanese Mac keyboard. Requires Gecko 15.0 */
    VK_EISU: 22,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_JUNJA: 23,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_FINAL: 24,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_HANJA: 25,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_KANJI: 25,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_CONVERT: 28,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_NONCONVERT: 29,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_ACCEPT: 30,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_MODECHANGE: 31,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_SELECT: 41,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_PRINT: 42,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_EXECUTE: 43,
    /** Linux support for this keycode was added in Gecko 4.0.	 */
    VK_SLEEP: 95
};

;// ./node_modules/rot-js/lib/display/display.js







const BACKENDS = {
    "hex": Hex,
    "rect": Rect,
    "tile": Tile,
    "tile-gl": TileGL,
    "term": Term
};
const DEFAULT_OPTIONS = {
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    transpose: false,
    layout: "rect",
    fontSize: 15,
    spacing: 1,
    border: 0,
    forceSquareRatio: false,
    fontFamily: "monospace",
    fontStyle: "",
    fg: "#ccc",
    bg: "#000",
    tileWidth: 32,
    tileHeight: 32,
    tileMap: {},
    tileSet: null,
    tileColorize: false
};
/**
 * @class Visual map display
 */
class Display {
    constructor(options = {}) {
        this._data = {};
        this._dirty = false; // false = nothing, true = all, object = dirty cells
        this._options = {};
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        this.setOptions(options);
        this.DEBUG = this.DEBUG.bind(this);
        this._tick = this._tick.bind(this);
        this._backend.schedule(this._tick);
    }
    /**
     * Debug helper, ideal as a map generator callback. Always bound to this.
     * @param {int} x
     * @param {int} y
     * @param {int} what
     */
    DEBUG(x, y, what) {
        let colors = [this._options.bg, this._options.fg];
        this.draw(x, y, null, null, colors[what % colors.length]);
    }
    /**
     * Clear the whole display (cover it with background color)
     */
    clear() {
        this._data = {};
        this._dirty = true;
    }
    /**
     * @see ROT.Display
     */
    setOptions(options) {
        Object.assign(this._options, options);
        if (options.width || options.height || options.fontSize || options.fontFamily || options.spacing || options.layout) {
            if (options.layout) {
                let ctor = BACKENDS[options.layout];
                this._backend = new ctor();
            }
            this._backend.setOptions(this._options);
            this._dirty = true;
        }
        return this;
    }
    /**
     * Returns currently set options
     */
    getOptions() { return this._options; }
    /**
     * Returns the DOM node of this display
     */
    getContainer() { return this._backend.getContainer(); }
    /**
     * Compute the maximum width/height to fit into a set of given constraints
     * @param {int} availWidth Maximum allowed pixel width
     * @param {int} availHeight Maximum allowed pixel height
     * @returns {int[2]} cellWidth,cellHeight
     */
    computeSize(availWidth, availHeight) {
        return this._backend.computeSize(availWidth, availHeight);
    }
    /**
     * Compute the maximum font size to fit into a set of given constraints
     * @param {int} availWidth Maximum allowed pixel width
     * @param {int} availHeight Maximum allowed pixel height
     * @returns {int} fontSize
     */
    computeFontSize(availWidth, availHeight) {
        return this._backend.computeFontSize(availWidth, availHeight);
    }
    computeTileSize(availWidth, availHeight) {
        let width = Math.floor(availWidth / this._options.width);
        let height = Math.floor(availHeight / this._options.height);
        return [width, height];
    }
    /**
     * Convert a DOM event (mouse or touch) to map coordinates. Uses first touch for multi-touch.
     * @param {Event} e event
     * @returns {int[2]} -1 for values outside of the canvas
     */
    eventToPosition(e) {
        let x, y;
        if ("touches" in e) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        }
        else {
            x = e.clientX;
            y = e.clientY;
        }
        return this._backend.eventToPosition(x, y);
    }
    /**
     * @param {int} x
     * @param {int} y
     * @param {string || string[]} ch One or more chars (will be overlapping themselves)
     * @param {string} [fg] foreground color
     * @param {string} [bg] background color
     */
    draw(x, y, ch, fg, bg) {
        if (!fg) {
            fg = this._options.fg;
        }
        if (!bg) {
            bg = this._options.bg;
        }
        let key = `${x},${y}`;
        this._data[key] = [x, y, ch, fg, bg];
        if (this._dirty === true) {
            return;
        } // will already redraw everything 
        if (!this._dirty) {
            this._dirty = {};
        } // first!
        this._dirty[key] = true;
    }
    /**
     * @param {int} x
     * @param {int} y
     * @param {string || string[]} ch One or more chars (will be overlapping themselves)
     * @param {string || null} [fg] foreground color
     * @param {string || null} [bg] background color
     */
    drawOver(x, y, ch, fg, bg) {
        const key = `${x},${y}`;
        const existing = this._data[key];
        if (existing) {
            existing[2] = ch || existing[2];
            existing[3] = fg || existing[3];
            existing[4] = bg || existing[4];
        }
        else {
            this.draw(x, y, ch, fg, bg);
        }
    }
    /**
     * Draws a text at given position. Optionally wraps at a maximum length. Currently does not work with hex layout.
     * @param {int} x
     * @param {int} y
     * @param {string} text May contain color/background format specifiers, %c{name}/%b{name}, both optional. %c{}/%b{} resets to default.
     * @param {int} [maxWidth] wrap at what width?
     * @returns {int} lines drawn
     */
    drawText(x, y, text, maxWidth) {
        let fg = null;
        let bg = null;
        let cx = x;
        let cy = y;
        let lines = 1;
        if (!maxWidth) {
            maxWidth = this._options.width - x;
        }
        let tokens = tokenize(text, maxWidth);
        while (tokens.length) { // interpret tokenized opcode stream
            let token = tokens.shift();
            switch (token.type) {
                case TYPE_TEXT:
                    let isSpace = false, isPrevSpace = false, isFullWidth = false, isPrevFullWidth = false;
                    for (let i = 0; i < token.value.length; i++) {
                        let cc = token.value.charCodeAt(i);
                        let c = token.value.charAt(i);
                        if (this._options.layout === "term") {
                            let cch = cc >> 8;
                            let isCJK = cch === 0x11 || (cch >= 0x2e && cch <= 0x9f) || (cch >= 0xac && cch <= 0xd7) || (cc >= 0xA960 && cc <= 0xA97F);
                            if (isCJK) {
                                this.draw(cx + 0, cy, c, fg, bg);
                                this.draw(cx + 1, cy, "\t", fg, bg);
                                cx += 2;
                                continue;
                            }
                        }
                        // Assign to `true` when the current char is full-width.
                        isFullWidth = (cc > 0xff00 && cc < 0xff61) || (cc > 0xffdc && cc < 0xffe8) || cc > 0xffee;
                        // Current char is space, whatever full-width or half-width both are OK.
                        isSpace = (c.charCodeAt(0) == 0x20 || c.charCodeAt(0) == 0x3000);
                        // The previous char is full-width and
                        // current char is nether half-width nor a space.
                        if (isPrevFullWidth && !isFullWidth && !isSpace) {
                            cx++;
                        } // add an extra position
                        // The current char is full-width and
                        // the previous char is not a space.
                        if (isFullWidth && !isPrevSpace) {
                            cx++;
                        } // add an extra position
                        this.draw(cx++, cy, c, fg, bg);
                        isPrevSpace = isSpace;
                        isPrevFullWidth = isFullWidth;
                    }
                    break;
                case TYPE_FG:
                    fg = token.value || null;
                    break;
                case TYPE_BG:
                    bg = token.value || null;
                    break;
                case TYPE_NEWLINE:
                    cx = x;
                    cy++;
                    lines++;
                    break;
            }
        }
        return lines;
    }
    /**
     * Timer tick: update dirty parts
     */
    _tick() {
        this._backend.schedule(this._tick);
        if (!this._dirty) {
            return;
        }
        if (this._dirty === true) { // draw all
            this._backend.clear();
            for (let id in this._data) {
                this._draw(id, false);
            } // redraw cached data 
        }
        else { // draw only dirty 
            for (let key in this._dirty) {
                this._draw(key, true);
            }
        }
        this._dirty = false;
    }
    /**
     * @param {string} key What to draw
     * @param {bool} clearBefore Is it necessary to clean before?
     */
    _draw(key, clearBefore) {
        let data = this._data[key];
        if (data[4] != this._options.bg) {
            clearBefore = true;
        }
        this._backend.draw(data, clearBefore);
    }
}
Display.Rect = Rect;
Display.Hex = Hex;
Display.Tile = Tile;
Display.TileGL = TileGL;
Display.Term = Term;

;// ./node_modules/rot-js/lib/stringgenerator.js

/**
 * @class (Markov process)-based string generator.
 * Copied from a <a href="http://roguebasin.com/index.php/Names_from_a_high_order_Markov_Process_and_a_simplified_Katz_back-off_scheme">RogueBasin article</a>.
 * Offers configurable order and prior.
 */
class StringGenerator {
    constructor(options) {
        this._options = {
            words: false,
            order: 3,
            prior: 0.001
        };
        Object.assign(this._options, options);
        this._boundary = String.fromCharCode(0);
        this._suffix = this._boundary;
        this._prefix = [];
        for (let i = 0; i < this._options.order; i++) {
            this._prefix.push(this._boundary);
        }
        this._priorValues = {};
        this._priorValues[this._boundary] = this._options.prior;
        this._data = {};
    }
    /**
     * Remove all learning data
     */
    clear() {
        this._data = {};
        this._priorValues = {};
    }
    /**
     * @returns {string} Generated string
     */
    generate() {
        let result = [this._sample(this._prefix)];
        while (result[result.length - 1] != this._boundary) {
            result.push(this._sample(result));
        }
        return this._join(result.slice(0, -1));
    }
    /**
     * Observe (learn) a string from a training set
     */
    observe(string) {
        let tokens = this._split(string);
        for (let i = 0; i < tokens.length; i++) {
            this._priorValues[tokens[i]] = this._options.prior;
        }
        tokens = this._prefix.concat(tokens).concat(this._suffix); /* add boundary symbols */
        for (let i = this._options.order; i < tokens.length; i++) {
            let context = tokens.slice(i - this._options.order, i);
            let event = tokens[i];
            for (let j = 0; j < context.length; j++) {
                let subcontext = context.slice(j);
                this._observeEvent(subcontext, event);
            }
        }
    }
    getStats() {
        let parts = [];
        let priorCount = Object.keys(this._priorValues).length;
        priorCount--; // boundary
        parts.push("distinct samples: " + priorCount);
        let dataCount = Object.keys(this._data).length;
        let eventCount = 0;
        for (let p in this._data) {
            eventCount += Object.keys(this._data[p]).length;
        }
        parts.push("dictionary size (contexts): " + dataCount);
        parts.push("dictionary size (events): " + eventCount);
        return parts.join(", ");
    }
    /**
     * @param {string}
     * @returns {string[]}
     */
    _split(str) {
        return str.split(this._options.words ? /\s+/ : "");
    }
    /**
     * @param {string[]}
     * @returns {string}
     */
    _join(arr) {
        return arr.join(this._options.words ? " " : "");
    }
    /**
     * @param {string[]} context
     * @param {string} event
     */
    _observeEvent(context, event) {
        let key = this._join(context);
        if (!(key in this._data)) {
            this._data[key] = {};
        }
        let data = this._data[key];
        if (!(event in data)) {
            data[event] = 0;
        }
        data[event]++;
    }
    /**
     * @param {string[]}
     * @returns {string}
     */
    _sample(context) {
        context = this._backoff(context);
        let key = this._join(context);
        let data = this._data[key];
        let available = {};
        if (this._options.prior) {
            for (let event in this._priorValues) {
                available[event] = this._priorValues[event];
            }
            for (let event in data) {
                available[event] += data[event];
            }
        }
        else {
            available = data;
        }
        return RNG.getWeightedValue(available);
    }
    /**
     * @param {string[]}
     * @returns {string[]}
     */
    _backoff(context) {
        if (context.length > this._options.order) {
            context = context.slice(-this._options.order);
        }
        else if (context.length < this._options.order) {
            context = this._prefix.slice(0, this._options.order - context.length).concat(context);
        }
        while (!(this._join(context) in this._data) && context.length > 0) {
            context = context.slice(1);
        }
        return context;
    }
}

;// ./node_modules/rot-js/lib/MinHeap.js
class MinHeap {
    constructor() {
        this.heap = [];
        this.timestamp = 0;
    }
    lessThan(a, b) {
        return a.key == b.key ? a.timestamp < b.timestamp : a.key < b.key;
    }
    shift(v) {
        this.heap = this.heap.map(({ key, value, timestamp }) => ({ key: key + v, value, timestamp }));
    }
    len() {
        return this.heap.length;
    }
    push(value, key) {
        this.timestamp += 1;
        const loc = this.len();
        this.heap.push({ value, timestamp: this.timestamp, key });
        this.updateUp(loc);
    }
    pop() {
        if (this.len() == 0) {
            throw new Error("no element to pop");
        }
        const top = this.heap[0];
        if (this.len() > 1) {
            this.heap[0] = this.heap.pop();
            this.updateDown(0);
        }
        else {
            this.heap.pop();
        }
        return top;
    }
    find(v) {
        for (let i = 0; i < this.len(); i++) {
            if (v == this.heap[i].value) {
                return this.heap[i];
            }
        }
        return null;
    }
    remove(v) {
        let index = null;
        for (let i = 0; i < this.len(); i++) {
            if (v == this.heap[i].value) {
                index = i;
            }
        }
        if (index === null) {
            return false;
        }
        if (this.len() > 1) {
            let last = this.heap.pop();
            if (last.value != v) { // if the last one is being removed, do nothing
                this.heap[index] = last;
                this.updateDown(index);
            }
            return true;
        }
        else {
            this.heap.pop();
        }
        return true;
    }
    parentNode(x) {
        return Math.floor((x - 1) / 2);
    }
    leftChildNode(x) {
        return 2 * x + 1;
    }
    rightChildNode(x) {
        return 2 * x + 2;
    }
    existNode(x) {
        return x >= 0 && x < this.heap.length;
    }
    swap(x, y) {
        const t = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = t;
    }
    minNode(numbers) {
        const validnumbers = numbers.filter(this.existNode.bind(this));
        let minimal = validnumbers[0];
        for (const i of validnumbers) {
            if (this.lessThan(this.heap[i], this.heap[minimal])) {
                minimal = i;
            }
        }
        return minimal;
    }
    updateUp(x) {
        if (x == 0) {
            return;
        }
        const parent = this.parentNode(x);
        if (this.existNode(parent) && this.lessThan(this.heap[x], this.heap[parent])) {
            this.swap(x, parent);
            this.updateUp(parent);
        }
    }
    updateDown(x) {
        const leftChild = this.leftChildNode(x);
        const rightChild = this.rightChildNode(x);
        if (!this.existNode(leftChild)) {
            return;
        }
        const m = this.minNode([x, leftChild, rightChild]);
        if (m != x) {
            this.swap(x, m);
            this.updateDown(m);
        }
    }
    debugPrint() {
        console.log(this.heap);
    }
}

;// ./node_modules/rot-js/lib/eventqueue.js

class EventQueue {
    /**
     * @class Generic event queue: stores events and retrieves them based on their time
     */
    constructor() {
        this._time = 0;
        this._events = new MinHeap();
    }
    /**
     * @returns {number} Elapsed time
     */
    getTime() { return this._time; }
    /**
     * Clear all scheduled events
     */
    clear() {
        this._events = new MinHeap();
        return this;
    }
    /**
     * @param {?} event
     * @param {number} time
     */
    add(event, time) {
        this._events.push(event, time);
    }
    /**
     * Locates the nearest event, advances time if necessary. Returns that event and removes it from the queue.
     * @returns {? || null} The event previously added by addEvent, null if no event available
     */
    get() {
        if (!this._events.len()) {
            return null;
        }
        let { key: time, value: event } = this._events.pop();
        if (time > 0) { /* advance */
            this._time += time;
            this._events.shift(-time);
        }
        return event;
    }
    /**
     * Get the time associated with the given event
     * @param {?} event
     * @returns {number} time
     */
    getEventTime(event) {
        const r = this._events.find(event);
        if (r) {
            const { key } = r;
            return key;
        }
        return undefined;
    }
    /**
     * Remove an event from the queue
     * @param {?} event
     * @returns {bool} success?
     */
    remove(event) {
        return this._events.remove(event);
    }
    ;
}

;// ./node_modules/rot-js/lib/scheduler/scheduler.js

class Scheduler {
    /**
     * @class Abstract scheduler
     */
    constructor() {
        this._queue = new EventQueue();
        this._repeat = [];
        this._current = null;
    }
    /**
     * @see ROT.EventQueue#getTime
     */
    getTime() { return this._queue.getTime(); }
    /**
     * @param {?} item
     * @param {bool} repeat
     */
    add(item, repeat) {
        if (repeat) {
            this._repeat.push(item);
        }
        return this;
    }
    /**
     * Get the time the given item is scheduled for
     * @param {?} item
     * @returns {number} time
     */
    getTimeOf(item) {
        return this._queue.getEventTime(item);
    }
    /**
     * Clear all items
     */
    clear() {
        this._queue.clear();
        this._repeat = [];
        this._current = null;
        return this;
    }
    /**
     * Remove a previously added item
     * @param {?} item
     * @returns {bool} successful?
     */
    remove(item) {
        let result = this._queue.remove(item);
        let index = this._repeat.indexOf(item);
        if (index != -1) {
            this._repeat.splice(index, 1);
        }
        if (this._current == item) {
            this._current = null;
        }
        return result;
    }
    /**
     * Schedule next item
     * @returns {?}
     */
    next() {
        this._current = this._queue.get();
        return this._current;
    }
}

;// ./node_modules/rot-js/lib/scheduler/simple.js

/**
 * @class Simple fair scheduler (round-robin style)
 */
class Simple extends Scheduler {
    add(item, repeat) {
        this._queue.add(item, 0);
        return super.add(item, repeat);
    }
    next() {
        if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, 0);
        }
        return super.next();
    }
}

;// ./node_modules/rot-js/lib/scheduler/speed.js

/**
 * @class Speed-based scheduler
 */
class Speed extends Scheduler {
    /**
     * @param {object} item anything with "getSpeed" method
     * @param {bool} repeat
     * @param {number} [time=1/item.getSpeed()]
     * @see ROT.Scheduler#add
     */
    add(item, repeat, time) {
        this._queue.add(item, time !== undefined ? time : 1 / item.getSpeed());
        return super.add(item, repeat);
    }
    /**
     * @see ROT.Scheduler#next
     */
    next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, 1 / this._current.getSpeed());
        }
        return super.next();
    }
}

;// ./node_modules/rot-js/lib/scheduler/action.js

/**
 * @class Action-based scheduler
 * @augments ROT.Scheduler
 */
class Action extends Scheduler {
    constructor() {
        super();
        this._defaultDuration = 1; /* for newly added */
        this._duration = this._defaultDuration; /* for this._current */
    }
    /**
     * @param {object} item
     * @param {bool} repeat
     * @param {number} [time=1]
     * @see ROT.Scheduler#add
     */
    add(item, repeat, time) {
        this._queue.add(item, time || this._defaultDuration);
        return super.add(item, repeat);
    }
    clear() {
        this._duration = this._defaultDuration;
        return super.clear();
    }
    remove(item) {
        if (item == this._current) {
            this._duration = this._defaultDuration;
        }
        return super.remove(item);
    }
    /**
     * @see ROT.Scheduler#next
     */
    next() {
        if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
            this._queue.add(this._current, this._duration || this._defaultDuration);
            this._duration = this._defaultDuration;
        }
        return super.next();
    }
    /**
     * Set duration for the active item
     */
    setDuration(time) {
        if (this._current) {
            this._duration = time;
        }
        return this;
    }
}

;// ./node_modules/rot-js/lib/scheduler/index.js



/* harmony default export */ const scheduler = ({ Simple: Simple, Speed: Speed, Action: Action });

;// ./node_modules/rot-js/lib/fov/fov.js

;
;
class FOV {
    /**
     * @class Abstract FOV algorithm
     * @param {function} lightPassesCallback Does the light pass through x,y?
     * @param {object} [options]
     * @param {int} [options.topology=8] 4/6/8
     */
    constructor(lightPassesCallback, options = {}) {
        this._lightPasses = lightPassesCallback;
        this._options = Object.assign({ topology: 8 }, options);
    }
    /**
     * Return all neighbors in a concentric ring
     * @param {int} cx center-x
     * @param {int} cy center-y
     * @param {int} r range
     */
    _getCircle(cx, cy, r) {
        let result = [];
        let dirs, countFactor, startOffset;
        switch (this._options.topology) {
            case 4:
                countFactor = 1;
                startOffset = [0, 1];
                dirs = [
                    DIRS[8][7],
                    DIRS[8][1],
                    DIRS[8][3],
                    DIRS[8][5]
                ];
                break;
            case 6:
                dirs = DIRS[6];
                countFactor = 1;
                startOffset = [-1, 1];
                break;
            case 8:
                dirs = DIRS[4];
                countFactor = 2;
                startOffset = [-1, 1];
                break;
            default:
                throw new Error("Incorrect topology for FOV computation");
                // removed by dead control flow
{}
        }
        /* starting neighbor */
        let x = cx + startOffset[0] * r;
        let y = cy + startOffset[1] * r;
        /* circle */
        for (let i = 0; i < dirs.length; i++) {
            for (let j = 0; j < r * countFactor; j++) {
                result.push([x, y]);
                x += dirs[i][0];
                y += dirs[i][1];
            }
        }
        return result;
    }
}

;// ./node_modules/rot-js/lib/fov/discrete-shadowcasting.js

/**
 * @class Discrete shadowcasting algorithm. Obsoleted by Precise shadowcasting.
 * @augments ROT.FOV
 */
class DiscreteShadowcasting extends FOV {
    compute(x, y, R, callback) {
        /* this place is always visible */
        callback(x, y, 0, 1);
        /* standing in a dark place. FIXME is this a good idea?  */
        if (!this._lightPasses(x, y)) {
            return;
        }
        /* start and end angles */
        let DATA = [];
        let A, B, cx, cy, blocks;
        /* analyze surrounding cells in concentric rings, starting from the center */
        for (let r = 1; r <= R; r++) {
            let neighbors = this._getCircle(x, y, r);
            let angle = 360 / neighbors.length;
            for (let i = 0; i < neighbors.length; i++) {
                cx = neighbors[i][0];
                cy = neighbors[i][1];
                A = angle * (i - 0.5);
                B = A + angle;
                blocks = !this._lightPasses(cx, cy);
                if (this._visibleCoords(Math.floor(A), Math.ceil(B), blocks, DATA)) {
                    callback(cx, cy, r, 1);
                }
                if (DATA.length == 2 && DATA[0] == 0 && DATA[1] == 360) {
                    return;
                } /* cutoff? */
            } /* for all cells in this ring */
        } /* for all rings */
    }
    /**
     * @param {int} A start angle
     * @param {int} B end angle
     * @param {bool} blocks Does current cell block visibility?
     * @param {int[][]} DATA shadowed angle pairs
     */
    _visibleCoords(A, B, blocks, DATA) {
        if (A < 0) {
            let v1 = this._visibleCoords(0, B, blocks, DATA);
            let v2 = this._visibleCoords(360 + A, 360, blocks, DATA);
            return v1 || v2;
        }
        let index = 0;
        while (index < DATA.length && DATA[index] < A) {
            index++;
        }
        if (index == DATA.length) { /* completely new shadow */
            if (blocks) {
                DATA.push(A, B);
            }
            return true;
        }
        let count = 0;
        if (index % 2) { /* this shadow starts in an existing shadow, or within its ending boundary */
            while (index < DATA.length && DATA[index] < B) {
                index++;
                count++;
            }
            if (count == 0) {
                return false;
            }
            if (blocks) {
                if (count % 2) {
                    DATA.splice(index - count, count, B);
                }
                else {
                    DATA.splice(index - count, count);
                }
            }
            return true;
        }
        else { /* this shadow starts outside an existing shadow, or within a starting boundary */
            while (index < DATA.length && DATA[index] < B) {
                index++;
                count++;
            }
            /* visible when outside an existing shadow, or when overlapping */
            if (A == DATA[index - count] && count == 1) {
                return false;
            }
            if (blocks) {
                if (count % 2) {
                    DATA.splice(index - count, count, A);
                }
                else {
                    DATA.splice(index - count, count, A, B);
                }
            }
            return true;
        }
    }
}

;// ./node_modules/rot-js/lib/fov/precise-shadowcasting.js

/**
 * @class Precise shadowcasting algorithm
 * @augments ROT.FOV
 */
class PreciseShadowcasting extends FOV {
    compute(x, y, R, callback) {
        /* this place is always visible */
        callback(x, y, 0, 1);
        /* standing in a dark place. FIXME is this a good idea?  */
        if (!this._lightPasses(x, y)) {
            return;
        }
        /* list of all shadows */
        let SHADOWS = [];
        let cx, cy, blocks, A1, A2, visibility;
        /* analyze surrounding cells in concentric rings, starting from the center */
        for (let r = 1; r <= R; r++) {
            let neighbors = this._getCircle(x, y, r);
            let neighborCount = neighbors.length;
            for (let i = 0; i < neighborCount; i++) {
                cx = neighbors[i][0];
                cy = neighbors[i][1];
                /* shift half-an-angle backwards to maintain consistency of 0-th cells */
                A1 = [i ? 2 * i - 1 : 2 * neighborCount - 1, 2 * neighborCount];
                A2 = [2 * i + 1, 2 * neighborCount];
                blocks = !this._lightPasses(cx, cy);
                visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);
                if (visibility) {
                    callback(cx, cy, r, visibility);
                }
                if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) {
                    return;
                } /* cutoff? */
            } /* for all cells in this ring */
        } /* for all rings */
    }
    /**
     * @param {int[2]} A1 arc start
     * @param {int[2]} A2 arc end
     * @param {bool} blocks Does current arc block visibility?
     * @param {int[][]} SHADOWS list of active shadows
     */
    _checkVisibility(A1, A2, blocks, SHADOWS) {
        if (A1[0] > A2[0]) { /* split into two sub-arcs */
            let v1 = this._checkVisibility(A1, [A1[1], A1[1]], blocks, SHADOWS);
            let v2 = this._checkVisibility([0, 1], A2, blocks, SHADOWS);
            return (v1 + v2) / 2;
        }
        /* index1: first shadow >= A1 */
        let index1 = 0, edge1 = false;
        while (index1 < SHADOWS.length) {
            let old = SHADOWS[index1];
            let diff = old[0] * A1[1] - A1[0] * old[1];
            if (diff >= 0) { /* old >= A1 */
                if (diff == 0 && !(index1 % 2)) {
                    edge1 = true;
                }
                break;
            }
            index1++;
        }
        /* index2: last shadow <= A2 */
        let index2 = SHADOWS.length, edge2 = false;
        while (index2--) {
            let old = SHADOWS[index2];
            let diff = A2[0] * old[1] - old[0] * A2[1];
            if (diff >= 0) { /* old <= A2 */
                if (diff == 0 && (index2 % 2)) {
                    edge2 = true;
                }
                break;
            }
        }
        let visible = true;
        if (index1 == index2 && (edge1 || edge2)) { /* subset of existing shadow, one of the edges match */
            visible = false;
        }
        else if (edge1 && edge2 && index1 + 1 == index2 && (index2 % 2)) { /* completely equivalent with existing shadow */
            visible = false;
        }
        else if (index1 > index2 && (index1 % 2)) { /* subset of existing shadow, not touching */
            visible = false;
        }
        if (!visible) {
            return 0;
        } /* fast case: not visible */
        let visibleLength;
        /* compute the length of visible arc, adjust list of shadows (if blocking) */
        let remove = index2 - index1 + 1;
        if (remove % 2) {
            if (index1 % 2) { /* first edge within existing shadow, second outside */
                let P = SHADOWS[index1];
                visibleLength = (A2[0] * P[1] - P[0] * A2[1]) / (P[1] * A2[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove, A2);
                }
            }
            else { /* second edge within existing shadow, first outside */
                let P = SHADOWS[index2];
                visibleLength = (P[0] * A1[1] - A1[0] * P[1]) / (A1[1] * P[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove, A1);
                }
            }
        }
        else {
            if (index1 % 2) { /* both edges within existing shadows */
                let P1 = SHADOWS[index1];
                let P2 = SHADOWS[index2];
                visibleLength = (P2[0] * P1[1] - P1[0] * P2[1]) / (P1[1] * P2[1]);
                if (blocks) {
                    SHADOWS.splice(index1, remove);
                }
            }
            else { /* both edges outside existing shadows */
                if (blocks) {
                    SHADOWS.splice(index1, remove, A1, A2);
                }
                return 1; /* whole arc visible! */
            }
        }
        let arcLength = (A2[0] * A1[1] - A1[0] * A2[1]) / (A1[1] * A2[1]);
        return visibleLength / arcLength;
    }
}

;// ./node_modules/rot-js/lib/fov/recursive-shadowcasting.js

/** Octants used for translating recursive shadowcasting offsets */
const OCTANTS = [
    [-1, 0, 0, 1],
    [0, -1, 1, 0],
    [0, -1, -1, 0],
    [-1, 0, 0, -1],
    [1, 0, 0, -1],
    [0, 1, -1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1]
];
/**
 * @class Recursive shadowcasting algorithm
 * Currently only supports 4/8 topologies, not hexagonal.
 * Based on Peter Harkins' implementation of Björn Bergström's algorithm described here: http://www.roguebasin.com/index.php?title=FOV_using_recursive_shadowcasting
 * @augments ROT.FOV
 */
class RecursiveShadowcasting extends FOV {
    /**
     * Compute visibility for a 360-degree circle
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {function} callback
     */
    compute(x, y, R, callback) {
        //You can always see your own tile
        callback(x, y, 0, 1);
        for (let i = 0; i < OCTANTS.length; i++) {
            this._renderOctant(x, y, OCTANTS[i], R, callback);
        }
    }
    /**
     * Compute visibility for a 180-degree arc
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {int} dir Direction to look in (expressed in a ROT.DIRS value);
     * @param {function} callback
     */
    compute180(x, y, R, dir, callback) {
        //You can always see your own tile
        callback(x, y, 0, 1);
        let previousOctant = (dir - 1 + 8) % 8; //Need to retrieve the previous octant to render a full 180 degrees
        let nextPreviousOctant = (dir - 2 + 8) % 8; //Need to retrieve the previous two octants to render a full 180 degrees
        let nextOctant = (dir + 1 + 8) % 8; //Need to grab to next octant to render a full 180 degrees
        this._renderOctant(x, y, OCTANTS[nextPreviousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[nextOctant], R, callback);
    }
    ;
    /**
     * Compute visibility for a 90-degree arc
     * @param {int} x
     * @param {int} y
     * @param {int} R Maximum visibility radius
     * @param {int} dir Direction to look in (expressed in a ROT.DIRS value);
     * @param {function} callback
     */
    compute90(x, y, R, dir, callback) {
        //You can always see your own tile
        callback(x, y, 0, 1);
        let previousOctant = (dir - 1 + 8) % 8; //Need to retrieve the previous octant to render a full 90 degrees
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
    }
    /**
     * Render one octant (45-degree arc) of the viewshed
     * @param {int} x
     * @param {int} y
     * @param {int} octant Octant to be rendered
     * @param {int} R Maximum visibility radius
     * @param {function} callback
     */
    _renderOctant(x, y, octant, R, callback) {
        //Radius incremented by 1 to provide same coverage area as other shadowcasting radiuses
        this._castVisibility(x, y, 1, 1.0, 0.0, R + 1, octant[0], octant[1], octant[2], octant[3], callback);
    }
    /**
     * Actually calculates the visibility
     * @param {int} startX The starting X coordinate
     * @param {int} startY The starting Y coordinate
     * @param {int} row The row to render
     * @param {float} visSlopeStart The slope to start at
     * @param {float} visSlopeEnd The slope to end at
     * @param {int} radius The radius to reach out to
     * @param {int} xx
     * @param {int} xy
     * @param {int} yx
     * @param {int} yy
     * @param {function} callback The callback to use when we hit a block that is visible
     */
    _castVisibility(startX, startY, row, visSlopeStart, visSlopeEnd, radius, xx, xy, yx, yy, callback) {
        if (visSlopeStart < visSlopeEnd) {
            return;
        }
        for (let i = row; i <= radius; i++) {
            let dx = -i - 1;
            let dy = -i;
            let blocked = false;
            let newStart = 0;
            //'Row' could be column, names here assume octant 0 and would be flipped for half the octants
            while (dx <= 0) {
                dx += 1;
                //Translate from relative coordinates to map coordinates
                let mapX = startX + dx * xx + dy * xy;
                let mapY = startY + dx * yx + dy * yy;
                //Range of the row
                let slopeStart = (dx - 0.5) / (dy + 0.5);
                let slopeEnd = (dx + 0.5) / (dy - 0.5);
                //Ignore if not yet at left edge of Octant
                if (slopeEnd > visSlopeStart) {
                    continue;
                }
                //Done if past right edge
                if (slopeStart < visSlopeEnd) {
                    break;
                }
                //If it's in range, it's visible
                if ((dx * dx + dy * dy) < (radius * radius)) {
                    callback(mapX, mapY, i, 1);
                }
                if (!blocked) {
                    //If tile is a blocking tile, cast around it
                    if (!this._lightPasses(mapX, mapY) && i < radius) {
                        blocked = true;
                        this._castVisibility(startX, startY, i + 1, visSlopeStart, slopeStart, radius, xx, xy, yx, yy, callback);
                        newStart = slopeEnd;
                    }
                }
                else {
                    //Keep narrowing if scanning across a block
                    if (!this._lightPasses(mapX, mapY)) {
                        newStart = slopeEnd;
                        continue;
                    }
                    //Block has ended
                    blocked = false;
                    visSlopeStart = newStart;
                }
            }
            if (blocked) {
                break;
            }
        }
    }
}

;// ./node_modules/rot-js/lib/fov/index.js



/* harmony default export */ const fov = ({ DiscreteShadowcasting: DiscreteShadowcasting, PreciseShadowcasting: PreciseShadowcasting, RecursiveShadowcasting: RecursiveShadowcasting });

;// ./node_modules/rot-js/lib/map/map.js

;
class Map {
    /**
     * @class Base map generator
     * @param {int} [width=ROT.DEFAULT_WIDTH]
     * @param {int} [height=ROT.DEFAULT_HEIGHT]
     */
    constructor(width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
        this._width = width;
        this._height = height;
    }
    ;
    _fillMap(value) {
        let map = [];
        for (let i = 0; i < this._width; i++) {
            map.push([]);
            for (let j = 0; j < this._height; j++) {
                map[i].push(value);
            }
        }
        return map;
    }
}

;// ./node_modules/rot-js/lib/map/arena.js

/**
 * @class Simple empty rectangular room
 * @augments ROT.Map
 */
class Arena extends Map {
    create(callback) {
        let w = this._width - 1;
        let h = this._height - 1;
        for (let i = 0; i <= w; i++) {
            for (let j = 0; j <= h; j++) {
                let empty = (i && j && i < w && j < h);
                callback(i, j, empty ? 0 : 1);
            }
        }
        return this;
    }
}

;// ./node_modules/rot-js/lib/map/dungeon.js

/**
 * @class Dungeon map: has rooms and corridors
 * @augments ROT.Map
 */
class Dungeon extends Map {
    constructor(width, height) {
        super(width, height);
        this._rooms = [];
        this._corridors = [];
    }
    /**
     * Get all generated rooms
     * @returns {ROT.Map.Feature.Room[]}
     */
    getRooms() { return this._rooms; }
    /**
     * Get all generated corridors
     * @returns {ROT.Map.Feature.Corridor[]}
     */
    getCorridors() { return this._corridors; }
}

;// ./node_modules/rot-js/lib/map/features.js

;
/**
 * @class Dungeon feature; has own .create() method
 */
class Feature {
}
/**
 * @class Room
 * @augments ROT.Map.Feature
 * @param {int} x1
 * @param {int} y1
 * @param {int} x2
 * @param {int} y2
 * @param {int} [doorX]
 * @param {int} [doorY]
 */
class Room extends Feature {
    constructor(x1, y1, x2, y2, doorX, doorY) {
        super();
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._doors = {};
        if (doorX !== undefined && doorY !== undefined) {
            this.addDoor(doorX, doorY);
        }
    }
    ;
    /**
     * Room of random size, with a given doors and direction
     */
    static createRandomAt(x, y, dx, dy, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = rng.getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = rng.getUniformInt(min, max);
        if (dx == 1) { /* to the right */
            let y2 = y - Math.floor(rng.getUniform() * height);
            return new this(x + 1, y2, x + width, y2 + height - 1, x, y);
        }
        if (dx == -1) { /* to the left */
            let y2 = y - Math.floor(rng.getUniform() * height);
            return new this(x - width, y2, x - 1, y2 + height - 1, x, y);
        }
        if (dy == 1) { /* to the bottom */
            let x2 = x - Math.floor(rng.getUniform() * width);
            return new this(x2, y + 1, x2 + width - 1, y + height, x, y);
        }
        if (dy == -1) { /* to the top */
            let x2 = x - Math.floor(rng.getUniform() * width);
            return new this(x2, y - height, x2 + width - 1, y - 1, x, y);
        }
        throw new Error("dx or dy must be 1 or -1");
    }
    /**
     * Room of random size, positioned around center coords
     */
    static createRandomCenter(cx, cy, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = rng.getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = rng.getUniformInt(min, max);
        let x1 = cx - Math.floor(rng.getUniform() * width);
        let y1 = cy - Math.floor(rng.getUniform() * height);
        let x2 = x1 + width - 1;
        let y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
    }
    /**
     * Room of random size within a given dimensions
     */
    static createRandom(availWidth, availHeight, options) {
        let min = options.roomWidth[0];
        let max = options.roomWidth[1];
        let width = rng.getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        let height = rng.getUniformInt(min, max);
        let left = availWidth - width - 1;
        let top = availHeight - height - 1;
        let x1 = 1 + Math.floor(rng.getUniform() * left);
        let y1 = 1 + Math.floor(rng.getUniform() * top);
        let x2 = x1 + width - 1;
        let y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
    }
    addDoor(x, y) {
        this._doors[x + "," + y] = 1;
        return this;
    }
    /**
     * @param {function}
     */
    getDoors(cb) {
        for (let key in this._doors) {
            let parts = key.split(",");
            cb(parseInt(parts[0]), parseInt(parts[1]));
        }
        return this;
    }
    clearDoors() {
        this._doors = {};
        return this;
    }
    addDoors(isWallCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x != left && x != right && y != top && y != bottom) {
                    continue;
                }
                if (isWallCallback(x, y)) {
                    continue;
                }
                this.addDoor(x, y);
            }
        }
        return this;
    }
    debug() {
        console.log("room", this._x1, this._y1, this._x2, this._y2);
    }
    isValid(isWallCallback, canBeDugCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x == left || x == right || y == top || y == bottom) {
                    if (!isWallCallback(x, y)) {
                        return false;
                    }
                }
                else {
                    if (!canBeDugCallback(x, y)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    /**
     * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty, 1 = wall, 2 = door. Multiple doors are allowed.
     */
    create(digCallback) {
        let left = this._x1 - 1;
        let right = this._x2 + 1;
        let top = this._y1 - 1;
        let bottom = this._y2 + 1;
        let value = 0;
        for (let x = left; x <= right; x++) {
            for (let y = top; y <= bottom; y++) {
                if (x + "," + y in this._doors) {
                    value = 2;
                }
                else if (x == left || x == right || y == top || y == bottom) {
                    value = 1;
                }
                else {
                    value = 0;
                }
                digCallback(x, y, value);
            }
        }
    }
    getCenter() {
        return [Math.round((this._x1 + this._x2) / 2), Math.round((this._y1 + this._y2) / 2)];
    }
    getLeft() { return this._x1; }
    getRight() { return this._x2; }
    getTop() { return this._y1; }
    getBottom() { return this._y2; }
}
/**
 * @class Corridor
 * @augments ROT.Map.Feature
 * @param {int} startX
 * @param {int} startY
 * @param {int} endX
 * @param {int} endY
 */
class Corridor extends Feature {
    constructor(startX, startY, endX, endY) {
        super();
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._endsWithAWall = true;
    }
    static createRandomAt(x, y, dx, dy, options) {
        let min = options.corridorLength[0];
        let max = options.corridorLength[1];
        let length = rng.getUniformInt(min, max);
        return new this(x, y, x + dx * length, y + dy * length);
    }
    debug() {
        console.log("corridor", this._startX, this._startY, this._endX, this._endY);
    }
    isValid(isWallCallback, canBeDugCallback) {
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        let length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        let nx = dy;
        let ny = -dx;
        let ok = true;
        for (let i = 0; i < length; i++) {
            let x = sx + i * dx;
            let y = sy + i * dy;
            if (!canBeDugCallback(x, y)) {
                ok = false;
            }
            if (!isWallCallback(x + nx, y + ny)) {
                ok = false;
            }
            if (!isWallCallback(x - nx, y - ny)) {
                ok = false;
            }
            if (!ok) {
                length = i;
                this._endX = x - dx;
                this._endY = y - dy;
                break;
            }
        }
        /**
         * If the length degenerated, this corridor might be invalid
         */
        /* not supported */
        if (length == 0) {
            return false;
        }
        /* length 1 allowed only if the next space is empty */
        if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) {
            return false;
        }
        /**
         * We do not want the corridor to crash into a corner of a room;
         * if any of the ending corners is empty, the N+1th cell of this corridor must be empty too.
         *
         * Situation:
         * #######1
         * .......?
         * #######2
         *
         * The corridor was dug from left to right.
         * 1, 2 - problematic corners, ? = N+1th cell (not dug)
         */
        let firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
        let secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
        this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);
        if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) {
            return false;
        }
        return true;
    }
    /**
     * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty.
     */
    create(digCallback) {
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        let length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        for (let i = 0; i < length; i++) {
            let x = sx + i * dx;
            let y = sy + i * dy;
            digCallback(x, y, 0);
        }
        return true;
    }
    createPriorityWalls(priorityWallCallback) {
        if (!this._endsWithAWall) {
            return;
        }
        let sx = this._startX;
        let sy = this._startY;
        let dx = this._endX - sx;
        let dy = this._endY - sy;
        if (dx) {
            dx = dx / Math.abs(dx);
        }
        if (dy) {
            dy = dy / Math.abs(dy);
        }
        let nx = dy;
        let ny = -dx;
        priorityWallCallback(this._endX + dx, this._endY + dy);
        priorityWallCallback(this._endX + nx, this._endY + ny);
        priorityWallCallback(this._endX - nx, this._endY - ny);
    }
}

;// ./node_modules/rot-js/lib/map/uniform.js



;
/**
 * @class Dungeon generator which tries to fill the space evenly. Generates independent rooms and tries to connect them.
 * @augments ROT.Map.Dungeon
 */
class Uniform extends Dungeon {
    constructor(width, height, options) {
        super(width, height);
        this._options = {
            roomWidth: [3, 9],
            roomHeight: [3, 5],
            roomDugPercentage: 0.1,
            timeLimit: 1000 /* we stop after this much time has passed (msec) */
        };
        Object.assign(this._options, options);
        this._map = [];
        this._dug = 0;
        this._roomAttempts = 20; /* new room is created N-times until is considered as impossible to generate */
        this._corridorAttempts = 20; /* corridors are tried N-times until the level is considered as impossible to connect */
        this._connected = []; /* list of already connected rooms */
        this._unconnected = []; /* list of remaining unconnected rooms */
        this._digCallback = this._digCallback.bind(this);
        this._canBeDugCallback = this._canBeDugCallback.bind(this);
        this._isWallCallback = this._isWallCallback.bind(this);
    }
    /**
     * Create a map. If the time limit has been hit, returns null.
     * @see ROT.Map#create
     */
    create(callback) {
        let t1 = Date.now();
        while (1) {
            let t2 = Date.now();
            if (t2 - t1 > this._options.timeLimit) {
                return null;
            } /* time limit! */
            this._map = this._fillMap(1);
            this._dug = 0;
            this._rooms = [];
            this._unconnected = [];
            this._generateRooms();
            if (this._rooms.length < 2) {
                continue;
            }
            if (this._generateCorridors()) {
                break;
            }
        }
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this._map[i][j]);
                }
            }
        }
        return this;
    }
    /**
     * Generates a suitable amount of rooms
     */
    _generateRooms() {
        let w = this._width - 2;
        let h = this._height - 2;
        let room;
        do {
            room = this._generateRoom();
            if (this._dug / (w * h) > this._options.roomDugPercentage) {
                break;
            } /* achieved requested amount of free space */
        } while (room);
        /* either enough rooms, or not able to generate more of them :) */
    }
    /**
     * Try to generate one room
     */
    _generateRoom() {
        let count = 0;
        while (count < this._roomAttempts) {
            count++;
            let room = Room.createRandom(this._width, this._height, this._options);
            if (!room.isValid(this._isWallCallback, this._canBeDugCallback)) {
                continue;
            }
            room.create(this._digCallback);
            this._rooms.push(room);
            return room;
        }
        /* no room was generated in a given number of attempts */
        return null;
    }
    /**
     * Generates connectors beween rooms
     * @returns {bool} success Was this attempt successfull?
     */
    _generateCorridors() {
        let cnt = 0;
        while (cnt < this._corridorAttempts) {
            cnt++;
            this._corridors = [];
            /* dig rooms into a clear map */
            this._map = this._fillMap(1);
            for (let i = 0; i < this._rooms.length; i++) {
                let room = this._rooms[i];
                room.clearDoors();
                room.create(this._digCallback);
            }
            this._unconnected = rng.shuffle(this._rooms.slice());
            this._connected = [];
            if (this._unconnected.length) {
                this._connected.push(this._unconnected.pop());
            } /* first one is always connected */
            while (1) {
                /* 1. pick random connected room */
                let connected = rng.getItem(this._connected);
                if (!connected) {
                    break;
                }
                /* 2. find closest unconnected */
                let room1 = this._closestRoom(this._unconnected, connected);
                if (!room1) {
                    break;
                }
                /* 3. connect it to closest connected */
                let room2 = this._closestRoom(this._connected, room1);
                if (!room2) {
                    break;
                }
                let ok = this._connectRooms(room1, room2);
                if (!ok) {
                    break;
                } /* stop connecting, re-shuffle */
                if (!this._unconnected.length) {
                    return true;
                } /* done; no rooms remain */
            }
        }
        return false;
    }
    ;
    /**
     * For a given room, find the closest one from the list
     */
    _closestRoom(rooms, room) {
        let dist = Infinity;
        let center = room.getCenter();
        let result = null;
        for (let i = 0; i < rooms.length; i++) {
            let r = rooms[i];
            let c = r.getCenter();
            let dx = c[0] - center[0];
            let dy = c[1] - center[1];
            let d = dx * dx + dy * dy;
            if (d < dist) {
                dist = d;
                result = r;
            }
        }
        return result;
    }
    _connectRooms(room1, room2) {
        /*
            room1.debug();
            room2.debug();
        */
        let center1 = room1.getCenter();
        let center2 = room2.getCenter();
        let diffX = center2[0] - center1[0];
        let diffY = center2[1] - center1[1];
        let start;
        let end;
        let dirIndex1, dirIndex2, min, max, index;
        if (Math.abs(diffX) < Math.abs(diffY)) { /* first try connecting north-south walls */
            dirIndex1 = (diffY > 0 ? 2 : 0);
            dirIndex2 = (dirIndex1 + 2) % 4;
            min = room2.getLeft();
            max = room2.getRight();
            index = 0;
        }
        else { /* first try connecting east-west walls */
            dirIndex1 = (diffX > 0 ? 1 : 3);
            dirIndex2 = (dirIndex1 + 2) % 4;
            min = room2.getTop();
            max = room2.getBottom();
            index = 1;
        }
        start = this._placeInWall(room1, dirIndex1); /* corridor will start here */
        if (!start) {
            return false;
        }
        if (start[index] >= min && start[index] <= max) { /* possible to connect with straight line (I-like) */
            end = start.slice();
            let value = 0;
            switch (dirIndex2) {
                case 0:
                    value = room2.getTop() - 1;
                    break;
                case 1:
                    value = room2.getRight() + 1;
                    break;
                case 2:
                    value = room2.getBottom() + 1;
                    break;
                case 3:
                    value = room2.getLeft() - 1;
                    break;
            }
            end[(index + 1) % 2] = value;
            this._digLine([start, end]);
        }
        else if (start[index] < min - 1 || start[index] > max + 1) { /* need to switch target wall (L-like) */
            let diff = start[index] - center2[index];
            let rotation = 0;
            switch (dirIndex2) {
                case 0:
                case 1:
                    rotation = (diff < 0 ? 3 : 1);
                    break;
                case 2:
                case 3:
                    rotation = (diff < 0 ? 1 : 3);
                    break;
            }
            dirIndex2 = (dirIndex2 + rotation) % 4;
            end = this._placeInWall(room2, dirIndex2);
            if (!end) {
                return false;
            }
            let mid = [0, 0];
            mid[index] = start[index];
            let index2 = (index + 1) % 2;
            mid[index2] = end[index2];
            this._digLine([start, mid, end]);
        }
        else { /* use current wall pair, but adjust the line in the middle (S-like) */
            let index2 = (index + 1) % 2;
            end = this._placeInWall(room2, dirIndex2);
            if (!end) {
                return false;
            }
            let mid = Math.round((end[index2] + start[index2]) / 2);
            let mid1 = [0, 0];
            let mid2 = [0, 0];
            mid1[index] = start[index];
            mid1[index2] = mid;
            mid2[index] = end[index];
            mid2[index2] = mid;
            this._digLine([start, mid1, mid2, end]);
        }
        room1.addDoor(start[0], start[1]);
        room2.addDoor(end[0], end[1]);
        index = this._unconnected.indexOf(room1);
        if (index != -1) {
            this._unconnected.splice(index, 1);
            this._connected.push(room1);
        }
        index = this._unconnected.indexOf(room2);
        if (index != -1) {
            this._unconnected.splice(index, 1);
            this._connected.push(room2);
        }
        return true;
    }
    _placeInWall(room, dirIndex) {
        let start = [0, 0];
        let dir = [0, 0];
        let length = 0;
        switch (dirIndex) {
            case 0:
                dir = [1, 0];
                start = [room.getLeft(), room.getTop() - 1];
                length = room.getRight() - room.getLeft() + 1;
                break;
            case 1:
                dir = [0, 1];
                start = [room.getRight() + 1, room.getTop()];
                length = room.getBottom() - room.getTop() + 1;
                break;
            case 2:
                dir = [1, 0];
                start = [room.getLeft(), room.getBottom() + 1];
                length = room.getRight() - room.getLeft() + 1;
                break;
            case 3:
                dir = [0, 1];
                start = [room.getLeft() - 1, room.getTop()];
                length = room.getBottom() - room.getTop() + 1;
                break;
        }
        let avail = [];
        let lastBadIndex = -2;
        for (let i = 0; i < length; i++) {
            let x = start[0] + i * dir[0];
            let y = start[1] + i * dir[1];
            avail.push(null);
            let isWall = (this._map[x][y] == 1);
            if (isWall) {
                if (lastBadIndex != i - 1) {
                    avail[i] = [x, y];
                }
            }
            else {
                lastBadIndex = i;
                if (i) {
                    avail[i - 1] = null;
                }
            }
        }
        for (let i = avail.length - 1; i >= 0; i--) {
            if (!avail[i]) {
                avail.splice(i, 1);
            }
        }
        return (avail.length ? rng.getItem(avail) : null);
    }
    /**
     * Dig a polyline.
     */
    _digLine(points) {
        for (let i = 1; i < points.length; i++) {
            let start = points[i - 1];
            let end = points[i];
            let corridor = new Corridor(start[0], start[1], end[0], end[1]);
            corridor.create(this._digCallback);
            this._corridors.push(corridor);
        }
    }
    _digCallback(x, y, value) {
        this._map[x][y] = value;
        if (value == 0) {
            this._dug++;
        }
    }
    _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
}

;// ./node_modules/rot-js/lib/map/cellular.js



;
/**
 * @class Cellular automaton map generator
 * @augments ROT.Map
 * @param {int} [width=ROT.DEFAULT_WIDTH]
 * @param {int} [height=ROT.DEFAULT_HEIGHT]
 * @param {object} [options] Options
 * @param {int[]} [options.born] List of neighbor counts for a new cell to be born in empty space
 * @param {int[]} [options.survive] List of neighbor counts for an existing  cell to survive
 * @param {int} [options.topology] Topology 4 or 6 or 8
 */
class Cellular extends Map {
    constructor(width, height, options = {}) {
        super(width, height);
        this._options = {
            born: [5, 6, 7, 8],
            survive: [4, 5, 6, 7, 8],
            topology: 8
        };
        this.setOptions(options);
        this._dirs = DIRS[this._options.topology];
        this._map = this._fillMap(0);
    }
    /**
     * Fill the map with random values
     * @param {float} probability Probability for a cell to become alive; 0 = all empty, 1 = all full
     */
    randomize(probability) {
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                this._map[i][j] = (rng.getUniform() < probability ? 1 : 0);
            }
        }
        return this;
    }
    /**
     * Change options.
     * @see ROT.Map.Cellular
     */
    setOptions(options) { Object.assign(this._options, options); }
    set(x, y, value) { this._map[x][y] = value; }
    create(callback) {
        let newMap = this._fillMap(0);
        let born = this._options.born;
        let survive = this._options.survive;
        for (let j = 0; j < this._height; j++) {
            let widthStep = 1;
            let widthStart = 0;
            if (this._options.topology == 6) {
                widthStep = 2;
                widthStart = j % 2;
            }
            for (let i = widthStart; i < this._width; i += widthStep) {
                let cur = this._map[i][j];
                let ncount = this._getNeighbors(i, j);
                if (cur && survive.indexOf(ncount) != -1) { /* survive */
                    newMap[i][j] = 1;
                }
                else if (!cur && born.indexOf(ncount) != -1) { /* born */
                    newMap[i][j] = 1;
                }
            }
        }
        this._map = newMap;
        callback && this._serviceCallback(callback);
    }
    _serviceCallback(callback) {
        for (let j = 0; j < this._height; j++) {
            let widthStep = 1;
            let widthStart = 0;
            if (this._options.topology == 6) {
                widthStep = 2;
                widthStart = j % 2;
            }
            for (let i = widthStart; i < this._width; i += widthStep) {
                callback(i, j, this._map[i][j]);
            }
        }
    }
    /**
     * Get neighbor count at [i,j] in this._map
     */
    _getNeighbors(cx, cy) {
        let result = 0;
        for (let i = 0; i < this._dirs.length; i++) {
            let dir = this._dirs[i];
            let x = cx + dir[0];
            let y = cy + dir[1];
            if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
                continue;
            }
            result += (this._map[x][y] == 1 ? 1 : 0);
        }
        return result;
    }
    /**
     * Make sure every non-wall space is accessible.
     * @param {function} callback to call to display map when do
     * @param {int} value to consider empty space - defaults to 0
     * @param {function} callback to call when a new connection is made
     */
    connect(callback, value, connectionCallback) {
        if (!value)
            value = 0;
        let allFreeSpace = [];
        let notConnected = {};
        // find all free space
        let widthStep = 1;
        let widthStarts = [0, 0];
        if (this._options.topology == 6) {
            widthStep = 2;
            widthStarts = [0, 1];
        }
        for (let y = 0; y < this._height; y++) {
            for (let x = widthStarts[y % 2]; x < this._width; x += widthStep) {
                if (this._freeSpace(x, y, value)) {
                    let p = [x, y];
                    notConnected[this._pointKey(p)] = p;
                    allFreeSpace.push([x, y]);
                }
            }
        }
        let start = allFreeSpace[rng.getUniformInt(0, allFreeSpace.length - 1)];
        let key = this._pointKey(start);
        let connected = {};
        connected[key] = start;
        delete notConnected[key];
        // find what's connected to the starting point
        this._findConnected(connected, notConnected, [start], false, value);
        while (Object.keys(notConnected).length > 0) {
            // find two points from notConnected to connected
            let p = this._getFromTo(connected, notConnected);
            let from = p[0]; // notConnected
            let to = p[1]; // connected
            // find everything connected to the starting point
            let local = {};
            local[this._pointKey(from)] = from;
            this._findConnected(local, notConnected, [from], true, value);
            // connect to a connected cell
            let tunnelFn = (this._options.topology == 6 ? this._tunnelToConnected6 : this._tunnelToConnected);
            tunnelFn.call(this, to, from, connected, notConnected, value, connectionCallback);
            // now all of local is connected
            for (let k in local) {
                let pp = local[k];
                this._map[pp[0]][pp[1]] = value;
                connected[k] = pp;
                delete notConnected[k];
            }
        }
        callback && this._serviceCallback(callback);
    }
    /**
     * Find random points to connect. Search for the closest point in the larger space.
     * This is to minimize the length of the passage while maintaining good performance.
     */
    _getFromTo(connected, notConnected) {
        let from = [0, 0], to = [0, 0], d;
        let connectedKeys = Object.keys(connected);
        let notConnectedKeys = Object.keys(notConnected);
        for (let i = 0; i < 5; i++) {
            if (connectedKeys.length < notConnectedKeys.length) {
                let keys = connectedKeys;
                to = connected[keys[rng.getUniformInt(0, keys.length - 1)]];
                from = this._getClosest(to, notConnected);
            }
            else {
                let keys = notConnectedKeys;
                from = notConnected[keys[rng.getUniformInt(0, keys.length - 1)]];
                to = this._getClosest(from, connected);
            }
            d = (from[0] - to[0]) * (from[0] - to[0]) + (from[1] - to[1]) * (from[1] - to[1]);
            if (d < 64) {
                break;
            }
        }
        // console.log(">>> connected=" + to + " notConnected=" + from + " dist=" + d);
        return [from, to];
    }
    _getClosest(point, space) {
        let minPoint = null;
        let minDist = null;
        for (let k in space) {
            let p = space[k];
            let d = (p[0] - point[0]) * (p[0] - point[0]) + (p[1] - point[1]) * (p[1] - point[1]);
            if (minDist == null || d < minDist) {
                minDist = d;
                minPoint = p;
            }
        }
        return minPoint;
    }
    _findConnected(connected, notConnected, stack, keepNotConnected, value) {
        while (stack.length > 0) {
            let p = stack.splice(0, 1)[0];
            let tests;
            if (this._options.topology == 6) {
                tests = [
                    [p[0] + 2, p[1]],
                    [p[0] + 1, p[1] - 1],
                    [p[0] - 1, p[1] - 1],
                    [p[0] - 2, p[1]],
                    [p[0] - 1, p[1] + 1],
                    [p[0] + 1, p[1] + 1],
                ];
            }
            else {
                tests = [
                    [p[0] + 1, p[1]],
                    [p[0] - 1, p[1]],
                    [p[0], p[1] + 1],
                    [p[0], p[1] - 1]
                ];
            }
            for (let i = 0; i < tests.length; i++) {
                let key = this._pointKey(tests[i]);
                if (connected[key] == null && this._freeSpace(tests[i][0], tests[i][1], value)) {
                    connected[key] = tests[i];
                    if (!keepNotConnected) {
                        delete notConnected[key];
                    }
                    stack.push(tests[i]);
                }
            }
        }
    }
    _tunnelToConnected(to, from, connected, notConnected, value, connectionCallback) {
        let a, b;
        if (from[0] < to[0]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        for (let xx = a[0]; xx <= b[0]; xx++) {
            this._map[xx][a[1]] = value;
            let p = [xx, a[1]];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback && a[0] < b[0]) {
            connectionCallback(a, [b[0], a[1]]);
        }
        // x is now fixed
        let x = b[0];
        if (from[1] < to[1]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        for (let yy = a[1]; yy < b[1]; yy++) {
            this._map[x][yy] = value;
            let p = [x, yy];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback && a[1] < b[1]) {
            connectionCallback([b[0], a[1]], [b[0], b[1]]);
        }
    }
    _tunnelToConnected6(to, from, connected, notConnected, value, connectionCallback) {
        let a, b;
        if (from[0] < to[0]) {
            a = from;
            b = to;
        }
        else {
            a = to;
            b = from;
        }
        // tunnel diagonally until horizontally level
        let xx = a[0];
        let yy = a[1];
        while (!(xx == b[0] && yy == b[1])) {
            let stepWidth = 2;
            if (yy < b[1]) {
                yy++;
                stepWidth = 1;
            }
            else if (yy > b[1]) {
                yy--;
                stepWidth = 1;
            }
            if (xx < b[0]) {
                xx += stepWidth;
            }
            else if (xx > b[0]) {
                xx -= stepWidth;
            }
            else if (b[1] % 2) {
                // Won't step outside map if destination on is map's right edge
                xx -= stepWidth;
            }
            else {
                // ditto for left edge
                xx += stepWidth;
            }
            this._map[xx][yy] = value;
            let p = [xx, yy];
            let pkey = this._pointKey(p);
            connected[pkey] = p;
            delete notConnected[pkey];
        }
        if (connectionCallback) {
            connectionCallback(from, to);
        }
    }
    _freeSpace(x, y, value) {
        return x >= 0 && x < this._width && y >= 0 && y < this._height && this._map[x][y] == value;
    }
    _pointKey(p) { return p[0] + "." + p[1]; }
}

;// ./node_modules/rot-js/lib/map/digger.js




const FEATURES = {
    "room": Room,
    "corridor": Corridor
};
/**
 * Random dungeon generator using human-like digging patterns.
 * Heavily based on Mike Anderson's ideas from the "Tyrant" algo, mentioned at
 * http://roguebasin.com/index.php/Dungeon-Building_Algorithm
 */
class Digger extends Dungeon {
    constructor(width, height, options = {}) {
        super(width, height);
        this._options = Object.assign({
            roomWidth: [3, 9],
            roomHeight: [3, 5],
            corridorLength: [3, 10],
            dugPercentage: 0.2,
            timeLimit: 1000 /* we stop after this much time has passed (msec) */
        }, options);
        this._features = {
            "room": 4,
            "corridor": 4
        };
        this._map = [];
        this._featureAttempts = 20; /* how many times do we try to create a feature on a suitable wall */
        this._walls = {}; /* these are available for digging */
        this._dug = 0;
        this._digCallback = this._digCallback.bind(this);
        this._canBeDugCallback = this._canBeDugCallback.bind(this);
        this._isWallCallback = this._isWallCallback.bind(this);
        this._priorityWallCallback = this._priorityWallCallback.bind(this);
    }
    create(callback) {
        this._rooms = [];
        this._corridors = [];
        this._map = this._fillMap(1);
        this._walls = {};
        this._dug = 0;
        let area = (this._width - 2) * (this._height - 2);
        this._firstRoom();
        let t1 = Date.now();
        let priorityWalls;
        do {
            priorityWalls = 0;
            let t2 = Date.now();
            if (t2 - t1 > this._options.timeLimit) {
                break;
            }
            /* find a good wall */
            let wall = this._findWall();
            if (!wall) {
                break;
            } /* no more walls */
            let parts = wall.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            let dir = this._getDiggingDirection(x, y);
            if (!dir) {
                continue;
            } /* this wall is not suitable */
            //		console.log("wall", x, y);
            /* try adding a feature */
            let featureAttempts = 0;
            do {
                featureAttempts++;
                if (this._tryFeature(x, y, dir[0], dir[1])) { /* feature added */
                    //if (this._rooms.length + this._corridors.length == 2) { this._rooms[0].addDoor(x, y); } /* first room oficially has doors */
                    this._removeSurroundingWalls(x, y);
                    this._removeSurroundingWalls(x - dir[0], y - dir[1]);
                    break;
                }
            } while (featureAttempts < this._featureAttempts);
            for (let id in this._walls) {
                if (this._walls[id] > 1) {
                    priorityWalls++;
                }
            }
        } while (this._dug / area < this._options.dugPercentage || priorityWalls); /* fixme number of priority walls */
        this._addDoors();
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this._map[i][j]);
                }
            }
        }
        this._walls = {};
        this._map = [];
        return this;
    }
    _digCallback(x, y, value) {
        if (value == 0 || value == 2) { /* empty */
            this._map[x][y] = 0;
            this._dug++;
        }
        else { /* wall */
            this._walls[x + "," + y] = 1;
        }
    }
    _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
            return false;
        }
        return (this._map[x][y] == 1);
    }
    _priorityWallCallback(x, y) { this._walls[x + "," + y] = 2; }
    ;
    _firstRoom() {
        let cx = Math.floor(this._width / 2);
        let cy = Math.floor(this._height / 2);
        let room = Room.createRandomCenter(cx, cy, this._options);
        this._rooms.push(room);
        room.create(this._digCallback);
    }
    /**
     * Get a suitable wall
     */
    _findWall() {
        let prio1 = [];
        let prio2 = [];
        for (let id in this._walls) {
            let prio = this._walls[id];
            if (prio == 2) {
                prio2.push(id);
            }
            else {
                prio1.push(id);
            }
        }
        let arr = (prio2.length ? prio2 : prio1);
        if (!arr.length) {
            return null;
        } /* no walls :/ */
        let id = rng.getItem(arr.sort()); // sort to make the order deterministic
        delete this._walls[id];
        return id;
    }
    /**
     * Tries adding a feature
     * @returns {bool} was this a successful try?
     */
    _tryFeature(x, y, dx, dy) {
        let featureName = rng.getWeightedValue(this._features);
        let ctor = FEATURES[featureName];
        let feature = ctor.createRandomAt(x, y, dx, dy, this._options);
        if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
            //		console.log("not valid");
            //		feature.debug();
            return false;
        }
        feature.create(this._digCallback);
        //	feature.debug();
        if (feature instanceof Room) {
            this._rooms.push(feature);
        }
        if (feature instanceof Corridor) {
            feature.createPriorityWalls(this._priorityWallCallback);
            this._corridors.push(feature);
        }
        return true;
    }
    _removeSurroundingWalls(cx, cy) {
        let deltas = DIRS[4];
        for (let i = 0; i < deltas.length; i++) {
            let delta = deltas[i];
            let x = cx + delta[0];
            let y = cy + delta[1];
            delete this._walls[x + "," + y];
            x = cx + 2 * delta[0];
            y = cy + 2 * delta[1];
            delete this._walls[x + "," + y];
        }
    }
    /**
     * Returns vector in "digging" direction, or false, if this does not exist (or is not unique)
     */
    _getDiggingDirection(cx, cy) {
        if (cx <= 0 || cy <= 0 || cx >= this._width - 1 || cy >= this._height - 1) {
            return null;
        }
        let result = null;
        let deltas = DIRS[4];
        for (let i = 0; i < deltas.length; i++) {
            let delta = deltas[i];
            let x = cx + delta[0];
            let y = cy + delta[1];
            if (!this._map[x][y]) { /* there already is another empty neighbor! */
                if (result) {
                    return null;
                }
                result = delta;
            }
        }
        /* no empty neighbor */
        if (!result) {
            return null;
        }
        return [-result[0], -result[1]];
    }
    /**
     * Find empty spaces surrounding rooms, and apply doors.
     */
    _addDoors() {
        let data = this._map;
        function isWallCallback(x, y) {
            return (data[x][y] == 1);
        }
        ;
        for (let i = 0; i < this._rooms.length; i++) {
            let room = this._rooms[i];
            room.clearDoors();
            room.addDoors(isWallCallback);
        }
    }
}

;// ./node_modules/rot-js/lib/map/ellermaze.js


/**
 * Join lists with "i" and "i+1"
 */
function addToList(i, L, R) {
    R[L[i + 1]] = R[i];
    L[R[i]] = L[i + 1];
    R[i] = i + 1;
    L[i + 1] = i;
}
/**
 * Remove "i" from its list
 */
function removeFromList(i, L, R) {
    R[L[i]] = R[i];
    L[R[i]] = L[i];
    R[i] = i;
    L[i] = i;
}
/**
 * Maze generator - Eller's algorithm
 * See http://homepages.cwi.nl/~tromp/maze.html for explanation
 */
class EllerMaze extends Map {
    create(callback) {
        let map = this._fillMap(1);
        let w = Math.ceil((this._width - 2) / 2);
        let rand = 9 / 24;
        let L = [];
        let R = [];
        for (let i = 0; i < w; i++) {
            L.push(i);
            R.push(i);
        }
        L.push(w - 1); /* fake stop-block at the right side */
        let j;
        for (j = 1; j + 3 < this._height; j += 2) {
            /* one row */
            for (let i = 0; i < w; i++) {
                /* cell coords (will be always empty) */
                let x = 2 * i + 1;
                let y = j;
                map[x][y] = 0;
                /* right connection */
                if (i != L[i + 1] && rng.getUniform() > rand) {
                    addToList(i, L, R);
                    map[x + 1][y] = 0;
                }
                /* bottom connection */
                if (i != L[i] && rng.getUniform() > rand) {
                    /* remove connection */
                    removeFromList(i, L, R);
                }
                else {
                    /* create connection */
                    map[x][y + 1] = 0;
                }
            }
        }
        /* last row */
        for (let i = 0; i < w; i++) {
            /* cell coords (will be always empty) */
            let x = 2 * i + 1;
            let y = j;
            map[x][y] = 0;
            /* right connection */
            if (i != L[i + 1] && (i == L[i] || rng.getUniform() > rand)) {
                /* dig right also if the cell is separated, so it gets connected to the rest of maze */
                addToList(i, L, R);
                map[x + 1][y] = 0;
            }
            removeFromList(i, L, R);
        }
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                callback(i, j, map[i][j]);
            }
        }
        return this;
    }
}

;// ./node_modules/rot-js/lib/map/dividedmaze.js


/**
 * @class Recursively divided maze, http://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method
 * @augments ROT.Map
 */
class DividedMaze extends Map {
    constructor() {
        super(...arguments);
        this._stack = [];
        this._map = [];
    }
    create(callback) {
        let w = this._width;
        let h = this._height;
        this._map = [];
        for (let i = 0; i < w; i++) {
            this._map.push([]);
            for (let j = 0; j < h; j++) {
                let border = (i == 0 || j == 0 || i + 1 == w || j + 1 == h);
                this._map[i].push(border ? 1 : 0);
            }
        }
        this._stack = [
            [1, 1, w - 2, h - 2]
        ];
        this._process();
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                callback(i, j, this._map[i][j]);
            }
        }
        this._map = [];
        return this;
    }
    _process() {
        while (this._stack.length) {
            let room = this._stack.shift(); /* [left, top, right, bottom] */
            this._partitionRoom(room);
        }
    }
    _partitionRoom(room) {
        let availX = [];
        let availY = [];
        for (let i = room[0] + 1; i < room[2]; i++) {
            let top = this._map[i][room[1] - 1];
            let bottom = this._map[i][room[3] + 1];
            if (top && bottom && !(i % 2)) {
                availX.push(i);
            }
        }
        for (let j = room[1] + 1; j < room[3]; j++) {
            let left = this._map[room[0] - 1][j];
            let right = this._map[room[2] + 1][j];
            if (left && right && !(j % 2)) {
                availY.push(j);
            }
        }
        if (!availX.length || !availY.length) {
            return;
        }
        let x = rng.getItem(availX);
        let y = rng.getItem(availY);
        this._map[x][y] = 1;
        let walls = [];
        let w = [];
        walls.push(w); /* left part */
        for (let i = room[0]; i < x; i++) {
            this._map[i][y] = 1;
            if (i % 2)
                w.push([i, y]);
        }
        w = [];
        walls.push(w); /* right part */
        for (let i = x + 1; i <= room[2]; i++) {
            this._map[i][y] = 1;
            if (i % 2)
                w.push([i, y]);
        }
        w = [];
        walls.push(w); /* top part */
        for (let j = room[1]; j < y; j++) {
            this._map[x][j] = 1;
            if (j % 2)
                w.push([x, j]);
        }
        w = [];
        walls.push(w); /* bottom part */
        for (let j = y + 1; j <= room[3]; j++) {
            this._map[x][j] = 1;
            if (j % 2)
                w.push([x, j]);
        }
        let solid = rng.getItem(walls);
        for (let i = 0; i < walls.length; i++) {
            let w = walls[i];
            if (w == solid) {
                continue;
            }
            let hole = rng.getItem(w);
            this._map[hole[0]][hole[1]] = 0;
        }
        this._stack.push([room[0], room[1], x - 1, y - 1]); /* left top */
        this._stack.push([x + 1, room[1], room[2], y - 1]); /* right top */
        this._stack.push([room[0], y + 1, x - 1, room[3]]); /* left bottom */
        this._stack.push([x + 1, y + 1, room[2], room[3]]); /* right bottom */
    }
}

;// ./node_modules/rot-js/lib/map/iceymaze.js


/**
 * Icey's Maze generator
 * See http://roguebasin.com/index.php/Simple_maze for explanation
 */
class IceyMaze extends Map {
    constructor(width, height, regularity = 0) {
        super(width, height);
        this._regularity = regularity;
        this._map = [];
    }
    create(callback) {
        let width = this._width;
        let height = this._height;
        let map = this._fillMap(1);
        width -= (width % 2 ? 1 : 2);
        height -= (height % 2 ? 1 : 2);
        let cx = 0;
        let cy = 0;
        let nx = 0;
        let ny = 0;
        let done = 0;
        let blocked = false;
        let dirs = [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ];
        do {
            cx = 1 + 2 * Math.floor(rng.getUniform() * (width - 1) / 2);
            cy = 1 + 2 * Math.floor(rng.getUniform() * (height - 1) / 2);
            if (!done) {
                map[cx][cy] = 0;
            }
            if (!map[cx][cy]) {
                this._randomize(dirs);
                do {
                    if (Math.floor(rng.getUniform() * (this._regularity + 1)) == 0) {
                        this._randomize(dirs);
                    }
                    blocked = true;
                    for (let i = 0; i < 4; i++) {
                        nx = cx + dirs[i][0] * 2;
                        ny = cy + dirs[i][1] * 2;
                        if (this._isFree(map, nx, ny, width, height)) {
                            map[nx][ny] = 0;
                            map[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
                            cx = nx;
                            cy = ny;
                            blocked = false;
                            done++;
                            break;
                        }
                    }
                } while (!blocked);
            }
        } while (done + 1 < width * height / 4);
        for (let i = 0; i < this._width; i++) {
            for (let j = 0; j < this._height; j++) {
                callback(i, j, map[i][j]);
            }
        }
        this._map = [];
        return this;
    }
    _randomize(dirs) {
        for (let i = 0; i < 4; i++) {
            dirs[i][0] = 0;
            dirs[i][1] = 0;
        }
        switch (Math.floor(rng.getUniform() * 4)) {
            case 0:
                dirs[0][0] = -1;
                dirs[1][0] = 1;
                dirs[2][1] = -1;
                dirs[3][1] = 1;
                break;
            case 1:
                dirs[3][0] = -1;
                dirs[2][0] = 1;
                dirs[1][1] = -1;
                dirs[0][1] = 1;
                break;
            case 2:
                dirs[2][0] = -1;
                dirs[3][0] = 1;
                dirs[0][1] = -1;
                dirs[1][1] = 1;
                break;
            case 3:
                dirs[1][0] = -1;
                dirs[0][0] = 1;
                dirs[3][1] = -1;
                dirs[2][1] = 1;
                break;
        }
    }
    _isFree(map, x, y, width, height) {
        if (x < 1 || y < 1 || x >= width || y >= height) {
            return false;
        }
        return map[x][y];
    }
}

;// ./node_modules/rot-js/lib/map/rogue.js



/**
 * Dungeon generator which uses the "orginal" Rogue dungeon generation algorithm. See https://github.com/Davidslv/rogue-like/blob/master/docs/references/Mark_Damon_Hughes/07_Roguelike_Dungeon_Generation.md
 * @author hyakugei
 */
class Rogue extends Map {
    constructor(width, height, options) {
        super(width, height);
        this.map = [];
        this.rooms = [];
        this.connectedCells = [];
        options = Object.assign({
            cellWidth: 3,
            cellHeight: 3 //     ie. as an array with min-max values for each direction....
        }, options);
        /*
        Set the room sizes according to the over-all width of the map,
        and the cell sizes.
        */
        if (!options.hasOwnProperty("roomWidth")) {
            options["roomWidth"] = this._calculateRoomSize(this._width, options["cellWidth"]);
        }
        if (!options.hasOwnProperty("roomHeight")) {
            options["roomHeight"] = this._calculateRoomSize(this._height, options["cellHeight"]);
        }
        this._options = options;
    }
    create(callback) {
        this.map = this._fillMap(1);
        this.rooms = [];
        this.connectedCells = [];
        this._initRooms();
        this._connectRooms();
        this._connectUnconnectedRooms();
        this._createRandomRoomConnections();
        this._createRooms();
        this._createCorridors();
        if (callback) {
            for (let i = 0; i < this._width; i++) {
                for (let j = 0; j < this._height; j++) {
                    callback(i, j, this.map[i][j]);
                }
            }
        }
        return this;
    }
    _calculateRoomSize(size, cell) {
        let max = Math.floor((size / cell) * 0.8);
        let min = Math.floor((size / cell) * 0.25);
        if (min < 2) {
            min = 2;
        }
        if (max < 2) {
            max = 2;
        }
        return [min, max];
    }
    _initRooms() {
        // create rooms array. This is the "grid" list from the algo.
        for (let i = 0; i < this._options.cellWidth; i++) {
            this.rooms.push([]);
            for (let j = 0; j < this._options.cellHeight; j++) {
                this.rooms[i].push({ "x": 0, "y": 0, "width": 0, "height": 0, "connections": [], "cellx": i, "celly": j });
            }
        }
    }
    _connectRooms() {
        //pick random starting grid
        let cgx = rng.getUniformInt(0, this._options.cellWidth - 1);
        let cgy = rng.getUniformInt(0, this._options.cellHeight - 1);
        let idx;
        let ncgx;
        let ncgy;
        let found = false;
        let room;
        let otherRoom;
        let dirToCheck;
        // find  unconnected neighbour cells
        do {
            //dirToCheck = [0, 1, 2, 3, 4, 5, 6, 7];
            dirToCheck = [0, 2, 4, 6];
            dirToCheck = rng.shuffle(dirToCheck);
            do {
                found = false;
                idx = dirToCheck.pop();
                ncgx = cgx + DIRS[8][idx][0];
                ncgy = cgy + DIRS[8][idx][1];
                if (ncgx < 0 || ncgx >= this._options.cellWidth) {
                    continue;
                }
                if (ncgy < 0 || ncgy >= this._options.cellHeight) {
                    continue;
                }
                room = this.rooms[cgx][cgy];
                if (room["connections"].length > 0) {
                    // as long as this room doesn't already coonect to me, we are ok with it.
                    if (room["connections"][0][0] == ncgx && room["connections"][0][1] == ncgy) {
                        break;
                    }
                }
                otherRoom = this.rooms[ncgx][ncgy];
                if (otherRoom["connections"].length == 0) {
                    otherRoom["connections"].push([cgx, cgy]);
                    this.connectedCells.push([ncgx, ncgy]);
                    cgx = ncgx;
                    cgy = ncgy;
                    found = true;
                }
            } while (dirToCheck.length > 0 && found == false);
        } while (dirToCheck.length > 0);
    }
    _connectUnconnectedRooms() {
        //While there are unconnected rooms, try to connect them to a random connected neighbor
        //(if a room has no connected neighbors yet, just keep cycling, you'll fill out to it eventually).
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        this.connectedCells = rng.shuffle(this.connectedCells);
        let room;
        let otherRoom;
        let validRoom;
        for (let i = 0; i < this._options.cellWidth; i++) {
            for (let j = 0; j < this._options.cellHeight; j++) {
                room = this.rooms[i][j];
                if (room["connections"].length == 0) {
                    let directions = [0, 2, 4, 6];
                    directions = rng.shuffle(directions);
                    validRoom = false;
                    do {
                        let dirIdx = directions.pop();
                        let newI = i + DIRS[8][dirIdx][0];
                        let newJ = j + DIRS[8][dirIdx][1];
                        if (newI < 0 || newI >= cw || newJ < 0 || newJ >= ch) {
                            continue;
                        }
                        otherRoom = this.rooms[newI][newJ];
                        validRoom = true;
                        if (otherRoom["connections"].length == 0) {
                            break;
                        }
                        for (let k = 0; k < otherRoom["connections"].length; k++) {
                            if (otherRoom["connections"][k][0] == i && otherRoom["connections"][k][1] == j) {
                                validRoom = false;
                                break;
                            }
                        }
                        if (validRoom) {
                            break;
                        }
                    } while (directions.length);
                    if (validRoom) {
                        room["connections"].push([otherRoom["cellx"], otherRoom["celly"]]);
                    }
                    else {
                        console.log("-- Unable to connect room.");
                    }
                }
            }
        }
    }
    _createRandomRoomConnections() {
        // Empty for now.
    }
    _createRooms() {
        let w = this._width;
        let h = this._height;
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        let cwp = Math.floor(this._width / cw);
        let chp = Math.floor(this._height / ch);
        let roomw;
        let roomh;
        let roomWidth = this._options["roomWidth"];
        let roomHeight = this._options["roomHeight"];
        let sx;
        let sy;
        let otherRoom;
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                sx = cwp * i;
                sy = chp * j;
                if (sx == 0) {
                    sx = 1;
                }
                if (sy == 0) {
                    sy = 1;
                }
                roomw = rng.getUniformInt(roomWidth[0], roomWidth[1]);
                roomh = rng.getUniformInt(roomHeight[0], roomHeight[1]);
                if (j > 0) {
                    otherRoom = this.rooms[i][j - 1];
                    while (sy - (otherRoom["y"] + otherRoom["height"]) < 3) {
                        sy++;
                    }
                }
                if (i > 0) {
                    otherRoom = this.rooms[i - 1][j];
                    while (sx - (otherRoom["x"] + otherRoom["width"]) < 3) {
                        sx++;
                    }
                }
                let sxOffset = Math.round(rng.getUniformInt(0, cwp - roomw) / 2);
                let syOffset = Math.round(rng.getUniformInt(0, chp - roomh) / 2);
                while (sx + sxOffset + roomw >= w) {
                    if (sxOffset) {
                        sxOffset--;
                    }
                    else {
                        roomw--;
                    }
                }
                while (sy + syOffset + roomh >= h) {
                    if (syOffset) {
                        syOffset--;
                    }
                    else {
                        roomh--;
                    }
                }
                sx = sx + sxOffset;
                sy = sy + syOffset;
                this.rooms[i][j]["x"] = sx;
                this.rooms[i][j]["y"] = sy;
                this.rooms[i][j]["width"] = roomw;
                this.rooms[i][j]["height"] = roomh;
                for (let ii = sx; ii < sx + roomw; ii++) {
                    for (let jj = sy; jj < sy + roomh; jj++) {
                        this.map[ii][jj] = 0;
                    }
                }
            }
        }
    }
    _getWallPosition(aRoom, aDirection) {
        let rx;
        let ry;
        let door;
        if (aDirection == 1 || aDirection == 3) {
            rx = rng.getUniformInt(aRoom["x"] + 1, aRoom["x"] + aRoom["width"] - 2);
            if (aDirection == 1) {
                ry = aRoom["y"] - 2;
                door = ry + 1;
            }
            else {
                ry = aRoom["y"] + aRoom["height"] + 1;
                door = ry - 1;
            }
            this.map[rx][door] = 0; // i'm not setting a specific 'door' tile value right now, just empty space.
        }
        else {
            ry = rng.getUniformInt(aRoom["y"] + 1, aRoom["y"] + aRoom["height"] - 2);
            if (aDirection == 2) {
                rx = aRoom["x"] + aRoom["width"] + 1;
                door = rx - 1;
            }
            else {
                rx = aRoom["x"] - 2;
                door = rx + 1;
            }
            this.map[door][ry] = 0; // i'm not setting a specific 'door' tile value right now, just empty space.
        }
        return [rx, ry];
    }
    _drawCorridor(startPosition, endPosition) {
        let xOffset = endPosition[0] - startPosition[0];
        let yOffset = endPosition[1] - startPosition[1];
        let xpos = startPosition[0];
        let ypos = startPosition[1];
        let tempDist;
        let xDir;
        let yDir;
        let move; // 2 element array, element 0 is the direction, element 1 is the total value to move.
        let moves = []; // a list of 2 element arrays
        let xAbs = Math.abs(xOffset);
        let yAbs = Math.abs(yOffset);
        let percent = rng.getUniform(); // used to split the move at different places along the long axis
        let firstHalf = percent;
        let secondHalf = 1 - percent;
        xDir = xOffset > 0 ? 2 : 6;
        yDir = yOffset > 0 ? 4 : 0;
        if (xAbs < yAbs) {
            // move firstHalf of the y offset
            tempDist = Math.ceil(yAbs * firstHalf);
            moves.push([yDir, tempDist]);
            // move all the x offset
            moves.push([xDir, xAbs]);
            // move sendHalf of the  y offset
            tempDist = Math.floor(yAbs * secondHalf);
            moves.push([yDir, tempDist]);
        }
        else {
            //  move firstHalf of the x offset
            tempDist = Math.ceil(xAbs * firstHalf);
            moves.push([xDir, tempDist]);
            // move all the y offset
            moves.push([yDir, yAbs]);
            // move secondHalf of the x offset.
            tempDist = Math.floor(xAbs * secondHalf);
            moves.push([xDir, tempDist]);
        }
        this.map[xpos][ypos] = 0;
        while (moves.length > 0) {
            move = moves.pop();
            while (move[1] > 0) {
                xpos += DIRS[8][move[0]][0];
                ypos += DIRS[8][move[0]][1];
                this.map[xpos][ypos] = 0;
                move[1] = move[1] - 1;
            }
        }
    }
    _createCorridors() {
        // Draw Corridors between connected rooms
        let cw = this._options.cellWidth;
        let ch = this._options.cellHeight;
        let room;
        let connection;
        let otherRoom;
        let wall;
        let otherWall;
        for (let i = 0; i < cw; i++) {
            for (let j = 0; j < ch; j++) {
                room = this.rooms[i][j];
                for (let k = 0; k < room["connections"].length; k++) {
                    connection = room["connections"][k];
                    otherRoom = this.rooms[connection[0]][connection[1]];
                    // figure out what wall our corridor will start one.
                    // figure out what wall our corridor will end on.
                    if (otherRoom["cellx"] > room["cellx"]) {
                        wall = 2;
                        otherWall = 4;
                    }
                    else if (otherRoom["cellx"] < room["cellx"]) {
                        wall = 4;
                        otherWall = 2;
                    }
                    else if (otherRoom["celly"] > room["celly"]) {
                        wall = 3;
                        otherWall = 1;
                    }
                    else {
                        wall = 1;
                        otherWall = 3;
                    }
                    this._drawCorridor(this._getWallPosition(room, wall), this._getWallPosition(otherRoom, otherWall));
                }
            }
        }
    }
}

;// ./node_modules/rot-js/lib/map/index.js








/* harmony default export */ const map = ({ Arena: Arena, Uniform: Uniform, Cellular: Cellular, Digger: Digger, EllerMaze: EllerMaze, DividedMaze: DividedMaze, IceyMaze: IceyMaze, Rogue: Rogue });

;// ./node_modules/rot-js/lib/noise/noise.js
/**
 * Base noise generator
 */
class Noise {
}

;// ./node_modules/rot-js/lib/noise/simplex.js



const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
/**
 * A simple 2d implementation of simplex noise by Ondrej Zara
 *
 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 */
class Simplex extends Noise {
    /**
     * @param gradients Random gradients
     */
    constructor(gradients = 256) {
        super();
        this._gradients = [
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1]
        ];
        let permutations = [];
        for (let i = 0; i < gradients; i++) {
            permutations.push(i);
        }
        permutations = rng.shuffle(permutations);
        this._perms = [];
        this._indexes = [];
        for (let i = 0; i < 2 * gradients; i++) {
            this._perms.push(permutations[i % gradients]);
            this._indexes.push(this._perms[i] % this._gradients.length);
        }
    }
    get(xin, yin) {
        let perms = this._perms;
        let indexes = this._indexes;
        let count = perms.length / 2;
        let n0 = 0, n1 = 0, n2 = 0, gi; // Noise contributions from the three corners
        // Skew the input space to determine which simplex cell we're in
        let s = (xin + yin) * F2; // Hairy factor for 2D
        let i = Math.floor(xin + s);
        let j = Math.floor(yin + s);
        let t = (i + j) * G2;
        let X0 = i - t; // Unskew the cell origin back to (x,y) space
        let Y0 = j - t;
        let x0 = xin - X0; // The x,y distances from the cell origin
        let y0 = yin - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        }
        else { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
            i1 = 0;
            j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        let x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        let y1 = y0 - j1 + G2;
        let x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
        let y2 = y0 - 1 + 2 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        let ii = mod(i, count);
        let jj = mod(j, count);
        // Calculate the contribution from the three corners
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            t0 *= t0;
            gi = indexes[ii + perms[jj]];
            let grad = this._gradients[gi];
            n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            t1 *= t1;
            gi = indexes[ii + i1 + perms[jj + j1]];
            let grad = this._gradients[gi];
            n1 = t1 * t1 * (grad[0] * x1 + grad[1] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            t2 *= t2;
            gi = indexes[ii + 1 + perms[jj + 1]];
            let grad = this._gradients[gi];
            n2 = t2 * t2 * (grad[0] * x2 + grad[1] * y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70 * (n0 + n1 + n2);
    }
}

;// ./node_modules/rot-js/lib/noise/index.js

/* harmony default export */ const noise = ({ Simplex: Simplex });

;// ./node_modules/rot-js/lib/path/path.js

/**
 * @class Abstract pathfinder
 * @param {int} toX Target X coord
 * @param {int} toY Target Y coord
 * @param {function} passableCallback Callback to determine map passability
 * @param {object} [options]
 * @param {int} [options.topology=8]
 */
class Path {
    constructor(toX, toY, passableCallback, options = {}) {
        this._toX = toX;
        this._toY = toY;
        this._passableCallback = passableCallback;
        this._options = Object.assign({
            topology: 8
        }, options);
        this._dirs = DIRS[this._options.topology];
        if (this._options.topology == 8) { /* reorder dirs for more aesthetic result (vertical/horizontal first) */
            this._dirs = [
                this._dirs[0],
                this._dirs[2],
                this._dirs[4],
                this._dirs[6],
                this._dirs[1],
                this._dirs[3],
                this._dirs[5],
                this._dirs[7]
            ];
        }
    }
    _getNeighbors(cx, cy) {
        let result = [];
        for (let i = 0; i < this._dirs.length; i++) {
            let dir = this._dirs[i];
            let x = cx + dir[0];
            let y = cy + dir[1];
            if (!this._passableCallback(x, y)) {
                continue;
            }
            result.push([x, y]);
        }
        return result;
    }
}

;// ./node_modules/rot-js/lib/path/dijkstra.js

/**
 * @class Simplified Dijkstra's algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */
class Dijkstra extends Path {
    constructor(toX, toY, passableCallback, options) {
        super(toX, toY, passableCallback, options);
        this._computed = {};
        this._todo = [];
        this._add(toX, toY, null);
    }
    /**
     * Compute a path from a given point
     * @see ROT.Path#compute
     */
    compute(fromX, fromY, callback) {
        let key = fromX + "," + fromY;
        if (!(key in this._computed)) {
            this._compute(fromX, fromY);
        }
        if (!(key in this._computed)) {
            return;
        }
        let item = this._computed[key];
        while (item) {
            callback(item.x, item.y);
            item = item.prev;
        }
    }
    /**
     * Compute a non-cached value
     */
    _compute(fromX, fromY) {
        while (this._todo.length) {
            let item = this._todo.shift();
            if (item.x == fromX && item.y == fromY) {
                return;
            }
            let neighbors = this._getNeighbors(item.x, item.y);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let x = neighbor[0];
                let y = neighbor[1];
                let id = x + "," + y;
                if (id in this._computed) {
                    continue;
                } /* already done */
                this._add(x, y, item);
            }
        }
    }
    _add(x, y, prev) {
        let obj = {
            x: x,
            y: y,
            prev: prev
        };
        this._computed[x + "," + y] = obj;
        this._todo.push(obj);
    }
}

;// ./node_modules/rot-js/lib/path/astar.js

/**
 * @class Simplified A* algorithm: all edges have a value of 1
 * @augments ROT.Path
 * @see ROT.Path
 */
class AStar extends Path {
    constructor(toX, toY, passableCallback, options = {}) {
        super(toX, toY, passableCallback, options);
        this._todo = [];
        this._done = {};
    }
    /**
     * Compute a path from a given point
     * @see ROT.Path#compute
     */
    compute(fromX, fromY, callback) {
        this._todo = [];
        this._done = {};
        this._fromX = fromX;
        this._fromY = fromY;
        this._add(this._toX, this._toY, null);
        while (this._todo.length) {
            let item = this._todo.shift();
            let id = item.x + "," + item.y;
            if (id in this._done) {
                continue;
            }
            this._done[id] = item;
            if (item.x == fromX && item.y == fromY) {
                break;
            }
            let neighbors = this._getNeighbors(item.x, item.y);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                let x = neighbor[0];
                let y = neighbor[1];
                let id = x + "," + y;
                if (id in this._done) {
                    continue;
                }
                this._add(x, y, item);
            }
        }
        let item = this._done[fromX + "," + fromY];
        if (!item) {
            return;
        }
        while (item) {
            callback(item.x, item.y);
            item = item.prev;
        }
    }
    _add(x, y, prev) {
        let h = this._distance(x, y);
        let obj = {
            x: x,
            y: y,
            prev: prev,
            g: (prev ? prev.g + 1 : 0),
            h: h
        };
        /* insert into priority queue */
        let f = obj.g + obj.h;
        for (let i = 0; i < this._todo.length; i++) {
            let item = this._todo[i];
            let itemF = item.g + item.h;
            if (f < itemF || (f == itemF && h < item.h)) {
                this._todo.splice(i, 0, obj);
                return;
            }
        }
        this._todo.push(obj);
    }
    _distance(x, y) {
        switch (this._options.topology) {
            case 4:
                return (Math.abs(x - this._fromX) + Math.abs(y - this._fromY));
                // removed by dead control flow
{}
            case 6:
                let dx = Math.abs(x - this._fromX);
                let dy = Math.abs(y - this._fromY);
                return dy + Math.max(0, (dx - dy) / 2);
                // removed by dead control flow
{}
            case 8:
                return Math.max(Math.abs(x - this._fromX), Math.abs(y - this._fromY));
                // removed by dead control flow
{}
        }
    }
}

;// ./node_modules/rot-js/lib/path/index.js


/* harmony default export */ const path = ({ Dijkstra: Dijkstra, AStar: AStar });

;// ./node_modules/rot-js/lib/lighting.js

;
;
;
;
/**
 * Lighting computation, based on a traditional FOV for multiple light sources and multiple passes.
 */
class Lighting {
    constructor(reflectivityCallback, options = {}) {
        this._reflectivityCallback = reflectivityCallback;
        this._options = {};
        options = Object.assign({
            passes: 1,
            emissionThreshold: 100,
            range: 10
        }, options);
        this._lights = {};
        this._reflectivityCache = {};
        this._fovCache = {};
        this.setOptions(options);
    }
    /**
     * Adjust options at runtime
     */
    setOptions(options) {
        Object.assign(this._options, options);
        if (options && options.range) {
            this.reset();
        }
        return this;
    }
    /**
     * Set the used Field-Of-View algo
     */
    setFOV(fov) {
        this._fov = fov;
        this._fovCache = {};
        return this;
    }
    /**
     * Set (or remove) a light source
     */
    setLight(x, y, color) {
        let key = x + "," + y;
        if (color) {
            this._lights[key] = (typeof (color) == "string" ? Color.fromString(color) : color);
        }
        else {
            delete this._lights[key];
        }
        return this;
    }
    /**
     * Remove all light sources
     */
    clearLights() { this._lights = {}; }
    /**
     * Reset the pre-computed topology values. Call whenever the underlying map changes its light-passability.
     */
    reset() {
        this._reflectivityCache = {};
        this._fovCache = {};
        return this;
    }
    /**
     * Compute the lighting
     */
    compute(lightingCallback) {
        let doneCells = {};
        let emittingCells = {};
        let litCells = {};
        for (let key in this._lights) { /* prepare emitters for first pass */
            let light = this._lights[key];
            emittingCells[key] = [0, 0, 0];
            Color.add_(emittingCells[key], light);
        }
        for (let i = 0; i < this._options.passes; i++) { /* main loop */
            this._emitLight(emittingCells, litCells, doneCells);
            if (i + 1 == this._options.passes) {
                continue;
            } /* not for the last pass */
            emittingCells = this._computeEmitters(litCells, doneCells);
        }
        for (let litKey in litCells) { /* let the user know what and how is lit */
            let parts = litKey.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            lightingCallback(x, y, litCells[litKey]);
        }
        return this;
    }
    /**
     * Compute one iteration from all emitting cells
     * @param emittingCells These emit light
     * @param litCells Add projected light to these
     * @param doneCells These already emitted, forbid them from further calculations
     */
    _emitLight(emittingCells, litCells, doneCells) {
        for (let key in emittingCells) {
            let parts = key.split(",");
            let x = parseInt(parts[0]);
            let y = parseInt(parts[1]);
            this._emitLightFromCell(x, y, emittingCells[key], litCells);
            doneCells[key] = 1;
        }
        return this;
    }
    /**
     * Prepare a list of emitters for next pass
     */
    _computeEmitters(litCells, doneCells) {
        let result = {};
        for (let key in litCells) {
            if (key in doneCells) {
                continue;
            } /* already emitted */
            let color = litCells[key];
            let reflectivity;
            if (key in this._reflectivityCache) {
                reflectivity = this._reflectivityCache[key];
            }
            else {
                let parts = key.split(",");
                let x = parseInt(parts[0]);
                let y = parseInt(parts[1]);
                reflectivity = this._reflectivityCallback(x, y);
                this._reflectivityCache[key] = reflectivity;
            }
            if (reflectivity == 0) {
                continue;
            } /* will not reflect at all */
            /* compute emission color */
            let emission = [0, 0, 0];
            let intensity = 0;
            for (let i = 0; i < 3; i++) {
                let part = Math.round(color[i] * reflectivity);
                emission[i] = part;
                intensity += part;
            }
            if (intensity > this._options.emissionThreshold) {
                result[key] = emission;
            }
        }
        return result;
    }
    /**
     * Compute one iteration from one cell
     */
    _emitLightFromCell(x, y, color, litCells) {
        let key = x + "," + y;
        let fov;
        if (key in this._fovCache) {
            fov = this._fovCache[key];
        }
        else {
            fov = this._updateFOV(x, y);
        }
        for (let fovKey in fov) {
            let formFactor = fov[fovKey];
            let result;
            if (fovKey in litCells) { /* already lit */
                result = litCells[fovKey];
            }
            else { /* newly lit */
                result = [0, 0, 0];
                litCells[fovKey] = result;
            }
            for (let i = 0; i < 3; i++) {
                result[i] += Math.round(color[i] * formFactor);
            } /* add light color */
        }
        return this;
    }
    /**
     * Compute FOV ("form factor") for a potential light source at [x,y]
     */
    _updateFOV(x, y) {
        let key1 = x + "," + y;
        let cache = {};
        this._fovCache[key1] = cache;
        let range = this._options.range;
        function cb(x, y, r, vis) {
            let key2 = x + "," + y;
            let formFactor = vis * (1 - r / range);
            if (formFactor == 0) {
                return;
            }
            cache[key2] = formFactor;
        }
        ;
        this._fov.compute(x, y, range, cb.bind(this));
        return cache;
    }
}

;// ./node_modules/rot-js/lib/index.js













const Util = (/* unused pure expression or super */ null && (util));

const lib_Color = (/* unused pure expression or super */ null && (color));

const Text = (/* unused pure expression or super */ null && (text));


/***/ }),

/***/ 1485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ TextStroke)
/* harmony export */ });
/* harmony import */ var _game_xy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _stroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6185);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1919);




class TextStroke {
    static create(map, text, xy, colorFn = () => _colors__WEBPACK_IMPORTED_MODULE_2__/* .WHITE */ .UE, isValid = () => true, zIndex = 10, bg = 'transparent') {
        const stroke = new _stroke__WEBPACK_IMPORTED_MODULE_3__/* .Stroke */ .t([], colorFn, isValid, zIndex);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .each */ .__)(text, (c, i) => {
            const cell = map.get(xy.add(i, 0));
            stroke.add(cell, c, bg);
        });
        return stroke;
    }
    static render(map, text, xy, id, colorFn = () => _colors__WEBPACK_IMPORTED_MODULE_2__/* .WHITE */ .UE, isValid = () => true, zIndex = 10, bg = 'transparent') {
        const stroke = TextStroke.create(map, text, xy, colorFn, isValid, zIndex, bg);
        map.uiRenderer.replace(id, stroke);
    }
    static centered(map, text, y, id, colorFn = () => _colors__WEBPACK_IMPORTED_MODULE_2__/* .WHITE */ .UE, isValid = () => true, zIndex = 10, bg = 'transparent') {
        const xy = _game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.at((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .centeredStart */ .jw)(map.w, text), y);
        TextStroke.render(map, text, xy, id, colorFn, isValid, zIndex, bg);
    }
    static centeredPlusY(map, text, yOffset, id, colorFn = () => _colors__WEBPACK_IMPORTED_MODULE_2__/* .WHITE */ .UE, isValid = () => true, zIndex = 10, bg = 'transparent') {
        TextStroke.centered(map, text, (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .half */ .MX)(map.h) + yOffset, id, colorFn, isValid, zIndex, bg);
    }
}


/***/ }),

/***/ 1601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 1721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Drawable: () => (/* binding */ Drawable)
/* harmony export */ });
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1919);
/* harmony import */ var _game_xy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _game_lighting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2615);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2994);




const toHex = (value) => value.toString(16).padStart(2, '0');
const rgbToHex = (rgb) => `#${rgb.map(toHex).join('')}`;
class Drawable {
    constructor(materialType = _material__WEBPACK_IMPORTED_MODULE_3__/* .IMMATERIAL */ .KJ) {
        this.id = Drawable.nextId++;
        this.born = false;
        this.age = 0;
        this.passable = true;
        this.transparency = 1;
        this.cell = null;
        Drawable.alive.add(this);
        this.material = new _material__WEBPACK_IMPORTED_MODULE_3__/* .Material */ .im(this, materialType);
    }
    step() { }
    desc() { return `${this.constructor.name}`; }
    keyName() { return this.constructor.name; }
    get hits() { return this.material.remaining(); }
    get maxHits() { return this.material.max(); }
    draw(_debug, illumination) {
        const fg = this.applyIllumination(this.color(), illumination);
        const bg = this.applyIllumination(this.material.background(_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .BACKGROUND */ .h4), illumination);
        this.cell.map.drawAt(this.cell.xy.x, this.cell.xy.y, this.char(), fg, bg);
        return true;
    }
    movedInto(cell) {
        this.cell = cell;
    }
    applyIllumination(color, illumination) {
        if (!color.startsWith('#'))
            return color;
        if (color === _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .BLACK */ .Uv || color === '#000000')
            return '#000000';
        const rgb = (0,_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .E2)(color);
        if (rgb && rgb[0] < 8 && rgb[1] < 8 && rgb[2] < 8)
            return '#000000';
        const factor = Math.max(0, Math.min(illumination, 9) / 9);
        const light = rgbToHex(this.cell.map.lighting.colorAt(this.cell));
        const darkened = (0,_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .blend */ .au)(_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .BLACK */ .Uv, color, factor);
        return (0,_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .blend */ .au)(darkened, light, _game_lighting__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_INTENSITY */ .c * factor);
    }
    r() { return this.cell.r(); }
    l() { return this.cell.l(); }
    u() { return this.cell.u(); }
    d() { return this.cell.d(); }
    ur() { return this.cell.ur(); }
    ul() { return this.cell.ul(); }
    dr() { return this.cell.dr(); }
    dl() { return this.cell.dl(); }
    queueMove(to) {
        this.cell.queueMove(this, to instanceof _game_xy__WEBPACK_IMPORTED_MODULE_1__.XY ? to : to.cell.xy);
    }
    olderThan(other) {
        return this.age > other.age;
    }
    merge(_other, _from) {
        throw new Error('merge not implemented');
    }
    ignite() { this.material.ignite(); }
    extinguish() { this.material.extinguish(); }
    died() { this.cell.died(this); }
    diedAndAlreadyRemovedFromCell() {
        Drawable.alive.delete(this);
    }
    dying() {
        this.cell.map.lighting.update(this.cell);
    }
}
Drawable.alive = new Set();
Drawable.nextId = 0;


/***/ }),

/***/ 1877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gm: () => (/* binding */ TASK_COLOR_SELECTED),
/* harmony export */   YZ: () => (/* binding */ Task),
/* harmony export */   k$: () => (/* binding */ TASK_COLOR),
/* harmony export */   r9: () => (/* binding */ TASK_COLOR_UNREACHABLE)
/* harmony export */ });
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1919);
/* harmony import */ var _ui_stroke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);


const TASK_COLOR = _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors */ .Jy.rotate(new _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors */ .Jy(['#00f', '#00f', '#00f', 'transparent', 'transparent']));
const TASK_COLOR_SELECTED = _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors */ .Jy.rotate(new _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors */ .Jy(['#88f', '#88f', 'transparent', 'transparent']));
const TASK_COLOR_UNREACHABLE = _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors */ .Jy.rotate(new _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .Colors */ .Jy(['#f00', '#f00', '#f00', 'transparent', 'transparent']));
class Task {
    static strokePathBetween(from, to, id, colorFn, condition, zIndex) {
        const cells = [];
        from.map.eachRay(from.xy, to.xy, c => { cells.push(c); return true; });
        from.map.uiRenderer.replace(id, new _ui_stroke__WEBPACK_IMPORTED_MODULE_1__/* .Stroke */ .t(cells.map(c => ({ cell: c, char: '*' })), colorFn, condition, zIndex));
    }
    static strokeOfCells(cells, colorFn, condition, zIndex) {
        return new _ui_stroke__WEBPACK_IMPORTED_MODULE_1__/* .Stroke */ .t(cells.map(c => ({ cell: c, char: '*' })), colorFn, condition, zIndex);
    }
    static strokePathViaAStarBetween(from, to, id, colorFn, condition, zIndex) {
        const path = from.pathTo(to);
        const cells = path ? Array.from(path) : [];
        from.map.uiRenderer.replace(id, new _ui_stroke__WEBPACK_IMPORTED_MODULE_1__/* .Stroke */ .t(cells.map(c => ({ cell: c, char: '*' })), colorFn, condition, zIndex));
    }
    constructor(pawn) {
        this.pawn = pawn;
    }
    cleanup() { }
    remove() { this.pawn.removeTask(this); }
}


/***/ }),

/***/ 1919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E2: () => (/* binding */ hexToRgb),
/* harmony export */   Jy: () => (/* binding */ Colors),
/* harmony export */   LS: () => (/* binding */ BONE),
/* harmony export */   SK: () => (/* binding */ COLOR_METAL),
/* harmony export */   UE: () => (/* binding */ WHITE),
/* harmony export */   Ui: () => (/* binding */ COLOR_BRICK),
/* harmony export */   Uv: () => (/* binding */ BLACK),
/* harmony export */   XE: () => (/* binding */ BORDER),
/* harmony export */   ZK: () => (/* binding */ FIRE),
/* harmony export */   _w: () => (/* binding */ SPAWN),
/* harmony export */   au: () => (/* binding */ blend),
/* harmony export */   h4: () => (/* binding */ BACKGROUND),
/* harmony export */   oE: () => (/* binding */ SMOKE),
/* harmony export */   sX: () => (/* binding */ COLOR_WOOD),
/* harmony export */   u6: () => (/* binding */ FOREGROUND),
/* harmony export */   wB: () => (/* binding */ WOOD),
/* harmony export */   yv: () => (/* binding */ COLOR_PLANT),
/* harmony export */   zC: () => (/* binding */ COLOR_GLASS),
/* harmony export */   zu: () => (/* binding */ LAMP)
/* harmony export */ });
/* unused harmony export SMOLDERING */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);

const FOREGROUND = "#0a0";
const BACKGROUND = "#000";
const BLACK = "#000";
const BORDER = "#666";
const WOOD = "#8B4513";
const COLOR_WOOD = "#8B4513";
const COLOR_METAL = "#808080";
const COLOR_BRICK = "#800000";
const COLOR_PLANT = "#008000";
const COLOR_GLASS = "#aaddff";
const SMOLDERING = '#6c200e';
const BONE = "#fff";
const WHITE = "#fff";
const SPAWN = "#ffff99";
class Colors {
    constructor(colors) {
        this.colors = colors;
    }
    random() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo ? this.colors[0] : (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .randFrom */ .Kt)(this.colors);
    }
    static rotate(colorsOrColor) {
        const colors = colorsOrColor instanceof Colors
            ? colorsOrColor.colors
            : [colorsOrColor];
        let current = 0;
        return () => {
            const color = colors[current];
            current = (current + 1) % colors.length;
            return color;
        };
    }
}
const FIRE = new Colors(['#ff6600', '#ff9900', '#ffcc00', '#ff3300']);
const SMOKE = new Colors(['rgba(51,51,51,0.6)', 'rgba(85,85,85,0.6)', 'rgba(102,102,102,0.6)', 'rgba(119,119,119,0.6)', 'rgba(136,136,136,0.6)', 'rgba(153,153,153,0.6)', 'rgba(170,170,170,0.6)', 'rgba(187,187,187,0.6)', 'rgba(204,204,204,0.6)']);
const LAMP = new Colors(['#ccffff', '#99ddff', '#66ccff']);
const hexToRgb = (hex) => {
    if (!hex.startsWith('#'))
        return null;
    if (hex.length === 4)
        return [1, 2, 3].map(i => parseInt(hex[i] + hex[i], 16));
    if (hex.length === 7)
        return [
            parseInt(hex.slice(1, 3), 16),
            parseInt(hex.slice(3, 5), 16),
            parseInt(hex.slice(5, 7), 16)
        ];
    return null;
};
const toHex = (n) => n.toString(16).padStart(2, '0');
const blend = (from, to, ratio) => {
    const frgb = hexToRgb(from);
    const trgb = hexToRgb(to);
    if (!frgb || !trgb)
        return from;
    const mix = (f, t) => Math.round(f + (t - f) * ratio);
    return `#${toHex(mix(frgb[0], trgb[0]))}${toHex(mix(frgb[1], trgb[1]))}${toHex(mix(frgb[2], trgb[2]))}`;
};


/***/ }),

/***/ 2483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Door)
/* harmony export */ });
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1919);
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1721);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2994);



class Door extends _drawable__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    constructor() {
        super(_material__WEBPACK_IMPORTED_MODULE_2__/* .WOOD */ .wB);
        this.layer = 'walls';
        this.open = false;
        this.passable = false;
        this.transparency = 0;
        this.light = () => this.material.light(0);
        this.char = () => this.open ? '/' : '+';
        this.color = () => this.material.color(_ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .WOOD */ .wB);
        this.desc = () => this.material.desc(this.open ? 'Open Door' : 'Door');
    }
    toggle() {
        this.open = !this.open;
        this.passable = this.open;
        this.transparency = this.open ? 1 : 0;
    }
    step() { this.material.step(() => { }); }
}


/***/ }),

/***/ 2615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Lighting),
/* harmony export */   c: () => (/* binding */ COLOR_INTENSITY)
/* harmony export */ });
/* harmony import */ var _xy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3720);
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5633);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1919);




const COLOR_INTENSITY = 0.3;
class Lighting {
    constructor(map) {
        this.map = map;
        this._sources = new Set();
        this._enabled = true;
        this.atXY = (xy) => {
            if (xy.x < 0 || xy.x >= this.map.w || xy.y < 0 || xy.y >= this.map.h) {
                return 0;
            }
            return this._illumination[xy.y][xy.x] ?? 0;
        };
        this.at = (cell) => this.atXY(cell.xy);
        this._illumination = Array.from({ length: map.h }, () => new Array(map.w));
        this._colors = Array.from({ length: map.h }, () => Array.from({ length: map.w }, () => ({ r: 0, g: 0, b: 0, w: 0 })));
        this.clear();
    }
    enable() { this._enabled = true; this.map.eachCell(cell => this.update(cell)); }
    disable() { this._enabled = false; this._sources.clear(); this.clear(); }
    enabled() { return this._enabled; }
    clear() {
        this._illumination.forEach(row => row.fill(0));
        this._colors.forEach(row => row.forEach(c => {
            c.r = 0;
            c.g = 0;
            c.b = 0;
            c.w = 0;
        }));
    }
    add(cell) {
        if (!this._enabled)
            return;
        this._sources.add(cell);
    }
    remove(cell) {
        if (!this._enabled)
            return;
        this._sources.delete(cell);
    }
    update(cell) {
        if (!this._enabled)
            return;
        if (cell.layers.lit())
            this.add(cell);
        else
            this.remove(cell);
    }
    transparencyOf(x, y) {
        if (_xy__WEBPACK_IMPORTED_MODULE_0__.XY.oob(x, y))
            return 1;
        const cell = this.map.get(_xy__WEBPACK_IMPORTED_MODULE_0__.XY.at(x, y));
        const transparency = cell.layers.transparency();
        return transparency;
    }
    redraw() {
        if (!this._enabled)
            return;
        this.clear();
        for (const cell of this._sources) {
            const radius = Math.min(Object.values(cell.layers.data)
                .reduce((sum, drawable) => sum + (drawable?.light() ?? 0), 0), 9);
            if (radius <= 0)
                continue;
            const color = this.colorOf(cell);
            /* tiles in a square; cheap for r ≤ 9 */
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    const tx = cell.xy.x + dx;
                    const ty = cell.xy.y + dy;
                    if (_xy__WEBPACK_IMPORTED_MODULE_0__.XY.oob(tx, ty))
                        continue;
                    /* quick circle check */
                    if (dx * dx + dy * dy > radius * radius)
                        continue;
                    /* trace ray, accumulate translucency */
                    let vis = 1;
                    (0,_shapes__WEBPACK_IMPORTED_MODULE_1__/* .eachLine */ .IM)(cell.xy, _xy__WEBPACK_IMPORTED_MODULE_0__.XY.at(tx, ty), (xy) => {
                        const dir = xy.subXY(cell.xy);
                        const base = Lighting.quadraticFallOff(radius, dir.x, dir.y);
                        const normalized = radius > 0 ? (base / radius) * 9 : 0;
                        const bright = Math.round(normalized * vis);
                        if (bright > this.atXY(xy))
                            this.set(xy, bright);
                        this.addColor(xy.x, xy.y, bright, color);
                        if (xy.x === cell.xy.x && xy.y === cell.xy.y)
                            return true; // skip lamp tile
                        vis *= this.transparencyOf(xy.x, xy.y);
                        return vis > 0;
                    });
                    if (vis <= 0)
                        continue; // ray blocked
                    const base = Lighting.quadraticFallOff(radius, dx, dy);
                    const normalized = radius > 0 ? (base / radius) * 9 : 0;
                    const bright = Math.round(normalized * vis);
                    if (bright > this._illumination[ty][tx])
                        this._illumination[ty][tx] = bright;
                    this.addColor(tx, ty, bright, color);
                }
            }
        }
    }
    set(xy, intensity) {
        this._illumination[xy.y][xy.x] = intensity;
    }
    colorAt(cell) {
        if (!this._enabled)
            return [0, 0, 0];
        const c = this._colors[cell.xy.y][cell.xy.x];
        if (c.w === 0)
            return [0, 0, 0];
        return [c.r / c.w, c.g / c.w, c.b / c.w];
    }
    sources() {
        return this._sources;
    }
    lit(cell) {
        return this._sources.has(cell);
    }
    static quadraticFallOff(radius, dx, dy) {
        const d2 = dx * dx + dy * dy;
        if (d2 > radius * radius)
            return 0;
        return radius - ((d2 + (radius >> 1)) / radius | 0);
    }
    addColor(x, y, bright, color) {
        if (bright <= 0)
            return;
        const c = this._colors[y][x];
        const w = bright / 9;
        c.r += color[0] * w;
        c.g += color[1] * w;
        c.b += color[2] * w;
        c.w += w;
    }
    colorOf(cell) {
        let r = 0, g = 0, b = 0, w = 0;
        for (const l of _layers__WEBPACK_IMPORTED_MODULE_2__/* .CellLayers */ .v.layerNames) {
            const d = cell.layers.data[l];
            if (d && d.light() > 0) {
                const rgb = (0,_ui_colors__WEBPACK_IMPORTED_MODULE_3__/* .hexToRgb */ .E2)(d.color());
                if (!rgb)
                    continue;
                const weight = d.light();
                r += rgb[0] * weight;
                g += rgb[1] * weight;
                b += rgb[2] * weight;
                w += weight;
            }
        }
        if (w === 0)
            return [0, 0, 0];
        return [r / w, g / w, b / w];
    }
}


/***/ }),

/***/ 2705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Pawn: () => (/* binding */ Pawn),
  PawnBorn: () => (/* binding */ PawnBorn),
  PawnBurned: () => (/* binding */ PawnBurned),
  PawnDied: () => (/* binding */ PawnDied),
  PawnMoved: () => (/* binding */ PawnMoved),
  PawnSelected: () => (/* binding */ PawnSelected),
  TaskRemoved: () => (/* binding */ TaskRemoved)
});

// EXTERNAL MODULE: ./src/ui/colors.ts
var colors = __webpack_require__(1919);
// EXTERNAL MODULE: ./src/draw/drawable.ts
var drawable = __webpack_require__(1721);
// EXTERNAL MODULE: ./src/draw/material.ts
var material = __webpack_require__(2994);
// EXTERNAL MODULE: ./src/game/tasks/task.ts
var task = __webpack_require__(1877);
// EXTERNAL MODULE: ./src/ui/stroke.ts
var ui_stroke = __webpack_require__(891);
// EXTERNAL MODULE: ./src/game/xy.ts
var xy = __webpack_require__(88);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
;// ./src/draw/corpse.ts


class Corpse extends drawable.Drawable {
    constructor(pawn, cause) {
        super();
        this.pawn = pawn;
        this.cause = cause;
        this.layer = 'items';
        this.passable = false;
        this.desc = () => `${this.pawn.desc()}, died by ${this.cause}`;
        this.light = () => 0;
        this.char = () => '%';
        this.color = () => colors/* BONE */.LS;
    }
}

// EXTERNAL MODULE: ./src/signal.ts
var signal = __webpack_require__(334);
// EXTERNAL MODULE: ./src/ui/ui-renderer.ts
var ui_renderer = __webpack_require__(9889);
;// ./src/draw/pawn.ts










const PawnSelected = new signal/* SignalWithCurrent */.Y();
const PawnMoved = new signal/* Signal */.H();
const PawnBorn = new signal/* Signal */.H();
const PawnBurned = new signal/* Signal */.H();
const PawnDied = new signal/* Signal */.H();
const TaskRemoved = new signal/* Signal */.H();
class Pawn extends drawable.Drawable {
    static next(current) {
        const index = Pawn.pawns.indexOf(current);
        if (index === -1)
            return current;
        return Pawn.pawns[(index + 1) % Pawn.pawns.length];
    }
    constructor(name, capabilities) {
        super(material/* MEAT */.SN);
        this.name = name;
        this.capabilities = capabilities;
        this.selected = false;
        this.passable = false;
        this.desc = () => this.material.desc(this.name);
        this.layer = 'pawn';
        this.transparency = 0;
        this.light = () => this.material.light(3);
        this.char = () => '@';
        this.color = () => this.material.color(colors/* WHITE */.UE);
        this.tasks = [];
    }
    recalcPaths() {
        this.tasks.forEach(t => t.cleanup());
        let start = this.cell;
        this.tasks.forEach(t => start = t.strokeAndNext(start));
        this.endCell = start;
        ui_renderer/* Repaint */.G2.emit();
        return start;
    }
    get tipCell() {
        return this.tasks.length > 0 ? this.endCell : this.cell;
    }
    addTask(task) {
        this.tasks.push(task);
        this.recalcPaths();
    }
    removeTask(task) {
        task.cleanup();
        this.tasks = this.tasks.filter(t => t !== task);
        this.recalcPaths();
        TaskRemoved.emit(this);
    }
    clearTasks() {
        (0,utils/* each */.__)(this.tasks, t => t.cleanup());
        this.tasks = [];
        this.recalcPaths();
        TaskRemoved.emit(this);
    }
    step() {
        this.material.step(() => {
            if (this.material.isBurning()) {
                this.squawk('ouch', colors/* FIRE */.ZK);
                PawnBurned.emit(this);
            }
            if (this.coughed())
                return;
            if (this.tasks.length > 0) {
                const task = this.tasks[0];
                task.step();
                if (task.isDone()) {
                    task.cleanup();
                    this.removeTask(task);
                }
                else
                    this.recalcPaths();
            }
        });
    }
    coughed() {
        if (!this.cell.smoke())
            return false;
        const c = utils/* isInTestMode */.Jo ? this.age % 2 === 0 : (0,utils/* oneIn */.A7)(2);
        if (!c)
            return false;
        this.squawk('cough', colors/* LAMP */.zu);
        return true;
    }
    dying() {
        super.dying();
        PawnDied.emit(this);
        this.cell.reborn(new Corpse(this, 'burning'));
        (0,utils/* each */.__)(this.tasks, task => task.cleanup());
    }
    squawk(text, colors) {
        if (utils/* isInTestMode */.Jo)
            return;
        const directions = [
            { dx: 0, dy: -1 },
            { dx: 1, dy: -1 },
            { dx: 1, dy: 0 },
            { dx: 1, dy: 1 },
            { dx: 0, dy: 1 },
            { dx: -1, dy: 1 },
            { dx: -1, dy: 0 },
            { dx: -1, dy: -1 }
        ];
        const fullText = ' ' + text;
        const dir = (0,utils/* randFrom */.Kt)(directions);
        const startX = this.cell.xy.x + dir.dx;
        const startY = this.cell.xy.y + dir.dy;
        const canPlace = !Array.from({ length: fullText.length }, (_, j) => ({
            x: startX + j * dir.dx,
            y: startY + j * dir.dy
        })).some(pos => xy.XY.oob(pos.x, pos.y));
        if (canPlace) {
            const strokeId = `squawk-${Date.now()}`;
            const stroke = new ui_stroke/* Stroke */.t([], () => colors.random(), 300, 15);
            Array.from({ length: fullText.length }, (_, j) => ({
                x: startX + j * dir.dx,
                y: startY + j * dir.dy,
                char: fullText[j]
            })).forEach(pos => {
                const cell = this.cell.map.get(xy.XY.at(pos.x, pos.y));
                stroke.add(cell, pos.char);
            });
            this.cell.map.uiRenderer.replace(strokeId, stroke);
        }
    }
    hoverStrokePath(target) {
        const start = this.tasks.length > 0 ? this.endCell : this.cell;
        task/* Task */.YZ.strokePathViaAStarBetween(start, target, Pawn.HOVER_PATH_STROKE, Pawn.HOVER_PATH_COLOR, () => true, 2);
        ui_renderer/* Repaint */.G2.emit();
    }
    draw(debug, _illumination) {
        if (this.selected) {
            this.cell.map.drawAt(this.cell.xy.x, this.cell.xy.y, this.char(), colors/* BACKGROUND */.h4, colors/* FOREGROUND */.u6);
            return true;
        }
        return super.draw(debug, 9);
    }
    movedInto(cell) {
        const from = this.cell;
        super.movedInto(cell);
        if (this.tasks.length > 0)
            this.recalcPaths();
        if (from)
            PawnMoved.emit({ pawn: this, from, to: cell });
        else
            PawnBorn.emit({ pawn: this, into: cell });
    }
}
Pawn.HOVER_PATH_STROKE = 'hover-path';
Pawn.pawns = [];
(() => {
    PawnBorn.on(({ pawn }) => {
        Pawn.pawns.push(pawn);
    });
    PawnDied.on((pawn) => {
        Pawn.pawns = Pawn.pawns.filter(p => p !== pawn);
    });
})();
Pawn.HOVER_PATH_COLOR = colors/* Colors */.Jy.rotate(new colors/* Colors */.Jy(['#0ff', '#088']));


/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G5: () => (/* binding */ PLANT),
/* harmony export */   KJ: () => (/* binding */ IMMATERIAL),
/* harmony export */   SN: () => (/* binding */ MEAT),
/* harmony export */   cJ: () => (/* binding */ METAL),
/* harmony export */   fk: () => (/* binding */ GLASS),
/* harmony export */   im: () => (/* binding */ Material),
/* harmony export */   qv: () => (/* binding */ BRICK),
/* harmony export */   wB: () => (/* binding */ WOOD)
/* harmony export */ });
/* unused harmony exports MaterialType, Wood, Meat, Plant, Metal, Brick, Glass, Immaterial, damageColor */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);
/* harmony import */ var _game_fires__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6746);



class MaterialType {
    constructor() {
        this.flammable = true;
        this.light = 0;
        this.color = _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .BORDER */ .XE;
        this.note = '';
    }
}
class Wood extends MaterialType {
    constructor() {
        super(...arguments);
        this.hits = 60;
        this.color = _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .COLOR_WOOD */ .sX;
        this.note = 'flammable';
    }
    step(owner) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo && (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(2))
            owner.cell.spawnSmoke();
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo && (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(4))
            owner.cell.spawnFire();
    }
}
Wood.instance = new Wood();
class Meat extends MaterialType {
    constructor() {
        super(...arguments);
        this.hits = 30;
        this.note = 'flammable';
    }
    step(_owner) { }
}
Meat.instance = new Meat();
class Plant extends MaterialType {
    constructor() {
        super(...arguments);
        this.hits = 30;
        this.color = _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .COLOR_PLANT */ .yv;
        this.note = "extra smokey but don't burn hot";
    }
    step(owner) {
        owner.cell.spawnSmoke();
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo && (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(6))
            owner.cell.spawnFire();
    }
}
Plant.instance = new Plant();
class Metal extends MaterialType {
    constructor() {
        super(...arguments);
        this.flammable = false;
        this.hits = 75;
        this.color = _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .COLOR_METAL */ .SK;
        this.note = 'non-flammable';
    }
    step(_owner) { }
}
Metal.instance = new Metal();
class Brick extends MaterialType {
    constructor() {
        super(...arguments);
        this.flammable = false;
        this.hits = 30;
        this.color = _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .COLOR_BRICK */ .Ui;
        this.note = 'non-flammable';
    }
    step(_owner) { }
}
Brick.instance = new Brick();
class Glass extends MaterialType {
    constructor() {
        super(...arguments);
        this.flammable = false;
        this.hits = 15;
        this.color = _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .COLOR_GLASS */ .zC;
        this.note = 'non-flammable, transparent';
    }
    step(_owner) { }
}
Glass.instance = new Glass();
const MEAT = Meat.instance;
const WOOD = Wood.instance;
const PLANT = Plant.instance;
const METAL = Metal.instance;
const BRICK = Brick.instance;
const GLASS = Glass.instance;
class Immaterial extends MaterialType {
    constructor() {
        super(...arguments);
        this.flammable = false;
        this.hits = 0;
        this.note = 'immaterial';
    }
    step(_owner) { }
}
Immaterial.instance = new Immaterial();
const IMMATERIAL = Immaterial.instance;
const damageColor = {
    foregroundPower: 0.5,
    backgroundPower: 0.1
};
class Material {
    constructor(owner, type) {
        this.owner = owner;
        this.type = type;
        this.burning = false;
        this.ignite = () => {
            this.takeHit();
            if (!this.type.flammable || this.burning)
                return;
            this.burning = true;
            _game_fires__WEBPACK_IMPORTED_MODULE_2__/* .Fires */ .UQ.increment(this.owner);
        };
        this.extinguish = () => {
            if (!this.burning)
                return;
            this.burning = false;
            _game_fires__WEBPACK_IMPORTED_MODULE_2__/* .Fires */ .UQ.decrement(this.owner);
        };
        this.damagePercent = () => this.type.hits > 0 ? 1 - this.hits / this.type.hits : 0;
        this.isBurning = () => this.burning;
        this.light = (base) => this.isBurning() ? base + 1 : base;
        this.color = (base) => {
            if (this.isBurning())
                return _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .FIRE */ .ZK.random();
            const d = this.damagePercent();
            return (0,_ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .blend */ .au)(base, _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .BLACK */ .Uv, Math.pow(d, damageColor.foregroundPower));
        };
        this.background = (base) => {
            const damage = this.damagePercent();
            if (damage <= 0)
                return base;
            // keep barely-not-black early so tests can detect change, but visually subtle
            const subtle = 0.003;
            const visibleStart = 0.5;
            const whiteAt = 0.9;
            const progressRaw = (damage - visibleStart) / (whiteAt - visibleStart);
            const progress = Math.max(0, Math.min(1, progressRaw));
            const eased = progress * progress;
            const factor = Math.max(subtle, eased);
            return (0,_ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .blend */ .au)(base, _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .WHITE */ .UE, factor);
        };
        this.remaining = () => this.hits;
        this.max = () => this.type.hits;
        this.desc = (base) => this.isBurning() ? `${base} ▲` : base;
        this.takeHit = (amount = 1) => {
            if (this.type.hits <= 0)
                return true;
            this.hits -= amount;
            if (this.hits > 0)
                return true;
            if (this.burning)
                _game_fires__WEBPACK_IMPORTED_MODULE_2__/* .Fires */ .UQ.decrement(this.owner);
            this.owner.cell.died(this.owner);
            return false;
        };
        this.hits = type.hits;
    }
    step(stillAlive) {
        if (!this.burning)
            return stillAlive();
        this.type.step(this.owner);
        const { GameStepped } = __webpack_require__(8639);
        const frame = GameStepped.current?.frame || 0;
        // chance to self-extinguish while burning
        if (frame >= 50 && !_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo && (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(30)) {
            this.extinguish();
            return stillAlive();
        }
        if (this.takeHit())
            stillAlive();
    }
}


/***/ }),

/***/ 3683:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   j: () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6747);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 3720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ ellipseFromRect),
/* harmony export */   IM: () => (/* binding */ eachLine),
/* harmony export */   QI: () => (/* binding */ eachEllipseBorderRect),
/* harmony export */   er: () => (/* binding */ rectFromCenter),
/* harmony export */   iV: () => (/* binding */ squareBetween),
/* harmony export */   xh: () => (/* binding */ eachEllipseFill)
/* harmony export */ });
/* unused harmony export eachEllipseBorder */
/* harmony import */ var _game_xy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _game_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6893);


const safe = (x, y, on) => { if (!_game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.oob(x, y))
    on(_game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.at(x, y)); };
const eachLine = (start, end, onXYAndReturnContinue) => {
    let x0 = start.x, y0 = start.y;
    const x1 = end.x, y1 = end.y;
    let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    while (true) {
        if (!_game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.oob(x0, y0)) {
            if (!onXYAndReturnContinue(_game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.at(x0, y0)))
                break;
        }
        if (x0 === x1 && y0 === y1)
            break;
        const e2 = err << 1;
        if (e2 >= dy) {
            err += dy;
            x0 += sx;
        }
        if (e2 <= dx) {
            err += dx;
            y0 += sy;
        }
    }
};
const ellipseXR = (rx, ry, dy) => {
    if (ry === 0)
        return Math.floor(rx);
    const t = 1 - (dy * dy) / (ry * ry);
    return Math.floor(Math.max(0, rx * Math.sqrt(Math.max(0, t))));
};
const plot4 = (xc, yc, x, y, on) => {
    safe(xc + x, yc + y, on);
    safe(xc - x, yc + y, on);
    safe(xc + x, yc - y, on);
    safe(xc - x, yc - y, on);
};
const eachEllipseBorder = (cx, cy, rx, ry, on) => {
    const xc = Math.round(cx), yc = Math.round(cy);
    const rxInt = Math.max(0, Math.floor(rx));
    const ryInt = Math.max(0, Math.floor(ry));
    if (rxInt === 0 && ryInt === 0) {
        safe(xc, yc, on);
        return;
    }
    const rx2 = rxInt * rxInt;
    const ry2 = ryInt * ryInt;
    let x = 0;
    let y = ryInt;
    let px = 0;
    let py = 2 * rx2 * y;
    let p1 = ry2 - rx2 * ryInt + 0.25 * rx2;
    while (px < py) {
        plot4(xc, yc, x, y, on);
        x++;
        px += 2 * ry2;
        if (p1 < 0)
            p1 += ry2 + px;
        else {
            y--;
            py -= 2 * rx2;
            p1 += ry2 + px - py;
        }
    }
    let p2 = ry2 * (x + 0.5) * (x + 0.5) + rx2 * (y - 1) * (y - 1) - rx2 * ry2;
    while (y >= 0) {
        plot4(xc, yc, x, y, on);
        y--;
        py -= 2 * rx2;
        if (p2 > 0)
            p2 += rx2 - py;
        else {
            x++;
            px += 2 * ry2;
            p2 += rx2 - py + px;
        }
    }
};
const eachEllipseBorderRect = (x0In, y0In, x1In, y1In, on) => {
    let x0 = Math.trunc(x0In), y0 = Math.trunc(y0In), x1 = Math.trunc(x1In), y1 = Math.trunc(y1In);
    let a = Math.abs(x1 - x0);
    let b = Math.abs(y1 - y0);
    let b1 = b & 1;
    let dx = 4 * (1 - a) * b * b;
    let dy = 4 * (b1 + 1) * a * a;
    let err = dx + dy + b1 * a * a;
    let e2;
    if (x0 > x1) {
        const t = x0;
        x0 = x1;
        x1 = t + a;
    }
    if (y0 > y1)
        y0 = y1;
    y0 += (b + 1) >> 1;
    y1 = y0 - b1;
    a *= 8 * a;
    b1 = 8 * b * b;
    do {
        safe(x1, y0, on);
        safe(x0, y0, on);
        safe(x0, y1, on);
        safe(x1, y1, on);
        e2 = 2 * err;
        if (e2 <= dy) {
            y0++;
            y1--;
            err += dy += a;
        }
        if (e2 >= dx || (2 * err > dy)) {
            x0++;
            x1--;
            err += dx += b1;
        }
    } while (x0 <= x1);
    while (y0 - y1 < b) {
        safe(x0 - 1, y0, on);
        safe(x1 + 1, y0++, on);
        safe(x0 - 1, y1, on);
        safe(x1 + 1, y1--, on);
    }
};
const eachEllipseFill = (cx, cy, rx, ry, on) => {
    const rxA = Math.max(0, rx), ryA = Math.max(0, ry);
    for (let dy = -Math.floor(ryA); dy <= Math.floor(ryA); dy++) {
        const xr = ellipseXR(rxA, ryA, dy);
        for (let dx = -xr; dx <= xr; dx++)
            safe(Math.floor(cx + dx), Math.floor(cy + dy), on);
    }
};
const ellipseFromRect = (r) => {
    const ul = r.ul, br = r.br;
    const cx = (ul.x + br.x) / 2, cy = (ul.y + br.y) / 2;
    const rx = (br.x - ul.x) / 2, ry = (br.y - ul.y) / 2;
    return { cx, cy, rx, ry };
};
const squareBetween = (a, b) => {
    const dx = Math.abs(b.x - a.x);
    const dy = Math.abs(b.y - a.y);
    const d = Math.max(dx, dy);
    const bx = a.x + Math.sign(b.x - a.x) * d;
    const by = a.y + Math.sign(b.y - a.y) * d;
    return _game_rect__WEBPACK_IMPORTED_MODULE_1__/* .Rect */ .r.between(a, _game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.at(bx, by));
};
const rectFromCenter = (c, p, square) => {
    const a = _game_xy__WEBPACK_IMPORTED_MODULE_0__.XY.at(2 * c.x - p.x, 2 * c.y - p.y);
    return square ? squareBetween(a, p) : _game_rect__WEBPACK_IMPORTED_MODULE_1__/* .Rect */ .r.between(a, p);
};


/***/ }),

/***/ 3793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FD: () => (/* binding */ Capabilities),
/* harmony export */   Xk: () => (/* binding */ NAMES),
/* harmony export */   gv: () => (/* binding */ capabilityAbbr)
/* harmony export */ });
/* unused harmony exports Skill, capabilityEntries */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);

class Skill {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .addMethodInvisible */ .IP)(this, 'toJSON', () => ({ name: this.name, level: this.level }));
    }
    improve() { this.level++; }
}
Skill.random = (name) => new Skill(name, 0);
Skill.fromJSON = (json) => new Skill(json?.name ?? '', json?.level ?? 0);
const CAPABILITY_SKILL_DEFS = {
    strength: ['inventory', 'carry', 'drag', 'break'],
    breath: ['smoke', 'hold'],
    constitution: ['damage', 'toxin'],
    speed: ['charge', 'dodge'],
    dexterity: ['extinguish', 'throw', 'upright'],
    charisma: ['persuade', 'calm', 'command']
};
const NAMES = Object.keys(CAPABILITY_SKILL_DEFS);
class Capabilities {
    constructor(data) {
        this.initialLevelUp = () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .randFrom */ .Kt)(this.map[(0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .randFrom */ .Kt)(NAMES)]).improve();
        };
        this.map = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .toMap */ .J9)(NAMES, name => data[name]);
        NAMES.forEach(name => (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .addGetter */ .rW)(this, name, () => this.map[name]));
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .addMethodInvisible */ .IP)(this, 'toJSON', () => (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .toMap */ .J9)(NAMES, n => this.map[n]));
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .addMethodInvisible */ .IP)(this, 'eachPair', (f) => NAMES.forEach(n => f(n, this.map[n])));
    }
}
Capabilities.basic = () => new Capabilities((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .toMap */ .J9)(NAMES, n => CAPABILITY_SKILL_DEFS[n].map(Skill.random)));
Capabilities.fromJSON = (json) => new Capabilities((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .toMap */ .J9)(NAMES, n => (json?.[n] ?? []).map(Skill.fromJSON)));
const capabilityAbbr = (name) => {
    const m = { strength: 'str', constitution: 'con', dexterity: 'dex' };
    return m[name] ?? name;
};
const capabilityEntries = (caps) => NAMES.map(n => [n, caps[n]]);


/***/ }),

/***/ 4104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Initializer: () => (/* binding */ Initializer)
});

// EXTERNAL MODULE: ./src/game/xy.ts
var xy = __webpack_require__(88);
// EXTERNAL MODULE: ./src/game/rect.ts
var rect = __webpack_require__(6893);
// EXTERNAL MODULE: ./src/draw/wall.ts
var wall = __webpack_require__(239);
// EXTERNAL MODULE: ./src/draw/floor.ts
var floor = __webpack_require__(9177);
// EXTERNAL MODULE: ./src/draw/lamp.ts
var lamp = __webpack_require__(225);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/draw/pawn.ts + 1 modules
var pawn = __webpack_require__(2705);
// EXTERNAL MODULE: ./src/draw/fire.ts
var fire = __webpack_require__(1267);
// EXTERNAL MODULE: ./src/ui/text-stroke.ts
var text_stroke = __webpack_require__(1485);
// EXTERNAL MODULE: ./src/game/game.ts + 19 modules
var game = __webpack_require__(8639);
// EXTERNAL MODULE: ./src/game/state.ts + 1 modules
var state = __webpack_require__(9308);
// EXTERNAL MODULE: ./src/game/capabilities.ts
var capabilities = __webpack_require__(3793);
;// ./src/game/names.ts
const firsts = "Mary,Anna,Emma,Elizabeth,Minnie,Margaret,Ida,Alice,Bertha,Sarah,Annie,Clara,Ella,Florence,Cora,Martha,Laura,Nellie,Grace,Carrie,Maude,Mabel,Bessie,Jennie,Gertrude,Julia,Hattie,Edith,Mattie,Rose,Catherine,Lillian,Ada,Lillie,Helen,Jessie,Louise,Ethel,Lula,Myrtle,Eva,Frances,Lena,Lucy,Edna,Maggie,Pearl,Daisy,Fannie,Josephine,Dora,Rosa,Katherine,Agnes,Marie,Nora,May,Mamie,Blanche,Stella,Ellen,Nancy,Effie,Sallie,Nettie,Della,Lizzie,Flora,Susie,Maud,Mae,Etta,Harriet,Sadie,Caroline,Katie,Lydia,Elsie,Kate,Susan,Mollie,Alma,Addie,Georgia,Eliza,Lulu,Nannie,Lottie,Amanda,Belle,Charlotte,Rebecca,Ruth,Viola,Olive,Amelia,Hannah,Jane,Virginia,Emily,Matilda,Irene,Kathryn,Esther,Willie,Henrietta,Ollie,Amy,Rachel,Sara,Estella,Theresa,Augusta,Ora,Pauline,Josie,Lola,Sophia,Leona,Anne,Mildred,Ann,Beulah,Callie,Lou,Delia,Eleanor,Barbara,Iva,Louisa,Maria,Mayme,Evelyn,Estelle,Nina,Betty,Marion,Bettie,Dorothy,Luella,Inez,Lela,Rosie,Allie,Millie,Janie,Cornelia,Victoria,Ruby,Winifred,Alta,Celia,Christine,Beatrice,Birdie,Harriett,Mable,Myra,Sophie,Tillie,Isabel,Sylvia,Carolyn,Isabelle,Leila,Sally,Ina,Essie,Bertie,Nell,Alberta,Katharine,Lora,Rena,Mina,Rhoda,Mathilda,Abbie,Eula,Dollie,Hettie,Eunice,Fanny,Ola,Lenora,Adelaide,Christina,Lelia,Nelle,Sue,Johanna,Lilly,Lucinda,Minerva,Lettie,Roxie,Cynthia,Helena,Hilda,Hulda,Bernice,Genevieve,Jean,Cordelia,Marian,Francis,Jeanette,Adeline,Gussie,Leah,Lois,Lura,Mittie,Hallie,Isabella,Olga,Phoebe,Teresa,Hester,Lida,Lina,Winnie,Claudia,Marguerite,Vera,Cecelia,Bess,Emilie,John,Rosetta,Verna,Myrtie,Cecilia,Elva,Olivia,Ophelia,Georgie,Elnora,Violet,Adele,Lily,Linnie,Loretta,Madge,Polly,Virgie,Eugenia,Lucile,Lucille,Mabelle,Rosalie,Kittie,Meta,Angie,Dessie,Georgiana,Lila,Regina,Selma,Wilhelmina,Bridget,Lilla,Malinda,Vina,Freda,Gertie,Jeannette,Louella,Mandy,Roberta,Cassie,Corinne,Ivy,Melissa,Lyda,Naomi,Norma,Bell,Margie,Nona,Zella,Dovie,Elvira,Erma,Irma,Leota,William,Artie,Blanch,Charity,Lorena,Lucretia,Orpha,Alvina,Annette,Catharine,Elma,Geneva,Janet,Lee,Leora,Lona,Miriam,Zora,Linda,Octavia,Sudie,Zula,Adella,Alpha,Frieda,George,Joanna,Leonora,Priscilla,Tennie,Angeline,Docia,Ettie,Flossie,Hanna,Letha,Minta,Retta,Rosella,Adah,Berta,Elisabeth,Elise,Goldie,Leola,Margret,Adaline,Floy,Idella,Juanita,Lenna,Lucie,Missouri,Nola,Zoe,Eda,Isabell,James,Julie,Letitia,Madeline,Malissa,Mariah,Pattie,Vivian,Almeda,Aurelia,Claire,Dolly,Hazel,Jannie,Kathleen,Kathrine,Lavinia,Marietta,Melvina,Ona,Pinkie,Samantha,Susanna,Chloe,Donnie,Elsa,Gladys,Matie,Pearle,Vesta,Vinnie,Antoinette,Clementine,Edythe,Harriette,Libbie,Lilian,Lue,Lutie,Magdalena,Meda,Rita,Tena,Zelma,Adelia,Annetta,Antonia,Dona,Elizebeth,Georgianna,Gracie,Iona,Lessie,Leta,Liza,Mertie,Molly,Neva,Oma,Alida,Alva,Cecile,Cleo,Donna,Ellie,Ernestine,Evie,Frankie,Helene,Minna,Myrta,Prudence,Queen,Rilla,Savannah,Tessie,Tina,Agatha,America,Anita,Arminta,Dorothea,Ira,Luvenia,Marjorie,Maybelle,Mellie,Nan,Pearlie,Sidney,Velma,Clare,Constance,Dixie,Ila,Iola,Jimmie,Louvenia,Lucia,Ludie,Luna,Metta,Patsy,Phebe,Sophronia,Adda,Avis,Betsy,Bonnie,Cecil,Cordie,Emmaline,Ethelyn,Hortense,June,Louie,Lovie,Marcella,Melinda,Mona,Odessa,Veronica,Aimee,Annabel,Ava,Bella,Carolina,Cathrine,Christena,Clyde,Dena,Dolores,Eleanore,Elmira,Fay,Frank,Jenny,Kizzie,Lonnie,Loula,Magdalene,Mettie,Mintie,Peggy,Reba,Serena,Vida,Zada,Abigail,Celestine,Celina,Claudie,Clemmie,Connie,Daisie,Deborah,Dessa,Easter,Eddie,Emelia,Emmie,Imogene,India,Jeanne,Joan,Lenore,Liddie,Lotta,Mame,Nevada,Rachael,Robert,Sina,Willa,Aline,Beryl,Charles,Daisey,Dorcas,Edmonia,Effa,Eldora,Eloise,Emmer,Era,Gena,Henry,Iris,Izora,Lennie,Lissie,Mallie,Malvina,Mathilde,Mazie,Queenie,Rosina,Salome,Theodora,Therese,Vena,Wanda,Wilda,Altha,Anastasia,Besse,Bird,Birtie,Clarissa,Claude,Delilah,Diana,Emelie,Erna,Fern,Florida,Frona,Hilma,Joseph,Juliet,Leonie,Lugenia,Mammie,Manda,Manerva,Manie,Nella,Paulina,Philomena,Rae,Selina,Sena,Theodosia,Tommie,Una,Vernie,Adela,Althea,Amalia,Amber,Angelina,Annabelle,Anner,Arie,Clarice,Corda,Corrie,Dell,Dellar,Donie,Doris,Elda,Elinor,Emeline,Emilia,Esta,Estell,Etha,Fred,Hope,Indiana,Ione,Jettie,Johnnie,Josiephine,Kitty,Lavina,Leda,Letta,Mahala,Marcia,Margarette,Maudie,Maye,Norah,Oda,Patty,Paula,Permelia,Rosalia,Roxanna,Sula,Vada,Winnifred,Adline,Almira,Alvena,Arizona,Becky,Bennie,Bernadette,Camille,Cordia,Corine,Dicie,Dove,Drusilla,Elena,Elenora,Elmina,Ethyl,Evalyn,Evelina,Faye,Huldah,Idell,Inga,Irena,Jewell,Kattie,Lavenia,Leslie,Lovina,Lulie,Magnolia,Margeret,Margery,Media,Millicent,Nena,Ocie,Orilla,Osie,Pansy,Ray,Rosia,Rowena,Shirley,Tabitha,Thomas,Verdie,Walter,Zetta,Zoa,Zona,Albertina,Albina,Alyce,Amie,Angela,Annis,Carol,Carra,Clarence,Clarinda,Delphia,Dillie,Doshie,Drucilla,Etna,Eugenie,Eulalia,Eve,Felicia,Florance,Fronie,Geraldine,Gina,Glenna,Grayce,Hedwig,Jessica,Jossie,Katheryn,Katy,Lea,Leanna,Leitha,Leone,Lidie,Loma,Lular,Magdalen,Maymie,Minervia,Muriel,Neppie,Olie,Onie,Osa,Otelia,Paralee,Patience,Rella,Rillie,Rosanna,Theo,Tilda,Tishie,Tressa,Viva,Yetta,Zena,Zola,Abby,Aileen,Alba,Alda,Alla,Alverta,Ara,Ardelia,Ardella,Arrie,Arvilla,Augustine,Aurora,Bama,Bena,Byrd,Calla,Camilla,Carey,Carlotta,Celestia,Cherry,Cinda,Classie,Claudine,Clemie,Clifford,Clyda,Creola,Debbie,Dee,Dinah,Doshia,Ednah,Edyth,Eleanora,Electa,Eola,Erie,Eudora,Euphemia,Evalena,Evaline,Faith,Fidelia,Freddie,Golda,Harry,Helma,Hermine,Hessie,Ivah,Janette,Jennette,Joella,Kathryne,Lacy,Lanie,Lauretta,Leana,Leatha,Leo,Liller,Lillis,Louetta,Madie,Mai,Martina,Maryann,Melva,Mena,Mercedes,Merle,Mima,Minda,Monica,Nealie,Netta,Nolia,Nonie,Odelia,Ottilie,Phyllis,Robbie,Sabina,Sada,Sammie,Suzanne,Sybilla,Thea,Tressie,Vallie,Venie,Viney,Wilhelmine,Winona,Zelda,Zilpha,Adelle,Adina,Adrienne,Albertine,Alys,Ana,Araminta,Arthur,Birtha,Bulah,Caddie,Celie,Charlotta,Clair,Concepcion,Cordella,Corrine,Delila,Delphine,Dosha,Edgar,Elaine,Elisa,Ellar,Elmire,Elvina,Ena,Estie,Etter,Fronnie,Genie,Georgina,Glenn,Gracia,Guadalupe,Gwendolyn,Hassie,Honora,Icy,Isa,Isadora,Jesse,Jewel,Joe,Johannah,Juana,Judith,Judy,Junie,Lavonia,Lella,Lemma,Letty,Linna,Littie,Lollie,Lorene,Louis,Love,Lovisa,Lucina,Lynn,Madora,Mahalia,Manervia,Manuela,Margarett,Margaretta,Margarita,Marilla,Mignon,Mozella,Natalie,Nelia,Nolie,Omie,Opal,Ossie,Ottie,Ottilia,Parthenia,Penelope,Pinkey,Pollie,Rennie,Reta,Roena,Rosalee,Roseanna,Ruthie,Sabra,Sannie,Selena,Sibyl,Tella,Tempie,Tennessee,Teressa,Texas,Theda,Thelma,Thursa,Ula,Vannie,Verona,Vertie,Wilma,John,William,James,Charles,George,Frank,Joseph,Thomas,Henry,Robert,Edward,Harry,Walter,Arthur,Fred,Albert,Samuel,David,Louis,Joe,Charlie,Clarence,Richard,Andrew,Daniel,Ernest,Will,Jesse,Oscar,Lewis,Peter,Benjamin,Frederick,Willie,Alfred,Sam,Roy,Herbert,Jacob,Tom,Elmer,Carl,Lee,Howard,Martin,Michael,Bert,Herman,Jim,Francis,Harvey,Earl,Eugene,Ralph,Ed,Claude,Edwin,Ben,Charley,Paul,Edgar,Isaac,Otto,Luther,Lawrence,Ira,Patrick,Guy,Oliver,Theodore,Hugh,Clyde,Alexander,August,Floyd,Homer,Jack,Leonard,Horace,Marion,Philip,Allen,Archie,Stephen,Chester,Willis,Raymond,Rufus,Warren,Jessie,Milton,Alex,Leo,Julius,Ray,Sidney,Bernard,Dan,Jerry,Calvin,Perry,Dave,Anthony,Eddie,Amos,Dennis,Clifford,Leroy,Wesley,Alonzo,Garfield,Franklin,Emil,Leon,Nathan,Harold,Matthew,Levi,Moses,Everett,Lester,Winfield,Adam,Lloyd,Mack,Fredrick,Jay,Jess,Melvin,Noah,Aaron,Alvin,Norman,Gilbert,Elijah,Victor,Gus,Nelson,Jasper,Silas,Jake,Christopher,Mike,Percy,Adolph,Maurice,Cornelius,Felix,Reuben,Wallace,Claud,Roscoe,Sylvester,Earnest,Hiram,Otis,Simon,Willard,Irvin,Mark,Jose,Wilbur,Abraham,Virgil,Clinton,Elbert,Leslie,Marshall,Owen,Wiley,Anton,Morris,Manuel,Phillip,Augustus,Emmett,Eli,Nicholas,Wilson,Alva,Harley,Newton,Timothy,Marvin,Ross,Curtis,Edmund,Jeff,Elias,Harrison,Stanley,Columbus,Lon,Ora,Ollie,Pearl,Russell,Solomon,Arch,Asa,Clayton,Enoch,Irving,Mathew,Nathaniel,Scott,Hubert,Lemuel,Andy,Ellis,Emanuel,Joshua,Millard,Vernon,Wade,Cyrus,Miles,Rudolph,Sherman,Austin,Bill,Chas,Lonnie,Monroe,Byron,Edd,Emery,Grant,Jerome,Max,Mose,Steve,Gordon,Abe,Pete,Chris,Clark,Gustave,Orville,Lorenzo,Bruce,Marcus,Preston,Bob,Dock,Donald,Jackson,Cecil,Barney,Delbert,Edmond,Anderson,Christian,Glenn,Jefferson,Luke,Neal,Burt,Ike,Myron,Tony,Conrad,Joel,Matt,Riley,Vincent,Emory,Isaiah,Nick,Ezra,Green,Juan,Clifton,Lucius,Porter,Arnold,Bud,Jeremiah,Taylor,Forrest,Roland,Spencer,Burton,Don,Emmet,Gustav,Louie,Morgan,Ned,Van,Ambrose,Chauncey,Elisha,Ferdinand,General,Julian,Kenneth,Mitchell,Allie,Josh,Judson,Lyman,Napoleon,Pedro,Berry,Dewitt,Ervin,Forest,Lynn,Pink,Ruben,Sanford,Ward,Douglas,Ole,Omer,Ulysses,Walker,Wilbert,Adelbert,Benjiman,Ivan,Jonas,Major,Abner,Archibald,Caleb,Clint,Dudley,Granville,King,Mary,Merton,Antonio,Bennie,Carroll,Freeman,Josiah,Milo,Royal,Dick,Earle,Elza,Emerson,Fletcher,Judge,Laurence,Roger,Seth,Glen,Hugo,Jimmie,Johnnie,Neil,Washington,Elwood,Gust,Harmon,Jordan,Simeon,Wayne,Wilber,Clem,Evan,Frederic,Irwin,Junius,Lafayette,Loren,Madison,Mason,Orval,Abram,Aubrey,Elliott,Hans,Karl,Minor,Wash,Wilfred,Allan,Alphonse,Dallas,Dee,Isiah,Jason,Johnny,Lawson,Lew,Micheal,Orin,Addison,Cal,Erastus,Francisco,Hardy,Lucien,Randolph,Stewart,Vern,Wilmer,Zack,Adrian,Alvah,Bertram,Clay,Ephraim,Fritz,Giles,Grover,Harris,Isom,Jesus,Johnie,Jonathan,Lucian,Malcolm,Merritt,Otho,Perley,Rolla,Sandy,Tomas,Wilford,Adolphus,Angus,Arther,Carlos,Cary,Cassius,Davis,Hamilton,Harve,Israel,Leander,Melville,Merle,Murray,Pleasant,Sterling,Steven,Axel,Boyd,Bryant,Clement,Erwin,Ezekiel,Foster,Frances,Geo,Houston,Issac,Jules,Larkin,Mat,Morton,Orlando,Pierce,Prince,Rollie,Rollin,Sim,Stuart,Wilburn,Bennett,Casper,Christ,Dell,Egbert,Elmo,Fay,Gabriel,Hector,Horatio,Lige,Saul,Smith,Squire,Tobe,Tommie,Wyatt,Alford,Alma,Alton,Andres,Burl,Cicero,Dean,Dorsey,Enos,Howell,Lou,Loyd,Mahlon,Nat,Omar,Oran,Parker,Raleigh,Reginald,Rubin,Seymour,Wm,Young,Benjamine,Carey,Carlton,Eldridge,Elzie,Garrett,Isham,Johnson,Larry,Logan,Merrill,Mont,Oren,Pierre,Rex,Rodney,Ted,Webster,West,Wheeler,Willam,Al,Aloysius,Alvie,Anna,Art,Augustine,Bailey,Benjaman,Beverly,Bishop,Clair,Cloyd,Coleman,Dana,Duncan,Dwight,Emile,Evert,Henderson,Hunter,Jean,Lem,Luis,Mathias,Maynard,Miguel,Mortimer,Nels,Norris,Pat,Phil,Rush,Santiago,Sol,Sydney,Thaddeus,Thornton,Tim,Travis,Truman,Watson,Webb,Wellington,Winfred,Wylie,Alec,Basil,Baxter,Bertrand,Buford,Burr,Cleveland,Colonel,Dempsey,Early,Ellsworth,Fate,Finley,Gabe,Garland,Gerald,Herschel,Hezekiah,Justus,Lindsey,Marcellus,Olaf,Olin,Pablo,Rolland,Turner,Verne,Volney,Williams,Almon,Alois,Alonza,Anson,Authur,Benton,Billie,Cornelious,Darius,Denis,Dillard,Doctor,Elvin,Emma,Eric,Evans,Gideon,Haywood,Hilliard,Hosea,Lincoln,Lonzo,Lucious,Lum,Malachi,Newt,Noel,Orie,Palmer,Pinkney,Shirley,Sumner,Terry,Urban,Uriah,Valentine,Waldo,Warner,Wong,Zeb,Abel,Alden,Archer,Avery,Carson,Cullen,Doc,Eben,Elige,Elizabeth,Elmore,Ernst,Finis,Freddie,Godfrey,Guss,Hamp,Hermann,Isadore,Isreal,Jones,June,Lacy,Lafe,Leland,Llewellyn,Ludwig,Manford,Maxwell,Minnie,Obie,Octave,Orrin,Ossie,Oswald,Park,Parley,Ramon,Rice,Stonewall,Theo,Tillman,Addie,Aron,Ashley,Bernhard,Bertie,Berton,Buster,Butler,Carleton,Carrie,Clara,Clarance,Clare,Crawford,Danial,Dayton,Dolphus,Elder,Ephriam,Fayette,Felipe,Fernando,Flem,Florence,Ford,Harlan,Hayes,Henery,Hoy,Huston,Ida,Ivory,Jonah,Justin,Lenard,Leopold,Lionel,Manley,Marquis,Marshal,Mart,Odie,Olen,Oral,Orley,Otha,Press,Price,Quincy,Randall,Rich,Richmond,Romeo,Russel,Rutherford,Shade,Shelby,Solon,Thurman,Tilden,Troy,Woodson,Worth,Aden,Alcide,Alf,Algie,Arlie,Bart,Bedford,Benito,Billy,Bird,Birt,Bruno,Burley,Chancy,Claus,Cliff,Clovis,Connie,Creed,Delos,Duke,Eber,Eligah,Elliot,Elton,Emmitt,Gene,Golden,Hal,Hardin,Harman,Hervey,Hollis,Ivey,Jennie,Len,Lindsay,Lonie,Lyle,Mac,Mal,Math,Miller,Orson,Osborne,Percival,Pleas,Ples,Rafael,Raoul,Roderick,Rose,Shelton,Sid,Theron,Tobias,Toney,Tyler,Vance,Vivian,Walton,Watt,Weaver,Wilton,Adolf,Albin,Albion,Allison,Alpha,Alpheus,Anastacio,Andre,Annie,Arlington,Armand,Asberry,Asbury,Asher,Augustin,Auther,Author,Ballard,Blas,Caesar,Candido,Cato,Clarke,Clemente,Colin,Commodore,Cora,Coy,Cruz,Curt,Damon,Davie,Delmar,Dexter,Dora,Doss,Drew,Edson,Elam,Elihu,Eliza,Elsie,Erie,Ernie,Ethel,Ferd,Friend,Garry,Gary,Grace,Gustaf,Hallie,Hampton,Harrie,Hattie,Hence,Hillard,Hollie,Holmes,Hope,Hyman,Ishmael,Jarrett,Jessee,Joeseph,Junious,Kirk,Levy,Mervin,Michel,Milford,Mitchel,Nellie,Noble,Obed,Oda,Orren,Ottis,Rafe,Redden,Reese,Rube,Ruby,Rupert,Salomon,Sammie,Sanders,Soloman,Stacy,Stanford,Stanton,Thad,Titus,Tracy,Vernie,Wendell,Wilhelm,Willian,Yee,Zeke,Ab,Abbott,Agustus,Albertus,Almer,Alphonso,Alvia,Artie,Arvid,Ashby,Augusta,Aurthur,Babe,Baldwin,Barnett,Bartholomew,Barton,Bernie,Blaine,Boston,Brad,Bradford,Bradley,Brooks,Buck,Budd,Ceylon,Chalmers,Chesley,Chin,Cleo,Crockett,Cyril,Daisy,Denver,Dow,Duff,Edie,Edith,Elick,Elie,Eliga,Eliseo,Elroy,Ely,Ennis,Enrique,Erasmus,Esau,Everette,Firman,Fleming,Flora,Gardner,Gee,Gorge,Gottlieb,Gregorio,Gregory,Gustavus,Halsey,Handy,Hardie,Harl,Hayden,Hays,Hermon,Hershel,Holly,Hosteen,Hoyt,Hudson,Huey,Humphrey,Hunt,Hyrum,Irven,Isam,Ivy,Jabez,Jewel,Jodie,Judd,Julious,Justice,Katherine,Kelly,Kit,Knute,Lavern,Lawyer,Layton,Leonidas,Lewie,Lillie,Linwood,Loran,Lorin,Mace,Malcom,Manly,Manson,Matthias,Mattie,Merida,Miner,Montgomery,Moroni,Murdock,Myrtle,Nate,Nathanial,Nimrod,Nora,Norval,Nova,Orion,Orla,Orrie,Payton,Philo,Phineas,Presley,Ransom,Reece,Rene,Roswell,Rowland,Sampson,Samual,Santos,Schuyler,Sheppard,Spurgeon,Starling,Sylvanus,Theadore,Theophile,Tilmon,Tommy,Unknown,Vann,Wes,Winston,Wood,Woodie,Worthy,Wright,York,Zachariah".split(',');
const lasts = "Abbott,Abel,Adams,Addison,Adkins,Agent,Aldrich,Aldridge,Alexander,Alford,Allen,Appleton,Armstrong,Arrington,Arwood,Atkins,Austin,Avery,Bailey,Baine,Baird,Baldwin,Bankston,Barker,Barnes,Barnett,Barry,Barton,Baughan,Beard,Beasley,Beck,Bell,Bennefield,Bennett,Berry,Bishop,Black,Blackwell,Blake,Blaxton,Blaylock,Blevins,Bonds,Boone,Boston,Botiler,Boyd,Bradford,Brannon,Brazeall,Brewer,Bridgeman,Brimer,Brooks,Brown,Bryant,Burdick,Burnet,Burns,Burrell,Byars,Bynum,Cagle,Cagner,Cain,Calvert,Campbell,Canada,Cantrell,Carroll,Carter,Cary,Casey,Cates,Chambers,Chappell,Chillcoat,Clark,Cline,Cole,Collman,Commens,Compton	Conly,Cooper,Cotton,Cowart,Cox,Cummings,Curtis,Davidson,Davis,Deason,Dempsey,Derrick,Dickenson,Dodd,Donough,Dougherty,Dorris,Doss,Dover,Downy,Dunahoo,Duncan,Dunlap,Dupre,Eaton,Eatton,Ellenbury,Elliott,Ellis,England,Estes,Evans,Ezell,Fair,Farley,Farris,Faught,Forester,Fowler,Freeman,Frost,Gamble,Ganes,Gardener,Garrison,Garson,Gentle,George,Gibson,Gice,Gilbert,Glenn,Godsey,Goodwin,Gosset,Grantham,Grastey,Green,Griffin,Guest,Gunter,Guthrie,Hadder,Haines,Haley,Hamilton,Hampton,Hand,Harbin,Harmon,Harper,Harris,Hatchett,Haw,Haynes,Hays,Hebster,Hefner,Henderson,Hendon,Henson,Hewitt,Hicks,Hightower	Hill,Hiller,Hilton,Hinesley,Hix,Hogg,Holden,Holloway,Holt,Hood,Hoover,Hopson,Horton,Howard,Howells,Hudson,Hughes,Hyde,Ingle,Inmon,Isabell,Ivy,Jack,Jackson,James,Jamison,Jeffries,Jenkins,Johnson,Kely),Kemp,Key,Kidd,Kiker,Kile,Kilpatrick,Kimbrell,King,Knight,Knox,Lambert,Lane,Laneford,Laramore,Lauderdale,Lawson,Lay,League,Lewis,Little,Litton,Livingston,Logan,Long,Looney,Love,Lovelady,Lovell,Lovett,Lynn,Manasco,Mann,Martin,Mathews,McClane,McClung,McClure,McColum,McCoy,McCue,McCullan,McCullar,McDaniel,McDuff,McKay,McNames,McNeil,McNutt,Mellican,Merritt,Metcalf,Miles,Miller,Mitchell,Mize,Mobley,Montgomery,Moody,Mooney,Morgan,Morris,Morrison,Motes,Mullins,Musgrove,Nelson,Nesmith,Newman,Nolen,Noles,Nortwich,Oden,Odom,O'Henry,O'Mary,O'Rear,O'Steen,Overton,Owsley,Pace,Painter,Parsons,Partain,Patek,Patterson,Payne,Peak,Pearson,Pencard,Penn,Penyl,Perkins,Perry,Peters,Pittman,Plott,Poe,Pool,Portridge,Posey,Pouder,Powell,Preston,Pugh,Pulliam,Purdy,Radford,Ramey,Ramie,Ray,Raynes,Reeves,Richardson,Riddle,Rivers,Roberts,Robinson,Roden,Rollins,Romines,Ronow,Rowe,Rush,Russell,Rutledge,Sam,Samples,Sanford,Sarun,Scogin,Segars,Setton,Sexton,Seymore,Shadix,Shain,Shank,Shelly,Shelton,Shipman,Siddens,Simmons,Simpson,Sims,Slater,Slaughter,Smathers,Smith,Sneed,South,Southern,Spain,Spane,Sparks,Staten,Steel,Stephenson,Stevens,Stewart,Stokes,Stone,Strange,Sunmers,Surin,Sutherland,Suttles,Swindle,Taberson,Tarbutton,Taylor,Teague,Tedford,Thomanson,Thomas,Thompson,Thornton,Threadgill,Tidwell,Tittle,Tubs,Tucker,Turner,Tyler,Underwood,Ussery,Wadsworth,Waid,Wakefield,Walker,Walston,Ward,Ware,Warren,Watson,Watts,Weaver,Webb,Welborn,Welsh,West,Whisenhunt,White,Whitfield,Whitman,Whitney,Whitten,Wiley,Willborn,Williams,Willis,Willson,Wilson,Wise,Woodley,Woods,Wooley,Wright,Yarborough,York,Young".split(',');

const initials = (n) => n[0] + n.split(' ')[1][0];
const firstInitial = (n) => n[0];
const group = (ns) => ns.reduce((m, n) => {
    var _a;
    (m[_a = n[0]] || (m[_a] = [])).push(n);
    return m;
}, {});
class Names {
    static randomName(used) {
        const usedPairs = new Set(used.map(initials));
        const usedFirsts = new Set(used.map(firstInitial));
        // prefer unused first initials, then any unused pairs
        for (const preferNewFirst of [true, false]) {
            const availableFirsts = preferNewFirst
                ? Names.fiAll.filter(f => !usedFirsts.has(f))
                : Names.fiAll;
            for (const fi of availableFirsts) {
                const availableLasts = Names.liAll.filter(li => !usedPairs.has(fi + li));
                if (availableLasts.length > 0) {
                    const li = (0,utils/* randFrom */.Kt)(availableLasts);
                    return `${(0,utils/* randFrom */.Kt)(Names.firstBy[fi])} ${(0,utils/* randFrom */.Kt)(Names.lastBy[li])}`;
                }
            }
        }
        // fallback to any random combination
        const fi = (0,utils/* randFrom */.Kt)(Names.fiAll);
        const li = (0,utils/* randFrom */.Kt)(Names.liAll);
        return `${(0,utils/* randFrom */.Kt)(Names.firstBy[fi])} ${(0,utils/* randFrom */.Kt)(Names.lastBy[li])}`;
    }
}
Names.firstBy = group(firsts);
Names.lastBy = group(lasts);
Names.fiAll = Object.keys(Names.firstBy);
Names.liAll = Object.keys(Names.lastBy);
const randomName = Names.randomName;

// EXTERNAL MODULE: ./src/maps/fragments/intro-barracks.txt
var intro_barracks = __webpack_require__(4461);
// EXTERNAL MODULE: ./src/game/fragment.ts
var game_fragment = __webpack_require__(8535);
// EXTERNAL MODULE: ./src/game/models/firehouse.ts
var firehouse = __webpack_require__(8646);
;// ./src/game/levels/intro.ts













const TITLE = [
    "#   #  ###  ####  #     ####       ###  #   #      ##### ##### ####  #####",
    "#   # #   # #   # #     #   #     #   # ##  #      #       #   #   # #    ",
    "# # # #   # ####  #     #   #     #   # # # #      ####    #   ####  #### ",
    "# # # #   # #   # #     #   #     #   # #  ##      #       #   #   # #    ",
    "## ## #   # #   # #     #   #     #   # #   #      #       #   #   # #    ",
    "#   #  ###  #   # ##### ####       ###  #   #      #     ##### #   # #####"
];
class Intro {
    constructor(initializer, map) {
        this.initializer = initializer;
        this.map = map;
        this.pawns = [];
        this.pawnModels = [];
    }
    setup() {
        this.addWorldOnFireRoom();
        this.addPawns();
        this.addBarracksWin();
        this.addWelcomeText();
        this.addUserSuggestion();
    }
    addWorldOnFireRoom() {
        const w = TITLE[0].length;
        const h = TITLE.length;
        const startX = (0,utils/* centeredStart */.jw)(this.map.w, TITLE[0]);
        const startY = Math.floor((this.map.h - h) / 2);
        const start = xy.XY.at(startX, startY);
        this.initializer.addRoom(rect/* Rect */.r.xyWH(start.add(-1, -1), w + 2, h + 2));
        (0,utils/* each */.__)(TITLE, (line, y) => {
            (0,utils/* each */.__)(line, (c, x) => {
                if (c === '#')
                    this.map.createAt(start.add(x, y), new fire.Fire());
            });
        });
    }
    addWelcomeText() {
        text_stroke/* TextStroke */.m.centeredPlusY(this.map, "Welcome to Fire House RL", -13, 'welcome');
        text_stroke/* TextStroke */.m.centeredPlusY(this.map, "press space to unpause", 13, 'instructions');
        const endWelcome = game.GameStepped.on(step => {
            if (step.frame <= 0)
                return;
            this.map.uiRenderer.remove('welcome');
            this.map.uiRenderer.remove('instructions');
            endWelcome();
        });
    }
    addPawns() {
        const add = (x, y) => {
            const usedNames = this.pawnModels.map(m => m.name);
            const model = new firehouse/* PawnModel */.A(randomName(usedNames), capabilities/* Capabilities */.FD.basic());
            const pawn = model.toPawn();
            this.map.createAt(xy.XY.at(x, y), pawn);
            this.pawns.push(pawn);
            this.pawnModels.push(model);
            return model;
        };
        add(55, 24);
        add(39, 24);
    }
    addBarracksWin() {
        const base = game_fragment/* Fragment */.F.load(intro_barracks);
        const rotated = base.rotate((0,utils/* randTo */.JD)(4));
        const upperLeft = xy.XY.at(59, 8);
        const rect = rotated.place(this.map, upperLeft);
        const label = '<-- GET INSIDE';
        const labelY = (0,utils/* half */.MX)(this.map.h) - 13;
        const labelX = Math.max(0, this.map.w - label.length);
        text_stroke/* TextStroke */.m.render(this.map, label, xy.XY.at(labelX, labelY), 'barracks-label');
        const ends = [
            game.GameStepped.on(() => {
                const unrescued = this.pawns.filter(p => !rect.contains(p));
                if (unrescued.length > 0)
                    return;
                this.map.uiRenderer.remove('barracks-label');
                this.pawnModels.forEach(m => m.initialLevelUp());
                state/* FirehouseMode */.M.emit(this.pawnModels);
                ends.forEach(end => end());
            }),
            pawn.PawnDied.on(_dead => {
                this.map.uiRenderer.remove('barracks-label');
                text_stroke/* TextStroke */.m.render(this.map, 'YOU LOSE', xy.XY.at(labelX, labelY), 'lose-text');
                ends.forEach(end => end());
            })
        ];
        game.LevelReset.on(() => {
            this.map.uiRenderer.remove('barracks-label');
            ends.forEach(end => end());
        });
    }
    addUserSuggestion() {
        let show = true;
        const suggest = () => {
            const step = game.GameStepped.current;
            if (!step || step.frame % 5 !== 0)
                return;
            show = !show;
            if (show)
                text_stroke/* TextStroke */.m.centered(this.map, 'click the @ symbol', this.map.h - 1, 'suggestion', () => '#ff0', () => true, 10);
            else
                this.map.uiRenderer.remove('suggestion');
        };
        suggest();
        const stop = game.GameStepped.on(suggest);
        pawn.PawnSelected.on(_pawn => { this.map.uiRenderer.remove('suggestion'); stop(); });
        game.LevelReset.on(() => { this.map.uiRenderer.remove('suggestion'); stop(); });
    }
}

// EXTERNAL MODULE: ./src/game/fires.ts
var fires = __webpack_require__(6746);
// EXTERNAL MODULE: ./src/ui/colors.ts
var colors = __webpack_require__(1919);
;// ./src/game/levels/base-level.ts









class BaseLevel {
    constructor(init, map, pawns = [], fragmentText) {
        this.init = init;
        this.map = map;
        this.pawns = pawns;
        this.fragmentText = fragmentText;
        this.showDarkness = true;
        this.hasWon = false;
        this.ends = [];
    }
    pawnsToModels() {
        return this.pawns.map(pawn => new firehouse/* PawnModel */.A(pawn.name, pawn.capabilities));
    }
    setup() {
        const fragment = game_fragment/* Fragment */.F.fromText(this.fragmentText);
        fragment.place(this.map, xy.XY.at(0, 0));
        this.igniteRandomStoves(1);
        this.spawnPawns();
        this.ends.push(game.GameStepped.on(stepInfo => this.checkWinCondition(stepInfo)));
        this.ends.push(game.LevelWon.on(() => this.handleContinue()));
        this.ends.push(game.LevelReset.on(() => this.teardown()));
    }
    igniteRandomStoves(count) {
        const ovens = [];
        this.map.eachCell(cell => {
            cell.onItem(/Oven/, oven => ovens.push(oven));
        });
        (0,utils/* times */.Hn)(count, () => {
            const oven = (0,utils/* randFrom */.Kt)(ovens);
            oven.cell.cardinals().find(cell => cell.wall())?.wall()?.ignite();
        });
    }
    spawnPawns() {
        const spawns = [];
        this.map.eachCell(cell => {
            cell.onItem(/Spawn point/, item => {
                spawns.push(cell.xy);
            });
        });
        (0,utils/* each */.__)(this.pawns, (pawn, index) => {
            const fallback = xy.XY.at((0,utils/* half */.MX)(this.map.w) + index, this.map.h - 1);
            const location = spawns[index] ?? fallback;
            this.map.createAt(location, pawn);
        });
    }
    checkWinCondition(stepInfo) {
        if (fires/* Fires */.UQ.burningCount !== 0 || this.hasWon)
            return;
        this.hasWon = true;
        this.map.display.clear();
        this.map.smokeDisplay.clear();
        this.map.uiRenderer.clearStrokes();
        text_stroke/* TextStroke */.m.centered(this.map, `YOU WIN, ${stepInfo.frame} TURNS - PRESS SPACE TO CONTINUE`, this.map.h / 2, 'win-message', () => colors/* WHITE */.UE);
        game.LevelWon.emit(true);
    }
    handleContinue() {
        state/* FirehouseMode */.M.emit(this.pawnsToModels());
        this.teardown();
    }
    teardown() {
        this.ends.forEach(end => end());
        this.ends = [];
    }
}

// EXTERNAL MODULE: ./src/maps/fragments/manor.txt
var manor = __webpack_require__(9110);
;// ./src/game/levels/level1.ts


class Level1 extends BaseLevel {
    constructor(init, map, pawns = []) {
        super(init, map, pawns, manor);
    }
}

// EXTERNAL MODULE: ./src/maps/fragments/apartment-complex.txt
var apartment_complex = __webpack_require__(9620);
;// ./src/game/levels/level2.ts


class Level2 extends BaseLevel {
    constructor(init, map, pawns = []) {
        super(init, map, pawns, apartment_complex);
    }
}

// EXTERNAL MODULE: ./src/maps/fragments/diner.txt
var diner = __webpack_require__(5461);
;// ./src/game/levels/level3.ts


class Level3 extends BaseLevel {
    constructor(init, map, pawns = []) {
        super(init, map, pawns, diner);
    }
}

;// ./src/game/initializer.ts











class Initializer {
    constructor(map) {
        this.map = map;
        this.currentLevel = 0;
    }
    initialize() {
        this.currentLevel = 0;
        this.start(new Intro(this, this.map));
    }
    start(level) {
        this.reset();
        this.addField();
        level.setup();
        game.GameStepped.emit({ frame: 0, stepMs: 0 });
        return { showDarkness: level.showDarkness };
    }
    startNext(pawns = []) {
        this.currentLevel++;
        if (this.currentLevel === 1) {
            return this.start(new Level1(this, this.map, pawns));
        }
        else if (this.currentLevel === 2) {
            return this.start(new Level2(this, this.map, pawns));
        }
        else if (this.currentLevel === 3) {
            console.log('Starting level 3');
            return this.start(new Level3(this, this.map, pawns));
        }
        this.currentLevel = 0;
        return this.startNext(pawns);
    }
    reset() {
        this.map.killAll();
        this.map.display.clear();
        this.map.smokeDisplay.clear();
        this.map.uiRenderer.clearStrokes();
        fires/* Fires */.UQ.reset();
        game.LevelReset.emit();
    }
    addField() {
        rect/* Rect */.r.xyWH(xy.XY.at(0, 0), this.map.w, this.map.h).eachCell(xy => {
            this.map.createAt(xy, new floor/* Floor */.Z());
        });
    }
    addRoom(rect) {
        rect.eachBorder(xy => {
            this.map.createAt(xy, new wall/* Wall */.j());
        });
        [rect.ul.add(1, 1), rect.ur.add(-1, 1), rect.bl.add(1, -1), rect.br.add(-1, -1)].forEach(xy => {
            this.map.createAt(xy, new lamp/* Lamp */.z());
        });
    }
}


/***/ }),

/***/ 4461:
/***/ ((module) => {

module.exports = ".#########\n.#.......#\n.#.*...*.#\n*#.......#\n.+.......#\n*#.......#\n.#.*...*.#\n.#.......#\n.#########\nKEY\n# = Wall\n* = Lamp\n+ = Door ";

/***/ }),

/***/ 4502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Smoke)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1721);
/* harmony import */ var _game_xy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);




class Smoke extends _drawable__WEBPACK_IMPORTED_MODULE_2__.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'smoke';
        this.transparency = 0.1;
        this.light = () => 0;
        this.char = () => '+';
        this.color = () => _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .SMOKE */ .oE.random();
    }
    draw(_debug, illumination) {
        if (illumination <= 0)
            return false;
        const fg = this.color();
        this.cell.map.drawAtSmoke(this.cell.xy.x, this.cell.xy.y, this.char(), fg, 'transparent');
        return false;
    }
    agedOut() {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo) {
            return this.age > 3;
        }
        return !(0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(this.age / 3);
    }
    shouldDrift() {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo) {
            return this.age % 4 === 0;
        }
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .oneIn */ .A7)(4);
    }
    driftTo() {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__/* .isInTestMode */ .Jo) {
            const r = this.r();
            if (_game_xy__WEBPACK_IMPORTED_MODULE_3__.XY.oob(r.xy.x, r.xy.y))
                return this.l();
            return r;
        }
        return this.cell.map.get(this.cell.xy.random());
    }
    drift() {
        const target = this.driftTo();
        if (!target.passable())
            return;
        this.cell.queueMove(this, target.xy);
    }
    step() {
        if (this.agedOut()) {
            this.cell.died(this);
            return;
        }
        if (this.shouldDrift())
            this.drift();
    }
}


/***/ }),

/***/ 4732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ submitIssue)
/* harmony export */ });
const url = 'https://k69b0whqzl.execute-api.us-west-1.amazonaws.com/firehouse-rl-feedback-lambda';
const submitIssue = async (title, body, image) => {
    const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, image })
    });
    if (!r.ok)
        return null;
    const j = await r.json();
    const n = j.issueUrl?.split('/').pop();
    return n ? +n : null;
};


/***/ }),

/***/ 5056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 5072:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 5074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F8: () => (/* binding */ gzSize),
/* harmony export */   ZI: () => (/* binding */ gzip),
/* harmony export */   kd: () => (/* binding */ gunzip),
/* harmony export */   vy: () => (/* binding */ gzBytes),
/* harmony export */   wz: () => (/* binding */ longUrl)
/* harmony export */ });
const encode = (u8) => btoa(String.fromCharCode(...u8));
const decode = (b) => Uint8Array.from(atob(b), c => c.charCodeAt(0));
const pump = async (s) => new Uint8Array(await new Response(s).arrayBuffer());
const gzip = async (s) => {
    if (typeof CompressionStream === 'undefined')
        return btoa(s);
    const cs = new CompressionStream('gzip');
    const w = cs.writable.getWriter();
    w.write(new TextEncoder().encode(s));
    w.close();
    return encode(await pump(cs.readable));
};
const gunzip = async (b) => {
    if (typeof DecompressionStream === 'undefined')
        return atob(b);
    const ds = new DecompressionStream('gzip');
    const w = ds.writable.getWriter();
    w.write(decode(b));
    w.close();
    return new TextDecoder().decode(await pump(ds.readable));
};
const longUrl = (u) => u.length > 2000;
const gzBytes = (g) => atob(g).length;
const gzSize = async (s) => gzBytes(await gzip(s));


/***/ }),

/***/ 5264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ Feedback)
});

;// ./src/html/feedback.html
/* harmony default export */ const feedback = ("<div id=\"feedback-modal\" class=\"modal-window column gap-form\">\n        <div class=\"feedback-header row items-between cross-aligned-center gap-modal-header border-bottom\">\n            <h3>Submit Feedback</h3>\n            <button id=\"feedback-close\" class=\"button-secondary close-button\">×</button>\n        </div>\n        <div class=\"feedback-form column gap-form\">\n            <div class=\"input-group\">\n                <label for=\"feedback-title\">Title:</label>\n                <input id=\"feedback-title\" class=\"input\" type=\"text\" placeholder=\"\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"feedback-body\">Details:</label>\n                <textarea id=\"feedback-body\" class=\"input\" rows=\"6\" placeholder=\"Start typing...\"></textarea>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"feedback-screenshot\">Screenshot (drop/paste or upload, 10MB max):</label>\n                <input id=\"feedback-screenshot\" class=\"input\" type=\"file\" accept=\"image/*\">\n                <div id=\"feedback-image-preview\" class=\"hidden\">\n                    <img id=\"feedback-preview-img\" alt=\"Preview\" style=\"max-width: 300px; max-height: 200px; border: 1px solid #ccc; border-radius: 4px; margin-top: 8px;\">\n                    <button id=\"feedback-remove-image\" type=\"button\" style=\"margin-left: 8px; padding: 2px 6px; font-size: 12px;\">Remove</button>\n                </div>\n            </div>\n            <div class=\"feedback-actions row aligned-end gap-buttons\">\n                <div id=\"feedback-normal-buttons\" class=\"row gap-buttons\">\n                    <button id=\"feedback-submit\" class=\"button-primary\">Submit Feedback</button>\n                    <button id=\"feedback-cancel\" class=\"button-secondary\">Cancel</button>\n                </div>\n                <div id=\"feedback-success-buttons\" class=\"hidden row gap-buttons\">\n                    <button id=\"feedback-ok\" class=\"button-primary\">OK</button>\n                </div>\n            </div>\n        <div id=\"feedback-status\" class=\"feedback-status hidden\"></div>\n    </div>\n    </div>\n");
// EXTERNAL MODULE: ./src/ui/modal.ts
var modal = __webpack_require__(5382);
// EXTERNAL MODULE: ./src/ui/issue.ts
var issue = __webpack_require__(4732);
;// ./src/ui/feedback.ts



class Feedback extends modal/* Modal */.a {
    constructor() {
        super('#feedback-modal');
        this.titleTouched = false;
        this.isSubmitting = false;
        this.image = null;
        this.documentListenersAdded = false;
        this.handleDragOver = (e) => {
            if (!this.isVisible())
                return;
            e.preventDefault();
        };
        this.handleDrop = (e) => {
            if (!this.isVisible())
                return;
            e.preventDefault();
            const file = e.dataTransfer?.files?.[0];
            if (file && file.type.startsWith('image/'))
                this.read(file);
        };
        this.handlePaste = (e) => {
            if (!this.isVisible())
                return;
            const file = e.clipboardData?.files?.[0];
            if (file && file.type.startsWith('image/')) {
                e.preventDefault();
                this.read(file);
            }
        };
        this.div.appendFileHtml(feedback);
        this.setupEventListeners();
    }
    show() {
        super.show();
        this.reset();
        this.addDocumentListeners();
        this.div.d1('#feedback-body').focus();
    }
    hide() {
        super.hide();
        this.removeDocumentListeners();
        this.reset();
    }
    prefill(title, body) {
        this.div.d1('#feedback-title').setVal(title);
        this.div.d1('#feedback-body').setVal(body);
        this.updateSubmitButton();
    }
    isVisible() { return this.div.showing(); }
    reset() {
        this.titleTouched = false;
        this.isSubmitting = false;
        this.image = null;
        this.div.d1('#feedback-title').setVal('');
        this.div.d1('#feedback-body').setVal('');
        this.div.d1('#feedback-screenshot').setVal('');
        this.div.d1('#feedback-status').text('').hide();
        this.div.d1('#feedback-image-preview').hide();
        this.resetButtons();
        this.updateSubmitButton();
    }
    setupEventListeners() {
        this.div.d1('#feedback-close').onClick(() => this.hide());
        this.div.d1('#feedback-cancel').onClick(() => this.hide());
        this.div.d1('#feedback-submit').onClick(() => this.submit());
        this.div.d1('#feedback-ok').onClick(() => this.hide());
        this.div.d1('#feedback-title').onInput(() => {
            this.titleTouched = true;
            this.updateSubmitButton();
        });
        this.div.d1('#feedback-body').onInput(() => {
            this.updateTitleFromBody();
            this.updateSubmitButton();
        });
        const i = this.div.d1('#feedback-screenshot');
        i.on('change', () => this.pick());
        this.div.d1('#feedback-remove-image').onClick(() => this.removeImage());
    }
    modalKeyHandled(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            this.submit();
            return true;
        }
        return false;
    }
    updateTitleFromBody() {
        if (this.titleTouched)
            return;
        const bodyTextarea = this.div.d1('#feedback-body');
        const titleInput = this.div.d1('#feedback-title');
        const bodyText = bodyTextarea.getVal();
        if (!bodyText) {
            titleInput.setVal('');
            return;
        }
        // Split on punctuation or newlines, but preserve the punctuation
        const match = bodyText.match(/^([^.!?\n]+[.!?]?|\n)/i);
        if (match) {
            let firstSentence = match[1].trim();
            // If it's just a newline, take everything up to the newline
            if (!firstSentence) {
                const lineBreakIndex = bodyText.indexOf('\n');
                if (lineBreakIndex > 0) {
                    firstSentence = bodyText.substring(0, lineBreakIndex).trim();
                }
            }
            if (firstSentence) {
                if (firstSentence.length > 50) {
                    titleInput.setVal(firstSentence.substring(0, 47) + '...');
                }
                else {
                    titleInput.setVal(firstSentence);
                }
            }
        }
    }
    generateTitleFromBody(bodyText) {
        if (!bodyText.trim())
            return 'Feedback';
        // Get first line, up to 120 characters
        const firstLine = bodyText.split('\n')[0].trim();
        return firstLine.length > 120 ? firstLine.substring(0, 117) + '...' : firstLine;
    }
    updateSubmitButton() {
        const bodyTextarea = this.div.d1('#feedback-body');
        const submitButton = this.div.d1('#feedback-submit');
        const hasBody = bodyTextarea.trimmed().length > 0;
        submitButton.disable(this.isSubmitting || !hasBody);
    }
    pick() {
        const file = this.div.d1('#feedback-screenshot').node().files?.[0];
        if (file)
            this.read(file);
    }
    addDocumentListeners() {
        if (this.documentListenersAdded)
            return;
        this.documentListenersAdded = true;
        document.addEventListener('dragover', this.handleDragOver);
        document.addEventListener('drop', this.handleDrop);
        document.addEventListener('paste', this.handlePaste);
    }
    removeDocumentListeners() {
        if (!this.documentListenersAdded)
            return;
        this.documentListenersAdded = false;
        document.removeEventListener('dragover', this.handleDragOver);
        document.removeEventListener('drop', this.handleDrop);
        document.removeEventListener('paste', this.handlePaste);
    }
    removeImage() {
        this.image = null;
        this.div.d1('#feedback-screenshot').setVal('');
        this.div.d1('#feedback-image-preview').hide();
        this.div.d1('#feedback-status').hide().text('');
    }
    read(f) {
        const s = this.div.d1('#feedback-status');
        if (f.size > 10000000) {
            s.show().style('color', '#f44').text('Screenshot too large (10MB max)');
            this.div.d1('#feedback-screenshot').setVal('');
            this.image = null;
            this.div.d1('#feedback-image-preview').hide();
            return;
        }
        s.hide().text('');
        const r = new FileReader();
        r.onload = () => {
            this.image = r.result;
            this.showImagePreview(this.image);
        };
        r.readAsDataURL(f);
    }
    showImagePreview(imageData) {
        const preview = this.div.d1('#feedback-image-preview');
        const img = this.div.d1('#feedback-preview-img');
        img.attr('src', imageData);
        preview.show();
    }
    async submit() {
        if (this.isSubmitting)
            return;
        const titleInput = this.div.d1('#feedback-title');
        const bodyTextarea = this.div.d1('#feedback-body');
        const statusDiv = this.div.d1('#feedback-status');
        let title = titleInput.trimmed();
        const body = bodyTextarea.trimmed();
        if (!title) {
            title = this.generateTitleFromBody(body);
        }
        this.isSubmitting = true;
        this.updateSubmitButton();
        statusDiv.show().style('color', '#0a0').text('Submitting feedback...');
        try {
            const n = await (0,issue/* submitIssue */.E)(title, body, this.image || undefined);
            if (n) {
                statusDiv.show().style('color', '#0a0')
                    .text(`Issue #${n} has been submitted, thank you for your feedback!`);
                this.showSuccessState();
            }
            else {
                statusDiv.show().style('color', '#f44')
                    .text('Failed to send feedback. Please try again.');
            }
        }
        catch {
            statusDiv.show().style('color', '#f44')
                .text('Network error. Please check your connection and try again.');
        }
        finally {
            this.isSubmitting = false;
            this.updateSubmitButton();
        }
    }
    showSuccessState() {
        this.div.d1('#feedback-normal-buttons').hide();
        this.div.d1('#feedback-success-buttons').show();
    }
    resetButtons() {
        this.div.d1('#feedback-normal-buttons').show();
        this.div.d1('#feedback-success-buttons').hide();
    }
}


/***/ }),

/***/ 5382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Modal),
/* harmony export */   r: () => (/* binding */ ModalShowing)
/* harmony export */ });
/* harmony import */ var _d3_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(334);


const ModalShowing = new _signal__WEBPACK_IMPORTED_MODULE_1__/* .Signal */ .H();
class Modal {
    constructor(id) {
        this.keyDown = (e) => {
            const handled = this.modalKeyHandled(e);
            if (!handled && e.key === 'Escape')
                this.hide();
            e.stopPropagation();
        };
        this.keyUp = (e) => e.stopPropagation();
        this.div = (0,_d3_extend__WEBPACK_IMPORTED_MODULE_0__.d1)(id);
        Modal.list.push(this);
    }
    show() {
        Modal.list.forEach(m => { if (m !== this)
            m.hide(); });
        const r = (0,_d3_extend__WEBPACK_IMPORTED_MODULE_0__.d1)('#game-container').bounds();
        this.div.style('left', `${r.left + 50}px`).style('top', `${r.top + 50}px`);
        this.div.show();
        ModalShowing.emit(true);
        document.addEventListener('keydown', this.keyDown, true);
        document.addEventListener('keyup', this.keyUp, true);
    }
    hide() {
        this.div.hide();
        document.removeEventListener('keydown', this.keyDown, true);
        document.removeEventListener('keyup', this.keyUp, true);
        if (!Modal.list.some(m => m.div.showing()))
            ModalShowing.emit(false);
    }
    modalKeyHandled(e) {
        return false;
    }
}
Modal.list = [];


/***/ }),

/***/ 5461:
/***/ ((module) => {

module.exports = "..............................................................................\n..............................................................................\n..####.##....######################################......###################..\n..####.##....######################################......#⇶⇶#..#⇶⇶#⇶⇶#..#..#..\n..####.##....######################################......#⇶⇶#..#⇶⇶#⇶⇶#⇶⇶#..#..\n..####.##....######################################......#⇶⇶#..#⇶⇶#⇶⇶#⇶⇶#..#..\n..####.##....######################################......#.....#.....#⇶⇶...#..\n..####.##....######################################......#.....#.....#.....#..\n..####.##....######################################...........................\n..####.##.....................................................................\n..####.##.....................................................................\n..####.##.....................................................................\n..####.##.....................................................................\n..####.##....#..□□□.□□□.□□□.......................#...........................\n..####.##....####*###*###*#####□##¤##□##¤##□##¤####...........................\n..####.##....#.............*░░░*░░░░░*░░░░░*░░░░░*#....✰......................\n..####.##....+...............◘◘.◘◘.◘◘.◘◘.◘◘.◘◘.◘◘.#✰✰#✰✰✰✰✰...................\n..####.##....##¤+##¤+#+¤##...hh.hh.hh.hh.hh.hh.hh.¤✰#*#✰#.....................\n..####.##....#_..#...#...#........................+...........................\n..####.##....#_ff#↻.f#f.↻#..hh..hh.hh.......*hh...+...........................\n..####.##....##¤###¤#¤#¤##..◘◘*.◘◘.◘◘..*hh..h◘◘h..¤✰#*#✰#.....................\n..####.##....#*..#░░░░░░░#..◘◘..◘◘.◘◘..h◘◘h.h◘◘h..#✰✰#✰✰✰✰✰...................\n.......##....#...¤░.....*#..hh..hh.hh..h◘◘h.h◘◘h..#....✰......................\n..#######....#...#░░.░...#.............h◘◘h.h◘◘h..#...........................\n..#######....#...#░..░.░.#++##¤#¤#¤##..h◘◘h..hh*..#...........................\n..#######....#...¤░░.░.░.#..◉◉░◉◉░◉◉*#..hh*.......#...........................\n..#######...*#*..#░..░.░.*..........░□............#...........................\n..#######....+...#░*................░#............#.........####.#####.#####..\nSS#######....+...¤░░░░░░░░..░░░ff░ff*#**░░░░░░░░**#.........####.#####.#####..\nSSS..........#################¤#¤#¤###□□###□####□#####......####.#####.#####..\n.S#######...................................................####.#####.#####..\n..#######...................................................####.#####.#####..\n..#######...................................................####.#####.#####..\n..#######............................#########.###..........####.#####........\n.....................................#########.###..........####.###########..\n..#######............................#########.###..........################..\n..#######....#####.#######.#####.....#########.###..........################..\n..#######....#####.#######.#####.....#########.###..........################..\n..#######....#####.#######.#####.....#########.###........................##..\n..#######....#####......##.#####............................#############.##..\n..#######....######.######.#####.....#########.###..........#############.##..\n..#######....######.######.#####.....#########.###........................##..\n..#######....######.######.#####............................################..\n..#######...................................................################..\n..............................................................................\n..............................................................................\nKEY\n# = Wall\n⇶ = car\n□ = Window\n* = Lamp\n¤ = WallLight\n░ = Counter\n✰ = Bush\n+ = Door\n◘ = Table\nh = Chair\n_ = Tub\nf = Sink\n↻ = Toilet\n◉ = Oven\nS = spawn point\n";

/***/ }),

/***/ 5633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ CellLayers)
/* harmony export */ });
class CellLayers {
    constructor() {
        this.data = {};
    }
    draw(visibleLayers, debug, illumination) {
        CellLayers.layerNames.some(name => {
            if (visibleLayers.size > 0 && !visibleLayers.has(name))
                return false;
            const drawable = this.data[name];
            if (drawable?.draw) {
                return drawable.draw(debug, illumination);
            }
            return false;
        });
    }
    step() {
        CellLayers.layerNames.forEach(name => {
            const drawable = this.data[name];
            if (!drawable)
                return;
            drawable.step();
            drawable.age++;
        });
    }
    set(drawable) {
        this.data[drawable.layer] = drawable;
    }
    onExisting(layerOrDrawable, fOfExisting) {
        const layer = typeof layerOrDrawable === 'string' ? layerOrDrawable : layerOrDrawable.layer;
        const existing = this.data[layer];
        if (!existing)
            return;
        fOfExisting(existing);
    }
    remove(drawable) {
        delete this.data[drawable.layer];
        drawable.cell = null;
    }
    passable() {
        return CellLayers.layerNames.every(name => {
            const drawable = this.data[name];
            return drawable?.passable ?? true;
        });
    }
    transparency() {
        const transparencies = CellLayers.layerNames
            .map(name => this.data[name]?.transparency)
            .filter(t => t !== undefined);
        return transparencies.length > 0 ? Math.min(...transparencies) : 1;
    }
    lit() {
        return CellLayers.layerNames.some(name => {
            const drawable = this.data[name];
            return drawable && drawable.light() > 0;
        });
    }
}
CellLayers.layerNames = ['pawn', 'smoke', 'fire', 'walls', 'items', 'floor'];
CellLayers.materialLayers = ['walls', 'items', 'pawn'];


/***/ }),

/***/ 6185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $1: () => (/* binding */ $1),
/* harmony export */   A7: () => (/* binding */ oneIn),
/* harmony export */   Af: () => (/* binding */ onClick),
/* harmony export */   C8: () => (/* binding */ the),
/* harmony export */   H3: () => (/* binding */ pushMap),
/* harmony export */   Hn: () => (/* binding */ times),
/* harmony export */   IP: () => (/* binding */ addMethodInvisible),
/* harmony export */   IX: () => (/* binding */ isLocal),
/* harmony export */   Im: () => (/* binding */ isEmpty),
/* harmony export */   J9: () => (/* binding */ toMap),
/* harmony export */   JD: () => (/* binding */ randTo),
/* harmony export */   Jo: () => (/* binding */ isInTestMode),
/* harmony export */   Kt: () => (/* binding */ randFrom),
/* harmony export */   MX: () => (/* binding */ half),
/* harmony export */   N2: () => (/* binding */ toggleHidden),
/* harmony export */   Nb: () => (/* binding */ bombUnless),
/* harmony export */   Ur: () => (/* binding */ normalizeIndentedText),
/* harmony export */   Wh: () => (/* binding */ positiveMod),
/* harmony export */   Wo: () => (/* binding */ toEntries),
/* harmony export */   ZL: () => (/* binding */ isBranchRunner),
/* harmony export */   __: () => (/* binding */ each),
/* harmony export */   av: () => (/* binding */ bombIf),
/* harmony export */   cd: () => (/* binding */ eachPair),
/* harmony export */   fv: () => (/* binding */ bomb),
/* harmony export */   iT: () => (/* binding */ onMousemove),
/* harmony export */   iw: () => (/* binding */ onLastMaybe),
/* harmony export */   jw: () => (/* binding */ centeredStart),
/* harmony export */   nd: () => (/* binding */ downTimes),
/* harmony export */   ov: () => (/* binding */ hasContent),
/* harmony export */   rW: () => (/* binding */ addGetter)
/* harmony export */ });
/* unused harmony exports setTestMode, setMoveContext, rollD6, map, matched, pairs, addMethod, mapToGridDigits, onMouseover, throttle */
let isInTestMode = false;
let moveDebug = '';
const setTestMode = (value) => { isInTestMode = value; };
const setMoveContext = (d = '') => { moveDebug = d; };
function bomb(msg) {
    console.error(msg);
    if (moveDebug)
        console.error('queued at:\n' + moveDebug);
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
const randTo = (n) => {
    bombIf(isInTestMode, () => "can't use random functions in test mode");
    return Math.floor(Math.random() * n);
};
function randFrom(ts) {
    bombIf(ts.length === 0, 'need at least one element');
    return ts[randTo(ts.length)];
}
const rollD6 = (n) => {
    if (isInTestMode)
        return n * 5;
    let s = 0;
    times(n, _ => s += randTo(6) + 1);
    return s;
};
function times(startOrEnd, endOrCallback, maybeCallback) {
    if (typeof endOrCallback === 'function') {
        const endExclusive = startOrEnd;
        const callback = endOrCallback;
        bombIf(endExclusive < 0, 'Cannot iterate negatively');
        for (let index = 0; index < endExclusive; index++)
            callback(index);
    }
    else {
        const startInclusive = startOrEnd;
        const endExclusive = endOrCallback;
        const callback = maybeCallback;
        bombIf(endExclusive < startInclusive, 'Cannot iterate negatively');
        for (let index = startInclusive; index < endExclusive; index++)
            callback(index);
    }
}
const downTimes = (n, f) => {
    bombIf(n < 0, 'Cannot iterate down from a negative number');
    for (let i = n - 1; i >= 0; i--)
        f(i);
};
const positiveMod = (n, m) => ((n % m) + m) % m;
function map(n, fOfIndex) {
    bombIf(n < 0, 'Cannot iterate negatively');
    return Array.from({ length: n }, (_, i) => fOfIndex(i));
}
const matched = (regex, text) => {
    const m = text.match(regex);
    bombUnless(!!m, () => `No match for ${regex} in line: ${text}`);
    return m.slice(1);
};
function each(xs, fOfTandI) {
    for (let i = 0; i < xs.length; i++)
        fOfTandI(xs[i], i);
}
const hasContent = (xs) => xs instanceof Map ? xs.size > 0 : xs.length > 0;
const isEmpty = (xs) => xs instanceof Map ? xs.size === 0 : xs.length === 0;
const onLastMaybe = (xs, f) => hasContent(xs) && f(xs[xs.length - 1]);
const eachPair = (m, f) => {
    if (m instanceof Map)
        m.forEach((v, k) => f(k, v));
    else
        m.forEach(([k, v]) => f(k, v));
};
const pairs = (o) => Object.entries(o);
const toEntries = (xs, entry) => Object.fromEntries(xs.map(entry));
const toMap = (keys, v) => Object.fromEntries(keys.map(k => [k, v(k)]));
const addMethodInvisible = (o, k, v) => {
    Object.defineProperty(o, k, { value: v, enumerable: false });
    return o;
};
const addMethod = (o, k, v) => {
    Object.defineProperty(o, k, { value: v, enumerable: true });
    return o;
};
const addGetter = (o, k, get, enumerable = true) => {
    Object.defineProperty(o, k, { get, enumerable });
    return o;
};
function mapToGridDigits(size, mapFn) {
    const { XY } = __webpack_require__(88);
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
    bombIf(isInTestMode, () => "can't use random functions in test mode");
    return Math.random() < 1 / n;
};
const half = (n) => Math.floor(n / 2);
const centeredStart = (fullWidth, text) => Math.floor((fullWidth - text.length) / 2);
const $1 = (id) => bombUnless(document.getElementById(id), () => `No ${id} element`);
const onClick = (e, f) => e.addEventListener('click', f);
const onMouseover = (e, f) => e.addEventListener('mouseover', f);
const onMousemove = (e, f) => e.addEventListener('mousemove', f);
const toggleHidden = (e) => {
    e.classList.toggle('hidden');
};
const throttle = (ms, fn) => {
    let lastCall = 0;
    return () => {
        const now = Date.now();
        if (now - lastCall < ms)
            return;
        lastCall = now;
        fn();
    };
};
function the(list, label) {
    bombIf(list.length !== 1, `Expected exactly one ${label ?? 'item'}, but got ${list.length}`);
    return list[0];
}
const pushMap = (m, k, v) => {
    if (!m.has(k))
        m.set(k, []);
    m.get(k).push(v);
};
const isLocal = () => window.location.hostname === 'localhost';
const isBranchRunner = () => window.location.port === '8081';
function normalizeIndentedText(text) {
    const lines = text.split('\n').map(line => line.replace(/\r$/, ''));
    const firstContentLine = lines.find(line => line.trim().length > 0);
    const initialIndent = firstContentLine ? firstContentLine.match(/^\s*/)?.[0] || '' : '';
    return lines.map(line => {
        if (line.startsWith(initialIndent)) {
            return line.slice(initialIndent.length);
        }
        return line.replace(/^\s*/, ''); // fallback for lines with less indent
    }).join('\n');
}


/***/ }),

/***/ 6314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 6372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ EditorItem)
/* harmony export */ });
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1721);

class EditorItem extends _drawable__WEBPACK_IMPORTED_MODULE_0__.Drawable {
    constructor(symbol, name) {
        super();
        this.symbol = symbol;
        this.name = name;
        this.layer = 'items';
        this.passable = false;
        this.light = () => 0;
        this.char = () => this.symbol;
        this.color = () => '#0a0';
        this.keyName = () => this.name;
    }
}


/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ Config)
/* harmony export */ });
/* harmony import */ var rot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1364);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1919);
var _a;


class Config {
    static display(width, height, bg) {
        return new rot_js__WEBPACK_IMPORTED_MODULE_0__/* .Display */ .nl({
            width,
            height,
            fontSize: _a.FONT_SIZE,
            fontFamily: _a.FONT_FAMILY,
            forceSquareRatio: true,
            fg: _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .FOREGROUND */ .u6,
            bg
        });
    }
}
_a = Config;
Config.WIDTH = 90;
Config.HEIGHT = 50;
Config.FONT_SIZE = 16;
Config.FONT_FAMILY = "Courier, monospace";
Config.createDisplay = (width, height) => _a.display(width, height, _ui_colors__WEBPACK_IMPORTED_MODULE_1__/* .BACKGROUND */ .h4);
Config.createTransparentDisplay = (width, height) => _a.display(width, height, 'transparent');


/***/ }),

/***/ 6488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ PlayControls)
/* harmony export */ });
/* harmony import */ var _d3_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6185);


class PlayControls {
    constructor(container, callbacks) {
        this.speed = 1;
        this.showSpeeds = () => {
            const speedButtons = this.div.d1('.speed-buttons');
            speedButtons.show();
            const handler = (e) => {
                speedButtons.hide();
                const speed = e.target.getAttribute('data-speed');
                if (speed) {
                    this.speed = parseFloat(speed);
                    this.callbacks.onSpeedChange(this.speed);
                }
                document.removeEventListener('mouseup', handler);
            };
            document.addEventListener('mouseup', handler);
        };
        this.getSpeed = () => this.speed;
        this.callbacks = callbacks;
        this.div = (0,_d3_extend__WEBPACK_IMPORTED_MODULE_0__.d1)(container);
        this.createHTML();
        this.setupControls();
    }
    createHTML() {
        this.div.html(`
      <button class="playpause-button button-secondary button-large">▶️</button>
      <div class="speed-buttons column hidden">
        <button class="button-secondary button-large speed-button" data-speed="0.25">¼x</button>
        <button class="button-secondary button-large speed-button" data-speed="0.5">½x</button>
        <button class="button-secondary button-large speed-button" data-speed="1">1x</button>
        <button class="button-secondary button-large speed-button" data-speed="2">2x</button>
      </div>
    `);
    }
    setupControls() {
        const playButton = this.div.d1('.playpause-button');
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .onClick */ .Af)(playButton.node(), () => this.callbacks.onPlayPause());
        playButton.on('mousedown', this.showSpeeds);
    }
    updatePlayPauseButton() {
        const button = this.div.d1('.playpause-button');
        button.text(this.callbacks.getIsRunning() ? '⏸️' : '▶️');
    }
}


/***/ }),

/***/ 6541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   j: () => (/* binding */ childMatcher)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ 6746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EZ: () => (/* binding */ BurningCountersUpdated),
/* harmony export */   UQ: () => (/* binding */ Fires)
/* harmony export */ });
/* unused harmony exports BurningNew, BurningOut */
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(334);
/* harmony import */ var _d3_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(452);
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1919);



const BurningNew = new _signal__WEBPACK_IMPORTED_MODULE_0__/* .SignalWithCurrent */ .Y();
const BurningOut = new _signal__WEBPACK_IMPORTED_MODULE_0__/* .SignalWithCurrent */ .Y();
const BurningCountersUpdated = new _signal__WEBPACK_IMPORTED_MODULE_0__/* .SignalWithCurrent */ .Y();
class Fires {
    static get burningCount() {
        return this.fires + this.items + this.people;
    }
    static increment(obj) {
        const { Fire } = __webpack_require__(1267);
        const { Pawn } = __webpack_require__(2705);
        if (obj instanceof Fire)
            this.fireSet.add(obj);
        else if (obj instanceof Pawn)
            this.peopleSet.add(obj);
        else
            this.itemSet.add(obj);
        BurningNew.emit();
        this.updateCounters();
    }
    static decrement(obj) {
        const { Fire } = __webpack_require__(1267);
        const { Pawn } = __webpack_require__(2705);
        if (obj instanceof Fire)
            this.fireSet.delete(obj);
        else if (obj instanceof Pawn)
            this.peopleSet.delete(obj);
        else
            this.itemSet.delete(obj);
        BurningOut.emit();
        this.updateCounters();
    }
    static reset() {
        this.fires = 0;
        this.items = 0;
        this.people = 0;
        this.fireSet.clear();
        this.itemSet.clear();
        this.peopleSet.clear();
        this.updateCounters();
    }
    static extinguishAll() {
        this.fireSet.forEach(fire => {
            fire.cell.died(fire);
        });
        this.itemSet.forEach(item => {
            item.material.extinguish();
        });
        this.peopleSet.forEach(person => {
            person.material.extinguish();
        });
        this.updateCounters();
    }
    static decorate(name) {
        const count = this[name];
        const icon = (0,_d3_extend__WEBPACK_IMPORTED_MODULE_1__.d1)(`#${name}-icon`);
        const countEl = (0,_d3_extend__WEBPACK_IMPORTED_MODULE_1__.d1)(`#${name}-count`);
        const color = count > 0 ? _ui_colors__WEBPACK_IMPORTED_MODULE_2__/* .FIRE */ .ZK.random() : _ui_colors__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_METAL */ .SK;
        const { Fire } = __webpack_require__(1267);
        if (name === 'fires')
            icon.text(Fire.CHAR).style('color', color);
        else
            icon.style('color', color);
        countEl.text(`${count}`).style('color', color);
    }
    static updateCounters() {
        this.cleanupSets();
        // Sync numeric counters to authoritative sets
        this.fires = this.fireSet.size;
        this.items = this.itemSet.size;
        this.people = this.peopleSet.size;
        BurningCountersUpdated.emit({
            fireCount: this.fires,
            itemCount: this.items,
            peopleCount: this.people
        });
    }
    static cleanupSets() {
        // Use Drawable.alive as the source of truth for existence.
        // This removes leaked or forcibly-removed objects that didn't emit decrement.
        const { Drawable } = __webpack_require__(1721);
        const isAlive = (obj) => Drawable.alive.has(obj);
        const stillBurning = (obj) => !!obj?.material?.isBurning?.();
        // Newly created Fires are added to Drawable.alive in the constructor,
        // so pruning by isAlive will not drop them before placement.
        this.fireSet = new Set([...this.fireSet].filter(isAlive));
        this.peopleSet = new Set([...this.peopleSet].filter(o => isAlive(o) && stillBurning(o)));
        this.itemSet = new Set([...this.itemSet].filter(o => isAlive(o) && stillBurning(o)));
    }
    static highlightOnce(map, name) {
        const id = `highlight-${name}`;
        const targets = name === 'people' ? this.peopleSet : this.itemSet;
        const symbol = name === 'people' ? '☠' : '▣';
        const strokeCells = [...targets]
            .filter(o => o?.cell)
            .map(o => ({ cell: o.cell, char: symbol, bg: undefined }));
        const Stroke = (__webpack_require__(891)/* .Stroke */ .t);
        const start = Date.now();
        const pulseMs = 400;
        const pulses = 3;
        const totalMs = pulseMs * pulses;
        const colorFn = () => {
            const elapsed = Date.now() - start;
            const t = Math.max(0, Math.min(elapsed % pulseMs, pulseMs)) / pulseMs;
            const alpha = Math.sin(Math.PI * t); // 0 -> 1 -> 0
            return `rgba(255,102,0,${alpha.toFixed(2)})`;
        };
        const isValid = () => (Date.now() - start) < totalMs;
        map.uiRenderer.replace(id, new Stroke(strokeCells, colorFn, isValid, 50));
    }
}
Fires.fires = 0;
Fires.items = 0;
Fires.people = 0;
Fires.fireSet = new Set();
Fires.itemSet = new Set();
Fires.peopleSet = new Set();


/***/ }),

/***/ 6747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ 6830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ XYL)
/* harmony export */ });
class XYL {
    constructor(xy, layer) {
        this.xy = xy;
        this.layer = layer;
        this.toString = () => XYL.toString(this.xy, this.layer);
    }
    get x() { return this.xy.x; }
    get y() { return this.xy.y; }
    static toString(xy, layer) {
        return `${layer}@(${xy.x}, ${xy.y})`;
    }
    static key(xy, layer) {
        return XYL.toString(xy, layer);
    }
    static at(xy, layer) {
        const key = XYL.toString(xy, layer);
        let cached = this._cache.get(key);
        if (!cached) {
            cached = new XYL(xy, layer);
            this._cache.set(key, cached);
        }
        return cached;
    }
    add(dx, dy) {
        return XYL.at(this.xy.add(dx, dy), this.layer);
    }
}
XYL._cache = new Map();


/***/ }),

/***/ 6893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);
/* harmony import */ var _xy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8668);



class Rect {
    constructor(xy, w, h) {
        this.xy = xy;
        this.w = w;
        this.h = h;
        this.eachCell = (onXY) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .times */ .Hn)(this.w, x => (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .times */ .Hn)(this.h, y => onXY(this.xy.add(x, y))));
    }
    get ul() { return this.xy; }
    get ur() { return this.xy.add(this.w - 1, 0); }
    get bl() { return this.xy.add(0, this.h - 1); }
    get br() { return this.xy.add(this.w - 1, this.h - 1); }
    get cl() { return this.xy.add(0, (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .half */ .MX)(this.h)); }
    get cr() { return this.xy.add(this.w - 1, (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .half */ .MX)(this.h)); }
    get uc() { return this.xy.add((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .half */ .MX)(this.w), 0); }
    get bc() { return this.xy.add((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .half */ .MX)(this.w), this.h - 1); }
    contains(target, y) {
        let checkXY;
        if (typeof target === 'number') {
            checkXY = _xy__WEBPACK_IMPORTED_MODULE_1__.XY.at(target, y);
        }
        else if (target instanceof _xy__WEBPACK_IMPORTED_MODULE_1__.XY) {
            checkXY = target;
        }
        else if (target instanceof _cell__WEBPACK_IMPORTED_MODULE_2__/* .Cell */ .f) {
            checkXY = target.xy;
        }
        else if ('cell' in target && target.cell) {
            checkXY = target.cell.xy;
        }
        else {
            return false;
        }
        return checkXY.x >= this.xy.x &&
            checkXY.x < this.xy.x + this.w &&
            checkXY.y >= this.xy.y &&
            checkXY.y < this.xy.y + this.h;
    }
    eachBorder(onXY) {
        if (this.w === 1 && this.h === 1) {
            onXY(this.xy);
            return;
        }
        if (this.h === 1) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .times */ .Hn)(this.w, x => onXY(this.xy.add(x, 0)));
            return;
        }
        if (this.w === 1) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .times */ .Hn)(this.h, y => onXY(this.xy.add(0, y)));
            return;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .times */ .Hn)(this.w, x => {
            onXY(this.xy.add(x, 0)); // top edge
            onXY(this.xy.add(x, this.h - 1)); // bottom edge
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .times */ .Hn)(this.h - 2, y => {
            onXY(this.xy.add(0, y + 1));
            onXY(this.xy.add(this.w - 1, y + 1));
        });
    }
}
Rect.xyWH = (topLeft, width, height) => new Rect(topLeft, width, height);
Rect.between = (start, end) => {
    const ul = _xy__WEBPACK_IMPORTED_MODULE_1__.XY.at(Math.min(start.x, end.x), Math.min(start.y, end.y));
    const w = Math.abs(end.x - start.x) + 1;
    const h = Math.abs(end.y - start.y) + 1;
    return Rect.xyWH(ul, w, h);
};


/***/ }),

/***/ 7022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DrawableType)
});

// EXTERNAL MODULE: ./src/draw/door.ts
var door = __webpack_require__(2483);
// EXTERNAL MODULE: ./src/draw/lamp.ts
var lamp = __webpack_require__(225);
// EXTERNAL MODULE: ./src/draw/wall.ts
var wall = __webpack_require__(239);
// EXTERNAL MODULE: ./src/ui/colors.ts
var colors = __webpack_require__(1919);
;// ./src/draw/wall-light.ts


class WallLight extends wall/* Wall */.j {
    constructor() {
        super(...arguments);
        this.char = () => '¤';
        this.color = () => this.material.color(colors/* LAMP */.zu.random());
        this.light = () => this.material.light(3);
        this.desc = () => this.material.desc('Wall light');
    }
}

// EXTERNAL MODULE: ./src/draw/material.ts
var material = __webpack_require__(2994);
;// ./src/draw/window.ts



class Window extends wall/* Wall */.j {
    constructor() {
        super(material/* GLASS */.fk);
        this.transparency = 1;
        this.char = () => '□';
        this.color = () => this.material.color(colors/* COLOR_GLASS */.zC);
        this.desc = () => this.material.desc('Window');
    }
}

// EXTERNAL MODULE: ./src/draw/floor.ts
var floor = __webpack_require__(9177);
// EXTERNAL MODULE: ./src/draw/smoke.ts
var smoke = __webpack_require__(4502);
// EXTERNAL MODULE: ./src/draw/fire.ts
var fire = __webpack_require__(1267);
// EXTERNAL MODULE: ./src/draw/pawn.ts + 1 modules
var pawn = __webpack_require__(2705);
// EXTERNAL MODULE: ./src/game/capabilities.ts
var capabilities = __webpack_require__(3793);
// EXTERNAL MODULE: ./src/draw/editor-item.ts
var editor_item = __webpack_require__(6372);
// EXTERNAL MODULE: ./src/draw/drawable.ts
var drawable = __webpack_require__(1721);
;// ./src/draw/prop-item.ts

class PropItem extends drawable.Drawable {
    constructor(symbol, name, materialType, passable = true) {
        super(materialType);
        this.symbol = symbol;
        this.name = name;
        this.materialType = materialType;
        this.layer = 'items';
        this.light = () => this.material.light(this.materialType.light);
        this.char = () => this.symbol;
        this.color = () => this.material.color(this.materialType.color);
        this.desc = () => this.material.desc(this.name);
        this.keyName = () => this.name;
        this.passable = passable;
    }
    step() {
        this.material.step(() => { });
    }
}

;// ./src/draw/spawn-item.ts


class SpawnItem extends drawable.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'items';
        this.passable = true;
        this.light = () => 0;
        this.char = () => 'S';
        this.color = () => colors/* SPAWN */._w;
        this.keyName = () => 'Spawn point';
        this.desc = () => 'Spawn point';
    }
}

;// ./src/game/drawable-types.ts














class DrawableType {
}
DrawableType.registry = {
    'Wall': () => new wall/* Wall */.j(),
    'Door': () => new door/* Door */.$(),
    'Wall light': () => new WallLight(),
    'Window': () => new Window(),
    'Lamp': () => new lamp/* Lamp */.z(),
    'Floor': () => new floor/* Floor */.Z(),
    'Smoke': () => new smoke/* Smoke */._(),
    'Fire': () => new fire.Fire(),
    'Pawn': () => new pawn.Pawn('firefighter', capabilities/* Capabilities */.FD.basic()),
    'Bush': () => new PropItem('✰', 'Bush', material/* PLANT */.G5),
    'Tree': () => new PropItem('T', 'Tree', material/* PLANT */.G5),
    'Counter': () => new PropItem('░', 'Counter', material/* BRICK */.qv),
    'Sink': () => new PropItem('f', 'Sink', material/* METAL */.cJ),
    'Tv': () => new PropItem(']', 'Tv', material/* METAL */.cJ),
    'Chair': () => new PropItem('h', 'Chair', material/* WOOD */.wB),
    'Oven': () => new PropItem('◉', 'Oven', material/* METAL */.cJ),
    'Table': () => new PropItem('◘', 'Table', material/* WOOD */.wB),
    'Refrigerator': () => new PropItem('[', 'Refrigerator', material/* METAL */.cJ, false),
    'Bed': () => new PropItem('=', 'Bed', material/* WOOD */.wB),
    'Tub': () => new PropItem('_', 'Tub', material/* METAL */.cJ),
    'Toilet': () => new PropItem('↻', 'Toilet', material/* METAL */.cJ),
    'Washer/dryer': () => new PropItem('◛', 'Washer/dryer', material/* METAL */.cJ),
    'Coin machine': () => new PropItem('❱', 'Coin machine', material/* METAL */.cJ, false),
    'Car': () => new PropItem('⇶', 'Car', material/* METAL */.cJ),
    'Spawn point': () => new SpawnItem(),
};
DrawableType.make = (symbol, name) => {
    const f = DrawableType.registry[name];
    return f ? f() : new editor_item/* EditorItem */.R(symbol, name);
};


/***/ }),

/***/ 7268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7947);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ 7283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ map_Map)
});

// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/game/xy.ts
var game_xy = __webpack_require__(88);
// EXTERNAL MODULE: ./src/game/cell.ts + 1 modules
var cell = __webpack_require__(8668);
// EXTERNAL MODULE: ./src/game/lighting.ts
var lighting = __webpack_require__(2615);
// EXTERNAL MODULE: ./src/game/layers.ts
var game_layers = __webpack_require__(5633);
;// ./src/game/movers.ts

class Move {
    constructor(drawable, from, to) {
        this.drawable = drawable;
        this.from = from;
        this.to = to;
    }
}
class Movers {
    constructor(map) {
        this.map = map;
        this.moves = [];
    }
    queue(drawable, from, to) {
        (0,utils/* bombUnless */.Nb)(from !== to, 'cant queue move to same cell');
        const dx = Math.abs(from.x - to.x);
        const dy = Math.abs(from.y - to.y);
        (0,utils/* bombUnless */.Nb)(Math.max(dx, dy) === 1, 'move must be adjacent');
        this.moves.push(new Move(drawable, from, to));
    }
    clear() { this.moves = []; }
    move() {
        const stillpossible = new Set(this.moves.filter(m => {
            const cell = this.map.get(m.from.xy);
            return cell.occupantIs(m.drawable);
        }));
        this.clear();
        while (stillpossible.size > 0) {
            const pending = this.movable(stillpossible);
            if (pending.length === 0)
                return;
            this.execute(pending);
            pending.forEach(m => stillpossible.delete(m));
        }
    }
    movable(stillpossible) {
        const destinations = new Map();
        stillpossible.forEach(m => (0,utils/* pushMap */.H3)(destinations, m.to, m)); // TODO - this is group by, right?
        const pending = [];
        destinations.forEach((entrants, dest) => {
            if (entrants.length !== 1)
                return;
            const move = (0,utils/* the */.C8)(entrants);
            const cell = this.map.get(dest.xy);
            if (!cell.passable())
                return;
            if (!cell.occupied(move.drawable.layer))
                pending.push(move);
        });
        return pending;
    }
    execute(moves) {
        moves.forEach(m => this.map.get(m.from.xy).remove(m.drawable));
        moves.forEach(m => this.map.get(m.to.xy).set(m.drawable));
    }
}

// EXTERNAL MODULE: ./src/draw/drawable.ts
var drawable = __webpack_require__(1721);
;// ./src/game/leaks.ts



const assertNoLeaks = (map) => {
    const alive = new Set();
    map.eachCell(cell => {
        game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
            const drawable = cell.layers.data[layerName];
            if (drawable)
                alive.add(drawable);
        });
    });
    // Only check drawables that belong to this map
    const mapDrawables = [...drawable.Drawable.alive].filter(d => d.cell?.map === map);
    const leaks = mapDrawables.filter(d => !alive.has(d));
    if (leaks.length) {
        (0,utils/* each */.__)(leaks, l => drawable.Drawable.alive.delete(l));
        (0,utils/* bomb */.fv)(`drawable leaked ${leaks.map(l => `${l.constructor.name}:${!!l.cell}`).join(', ')}`);
    }
};

// EXTERNAL MODULE: ./src/shapes.ts
var shapes = __webpack_require__(3720);
// EXTERNAL MODULE: ./src/ui/display.ts + 1 modules
var display = __webpack_require__(7328);
// EXTERNAL MODULE: ./src/ui/ui-renderer.ts
var ui_renderer = __webpack_require__(9889);
// EXTERNAL MODULE: ./src/game/drawable-types.ts + 4 modules
var drawable_types = __webpack_require__(7022);
;// ./src/game/map.ts











class map_Map {
    constructor(width, height) {
        this.get = (xy) => {
            const result = xy.cell(this.grid);
            (0,utils/* bombUnless */.Nb)(result, () => 'No cell at ' + xy);
            return result;
        };
        this.eachLocation = (fn) => this.eachCell(cell => game_layers/* CellLayers */.v.layerNames.forEach(n => fn(cell.xy.on(n))));
        this.eachCell = (fn) => (0,utils/* times */.Hn)(this.h, y => (0,utils/* times */.Hn)(this.w, x => fn(this.grid[y][x])));
        map_Map.active.add(this);
        this.display = new display/* Display */.n(width, height);
        this.smokeDisplay = new display/* Display */.n(width, height, true);
        this.w = width;
        this.h = height;
        this.grid = [];
        (0,utils/* times */.Hn)(height, y => {
            this.grid[y] = [];
            (0,utils/* times */.Hn)(width, x => {
                this.grid[y][x] = new cell/* Cell */.f(game_xy.XY.at(x, y), this);
            });
        });
        game_xy.XY.setSize(width, height);
        this.lighting = new lighting/* Lighting */.R(this);
        this.movers = new Movers(this);
        this.uiRenderer = new ui_renderer/* UIRenderer */.Q7(this);
    }
    drawAt(x, y, char, fg, bg) {
        this.display.draw(x, y, char, fg, bg);
    }
    drawAtSmoke(x, y, char, fg, bg) {
        this.smokeDisplay.draw(x, y, char, fg, bg);
    }
    draw(showLighting, visibleLayers, showNothing, debug, showDarkness = true) {
        this.display.clear();
        this.smokeDisplay.clear();
        (0,utils/* times */.Hn)(this.h, y => {
            (0,utils/* times */.Hn)(this.w, x => {
                this.grid[y][x].draw(showLighting, visibleLayers, showNothing, debug, showDarkness);
            });
        });
    }
    step() {
        (0,utils/* times */.Hn)(this.h, y => {
            (0,utils/* times */.Hn)(this.w, x => { this.grid[y][x].step(); });
        });
        this.movers.move();
        assertNoLeaks(this);
    }
    set(xy, drawable) {
        const cell = xy.cell(this.grid);
        (0,utils/* bombUnless */.Nb)(cell, () => 'No cell at ' + xy);
        cell.set(drawable);
        return cell;
    }
    createAt(xy, drawable) {
        const cell = this.get(xy);
        return cell.create(drawable);
    }
    create(cell, drawable) {
        drawable.born = true;
        cell.bombOccupied(drawable.layer, occupant => `can't create ${drawable.desc()} on top of ${occupant.desc()}`);
        cell.set(drawable);
        return drawable;
    }
    moving(drawable, from, to) {
        this.movers.queue(drawable, from, to);
    }
    eachRay(start, end, fOfCellAndShouldContinue) {
        let first = true;
        (0,shapes/* eachLine */.IM)(start, end, xy => {
            if (first) {
                first = false;
                return true;
            }
            if (game_xy.XY.oob(xy))
                return false;
            const cell = this.get(xy);
            return fOfCellAndShouldContinue(cell);
        });
    }
    eachPath(path, visit) {
        for (const cell of path)
            if (!visit(cell))
                break;
    }
    onClick(onClickedCell) {
        this.display.onClick((xy, c) => onClickedCell(xy ? this.get(xy) : undefined, c));
    }
    onMousedown(onCell) {
        this.display.onMousedown((xy, c) => onCell(xy ? this.get(xy) : undefined, c));
    }
    onMousemove(onMousedCell) {
        this.display.onMousemove(xy => onMousedCell(this.get(xy)));
    }
    renderToChars(replace = 'drawAt') {
        const chars = [];
        (0,utils/* times */.Hn)(this.h, y => {
            chars[y] = [];
            (0,utils/* times */.Hn)(this.w, x => { chars[y][x] = '.'; });
        });
        const originalDrawAt = this[replace];
        this[replace] = (x, y, char, _fg, _bg) => {
            const cell = this.get(game_xy.XY.at(x, y));
            if (replace === 'drawAt' && cell.pawn())
                chars[y][x] = cell.pawn().desc()[0];
            else
                chars[y][x] = char;
        };
        this.draw(false, new Set(), false, false, true);
        this[replace] = originalDrawAt;
        let result = '\n';
        (0,utils/* times */.Hn)(this.h, y => {
            (0,utils/* times */.Hn)(this.w, x => { result += chars[y][x]; });
            result += '\n';
        });
        return result;
    }
    renderToFragment(includeFloorKey = false) {
        const chars = [];
        const key = new globalThis.Map();
        (0,utils/* times */.Hn)(this.h, y => {
            chars[y] = [];
            (0,utils/* times */.Hn)(this.w, x => { chars[y][x] = '.'; });
        });
        const order = ['pawn', 'fire', 'walls', 'items', 'floor'];
        (0,utils/* times */.Hn)(this.h, y => {
            (0,utils/* times */.Hn)(this.w, x => {
                const cell = this.grid[y][x];
                for (const n of order) {
                    const d = cell.layers.data[n];
                    if (!d)
                        continue;
                    const ch = d.char();
                    chars[y][x] = ch;
                    const tn = d.keyName ? d.keyName() : d.constructor?.name;
                    if (tn && ch !== '.')
                        key.set(ch, tn);
                    break;
                }
            });
        });
        const rows = [];
        (0,utils/* times */.Hn)(this.h, y => { rows.push(chars[y].join('')); });
        const lines = [...rows, 'KEY'];
        if (includeFloorKey)
            lines.push('. = Floor');
        for (const [ch, tn] of key.entries())
            lines.push(`${ch} = ${tn}`);
        return lines.join('\n');
    }
    fill(drawableConstructor) {
        this.eachCell(cell => cell.create(drawableConstructor()));
    }
    killAll() {
        this.eachCell(cell => game_layers/* CellLayers */.v.layerNames.forEach(n => {
            const d = cell.layers.data[n];
            if (d)
                cell.died(d);
        }));
    }
    clone() {
        const cloned = new map_Map(this.w, this.h);
        this.eachCell(cell => {
            game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
                const drawable = cell.layers.data[layerName];
                if (drawable) {
                    const symbol = drawable.char();
                    const name = drawable.keyName();
                    if (name) {
                        const targetCell = cloned.get(cell.xy);
                        targetCell.create(drawable_types/* DrawableType */.Z.make(symbol, name));
                    }
                }
            });
        });
        return cloned;
    }
}
map_Map.active = new Set();


/***/ }),

/***/ 7328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Display)
});

// EXTERNAL MODULE: ./src/game/config.ts
var config = __webpack_require__(6457);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/game/xy.ts
var game_xy = __webpack_require__(88);
;// ./src/ui/click.ts
const toClick = (e) => ({
    button: e.button === 2 ? 'RIGHT' : 'LEFT',
    shift: e.shiftKey,
    ctrl: e.ctrlKey,
    alt: e.altKey,
    meta: e.metaKey
});

;// ./src/ui/display.ts




class Display {
    constructor(width, height, transparent = false) {
        this.coordsFromEvent = (e) => {
            const canvas = this.canvas();
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / config/* Config */.T.FONT_SIZE);
            const y = Math.floor((e.clientY - rect.top) / config/* Config */.T.FONT_SIZE);
            return game_xy.XY.at(x, y);
        };
        this.display = transparent
            ? config/* Config */.T.createTransparentDisplay(width, height)
            : config/* Config */.T.createDisplay(width, height);
        this.clear();
    }
    draw(x, y, char, fg, bg) {
        this.display.draw(x, y, char, fg, bg);
    }
    clear() {
        this.display.clear();
    }
    canvas() {
        return (0,utils/* bombUnless */.Nb)(this.display.getContainer(), () => 'Failed to get canvas');
    }
    attachTo(container, styles) {
        const canvas = this.canvas();
        Object.assign(canvas.style, styles);
        container.appendChild(canvas);
    }
    onClick(callback) {
        const canvas = this.canvas();
        const h = (e) => {
            const xy = this.coordsFromEvent(e);
            const c = toClick(e);
            if (game_xy.XY.oob(xy.x, xy.y)) {
                callback(undefined, c);
                return;
            }
            callback(xy, c);
        };
        (0,utils/* onClick */.Af)(canvas, h);
        canvas.addEventListener('contextmenu', e => { e.preventDefault(); h(e); });
    }
    onMousedown(callback) {
        const canvas = this.canvas();
        const h = (e) => {
            const xy = this.coordsFromEvent(e);
            const c = toClick(e);
            if (game_xy.XY.oob(xy.x, xy.y)) {
                callback(undefined, c);
                return;
            }
            callback(xy, c);
        };
        canvas.addEventListener('mousedown', h);
        canvas.addEventListener('contextmenu', e => e.preventDefault());
    }
    onMousemove(callback) {
        const canvas = this.canvas();
        (0,utils/* onMousemove */.iT)(canvas, e => {
            const xy = this.coordsFromEvent(e);
            if (game_xy.XY.oob(xy.x, xy.y))
                return;
            callback(xy);
        });
    }
}


/***/ }),

/***/ 7659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 7825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 7947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   g: () => (/* binding */ xhtml)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ 8227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LN: () => (/* binding */ Selection),
  Ay: () => (/* binding */ src_selection),
  zr: () => (/* binding */ root)
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(574);
;// ./node_modules/d3-selection/src/selection/select.js



/* harmony default export */ function selection_select(select) {
  if (typeof select !== "function") select = (0,selector/* default */.A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// ./node_modules/d3-selection/src/array.js
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(747);
;// ./node_modules/d3-selection/src/selection/selectAll.js




function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}

/* harmony default export */ function selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,selectorAll/* default */.A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(6541);
;// ./node_modules/d3-selection/src/selection/selectChild.js


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,matcher/* childMatcher */.j)(match)));
}

;// ./node_modules/d3-selection/src/selection/selectChildren.js


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,matcher/* childMatcher */.j)(match)));
}

;// ./node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ function selection_filter(match) {
  if (typeof match !== "function") match = (0,matcher/* default */.A)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// ./node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ function sparse(update) {
  return new Array(update.length);
}

;// ./node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ function enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

;// ./node_modules/d3-selection/src/constant.js
/* harmony default export */ function constant(x) {
  return function() {
    return x;
  };
}

;// ./node_modules/d3-selection/src/selection/data.js




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}

;// ./node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ function exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

;// ./node_modules/d3-selection/src/selection/join.js
/* harmony default export */ function join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

;// ./node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ function merge(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

;// ./node_modules/d3-selection/src/selection/order.js
/* harmony default export */ function order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

;// ./node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ function sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// ./node_modules/d3-selection/src/selection/call.js
/* harmony default export */ function call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

;// ./node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ function nodes() {
  return Array.from(this);
}

;// ./node_modules/d3-selection/src/selection/node.js
/* harmony default export */ function node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

;// ./node_modules/d3-selection/src/selection/size.js
/* harmony default export */ function size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

;// ./node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ function empty() {
  return !this.node();
}

;// ./node_modules/d3-selection/src/selection/each.js
/* harmony default export */ function each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(7268);
;// ./node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function attr(name, value) {
  var fullname = (0,namespace/* default */.A)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(3683);
;// ./node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

;// ./node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

;// ./node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

;// ./node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

;// ./node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function selection_raise() {
  return this.each(raise);
}

;// ./node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function selection_lower() {
  return this.each(lower);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespaces.js
var namespaces = __webpack_require__(7947);
;// ./node_modules/d3-selection/src/creator.js



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === namespaces/* xhtml */.g && document.documentElement.namespaceURI === namespaces/* xhtml */.g
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function creator(name) {
  var fullname = (0,namespace/* default */.A)(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

;// ./node_modules/d3-selection/src/selection/append.js


/* harmony default export */ function append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

;// ./node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ function insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,selector/* default */.A)(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

;// ./node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function selection_remove() {
  return this.each(remove);
}

;// ./node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

;// ./node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

;// ./node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/window.js
var src_window = __webpack_require__(6747);
;// ./node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = (0,src_window/* default */.A)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

;// ./node_modules/d3-selection/src/selection/iterator.js
/* harmony default export */ function* iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

;// ./node_modules/d3-selection/src/selection/index.js



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  selectChild: selectChild,
  selectChildren: selectChildren,
  filter: selection_filter,
  data: data,
  enter: enter,
  exit: exit,
  join: join,
  merge: merge,
  selection: selection_selection,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: node,
  size: size,
  empty: empty,
  each: each,
  attr: attr,
  style: style/* default */.A,
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: selection_datum,
  on: on,
  dispatch: dispatch,
  [Symbol.iterator]: iterator
};

/* harmony default export */ const src_selection = (selection);


/***/ }),

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export Storage */
class Storage {
    constructor() {
        this.get = (k) => localStorage.getItem(k);
        this.set = (k, v) => localStorage.setItem(k, v);
        this.remove = (k) => localStorage.removeItem(k);
    }
}
const storage = new Storage();


/***/ }),

/***/ 8535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ Fragment)
/* harmony export */ });
/* harmony import */ var _drawable_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7022);
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6893);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6185);



class Fragment {
    constructor(gridRows, symbolKey) {
        this.rows = () => this.grid.map(r => r.padEnd(this.width(), '.'));
        this.width = () => Math.max(...this.grid.map(row => row.length));
        this.height = () => this.grid.length;
        this.grid = gridRows;
        this.key = symbolKey;
    }
    static fromText(text) {
        const { grid, key } = Fragment.parse(text);
        return new Fragment(grid, key);
    }
    static load(text) { return Fragment.fromText(text); }
    static parse(text) {
        const normalizedText = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .normalizeIndentedText */ .Ur)(text);
        const lines = normalizedText.split('\n');
        const keyIndex = lines.findIndex(line => /^\s*key\b/i.test(line));
        const bodyLines = lines.slice(0, keyIndex);
        const keyLines = lines.slice(keyIndex + 1);
        const grid = bodyLines.filter(line => line.trim().length);
        const key = {};
        const re = /^\s*(\S)\s*=\s*(\S+(?:\s+\S+)*)/;
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .each */ .__)(keyLines, line => {
            const [matched, symbol, type] = line.trim().match(re) ?? [];
            if (!matched)
                return;
            key[symbol] = capitalize(type);
        });
        return { grid, key };
    }
    rotate(turns) {
        let rows = this.grid;
        const count = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .positiveMod */ .Wh)(turns, 4);
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .times */ .Hn)(count, _ => rows = rot90(rows));
        return new Fragment(rows, this.key);
    }
    pad(n) {
        const w = this.width();
        const border = '.'.repeat(w + n * 2);
        const mid = this.grid.map(r => '.'.repeat(n) + r.padEnd(w, '.') + '.'.repeat(n));
        const top = Array(n).fill(border);
        const rows = [...top, ...mid, ...top];
        return new Fragment(rows, this.key);
    }
    place(map, upperLeft) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .each */ .__)(this.grid, (row, rowIndex) => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .each */ .__)(row, (char, colIndex) => {
                const typeName = this.key[char];
                if (!typeName)
                    return;
                const drawable = _drawable_types__WEBPACK_IMPORTED_MODULE_0__/* .DrawableType */ .Z.make(char, typeName);
                if (drawable)
                    map.get(upperLeft.add(colIndex, rowIndex)).create(drawable);
            });
        });
        return _rect__WEBPACK_IMPORTED_MODULE_1__/* .Rect */ .r.xyWH(upperLeft, this.width(), this.height());
    }
}
const rot90 = (rows) => {
    const height = rows.length;
    const width = Math.max(...rows.map(row => row.length));
    const matrix = rows.map(row => row.padEnd(width, ' '));
    const result = [];
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .times */ .Hn)(width, x => {
        let row = '';
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .downTimes */ .nd)(height, y => row += matrix[y][x]);
        result.push(row);
    });
    return result;
};
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();


/***/ }),

/***/ 8639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Game: () => (/* binding */ Game),
  GameStepped: () => (/* binding */ GameStepped),
  LevelReset: () => (/* binding */ LevelReset),
  LevelWon: () => (/* binding */ LevelWon)
});

// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/d3-extend.ts
var d3_extend = __webpack_require__(452);
// EXTERNAL MODULE: ./src/compress.ts
var compress = __webpack_require__(5074);
// EXTERNAL MODULE: ./src/game/map.ts + 2 modules
var map = __webpack_require__(7283);
// EXTERNAL MODULE: ./src/game/initializer.ts + 6 modules
var initializer = __webpack_require__(4104);
// EXTERNAL MODULE: ./src/game/config.ts
var config = __webpack_require__(6457);
// EXTERNAL MODULE: ./src/draw/pawn.ts + 1 modules
var draw_pawn = __webpack_require__(2705);
// EXTERNAL MODULE: ./src/game/capabilities.ts
var capabilities = __webpack_require__(3793);
;// ./src/html/terminal.html
/* harmony default export */ const terminal = ("<div id=\"terminal\">\n    <div id=\"terminal-content\">\n        <div class=\"cell-container\">\n            <div class=\"cell-coord\"></div>\n            <div class=\"layers\">\n                <div class=\"layer template\">\n                    <span class=\"name\"></span>: <span class=\"description text-subtle\"></span> <span class=\"hits\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"selected-info\">\n        <div class=\"selected-container\">\n            <div class=\"pawn-desc\"></div>\n            <div class=\"pawn-hits\"></div>\n            <table class=\"capabilities\">\n                <tr class=\"capability template\">\n                    <td class=\"score\">10</td>\n                    <td class=\"name\">str</td>\n                    <td class=\"skill-score\">1</td>\n                    <td class=\"skill\">inventory</td>\n                </tr>\n            </table>\n            <div class=\"tasks\">\n                <div class=\"task-info template\">\n                    <span class=\"task-desc\">TEMPLATE go to 73, 26</span>\n                    <span class=\"clear-task clickable text-danger bold\" data-index=\"0\">[x]</span>\n                </div>\n            </div>\n            <div id=\"clear-all\" class=\"clickable text-danger bold\" title=\"clear all\">[xx]</div>\n        </div>\n    </div>\n</div>\n");
// EXTERNAL MODULE: ./src/ui/ui-renderer.ts
var ui_renderer = __webpack_require__(9889);
// EXTERNAL MODULE: ./src/ui/colors.ts
var colors = __webpack_require__(1919);
// EXTERNAL MODULE: ./src/game/lighting.ts
var lighting = __webpack_require__(2615);
;// ./src/ui/terminal.ts







class Terminal {
    constructor() {
        this.currentCell = null;
        this.setCurrent = (cell) => this.currentCell = cell;
        this.div = (0,d3_extend.d1)('#terminal');
        this.div.appendFileHtml(terminal);
        this.repaintSelectedPawn();
        ui_renderer/* Repaint */.G2.on(() => this.draw());
        ui_renderer/* Repaint */.G2.on(() => this.updateSelectedPawnColor());
        draw_pawn.PawnSelected.on(pawn => this.repaintSelectedPawn());
        draw_pawn.PawnMoved.on(({ pawn }) => this.repaintSelectedPawn());
        draw_pawn.PawnBurned.on(pawn => this.repaintSelectedPawn());
        draw_pawn.TaskRemoved.on(pawn => this.repaintSelectedPawn());
    }
    draw() {
        this.updateCell();
    }
    updateCell() {
        const content = this.div.d1('#terminal-content');
        content.updateFrom(this.currentCell, (cell => {
            content.d1('.cell-coord').text(cell.xy.x + ', ' + cell.xy.y);
            content.dList('.layer').updateFrom(cell.presentLayers(), (layer, snapshot) => {
                layer.d1('.name').text(snapshot.name);
                layer.d1('.description').text(snapshot.desc).style('color', snapshot.color);
                const hits = snapshot.maxHits > 0 ? `${snapshot.hits}/${snapshot.maxHits}` : '';
                layer.d1('.hits').text(hits);
                // Match tile background blending so damaged items are readable
                const baseBg = snapshot.drawable.material.background(colors/* BACKGROUND */.h4);
                const illumBg = this.applyIllumination(baseBg, cell);
                layer.style('background-color', illumBg);
            });
        }), () => {
            content.d1('.cell-coord').text('no cell selected');
            content.dList('.layer').updateFrom([], () => { });
        });
    }
    repaintSelectedPawn() {
        const pawn = draw_pawn.PawnSelected.current;
        const selectedInfo = this.div.d1('#selected-info');
        selectedInfo.updateFrom(pawn, (pawn) => {
            const container = selectedInfo.d1('.selected-container');
            container.d1('.pawn-desc').text(pawn.desc());
            const hits = pawn.maxHits > 0 ? `${pawn.hits}/${pawn.maxHits}` : '';
            container.d1('.pawn-hits').text(hits);
            const rows = [];
            pawn.capabilities.eachPair((name, skills) => {
                const nz = skills.filter(s => s.level !== 0);
                const head = { score: String(skills.reduce((a, s) => a + s.level, 0)), name: (0,capabilities/* capabilityAbbr */.gv)(name) };
                if (nz.length === 0)
                    rows.push({ ...head, skillScore: '', skill: '' });
                else {
                    rows.push({ ...head, skillScore: String(nz[0].level), skill: nz[0].name });
                    nz.slice(1).forEach(s => rows.push({ skillScore: String(s.level), skill: s.name }));
                }
            });
            container.d1('.capabilities').dList('.capability').updateFrom(rows, (row, d) => {
                row.d1('.score').text(d.score || '');
                row.d1('.name').text(d.name || '');
                row.d1('.skill-score').text(d.skillScore || '');
                row.d1('.skill').text(d.skill || '');
            });
            container.d1('.tasks').dList('.task-info').updateFrom(pawn.tasks, (taskDiv, task) => {
                taskDiv.d1('.task-desc').text(task.desc());
                taskDiv.d1('.clear-task').on('click', () => task.remove());
            });
            container.d1('#clear-all').style('display', 'block').on('click', () => pawn.clearTasks());
        }, () => {
            const container = selectedInfo.d1('.selected-container');
            container.d1('.pawn-desc').text('no pawn selected');
            container.d1('.pawn-hits').text('');
            container.d1('.capabilities').dList('.capability').updateFrom([], () => { });
            container.d1('.tasks').dList('.task-info').updateFrom([], () => { });
            container.d1('#clear-all').style('display', 'none').on('click', null);
        });
        this.updateSelectedPawnColor();
    }
    updateSelectedPawnColor() {
        const pawn = draw_pawn.PawnSelected.current;
        const color = pawn ? pawn.color() : '';
        this.div.d1('.pawn-desc').style('color', color);
        this.div.d1('.pawn-hits').style('color', color);
    }
    applyIllumination(color, cell) {
        if (!color.startsWith('#'))
            return color;
        if (color === colors/* BLACK */.Uv || color === '#000000')
            return '#000000';
        const rgb = (0,colors/* hexToRgb */.E2)(color);
        if (rgb && rgb[0] < 8 && rgb[1] < 8 && rgb[2] < 8)
            return '#000000';
        const illumination = Math.max(0, Math.min(cell.map.lighting.at(cell), 9));
        const factor = illumination / 9;
        const light = Terminal.rgbToHex(cell.map.lighting.colorAt(cell));
        const darkened = (0,colors/* blend */.au)(colors/* BLACK */.Uv, color, factor);
        return (0,colors/* blend */.au)(darkened, light, lighting/* COLOR_INTENSITY */.c * factor);
    }
    static rgbToHex(rgb) {
        const toHex = (value) => Math.round(value).toString(16).padStart(2, '0');
        return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
    }
}

// EXTERNAL MODULE: ./src/game/layers.ts
var game_layers = __webpack_require__(5633);
;// ./src/ui/states/select-state.ts
class SelectState {
    constructor(ui) {
        this.ui = ui;
    }
    onClick(cell, _c) {
        if (!cell)
            return;
        const pawn = cell.pawn();
        if (pawn)
            this.ui.setState('menu', pawn);
    }
    onMouseMove(cell) {
        this.ui.terminal.setCurrent(cell);
    }
}

// EXTERNAL MODULE: ./src/game/tasks/task.ts
var task = __webpack_require__(1877);
// EXTERNAL MODULE: ./src/draw/door.ts
var draw_door = __webpack_require__(2483);
;// ./src/game/tasks/destination-task.ts



class DestinationTask extends task/* Task */.YZ {
    constructor(pawn, destination, fixedRay = null) {
        super(pawn);
        this.destination = destination;
        this.done = false;
        this.isDone = () => this.done;
        this.strokeId = `destination-task-${Date.now()}-${Math.random()}`;
        this.fixedRay = fixedRay;
    }
    nextStepFromPath() {
        const path = this.pawn.cell.pathTo(this.destination);
        if (!path)
            return null;
        const it = path[Symbol.iterator]();
        const { value, done } = it.next();
        return done ? null : value;
    }
    buildFixedRay(from, to) {
        const ray = [];
        from.map.eachRay(from.xy, to.xy, c => { ray.push(c); return true; });
        return ray;
    }
    nextFromFixedRay() {
        if (!this.fixedRay)
            return null;
        if (this.fixedRay.length === 0)
            return null;
        return this.fixedRay.shift() || null;
    }
    nextCell() {
        const n = this.nextFromFixedRay();
        if (n)
            return n;
        const step = this.nextStepFromPath();
        if (step)
            return step;
        const cur = this.pawn.cell;
        const ray = this.buildFixedRay(cur, this.destination);
        return ray.length === 0 ? null : ray[0];
    }
    advance(next) {
        const door = next.wall();
        if (door instanceof draw_door/* Door */.$ && !door.passable) {
            door.toggle();
            return;
        }
        if (!next.passable()) {
            this.done = true;
            return;
        }
        this.pawn.cell.queueMove(this.pawn, next.xy);
        if (next === this.destination)
            this.done = true;
    }
    step() {
        if (this.done)
            return;
        const next = this.nextCell();
        if (!next) {
            this.done = true;
            return;
        }
        this.advance(next);
    }
    cleanup() { this.pawn.cell.map.uiRenderer.remove(this.strokeId); }
    desc() { return `go to ${this.destination.xy.toString()}`; }
    strokeAndNext(start) {
        if (this.fixedRay) {
            const ray = this.buildFixedRay(start, this.destination);
            const colorFn = () => this.pawn.selected ? (0,task/* TASK_COLOR_SELECTED */.Gm)() : (0,task/* TASK_COLOR */.k$)();
            this.pawn.cell.map.uiRenderer.replace(this.strokeId, task/* Task */.YZ.strokeOfCells(ray, colorFn, () => !this.done, 1));
            return this.destination;
        }
        else {
            const path = start.pathTo(this.destination);
            if (path) {
                const cells = Array.from(path);
                const colorFn = () => this.pawn.selected ? (0,task/* TASK_COLOR_SELECTED */.Gm)() : (0,task/* TASK_COLOR */.k$)();
                this.pawn.cell.map.uiRenderer.replace(this.strokeId, task/* Task */.YZ.strokeOfCells(cells, colorFn, () => !this.done, 1));
            }
            else {
                const colorFn = () => this.pawn.selected ? (0,task/* TASK_COLOR_SELECTED */.Gm)() : (0,task/* TASK_COLOR */.k$)();
                task/* Task */.YZ.strokePathBetween(start, this.destination, this.strokeId, colorFn, () => !this.done, 1);
            }
            return this.destination;
        }
    }
}

// EXTERNAL MODULE: ./src/ui/stroke.ts
var ui_stroke = __webpack_require__(891);
;// ./src/game/tasks/extinguish-task.ts



class ExtinguishTask extends task/* Task */.YZ {
    constructor(pawn) {
        super(pawn);
        this.done = false;
        this.id = `extinguish-${Date.now()}-${Math.random()}`;
        this.color = colors/* Colors */.Jy.rotate(new colors/* Colors */.Jy(['#f00', '#00f']));
        this.isDone = () => this.done;
        this.desc = () => `extinguish ${this.stepsRemaining}`;
        this.stepsRemaining = pawn.material.isBurning() ? 5 : 1;
    }
    step() {
        if (this.done)
            return;
        if (--this.stepsRemaining <= 0) {
            if (this.pawn.material.isBurning()) {
                this.pawn.material.extinguish();
            }
            else {
                const neighbors = this.pawn.cell.neighbors();
                const fireNeighbors = neighbors.filter(cell => cell.fire());
                neighbors.forEach(cell => cell.onFire(fire => fire.died()));
                if (fireNeighbors.length < 4) {
                    this.pawn.cell.cardinals().forEach(cell => cell.extinguish());
                }
            }
            this.done = true;
        }
    }
    strokeAndNext(start) {
        start.map.uiRenderer.replace(this.id, new ui_stroke/* Stroke */.t([{ cell: start, char: 'e' }], this.color, () => !this.done, 1));
        return start;
    }
    cleanup() { this.pawn.cell.map.uiRenderer.remove(this.id); }
}

;// ./src/ui/states/destination-state.ts






class DestinationState {
    menuAction(key) {
        if (key === 'x')
            this.ui.setState('select');
        else if (key === 'r')
            this.removeLastTask();
        else if (key === 'v')
            this.ui.nextPawn(this.selected);
        else if (key === 'g' || key === 'e')
            this.locatedAction(key);
    }
    locatedAction(key) {
        if (!this.hoveredCell)
            return;
        const start = this.selected.tipCell;
        const fixedRay = this.shift ? this.buildFixedRay(start, this.hoveredCell) : null;
        this.selected.addTask(new DestinationTask(this.selected, this.hoveredCell, fixedRay));
        if (key === 'e')
            this.selected.addTask(new ExtinguishTask(this.selected));
        this.ui.setState('destination', this.selected);
    }
    removeLastTask() {
        (0,utils/* onLastMaybe */.iw)(this.selected.tasks, task => task.remove());
        if (this.hoveredCell)
            this.onMouseMove(this.hoveredCell);
        ui_renderer/* Repaint */.G2.emit();
    }
    constructor(ui) {
        this.ui = ui;
        this.shift = false;
        this.keyDown = (event) => {
            if (event.key === 'Escape')
                this.ui.setState('menu', this.selected);
            else if (event.key === 'Shift')
                this.shift = true;
            else
                this.menuAction(event.key);
        };
        this.keyUp = (event) => {
            if (event.key === 'Shift')
                this.shift = false;
        };
        this.outside = (e) => {
            const canvas = this.ui.map.display.canvas();
            if (!canvas.contains(e.target)) {
                e.preventDefault();
                this.ui.setState('menu', this.selected);
            }
        };
        this.pawnDied = (pawn) => {
            if (pawn === this.selected)
                this.ui.setState('select');
        };
    }
    onClick(cell, c) {
        if (c.button === 'RIGHT' || !cell)
            return this.ui.setState('menu', this.selected);
        const pawn = cell.pawn();
        if (pawn === this.selected)
            return this.ui.setState('menu', this.selected);
        if (pawn)
            return this.ui.setState('menu', pawn);
        const start = this.selected.tipCell;
        const fixedRay = c.shift ? this.buildFixedRay(start, cell) : null;
        this.selected.addTask(new DestinationTask(this.selected, cell, fixedRay));
    }
    buildFixedRay(from, to) {
        const ray = [];
        from.map.eachRay(from.xy, to.xy, c => { ray.push(c); return true; });
        return ray;
    }
    onMouseMove(cell) {
        this.hoveredCell = cell;
        this.ui.terminal.setCurrent(cell);
        const start = this.selected.tipCell;
        if (!start)
            return;
        if (this.shift) {
            const ray = this.buildFixedRay(start, cell);
            this.ui.map.uiRenderer.replace(draw_pawn.Pawn.HOVER_PATH_STROKE, task/* Task */.YZ.strokeOfCells(ray, task/* TASK_COLOR */.k$, () => true, 2));
            ui_renderer/* Repaint */.G2.emit();
            return;
        }
        const path = start.pathTo(cell);
        if (path) {
            const cells = Array.from(path);
            const last = cells[cells.length - 1];
            if (last && last === cell) {
                this.ui.map.uiRenderer.replace(draw_pawn.Pawn.HOVER_PATH_STROKE, task/* Task */.YZ.strokeOfCells(cells, task/* TASK_COLOR */.k$, () => true, 2));
            }
            else {
                const ray = this.buildFixedRay(start, cell);
                this.ui.map.uiRenderer.replace(draw_pawn.Pawn.HOVER_PATH_STROKE, task/* Task */.YZ.strokeOfCells(ray, task/* TASK_COLOR_UNREACHABLE */.r9, () => true, 2));
            }
        }
        else {
            const ray = this.buildFixedRay(start, cell);
            this.ui.map.uiRenderer.replace(draw_pawn.Pawn.HOVER_PATH_STROKE, task/* Task */.YZ.strokeOfCells(ray, task/* TASK_COLOR_UNREACHABLE */.r9, () => true, 2));
        }
        ui_renderer/* Repaint */.G2.emit();
    }
    enter(pawn) {
        this.selected = pawn;
        this.selected.selected = true;
        draw_pawn.PawnSelected.emit(pawn);
        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
        document.addEventListener('click', this.outside);
        document.addEventListener('contextmenu', this.outside);
        this.unsubDied = draw_pawn.PawnDied.on(this.pawnDied);
    }
    exit() {
        document.removeEventListener('keydown', this.keyDown);
        document.removeEventListener('keyup', this.keyUp);
        document.removeEventListener('click', this.outside);
        document.removeEventListener('contextmenu', this.outside);
        this.unsubDied();
        this.ui.map.uiRenderer.remove(draw_pawn.Pawn.HOVER_PATH_STROKE);
        this.selected.selected = false;
        this.hoveredCell = undefined;
        ui_renderer/* Repaint */.G2.emit();
        draw_pawn.PawnSelected.emit(null);
    }
}

// EXTERNAL MODULE: ./src/ui/text-stroke.ts
var text_stroke = __webpack_require__(1485);
;// ./src/ui/menu.ts



const MENU_ITEMS = [
    { key: 'x', desc: 'Exit menu and return to selection', action: ui => ui.setState('select') },
    { key: 'g', desc: 'Go to destination by path - shift for line', action: (ui, pawn) => ui.setState('destination', pawn) },
    { key: 'e', desc: 'Extinguish - put out burning firefighter', action: (ui, pawn) => { pawn.addTask(new ExtinguishTask(pawn)); ui.setState('menu', pawn); } },
    { key: 'v', desc: 'Select next firefighter', action: (ui, pawn) => ui.setState('menu', draw_pawn.Pawn.next(pawn)) },
    { key: 'r', desc: "Remove last task from firefighter's queue", action: (ui, pawn) => { (0,utils/* onLastMaybe */.iw)(pawn.tasks, task => task.remove()); ui.setState('menu', pawn); } }
];

// EXTERNAL MODULE: ./src/game/drawable-types.ts + 4 modules
var drawable_types = __webpack_require__(7022);
// EXTERNAL MODULE: ./src/draw/material.ts
var material = __webpack_require__(2994);
;// ./src/ui/help.ts





const MENU_HELP = (0,utils/* toEntries */.Wo)(MENU_ITEMS, i => [i.key, i.desc]);
class HelpSystem {
    constructor() {
        this.pages = [];
        this.currentPage = 0;
        this.generatePages();
    }
    getCurrentPage() {
        return this.pages[this.currentPage] || this.pages[0];
    }
    getPageInfo() {
        return `<div style="text-align: center; margin-bottom: 10px; color: #888;">Page ${this.currentPage + 1} of ${this.pages.length} • Use ← → keys to navigate</div>`;
    }
    nextPage() {
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage++;
            return true;
        }
        return false;
    }
    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            return true;
        }
        return false;
    }
    resetToFirstPage() {
        this.currentPage = 0;
    }
    generatePages() {
        const menuItems = MENU_ITEMS;
        const layerInfo = {
            'floor': { char: '.', desc: 'Floor tiles and terrain', color: '#666' },
            'walls': { char: '#', desc: 'Walls, doors (+), windows (□), wall lights (¤)', color: '#666' },
            'items': { char: '*', desc: 'Lamps, equipment, and other things laying around', color: '#ff0' },
            'fire': { char: '▲', desc: 'Active fires that spread and create smoke', color: '#f44' },
            'smoke': { char: '+', desc: 'Smoke that drifts and blocks vision', color: '#999' },
            'pawn': { char: '@', desc: 'Firefighters under your command', color: '#0f0' }
        };
        const layerSections = game_layers/* CellLayers */.v.layerNames.map(layerName => {
            const info = layerInfo[layerName];
            if (info) {
                return `• <strong>${layerName}</strong> (<strong style="color: ${info.color}">${info.char}</strong>) - ${info.desc}`;
            }
            return `• <strong>${layerName}</strong> - Layer type`;
        }).join('<br/>');
        const menuSection = menuItems
            .map(item => `• <strong>${item.key}</strong> - ${item.desc}`)
            .join('<br/>');
        const layerButtons = game_layers/* CellLayers */.v.layerNames.map(name => name.slice(0, 3)).join(', ');
        const drawableNotes = { Oven: 'Can spark fires' };
        const drawableRows = Object.entries(drawable_types/* DrawableType */.Z.registry)
            .map(([name, create]) => {
            const drawable = create();
            const row = `<tr><td style="text-align:center;color:${drawable.color()}">${drawable.char()}</td>` +
                `<td>${name}</td><td>${drawableNotes[name] ?? ''}</td></tr>`;
            drawable.diedAndAlreadyRemovedFromCell();
            return row;
        })
            .join('');
        const drawableTable = `<table class="help-table">` +
            `<tr><th>Symbol</th><th>Object</th><th>Notes</th></tr>${drawableRows}</table>`;
        const materials = [
            ['Meat', material/* MEAT */.SN],
            ['Wood', material/* WOOD */.wB],
            ['Plant', material/* PLANT */.G5],
            ['Metal', material/* METAL */.cJ],
            ['Brick', material/* BRICK */.qv],
            ['Glass', material/* GLASS */.fk],
        ];
        const materialRows = materials
            .map(([name, type]) => `<tr><td style="color:${type.color}">${name}</td><td>${type.flammable ? 'Yes' : 'No'}</td><td>${type.note}</td></tr>`)
            .join('');
        const materialTable = `<table class="help-table">` +
            `<tr><th>Material</th><th>Flammable</th><th>Notes</th></tr>${materialRows}</table>`;
        this.pages = [
            // Page 1: Overview and Controls
            `<div class="help-text">
<strong>🔥 FIRE HOUSE RL 🔥</strong><br/>
<br/>
<strong>GAME OVERVIEW:</strong><br/>
Control a squad of firefighters (@) in a tactical roguelike. Give orders, then watch them execute in real-time or step-by-step.<br/>
<br/>
<strong>MAIN CONTROLS:</strong><br/>
• <strong>▶️ Play/Pause</strong> - Start/stop game simulation<br/>
• <strong>⏭️ Step</strong> - Advance one game step<br/>
• <strong>❄️ Freeze</strong> - Pause rendering (game continues)<br/>
• <strong>❓ Help</strong> - Open this help system<br/>
• <strong>SPACE</strong> - Play/Pause game<br/>
• <strong>ESC</strong> - Close help or menus<br/>
• <strong>F</strong> - Flash burning items and pawns<br/>
<br/>
<strong>MOUSE CONTROLS:</strong><br/>
• <strong>Click @</strong> - Select firefighter<br/>
• <strong>Hover</strong> - Inspect cells in terminal<br/>
• <strong>Right-click</strong> - Cancel selection<br/>
<br/>
<strong>GETTING STARTED:</strong><br/>
Hold the space bar to play, tap to step, release to halt.<br/>
You can slow or speed up time under the play/pause button.<br/>
1. Click the <strong>@</strong> symbol to select a firefighter<br/>
2. Choose an action from the menu that appears<br/>
3. Watch your firefighters carry out their orders!<br/>
</div>`,
            // Page 2: Firefighter Menu
            `<div class="help-text">
<strong>🚒 FIREFIGHTER COMMANDS 🚒</strong><br/>
<br/>
<strong>FIREFIGHTER MENU:</strong><br/>
When you click a firefighter (@), a menu appears around them with these options:<br/>
<br/>
${menuSection}<br/>
<br/>
<strong>TASK SYSTEM:</strong><br/>
• Firefighters can queue multiple tasks<br/>
• Tasks are shown as colored paths on the map<br/>
• Blue lines show planned movement routes<br/>
• Tasks execute in order from first to last<br/>
<br/>
<strong>TERMINAL PANEL:</strong><br/>
The right panel shows detailed info about:<br/>
• Current cell under mouse cursor<br/>
• Selected firefighter's active tasks<br/>
• Layer contents and properties<br/>
• Click <strong>[x]</strong> next to tasks to remove them<br/>
<br/>
<strong>SELECTION TIPS:</strong><br/>
• Selected firefighters have inverted colors<br/>
• Hover over destinations to see path preview<br/>
• Right-click to cancel current selection<br/>
</div>`,
            // Page 3: Layers and Terrain
            `<div class="help-text">
<strong>🗺️ LAYERS & TERRAIN 🗺️</strong><br/>
<br/>
<strong>LAYER SYSTEM:</strong><br/>
The game world is built in layers (${game_layers/* CellLayers */.v.layerNames.length} total). From bottom to top:<br/>
<br/>
${layerSections}<br/>
<br/>
<strong>TERRAIN INTERACTIONS:</strong><br/>
• <strong>Walls</strong> block movement and vision<br/>
• <strong>Doors</strong> (+) can be opened and closed<br/>
• <strong>Items</strong> provide light and can be carried<br/>
• <strong>Fires</strong> spread to adjacent flammable materials<br/>
• <strong>Smoke</strong> reduces visibility and can harm firefighters<br/>
<br/>
<strong>LIGHTING SYSTEM:</strong><br/>
• Fires and lamps provide illumination<br/>
• Darkness affects visibility and movement<br/>
• Smoke blocks light transmission<br/>
• Materials cast shadows and block vision<br/>
</div>`,
            // Page 4: Fire Mechanics and Debug
            `<div class="help-text">
<strong>🔥 FIRE MECHANICS & DEBUG 🔥</strong><br/>
<br/>
<strong>FIRE BEHAVIOR:</strong><br/>
• Fires spread to adjacent cells over time<br/>
• Fires create smoke that drifts randomly<br/>
• Materials can ignite and burn<br/>
• Lighting affects visibility and tactics<br/>
• Older fires burn out eventually<br/>
• While on fire, extinguishing yourself takes five turns<br/>
• Another pawn can put you out in one—firefighters work best in teams!<br/>
<br/>
<strong>SMOKE MECHANICS:</strong><br/>
• Smoke reduces transparency and vision<br/>
• Smoke drifts to adjacent cells<br/>
• Smoke dissipates over time<br/>
• Can harm firefighters with prolonged exposure<br/>
<br/>
<strong>DEBUG CONTROLS:</strong><br/>
• <strong>LT</strong> - Toggle lighting display<br/>
• <strong>Layer buttons</strong> - Show/hide specific layers (${layerButtons})<br/>
• <strong>on/off</strong> - Turn all layers on/off<br/>
<br/>
<strong>LAYER DEBUGGING:</strong><br/>
• Click layer buttons to toggle visibility<br/>
• Muted layers appear grayed out<br/>
• Solo mode shows only one layer<br/>
• Useful for debugging complex scenarios<br/>
</div>`,
            // Page 5: Symbols
            `<div class="help-text"><strong>🔣 SYMBOLS 🔣</strong><br/><br/>${drawableTable}</div>`,
            // Page 6: Materials
            `<div class="help-text"><strong>🔩 MATERIALS 🔩</strong><br/><br/>${materialTable}</div>`
        ];
    }
}

;// ./src/timer.ts
class Timer {
    restartInMillis(ms, f) {
        this.stop();
        this.id = setTimeout(() => { this.id = undefined; f(); }, ms);
    }
    stop() {
        if (this.id)
            clearTimeout(this.id);
        this.id = undefined;
    }
}
const timer = (_name) => new Timer();

// EXTERNAL MODULE: ./src/game/xy.ts
var game_xy = __webpack_require__(88);
;// ./src/ui/states/menu-state.ts










class Spot {
    constructor(key, command) {
        this.key = key;
        this.command = command;
    }
}
class MenuState {
    constructor(ui) {
        this.ui = ui;
        this.itemsByXY = new Map();
        this.key = (e) => {
            if (e.key === 'Escape')
                this.ui.setState('select');
            const item = MENU_ITEMS.find(i => i.key === e.key);
            if (!item)
                return;
            this.hideHelp();
            item.action(this.ui, this.pawn);
            ui_renderer/* Repaint */.G2.emit();
        };
        this.showTimer = timer('show');
        this.hideTimer = timer('hide');
        this.helpId = 'menu-help';
        this.sync = () => {
            const base = this.pawn.cell?.xy;
            if (!base || game_xy.XY.matches(base, this.lastBase))
                return;
            this.lastBase = base;
            this.hideHelp();
            this.hideMenu();
            this.showMenu();
            ui_renderer/* Repaint */.G2.emit();
        };
        this.died = (pawn) => {
            if (pawn === this.pawn)
                this.ui.setState('select');
        };
    }
    onClick(cell, _c) {
        if (!cell)
            return this.ui.setState('select');
        const pawn = cell.pawn();
        if (pawn && pawn !== this.pawn)
            return this.ui.setState('menu', pawn);
        const menuItem = this.itemsByXY.get(cell.xy.toString());
        if (!menuItem)
            return this.ui.setState('select');
        this.hideHelp();
        menuItem.command();
    }
    onMouseMove(cell) {
        this.ui.terminal.setCurrent(cell);
        const item = this.itemsByXY.get(cell.xy.toString());
        if (item) {
            this.hideTimer.stop();
            if (this.hovered !== item) {
                this.hovered = item;
                this.showTimer.restartInMillis(700, () => this.showHelp(cell, item));
            }
        }
        else {
            this.hovered = undefined;
            this.hideTimer.restartInMillis(300, () => this.hideHelp());
        }
    }
    enter(pawn) {
        this.pawn = pawn;
        this.pawn.selected = true;
        draw_pawn.PawnSelected.emit(pawn);
        this.unsubMove = draw_pawn.PawnMoved.on(({ pawn }) => { if (pawn === this.pawn)
            this.sync(); });
        this.unsubDied = draw_pawn.PawnDied.on(this.died);
        this.unsubFrame = ui_renderer/* FrameRendered */.HO.on(this.sync);
        document.addEventListener('keydown', this.key);
        this.showMenu();
        this.lastBase = this.pawn.cell.xy;
    }
    exit() {
        this.pawn.selected = false;
        draw_pawn.PawnSelected.emit(null);
        this.hideMenu();
        this.hideHelp();
        this.unsubMove?.();
        this.unsubDied?.();
        this.unsubFrame?.();
        document.removeEventListener('keydown', this.key);
    }
    showMenu() {
        this.placeCommands(MENU_ITEMS);
    }
    addUnusedMenuCells() {
        if ((0,utils/* isEmpty */.Im)(this.itemsByXY))
            return this.pawn.cell.neighbors();
        const result = [];
        this.itemsByXY.forEach((_item, key) => {
            const [x, y] = key.split(', ').map(n => parseInt(n));
            const cell = this.ui.map.get(game_xy.XY.at(x, y));
            result.push(...cell.neighbors().filter(neighbor => !this.itemsByXY.has(neighbor.xy.toString())));
        });
        return result;
    }
    placeCommands(commands) {
        const cells = this.addUnusedMenuCells();
        const placeable = commands.slice(0, cells.length);
        const remaining = commands.slice(cells.length);
        placeable.forEach(item => {
            const cell = cells.shift();
            this.itemsByXY.set(cell.xy.toString(), new Spot(item.key, () => item.action(this.ui, this.pawn)));
            this.ui.map.uiRenderer.replace(`menu-${item.key}`, this.createMenuStroke(cell, item.key));
        });
        if ((0,utils/* hasContent */.ov)(remaining))
            this.placeCommands(remaining);
    }
    hideMenu() {
        this.itemsByXY.forEach(item => {
            this.ui.map.uiRenderer.remove(`menu-${item.key}`);
        });
        this.itemsByXY.clear();
    }
    findUnobstructedMenuLocation(itemCell, text) {
        const base = this.pawn.cell.xy;
        const textWidth = text.length;
        const map = this.ui.map;
        const fitsOnMap = (xy) => {
            if (game_xy.XY.oob(xy))
                return false;
            const endX = xy.x + textWidth - 1;
            return endX < map.w;
        };
        const doesNotBlockMenu = (xy) => {
            for (let i = 0; i < textWidth; i++) {
                const checkXY = xy.add(i, 0);
                if (this.itemsByXY.has(checkXY.toString()) ||
                    (checkXY.x === base.x && checkXY.y === base.y)) {
                    return false;
                }
            }
            return true;
        };
        const tryPosition = (startXY) => {
            let bestX = startXY.x;
            const isRightOfPawn = startXY.x > base.x;
            const isOnCenterLine = startXY.x === base.x;
            const trySlideLeft = (x) => {
                for (let i = x; i >= 0; i--) {
                    const xy = game_xy.XY.at(i, startXY.y);
                    if (fitsOnMap(xy) && doesNotBlockMenu(xy))
                        return i;
                }
                return x;
            };
            const trySlideRight = (x) => {
                for (let i = x; i + textWidth <= map.w; i++) {
                    const xy = game_xy.XY.at(i, startXY.y);
                    if (fitsOnMap(xy) && doesNotBlockMenu(xy))
                        return i;
                }
                return x;
            };
            if (isRightOfPawn || isOnCenterLine) {
                bestX = trySlideRight(startXY.x);
                if (bestX === startXY.x)
                    bestX = trySlideLeft(bestX);
            }
            else {
                bestX = trySlideLeft(startXY.x);
                if (bestX === startXY.x)
                    bestX = trySlideRight(bestX);
            }
            const finalXY = game_xy.XY.at(bestX, startXY.y);
            if (fitsOnMap(finalXY) && doesNotBlockMenu(finalXY)) {
                return finalXY;
            }
            return null;
        };
        // For center line items, prefer offset Y positions first
        const menuItemDirection = itemCell.xy.x - base.x;
        const yPreferences = menuItemDirection === 0
            ? [1, -1, 0, 2, -2, 3, -3, 4, -4] // center: try offset first
            : [0, 1, -1, 2, -2, 3, -3, 4, -4]; // sides: try same row first
        for (const yOffset of yPreferences) {
            const y = itemCell.xy.y + yOffset;
            if (y < 0 || y >= map.h)
                continue;
            const result = tryPosition(game_xy.XY.at(itemCell.xy.x, y));
            if (result)
                return map.get(result);
        }
        // Ultimate fallback
        return itemCell;
    }
    showHelp(cell, item) {
        const text = MENU_HELP[item.key];
        if (!text)
            return;
        const target = this.findUnobstructedMenuLocation(cell, text);
        text_stroke/* TextStroke */.m.render(this.ui.map, text, target.xy, this.helpId, () => colors/* WHITE */.UE, () => true, 6, colors/* BACKGROUND */.h4);
    }
    hideHelp() {
        this.showTimer.stop();
        this.hideTimer.stop();
        this.ui.map.uiRenderer.remove(this.helpId);
        this.hovered = undefined;
    }
    createMenuStroke(cell, char) {
        const stroke = new ui_stroke/* Stroke */.t([], () => '#ff0', () => true, 5);
        stroke.add(cell, char, colors/* BLACK */.Uv);
        return stroke;
    }
}

;// ./src/ui/states/observe-state.ts

class ObservePawnState {
    constructor(ui) {
        this.ui = ui;
    }
    onClick(cell, _c) {
        if (!cell)
            return this.ui.setState('select');
        const pawn = cell.pawn();
        if (pawn)
            this.ui.setState('menu', pawn);
        else
            this.ui.setState('select');
    }
    onMouseMove(cell) {
        this.ui.terminal.setCurrent(cell);
    }
    enter(pawn) {
        this.selected = pawn;
        this.selected.selected = true;
        draw_pawn.PawnSelected.emit(pawn);
    }
    exit() {
        this.selected.selected = false;
        draw_pawn.PawnSelected.emit(null);
    }
}

;// ./src/ui/ui.ts






class UI {
    constructor(terminal, map) {
        this.terminal = terminal;
        this.map = map;
        this.state = 'select';
        this.onClick = (cell, c) => {
            this.states[this.state].onClick(cell, c);
            ui_renderer/* Repaint */.G2.emit();
        };
        this.onMouseMove = (cell) => {
            this.states[this.state].onMouseMove(cell);
            this.terminal.draw();
        };
        this.states = {
            select: new SelectState(this),
            destination: new DestinationState(this),
            menu: new MenuState(this),
            observe: new ObservePawnState(this)
        };
    }
    setState(newState, data) {
        this.states[this.state].exit?.();
        this.state = newState;
        this.states[this.state].enter?.(data);
    }
    nextPawn(pawn) {
        this.setState('menu', draw_pawn.Pawn.next(pawn));
    }
}

// EXTERNAL MODULE: ./src/signal.ts
var signal = __webpack_require__(334);
// EXTERNAL MODULE: ./src/ui/firehouse.ts + 1 modules
var firehouse = __webpack_require__(8846);
// EXTERNAL MODULE: ./src/game/state.ts + 1 modules
var state = __webpack_require__(9308);
// EXTERNAL MODULE: ./src/ui/feedback.ts + 1 modules
var feedback = __webpack_require__(5264);
;// ./src/html/switch-env.html
/* harmony default export */ const switch_env = ("<div id=\"env-switch-modal\" class=\"modal-window column gap-form\">\n    <div class=\"row items-between cross-aligned-center gap-modal-header border-bottom\">\n        <h3>SWITCH ENVIRONMENT</h3>\n        <button id=\"env-switch-close\" class=\"button-secondary close-button\">×</button>\n    </div>\n    <div id=\"env-switch-message\"></div>\n    <div class=\"row aligned-end gap-buttons\">\n        <button id=\"env-switch-cancel\" class=\"button-secondary\">Cancel</button>\n        <button id=\"env-switch-save-push\" class=\"button-primary\">Save &amp; Push</button>\n        <button id=\"env-switch-save\" class=\"button-primary\">Save Here &amp; Switch</button>\n        <button id=\"env-switch-switch\" class=\"button-primary\">Switch Only</button>\n    </div>\n</div>\n");
// EXTERNAL MODULE: ./src/ui/modal.ts
var modal = __webpack_require__(5382);
// EXTERNAL MODULE: ./src/storage.ts
var storage = __webpack_require__(8421);
;// ./src/ui/env-switch.ts




class EnvSwitch extends modal/* Modal */.a {
    constructor() {
        super('#env-switch-modal');
        this.div.appendFileHtml(switch_env);
        const close = () => this.choose('cancel');
        this.div.d1('#env-switch-close').onClick(close);
        this.div.d1('#env-switch-cancel').onClick(close);
        this.div.d1('#env-switch-save-push').onClick(() => this.choose('push'));
        this.div.d1('#env-switch-save').onClick(() => this.choose('save'));
        this.div.d1('#env-switch-switch').onClick(() => this.choose('switch'));
    }
    async show() {
        const s = storage/* storage */.I.get('gameState');
        const bytes = s ? await (0,compress/* gzSize */.F8)(s) : 0;
        this.div.d1('#env-switch-message').text(`Save is ${bytes}b`);
        super.show();
        return new Promise(r => (this.resolve = r));
    }
    choose(a) {
        super.hide();
        this.resolve?.(a);
    }
    modalKeyHandled(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            this.choose('cancel');
            return true;
        }
        return false;
    }
}

;// ./src/html/save-slots.html
/* harmony default export */ const save_slots = ("<div id=\"save-slots-modal\" class=\"modal-window column gap-form\">\n    <h3 id=\"save-title\" class=\"popup-title border-bottom\">SAVE GAME - SELECT SLOT</h3>\n    <div class=\"imported-save-section border-bottom\">\n        <div class=\"imported-save template save-slot panel\">\n            <div class=\"slot-header row items-spread cross-aligned-center\">\n                <div class=\"slot-number\">Imported</div>\n                <button class=\"slot-delete button-secondary close-button\">×</button>\n            </div>\n            <div class=\"slot-info column gap-terminal-info\">\n                <div class=\"slot-status\">Imported Save</div>\n                <div class=\"slot-details\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"exported-save-section\">\n        <div class=\"exported-save template save-slot panel\">\n            <div class=\"slot-header row items-spread cross-aligned-center\">\n                <div class=\"slot-number\">Exported</div>\n                <button class=\"slot-delete button-secondary close-button\">×</button>\n            </div>\n            <div class=\"slot-info column gap-terminal-info\">\n                <div class=\"slot-status\">Exported Save</div>\n                <div class=\"slot-details\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"slots\">\n        <div class=\"slot template save-slot panel\">\n            <div class=\"slot-header row items-spread cross-aligned-center\">\n                <div class=\"slot-number\">1</div>\n                <button class=\"slot-delete button-secondary close-button\">×</button>\n            </div>\n            <div class=\"slot-info column gap-terminal-info\">\n                <div class=\"slot-status\">Empty Slot</div>\n                <div class=\"slot-details\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"save-actions row aligned-end\">\n        <button id=\"save-cancel\" class=\"button-secondary\">Cancel</button>\n    </div>\n    <div class=\"popup-help-text\">\n        Click a slot to select • ESC to cancel\n    </div>\n</div>\n");
;// ./src/ui/save-slots.ts





class SaveSlots extends modal/* Modal */.a {
    constructor(gameState) {
        super('#save-slots-modal');
        this.gameState = gameState;
        this.currentAction = 'save';
        this.div.appendFileHtml(save_slots);
        this.div.d1('#save-cancel').onClick(() => this.hide());
    }
    async showSaveDialog() {
        this.currentAction = 'save';
        this.div.d1('#save-title').text('SAVE GAME - SELECT SLOT');
        await this.renderSlots();
        this.show();
    }
    async showLoadDialog() {
        this.currentAction = 'load';
        this.div.d1('#save-title').text('LOAD GAME - SELECT SLOT');
        await this.renderSlots();
        this.show();
    }
    async showAutoLoadDialog() {
        this.currentAction = 'load';
        this.div.d1('#save-title').text('LOAD GAME - SELECT SLOT');
        await this.renderSlots();
        this.show();
    }
    async renderSlots() {
        await this.renderEphemeralSave('imported', 'importedSave', 'Imported');
        await this.renderEphemeralSave('exported', 'exportedSave', 'Exported');
        const slots = await this.getSlotData();
        this.div.d1('.slots').dList('.slot').updateFrom(slots, (slotDiv, slotData) => {
            const index = slots.indexOf(slotData);
            const slotNum = index + 1;
            slotDiv.d1('.slot-number').text(slotNum.toString());
            if (slotData.exists) {
                slotDiv.d1('.slot-status').text(`Firehouse #${slotData.firehouseNum}`);
                slotDiv.d1('.slot-details').text(`${slotData.count} firefighters - ${slotData.bytes}b`);
                slotDiv.classed('slot-exists', true).classed('slot-empty', false);
            }
            else {
                slotDiv.d1('.slot-status').text('Empty Slot');
                slotDiv.d1('.slot-details').text('');
                slotDiv.classed('slot-exists', false).classed('slot-empty', true);
            }
            slotDiv.onClick(() => this.selectSlot(slotNum));
            slotDiv.d1('.slot-delete').on('click', async (event) => {
                event.stopPropagation();
                this.deleteSlot(slotNum);
                await this.renderSlots();
            });
        });
    }
    async renderEphemeralSave(type, storageKey, displayName) {
        const section = this.div.d1(`.${type}-save-section`);
        if (this.currentAction === 'save') {
            section.style('display', 'none');
            return;
        }
        const data = this.getSaveData(storageKey);
        if (!data) {
            section.style('display', 'none');
            return;
        }
        section.style('display', 'block');
        const saveDiv = section.d1(`.${type}-save`);
        const bytes = await (0,compress/* gzSize */.F8)(JSON.stringify(data));
        const info = this.extractInfo(data);
        saveDiv.d1('.slot-status').text(`Firehouse #${info.firehouseNum}`);
        saveDiv.d1('.slot-details').text(`${info.count} firefighters - ${bytes}b`);
        saveDiv.classed('slot-exists', true).classed('slot-empty', false);
        saveDiv.onClick(() => this.loadEphemeralSave(storageKey, displayName));
        saveDiv.d1('.slot-delete').on('click', async (event) => {
            event.stopPropagation();
            this.deleteEphemeralSave(storageKey, displayName);
            await this.renderSlots();
        });
    }
    extractInfo(data) {
        if (data && data.firehouse) {
            const fh = data.firehouse;
            return { count: (fh.pawns || []).length, firehouseNum: fh.firehouseNum || 0 };
        }
        return { count: (data?.pawns || []).length, firehouseNum: data?.firehouseNum || 0 };
    }
    loadEphemeralSave(storageKey, displayName) {
        const raw = storage/* storage */.I.get(storageKey);
        if (!raw)
            return;
        try {
            const parsed = JSON.parse(raw);
            this.gameState.loadData(parsed);
            storage/* storage */.I.remove(storageKey);
            if (this.gameState.introSucceeded)
                state/* FirehouseMode */.M.emit(this.gameState.firehouse.pawns);
            this.hide();
            console.log(`loaded ephemeral save "${displayName}" successfully`);
        }
        catch (e) {
            console.error(`Failed to load ${displayName} save`, e);
            console.error('Save JSON:', raw);
            const archiveKey = `badSaves_${Date.now()}`;
            storage/* storage */.I.set(archiveKey, raw);
            storage/* storage */.I.remove(storageKey);
            const err = new Error(`Failed to load ${displayName} save\narchived at ${archiveKey}`);
            err.cause = e;
            throw err;
        }
    }
    deleteEphemeralSave(storageKey, displayName) {
        storage/* storage */.I.remove(storageKey);
    }
    getSaveData(storageKey) {
        const data = storage/* storage */.I.get(storageKey);
        if (!data)
            return null;
        try {
            return JSON.parse(data);
        }
        catch {
            return null;
        }
    }
    selectSlot(slotNum) {
        if (this.currentAction === 'save') {
            this.saveToSlot(slotNum);
        }
        else {
            this.loadFromSlot(slotNum);
        }
        this.hide();
    }
    saveToSlot(slotNum) {
        const key = `gameState_${slotNum}`;
        storage/* storage */.I.set(key, JSON.stringify(this.gameState.data()));
        console.log('saved to slot', slotNum);
    }
    loadFromSlot(slotNum) {
        const key = `gameState_${slotNum}`;
        console.log('loading save from slot', slotNum);
        const raw = storage/* storage */.I.get(key);
        if (!raw) {
            this.startFreshGame();
            return;
        }
        try {
            const parsed = JSON.parse(raw);
            this.gameState.loadData(parsed);
            if (this.gameState.introSucceeded)
                state/* FirehouseMode */.M.emit(this.gameState.firehouse.pawns);
        }
        catch (e) {
            console.error(`Failed to load slot ${slotNum}`, e);
            console.error('Save JSON:', raw);
            const archiveKey = `badSaves_${slotNum}_${Date.now()}`;
            storage/* storage */.I.set(archiveKey, raw);
            storage/* storage */.I.remove(key);
            const err = new Error(`Failed to load slot ${slotNum}\narchived at ${archiveKey}`);
            err.cause = e;
            throw err;
        }
    }
    deleteSlot(slotNum) {
        const key = `gameState_${slotNum}`;
        storage/* storage */.I.remove(key);
        console.log('deleted save slot', slotNum);
    }
    startFreshGame() {
        console.log('starting fresh game');
        this.gameState.restartIntro();
    }
    hasSavedGames() {
        return [1, 2, 3].some(slotNum => {
            const key = `gameState_${slotNum}`;
            return storage/* storage */.I.get(key) !== null;
        }) || this.hasEphemeralSave('importedSave') || this.hasEphemeralSave('exportedSave');
    }
    hasEphemeralSave(storageKey) {
        return storage/* storage */.I.get(storageKey) !== null;
    }
    async getSlotData() {
        return Promise.all([1, 2, 3].map(async (slotNum) => {
            const key = `gameState_${slotNum}`;
            const raw = storage/* storage */.I.get(key);
            if (!raw)
                return { exists: false, count: 0, firehouseNum: 0, bytes: 0 };
            const parsed = JSON.parse(raw);
            const bytes = await (0,compress/* gzSize */.F8)(raw);
            const info = this.extractInfo(parsed);
            return {
                exists: true,
                count: info.count,
                firehouseNum: info.firehouseNum,
                bytes
            };
        }));
    }
    hide() {
        super.hide();
    }
    modalKeyHandled(e) {
        if (e.key >= '1' && e.key <= '3') {
            this.selectSlot(parseInt(e.key));
            return true;
        }
        return false;
    }
}

;// ./src/html/branch-runner.html
/* harmony default export */ const branch_runner = ("<div id=\"branch-runner-modal\" class=\"modal-window column gap-form\">\n    <h3 class=\"popup-title border-bottom\">BRANCH RUNNER</h3>\n    <div class=\"branch-actions\">\n        <button id=\"refresh-branches\" class=\"button-link\">Refresh</button>\n    </div>\n    <div class=\"branches\">\n        <div class=\"branch template branch-item\">\n            <div class=\"branch-info\">\n                <div class=\"branch-name\"></div>\n                <div class=\"branch-title\"></div>\n            </div>\n            <div class=\"branch-actions\">\n                <a class=\"button-link pr-link\" href=\"#\" target=\"_blank\">PR</a>\n                <button class=\"button-primary branch-run\">Run</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"popup-actions\">\n        <button id=\"branch-cancel\" class=\"button-secondary\">Cancel</button>\n    </div>\n    <div class=\"progress-messages hidden\">\n        <div class=\"progress-title\">Running branch...</div>\n        <div class=\"progress-log\"></div>\n    </div>\n    <div class=\"popup-help-text\">\n        Click Run to test branch • Refresh to update list • ESC to cancel\n    </div>\n</div>\n");
;// ./src/git.ts

const apiCall = async (endpoint, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `/api/git/${endpoint}`, true); // asynchronous
    xhr.setRequestHeader('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status === 200) {
                try {
                    resolve(JSON.parse(xhr.responseText));
                }
                catch (e) {
                    reject(new Error(`Failed to parse response: ${e}`));
                }
            }
            else {
                reject(new Error(`API call failed: ${xhr.statusText}`));
            }
        };
        xhr.onerror = () => reject(new Error('Network error'));
        xhr.ontimeout = () => reject(new Error('Request timeout'));
        xhr.timeout = 30000; // 30 second timeout
        try {
            xhr.send(JSON.stringify(data || {}));
        }
        catch (error) {
            reject(new Error(`Git API call failed: ${endpoint}\n${error.message}`));
        }
    });
};
const git = {
    async fetchBranches() {
        try {
            await apiCall('fetch');
        }
        catch (error) {
            (0,utils/* bomb */.fv)(`Failed to fetch branches: ${error.message}`);
        }
    },
    async listCodexBranches() {
        try {
            const result = await apiCall('list-branches');
            return result || { branches: [] };
        }
        catch (error) {
            (0,utils/* bomb */.fv)(`Failed to list branches: ${error.message}`);
            return { branches: [] };
        }
    },
    async cloneRepo(targetDir) {
        try {
            await apiCall('clone', { targetDir });
        }
        catch (error) {
            (0,utils/* bomb */.fv)(`Failed to clone repo: ${error.message}`);
        }
    },
    async checkoutBranch(repoDir, branch) {
        try {
            await apiCall('checkout', { repoDir, branch });
        }
        catch (error) {
            (0,utils/* bomb */.fv)(`Failed to checkout branch: ${error.message}`);
        }
    },
    async startBranchServer(repoDir) {
        try {
            await apiCall('start-server', { repoDir });
        }
        catch (error) {
            (0,utils/* bomb */.fv)(`Failed to start server: ${error.message}`);
        }
    },
    async getBranchInfo() {
        try {
            const result = await apiCall('branch-info');
            return result || { branch: 'main', hasChanges: false };
        }
        catch (error) {
            (0,utils/* bomb */.fv)(`Failed to get branch info: ${error.message}`);
            return { branch: 'main', hasChanges: false };
        }
    },
    async killServer() {
        await apiCall('kill-server');
    }
};

;// ./src/ui/branch-runner.ts



class BranchRunnerUI extends modal/* Modal */.a {
    constructor() {
        super('#branch-runner-modal');
        this.branchTab = null;
        this.isRunning = false;
        this.div.appendFileHtml(branch_runner);
        this.setupEventHandlers();
    }
    async showDialog() {
        this.show();
        await this.refreshBranches();
    }
    setupEventHandlers() {
        this.div.d1('#branch-cancel').onClick(() => this.hide());
        this.div.d1('#refresh-branches').onClick(() => void this.refreshBranches());
    }
    async refreshBranches() {
        await git.fetchBranches();
        const r = await git.listCodexBranches();
        const b = r.branches || [];
        this.div.d1('.branches').dList('.branch').updateFrom(b, (d, data) => {
            const n = typeof data === 'string' ? data : data.branch;
            const t = typeof data === 'string' ? '' : data.title;
            const num = typeof data === 'string' ? 0 : data.number;
            d.d1('.branch-name').text(n);
            t ? d.d1('.branch-title').text(t).show() : d.d1('.branch-title').hide();
            if (num > 0) {
                const u = `https://github.com/${this.getRepoPath()}/pull/${num}`;
                d.d1('.pr-link').href(u).show();
            }
            else
                d.d1('.pr-link').hide();
            const runBtn = d.d1('.branch-run');
            runBtn.on('click', null).onClick(() => this.runBranch(n));
            if (this.isRunning)
                runBtn.disable(true).text('Running...');
            else
                runBtn.disable(false).text('Run');
        });
    }
    async runBranch(branch) {
        if (this.isRunning)
            return;
        this.isRunning = true;
        const target = '/Users/jeffbay/src/firehouse-rl-branch';
        this.div.d1('.branches').hide();
        this.div.d1('.popup-actions').hide();
        this.div.d1('.popup-help-text').hide();
        this.div.d1('.progress-messages').show();
        const log = this.div.d1('.progress-log');
        const msg = (m) => { log.append('div').text(m); console.log(`Branch Runner: ${m}`); };
        try {
            msg('Stopping any existing server on port 8081...');
            try {
                await git.killServer();
                msg('Server stopped (or was not running)');
            }
            catch (e) {
                msg('No server was running to stop');
            }
            msg(`Cloning repository to ${target}...`);
            await this.delay(100);
            await git.cloneRepo(target);
            msg('Repository ready');
            msg(`Checking out branch: ${branch}`);
            await this.delay(100);
            await git.checkoutBranch(target, branch);
            msg(`Branch ${branch} checked out and updated`);
            msg('Starting webpack dev server on port 8081...');
            await this.delay(100);
            await git.startBranchServer(target);
            msg('Server starting - waiting 5 seconds for full startup...');
            await this.delay(5000);
            msg('Opening branch in browser tab');
            if (this.branchTab && !this.branchTab.closed) {
                this.branchTab.location.href = 'http://localhost:8081';
                this.branchTab.focus();
            }
            else
                this.branchTab = window.open('http://localhost:8081', 'branch-testing');
            msg('Branch server ready! Check browser tab.');
            await this.delay(2000);
            this.hide();
            this.resetProgressUI();
        }
        catch (e) {
            const m = e instanceof Error ? e.message : String(e);
            msg(`Error: ${m}`);
            msg('Check console for details. Click Cancel to close.');
            console.error('Branch runner error:', e);
        }
        finally {
            this.isRunning = false;
        }
    }
    delay(ms) { return new Promise(r => setTimeout(r, ms)); }
    resetProgressUI() {
        this.div.d1('.progress-log').text('');
        this.div.d1('.progress-messages').hide();
        this.div.d1('.branches').show();
        this.div.d1('.popup-actions').show();
        this.div.d1('.popup-help-text').show();
    }
    getRepoPath() { return 'jlb0170/firehouse-rl'; }
}

// EXTERNAL MODULE: ./src/ui/play-controls.ts
var play_controls = __webpack_require__(6488);
// EXTERNAL MODULE: ./src/draw/fire.ts
var fire = __webpack_require__(1267);
// EXTERNAL MODULE: ./src/game/fires.ts
var fires = __webpack_require__(6746);
;// ./src/game/game.ts


























const GameStepped = new signal/* SignalWithCurrent */.Y();
const LevelWon = new signal/* SignalWithCurrent */.Y();
const LevelReset = new signal/* Signal */.H();
class Game {
    constructor() {
        this.running = false;
        this.holding = false;
        this.stepTimer = timer('step');
        this.speed = 1;
        this.showLighting = false;
        this.showDarkness = false;
        this.mutedLayers = new Set();
        this.soloLayer = null;
        this.helpSystem = new HelpSystem();
        this.feedback = new feedback/* Feedback */.G();
        this.envSwitch = new EnvSwitch();
        this.setSpeed = (n) => {
            this.speed = n;
            if (this.running)
                this.stepTimer.restartInMillis(this.delay(), this.tick);
        };
        this.delay = () => 350 / this.speed;
        this.updateStepInfo = () => {
            if (!GameStepped.current)
                return;
            const { frame, stepMs } = GameStepped.current;
            const r = ui_renderer/* FrameRendered */.HO.current ?? 0;
            (0,utils.$1)('step-frame').textContent = `${frame}`;
            (0,utils.$1)('step-timing').textContent = `${stepMs}ms r${r}`;
        };
        this.updateFireCount = () => {
            fires/* Fires */.UQ.decorate('fires');
            fires/* Fires */.UQ.decorate('items');
            fires/* Fires */.UQ.decorate('people');
        };
        this.keyDown = (e) => {
            if (e.key === ' ') {
                e.preventDefault();
                if (this.holding)
                    return;
                this.holding = true;
                if (LevelWon.current) {
                    LevelWon.current = false;
                    return;
                }
                if (!this.running)
                    this.play();
            }
            else if (e.key === 'Escape') {
                if (this.feedback.isVisible()) {
                    this.feedback.hide();
                }
                else {
                    this.closeHelp();
                }
            }
            else if (e.key === 'f' || e.key === 'F') {
                fires/* Fires */.UQ.highlightOnce(this.map, 'items');
                fires/* Fires */.UQ.highlightOnce(this.map, 'people');
            }
            else if (e.key === 'ArrowLeft')
                this.previousHelpPage();
            else if (e.key === 'ArrowRight')
                this.nextHelpPage();
        };
        this.keyUp = (e) => {
            if (e.key === ' ' && this.holding) {
                this.holding = false;
                if (this.running)
                    this.pause();
            }
        };
        this.closeHelpOnOutsideClick = (e) => {
            const popup = (0,utils.$1)('help-popup');
            const target = e.target;
            if (!popup.contains(target)) {
                this.closeHelp();
            }
        };
        this.tick = () => {
            if (!this.running)
                return;
            this.step();
            this.stepTimer.restartInMillis(this.delay(), this.tick);
        };
        this.chooseSwitchAction = () => this.envSwitch.show();
        this.switchEnv = async () => {
            const act = await this.chooseSwitchAction();
            if (act === 'cancel')
                return;
            if (act === 'save' || act === 'push') {
                this.state.save();
                const gameStateData = storage/* storage */.I.get('gameState');
                if (gameStateData)
                    storage/* storage */.I.set('exportedSave', gameStateData);
            }
            let url = this.envDest();
            if (act === 'push') {
                const s = storage/* storage */.I.get('gameState');
                if (s) {
                    const g = await (0,compress/* gzip */.ZI)(s);
                    alert(`Pushing ${(0,compress/* gzBytes */.vy)(g)} bytes`);
                    url += '?import=' + encodeURIComponent(g);
                    if ((0,compress/* longUrl */.wz)(url))
                        alert('Save may exceed url length and be truncated');
                }
            }
            location.href = url;
        };
        this.enterFirehouse = (pawns) => {
            this.pause();
            this.map.killAll();
            this.map.display.clear();
            this.map.smokeDisplay.clear();
            this.map.uiRenderer.clearStrokes();
            this.showDarkness = true;
            this.updateDarknessToggleButton();
            this.updateLightingEnabled();
            this.drawMap();
            this.firehouse.open(this.state.firehouse.firehouseNum, pawns);
        };
        this.afterFirehouse = () => {
            const models = this.state.firehouse.pawns;
            const pawns = models.map(m => m.toPawn());
            const opts = this.initializer.startNext(pawns);
            this.resetCounters();
            if (opts.showDarkness !== undefined)
                this.showDarkness = opts.showDarkness;
            this.updateDarknessToggleButton();
            this.updateLightingEnabled();
            // Ensure the freshly started level renders immediately after closing the modal
            this.drawMap();
        };
        this.map = new map/* Map */.T(config/* Config */.T.WIDTH, config/* Config */.T.HEIGHT);
        window.map = this.map;
        window.Fire = fire.Fire;
        this.terminal = new Terminal();
        this.ui = new UI(this.terminal, this.map);
        this.attachToDOM();
        this.setupPlayControls();
        this.setupControls();
        if ((0,utils/* isLocal */.IX)() && !(0,utils/* isBranchRunner */.ZL)()) {
            this.branchRunner = new BranchRunnerUI();
            (0,d3_extend.d1)('#branch-runner').show();
        }
        void this.showBranchInfo();
        this.setupDebugControls();
        this.updateEnvButton();
        this.initializer = new initializer.Initializer(this.map);
        this.initializer.initialize();
        this.updateLightingEnabled();
        this.drawMap();
        this.updatePlayPauseButton();
        this.updateFreezeButton();
        this.updateStepInfo();
        this.updateFireCount();
        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
        ui_renderer/* RedrawMap */.iQ.on(() => this.drawMap());
        ui_renderer/* FrameRendered */.HO.on(() => this.updateStepInfo());
        fires/* BurningCountersUpdated */.EZ.on(() => this.updateFireCount());
        this.state = new state/* GameState */.m(this.map);
        modal/* ModalShowing */.r.on(s => {
            if (s) {
                this.pauseForModal();
                this.map.uiRenderer.freeze();
            }
            else {
                this.map.uiRenderer.unfreeze();
                this.resumeFromModal();
            }
        });
        this.saveSlots = new SaveSlots(this.state);
        this.firehouse = new firehouse/* FirehouseModal */._();
        state/* FirehouseMode */.M.on(this.enterFirehouse);
        firehouse/* FirehouseClosed */.F.on(this.afterFirehouse);
        // Auto-show load dialog if saves exist, otherwise start normally
        if (this.saveSlots.hasSavedGames()) {
            this.saveSlots.showAutoLoadDialog();
        }
        else {
            this.state.load();
        }
        GameStepped.emit({ frame: 0, stepMs: 0 });
    }
    resetCounters() {
        GameStepped.emit({ frame: 0, stepMs: 0 });
        ui_renderer/* FrameRendered */.HO.emit(0);
        this.updateStepInfo();
    }
    attachToDOM() {
        const container = (0,utils.$1)('game-container');
        container.style.position = 'relative';
        this.map.display.attachTo(container, { display: 'block', zIndex: '1' });
        this.map.smokeDisplay.attachTo(container, { position: 'absolute', top: '0', left: '0', zIndex: '2', pointerEvents: 'none' });
        this.map.uiRenderer.attachTo(container, { position: 'absolute', top: '0', left: '0', zIndex: '3', pointerEvents: 'none' });
        this.map.onMousemove(this.ui.onMouseMove);
        this.map.onClick(this.ui.onClick);
    }
    setupPlayControls() {
        this.playControls = new play_controls/* PlayControls */.j('#play-wrapper', {
            onPlayPause: () => this.togglePlayPause(),
            onSpeedChange: (speed) => this.setSpeed(speed),
            getIsRunning: () => this.running
        });
    }
    setupControls() {
        (0,utils/* onClick */.Af)((0,utils.$1)('next-button'), () => this.step());
        (0,utils/* onClick */.Af)((0,utils.$1)('freeze-button'), () => this.toggleFreeze());
        (0,utils/* onClick */.Af)((0,utils.$1)('help-button'), e => {
            e.stopPropagation();
            this.toggleHelp();
        });
        (0,utils/* onClick */.Af)((0,utils.$1)('items-icon'), () => fires/* Fires */.UQ.highlightOnce(this.map, 'items'));
        (0,utils/* onClick */.Af)((0,utils.$1)('people-icon'), () => fires/* Fires */.UQ.highlightOnce(this.map, 'people'));
        (0,utils/* onClick */.Af)((0,utils.$1)('feedback-button'), e => {
            e.stopPropagation();
            this.showFeedback();
        });
    }
    setupDebugControls() {
        (0,utils/* onClick */.Af)((0,utils.$1)('debug-toggle'), () => (0,utils/* toggleHidden */.N2)((0,utils.$1)('debug-controls')));
        (0,utils/* onClick */.Af)((0,utils.$1)('lighting-toggle'), () => this.toggleLighting());
        (0,utils/* onClick */.Af)((0,utils.$1)('darkness-toggle'), () => this.toggleDarkness());
        (0,utils/* onClick */.Af)((0,utils.$1)('layer-on'), () => this.turnOnAllLayers());
        (0,utils/* onClick */.Af)((0,utils.$1)('layer-off'), () => this.turnOffAllLayers());
        (0,utils/* onClick */.Af)((0,utils.$1)('load-game'), () => this.saveSlots.showLoadDialog());
        (0,utils/* onClick */.Af)((0,utils.$1)('save-game'), () => this.saveSlots.showSaveDialog());
        (0,utils/* onClick */.Af)((0,utils.$1)('new-game'), () => this.confirmNewGame());
        (0,utils/* onClick */.Af)((0,utils.$1)('draw-button'), () => { location.href = location.pathname + '?mode=editor'; });
        (0,utils/* onClick */.Af)((0,utils.$1)('switch-env'), this.switchEnv);
        if (this.branchRunner) {
            (0,utils/* onClick */.Af)((0,utils.$1)('branch-runner'), () => void this.branchRunner.showDialog());
        }
        this.createLayerButtons();
        game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
            (0,utils/* onClick */.Af)((0,utils.$1)(`layer-${layerName}`), () => this.toggleLayerVisibility(layerName));
        });
    }
    updatePlayPauseButton() {
        this.playControls.updatePlayPauseButton();
    }
    updateFreezeButton() {
        const button = (0,utils.$1)('freeze-button');
        button.textContent = this.map.uiRenderer.frozen() ? '🧊' : '❄️';
    }
    resetFrameCounter() {
        GameStepped.emit({ frame: 0, stepMs: 0 });
    }
    togglePlayPause() {
        if (this.running)
            this.pause();
        else
            this.play();
    }
    toggleFreeze() {
        if (this.map.uiRenderer.frozen()) {
            this.map.uiRenderer.unfreeze();
        }
        else {
            if (this.running)
                this.pause();
            this.map.uiRenderer.freeze();
        }
        this.updateFreezeButton();
    }
    toggleHelp() {
        const popup = (0,utils.$1)('help-popup');
        if (popup.classList.contains('hidden')) {
            if (this.running)
                this.pause();
            this.loadHelp();
            popup.classList.remove('hidden');
            setTimeout(() => {
                document.addEventListener('click', this.closeHelpOnOutsideClick);
            }, 10);
        }
        else {
            this.closeHelp();
        }
    }
    closeHelp() {
        const popup = (0,utils.$1)('help-popup');
        popup.classList.add('hidden');
        document.removeEventListener('click', this.closeHelpOnOutsideClick);
    }
    loadHelp() {
        this.helpSystem.resetToFirstPage();
        this.updateHelpDisplay();
    }
    showFeedback() {
        if (this.running)
            this.pause();
        this.feedback.show();
    }
    pauseForModal() {
        if (this.running)
            this.pause();
    }
    resumeFromModal() {
        // Game stays paused - user can resume manually if they want
    }
    updateHelpDisplay() {
        const content = this.helpSystem.getCurrentPage();
        const pageInfo = this.helpSystem.getPageInfo();
        (0,utils.$1)('help-content').innerHTML = pageInfo + content;
    }
    nextHelpPage() {
        if (!(0,utils.$1)('help-popup').classList.contains('hidden')) {
            if (this.helpSystem.nextPage()) {
                this.updateHelpDisplay();
            }
        }
    }
    previousHelpPage() {
        if (!(0,utils.$1)('help-popup').classList.contains('hidden')) {
            if (this.helpSystem.previousPage()) {
                this.updateHelpDisplay();
            }
        }
    }
    pause() {
        if (!this.running)
            return;
        this.running = false;
        this.stepTimer.stop();
        this.updatePlayPauseButton();
    }
    play() {
        if (this.running)
            return;
        this.running = true;
        this.tick();
        this.updatePlayPauseButton();
    }
    step() {
        const start = Date.now();
        this.map.step();
        this.map.lighting.redraw();
        this.drawMap();
        ui_renderer/* Repaint */.G2.emit();
        const stepMs = Date.now() - start;
        const frame = (GameStepped.current?.frame || 0) + 1;
        GameStepped.emit({ frame, stepMs });
        this.updateStepInfo();
    }
    drawMap() {
        this.map.lighting.redraw(); // Update colors more frequently for flickering effect
        const visibleLayers = this.getVisibleLayers();
        const showNothing = this.mutedLayers.size === game_layers/* CellLayers */.v.layerNames.length;
        const debug = this.mutedLayers.size > 0 || this.soloLayer !== null;
        this.map.draw(this.showLighting, visibleLayers, showNothing, debug, this.showDarkness);
    }
    getVisibleLayers() {
        if (this.soloLayer) {
            return new Set([this.soloLayer]);
        }
        if (this.mutedLayers.size === 0) {
            return new Set();
        }
        return new Set(game_layers/* CellLayers */.v.layerNames.filter(layer => !this.mutedLayers.has(layer)));
    }
    updateLightingEnabled() {
        if (this.showLighting || this.showDarkness) {
            this.map.lighting.enable();
            this.map.lighting.redraw();
        }
        else
            this.map.lighting.disable();
    }
    toggleLighting() {
        this.showLighting = !this.showLighting;
        const button = (0,utils.$1)('lighting-toggle');
        button.textContent = this.showLighting ? 'LT*' : 'LT';
        this.updateLightingEnabled();
        this.drawMap();
    }
    toggleDarkness() {
        this.showDarkness = !this.showDarkness;
        const button = (0,utils.$1)('darkness-toggle');
        button.textContent = this.showDarkness ? 'DK*' : 'DK';
        this.updateLightingEnabled();
        this.drawMap();
    }
    toggleLayerVisibility(layerName) {
        const button = (0,utils.$1)(`layer-${layerName}`);
        if (this.soloLayer === layerName) {
            this.soloLayer = null;
            button.classList.remove('solo');
        }
        else if (this.soloLayer) {
            const oldButton = (0,utils.$1)(`layer-${this.soloLayer}`);
            oldButton.classList.remove('solo');
            this.soloLayer = layerName;
            button.classList.add('solo');
        }
        else if (this.mutedLayers.has(layerName)) {
            this.mutedLayers.delete(layerName);
            button.classList.remove('muted');
        }
        else {
            this.mutedLayers.add(layerName);
            button.classList.add('muted');
        }
        this.drawMap();
    }
    turnOnAllLayers() {
        this.mutedLayers.clear();
        this.soloLayer = null;
        game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
            const button = (0,utils.$1)(`layer-${layerName}`);
            button.classList.remove('muted', 'solo');
        });
        this.drawMap();
    }
    turnOffAllLayers() {
        this.soloLayer = null;
        this.mutedLayers = new Set(game_layers/* CellLayers */.v.layerNames);
        game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
            const button = (0,utils.$1)(`layer-${layerName}`);
            button.classList.remove('solo');
            button.classList.add('muted');
        });
        this.drawMap();
    }
    createLayerButtons() {
        const layerGroup = (0,utils.$1)('layer-group');
        const layerAbbrevs = (0,utils/* toMap */.J9)(game_layers/* CellLayers */.v.layerNames, name => name.slice(0, 3));
        game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
            const button = document.createElement('button');
            button.id = `layer-${layerName}`;
            button.className = 'button-secondary';
            button.textContent = layerAbbrevs[layerName] || layerName.slice(0, 3);
            layerGroup.appendChild(button);
        });
    }
    envDest() {
        return location.host.includes('github.io') ? 'http://localhost:8080' : 'https://jlb0170.github.io/firehouse-rl-play/';
    }
    updateEnvButton() {
        (0,utils.$1)('switch-env').textContent = location.host.includes('github.io') ? 'LCL' : 'PROD';
    }
    updateDarknessToggleButton() {
        const button = (0,utils.$1)('darkness-toggle');
        button.textContent = this.showDarkness ? 'DK*' : 'DK';
    }
    async showBranchInfo() {
        const d = (0,d3_extend.d1)('#branch-info');
        if ((0,utils/* isLocal */.IX)()) {
            try {
                const { branch, hasChanges } = await git.getBranchInfo();
                if (branch === 'main' || branch === 'master')
                    d.hide();
                else
                    d.text(`Branch: ${branch}${hasChanges ? ' (uncommitted changes)' : ''}`).show();
            }
            catch (e) {
                console.error('showBranchInfo', e);
            }
        }
        else {
            try {
                const response = await fetch('./build-info.txt');
                if (response.ok) {
                    const text = await response.text();
                    console.log('build', text);
                    const sha = text.match(/Git SHA: (\w+)/)?.[1];
                    const commit = text.match(/Commit: (.+)/)?.[1];
                    if (sha) {
                        const display = commit ? `Prod: ${sha} - ${commit}` : `Prod: ${sha}`;
                        d.text(display).show();
                    }
                }
            }
            catch (e) {
            }
        }
    }
    confirmNewGame() {
        const ok = confirm('Start a new game?\nThis will abandon your current progress.');
        if (!ok)
            return;
        this.resetCounters();
        this.state.restartIntro();
    }
}


/***/ }),

/***/ 8646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PawnModel),
/* harmony export */   o: () => (/* binding */ FirehouseModel)
/* harmony export */ });
/* harmony import */ var _draw_pawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2705);

class PawnModel {
    constructor(name, capabilities) {
        this.name = name;
        this.capabilities = capabilities;
        this.toPawn = () => new _draw_pawn__WEBPACK_IMPORTED_MODULE_0__.Pawn(this.name, this.capabilities);
        this.initialLevelUp = () => {
            this.capabilities.initialLevelUp();
        };
    }
}
class FirehouseModel {
    constructor(pawns = [], equipment = [], upgrades = [], firehouseNum = 0, name = '') {
        this.pawns = pawns;
        this.equipment = equipment;
        this.upgrades = upgrades;
        this.firehouseNum = firehouseNum;
        this.name = name;
    }
}


/***/ }),

/***/ 8668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ Cell)
});

// EXTERNAL MODULE: ./src/game/layers.ts
var game_layers = __webpack_require__(5633);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/game/xyl.ts
var xyl = __webpack_require__(6830);
// EXTERNAL MODULE: ./src/draw/fire.ts
var fire = __webpack_require__(1267);
// EXTERNAL MODULE: ./src/draw/smoke.ts
var smoke = __webpack_require__(4502);
// EXTERNAL MODULE: ./src/ui/colors.ts
var colors = __webpack_require__(1919);
// EXTERNAL MODULE: ./node_modules/rot-js/lib/index.js + 46 modules
var lib = __webpack_require__(1364);
// EXTERNAL MODULE: ./src/game/xy.ts
var xy = __webpack_require__(88);
// EXTERNAL MODULE: ./src/draw/door.ts
var door = __webpack_require__(2483);
;// ./src/game/path.ts



const key = (x, y) => `${x},${y}`;
class Path {
    constructor(cells) {
        this.cells = cells;
    }
    [Symbol.iterator]() { return this.cells[Symbol.iterator](); }
}
Path.between = (startCell, endCell) => {
    const map = startCell.map;
    const passable = (x, y) => {
        if (xy.XY.oob(x, y))
            return false;
        if (x === startCell.xy.x && y === startCell.xy.y)
            return true;
        const cell = map.get(xy.XY.at(x, y));
        const w = cell.wall();
        if (w instanceof door/* Door */.$)
            return true;
        return cell.passable();
    };
    const astar = new lib/* Path */.wA.AStar(endCell.xy.x, endCell.xy.y, passable, { topology: 8 });
    const coords = [];
    astar.compute(startCell.xy.x, startCell.xy.y, (x, y) => coords.push(xy.XY.at(x, y)));
    const last = coords[coords.length - 1];
    if (last && last.x === endCell.xy.x && last.y === endCell.xy.y) {
        const cells = coords.slice(1).map(xy => map.get(xy));
        return new Path(cells);
    }
    // Fallback: find closest reachable cell to the end and path to it
    const q = [startCell.xy];
    const seen = new Set([key(startCell.xy.x, startCell.xy.y)]);
    const prev = new Map();
    let best = startCell.xy;
    let bestDist = (endCell.xy.x - best.x) ** 2 + (endCell.xy.y - best.y) ** 2;
    while (q.length) {
        const cur = q.shift();
        const dist = (endCell.xy.x - cur.x) ** 2 + (endCell.xy.y - cur.y) ** 2;
        if (dist < bestDist) {
            best = cur;
            bestDist = dist;
        }
        for (const n of cur.neighbors()) {
            const k = key(n.x, n.y);
            if (seen.has(k))
                continue;
            if (!passable(n.x, n.y))
                continue;
            seen.add(k);
            prev.set(k, key(cur.x, cur.y));
            q.push(n);
        }
    }
    if (best.x === startCell.xy.x && best.y === startCell.xy.y)
        return null;
    const pathXY = [];
    for (let k = key(best.x, best.y); k !== key(startCell.xy.x, startCell.xy.y);) {
        const [x, y] = k.split(',').map(s => parseInt(s, 10));
        pathXY.push(xy.XY.at(x, y));
        const p = prev.get(k);
        k = p;
    }
    pathXY.reverse();
    const cells = pathXY.map(xy => map.get(xy));
    return new Path(cells);
};

;// ./src/game/cell.ts







class Cell {
    constructor(xy, map) {
        this.layers = new game_layers/* CellLayers */.v();
        this.get = (layer) => this.layers.data[layer];
        this.clear = (layer) => { const d = this.layers.data[layer]; if (d)
            this.died(d); };
        this.clearAll = () => game_layers/* CellLayers */.v.layerNames.forEach(n => this.clear(n));
        this.passable = () => this.layers.passable();
        this.wall = () => this.layers.data.walls;
        this.pawn = () => this.layers.data.pawn;
        this.fire = () => this.layers.data.fire;
        this.smoke = () => this.layers.data.smoke;
        this.floor = () => this.layers.data.floor;
        this.items = () => this.layers.data.items;
        this.cardinals = () => this.xy.cardinals().map(xy => this.map.get(xy));
        this.neighbors = () => this.xy.neighbors().map(xy => this.map.get(xy));
        this.u = (y = 1) => this.map.get(this.xy.u(y));
        this.d = (y = 1) => this.map.get(this.xy.d(y));
        this.l = (x = 1) => this.map.get(this.xy.l(x));
        this.r = (x = 1) => this.map.get(this.xy.r(x));
        this.ul = (n = 1) => this.map.get(this.xy.ul(n));
        this.ur = (n = 1) => this.map.get(this.xy.ur(n));
        this.dl = (n = 1) => this.map.get(this.xy.dl(n));
        this.dr = (n = 1) => this.map.get(this.xy.dr(n));
        this.pathTo = (other) => Path.between(this, other);
        this.xy = xy;
        this.map = map;
    }
    draw(showLighting, visibleLayers, showNothing, debug, showDarkness = true) {
        const illumination = showDarkness ? this.map.lighting.at(this) : 9;
        if (showLighting) {
            const char = Math.floor(illumination).toString();
            if (char !== '0') {
                this.map.drawAt(this.xy.x, this.xy.y, char, colors/* WHITE */.UE, '#000');
                return;
            }
        }
        if (showNothing) {
        }
        else
            this.layers.draw(visibleLayers, debug, illumination);
    }
    step() { this.layers.step(); }
    reborn(drawable) {
        this.layers.onExisting(drawable, e => this.died(e));
        this.create(drawable);
    }
    set(drawable) {
        (0,utils/* bombUnless */.Nb)(drawable.born, () => `tried to set raw constructed drawable ${drawable.desc()} - ` +
            'should be created with create()');
        this.layers.onExisting(drawable, existing => {
            (0,utils/* bomb */.fv)(`tried to replace ${existing.desc()} with ${drawable.desc()}`);
        });
        this.layers.set(drawable);
        drawable.movedInto(this);
        this.map.lighting.update(this);
    }
    remove(drawable) {
        this.layers.remove(drawable);
        this.map.lighting.update(this);
    }
    died(drawable) {
        drawable.dying();
        this.remove(drawable);
        drawable.diedAndAlreadyRemovedFromCell();
    }
    occupied(layer) { return !!this.layers.data[layer]; }
    occupantIs(drawable) {
        return this.layers.data[drawable.layer] === drawable;
    }
    queueMove(drawable, xy) {
        this.map.moving(drawable, xyl/* XYL */.Y.at(this.xy, drawable.layer), xyl/* XYL */.Y.at(xy, drawable.layer));
    }
    spawnSmoke() { this.reborn(new smoke/* Smoke */._()); }
    spawnFire() { this.reborn(new fire.Fire()); }
    presentLayers() {
        return game_layers/* CellLayers */.v.layerNames
            .filter((name) => this.layers.data[name])
            .map((name) => {
            const drawable = this.layers.data[name];
            return {
                name,
                drawable,
                desc: drawable.desc(),
                color: drawable.color(),
                hits: drawable.hits,
                maxHits: drawable.maxHits
            };
        });
    }
    onItem(namePattern, onFoundItem) {
        const item = this.items();
        if (item && namePattern.test(item.desc())) {
            onFoundItem(item);
        }
    }
    onFire(onFoundFire) {
        const fire = this.fire();
        if (fire)
            onFoundFire(fire);
    }
    ignite() {
        game_layers/* CellLayers */.v.materialLayers.forEach(l => {
            this.layers.data[l]?.ignite();
        });
    }
    extinguish() {
        game_layers/* CellLayers */.v.materialLayers.forEach(l => {
            this.layers.data[l]?.extinguish();
        });
    }
    create(drawable) { return this.map.create(this, drawable); }
    bombOccupied(layer, msgOfOccupant) {
        (0,utils/* bombIf */.av)(this.occupied(layer), () => `Cell is occupied: ${msgOfOccupant(this.layers.data[layer])}`);
    }
}


/***/ }),

/***/ 8846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ FirehouseClosed),
  _: () => (/* binding */ FirehouseModal)
});

;// ./src/html/firehouse.html
/* harmony default export */ const firehouse = ("<div id=\"firehouse-modal\" class=\"modal-window column gap-form\">\n        <div class=\"firehouse-header row items-between cross-aligned-center gap-modal-header border-bottom\">\n            <h3 id=\"firehouse-title\"></h3>\n            <button id=\"firehouse-close\" class=\"button-secondary close-button\">×</button>\n        </div>\n        <div class=\"global row gap-form items-between\">\n            <div class=\"firehouse-panel panel column gap-terminal-info\">\n                <h4>Upgrades</h4>\n                <div>a better place to live and work</div>\n            </div>\n            <div class=\"firehouse-panel panel column gap-terminal-info\">\n                <h4>Fire Engine</h4>\n                <div>how you get to missions</div>\n            </div>\n            <div class=\"firehouse-panel panel column gap-terminal-info\">\n                <h4>Resources</h4>\n                <div>use these to buy things</div>\n            </div>\n        </div>\n        <div class=\"spacer\"></div>\n        <div class=\"personnel-row row gap-form items-between\">\n            <div class=\"people panel row gap-terminal-info\">\n                <div class=\"firehouse-panel panel column gap-terminal-info\">\n                    <h4>Personnel</h4>\n                    <div class=\"panel-dashed\">\n                        <div class=\"names column gap-terminal-info\">\n                            <div class=\"firefighter template\"><span class=\"n\">Name</span><span class=\"m\"></span></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"firehouse-panel panel column gap-terminal-info inspector\">\n                    <h4>Inspector</h4>\n                    <div class=\"panel-dashed\">\n                        <div class=\"details\">\n                            <div class=\"name\"></div>\n                            <table class=\"capabilities\">\n                                <tr class=\"capability template\">\n                                    <td class=\"capability-value\">10</td>\n                                    <td class=\"capability-name\">\n                                        <span class=\"capability-text\">strength</span>\n                                        <div class=\"capability-tooltip\"></div>\n                                    </td>\n                                    <td class=\"capability-skills\"></td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"firehouse-panel panel column gap-terminal-info\">\n                <h4>Equipment</h4>\n                <div>unallocated equipment</div>\n            </div>\n        </div>\n        <div class=\"firehouse-actions row aligned-end\">\n            <button id=\"firehouse-ok\" class=\"button-primary\">OK</button>\n        </div>\n    </div>\n\n");
// EXTERNAL MODULE: ./src/ui/modal.ts
var modal = __webpack_require__(5382);
// EXTERNAL MODULE: ./src/signal.ts
var signal = __webpack_require__(334);
;// ./src/ui/firehouse.ts



const FirehouseClosed = new signal/* Signal */.H();
class FirehouseModal extends modal/* Modal */.a {
    constructor() {
        super('#firehouse-modal');
        this.selectedPawn = null;
        this.pawns = [];
        this.div.appendFileHtml(firehouse);
        this.div.d1('#firehouse-close').onClick(() => this.hide());
        this.div.d1('#firehouse-ok').onClick(() => this.hide());
    }
    open(num, pawns) {
        this.pawns = pawns;
        this.selectedPawn = null;
        this.div.d1('#firehouse-title').text(`Firehouse ${num}`);
        if (pawns.length > 0) {
            this.inspect(pawns[0]);
        }
        else {
            this.updatePersonnelList();
        }
        this.show();
    }
    updatePersonnelList() {
        this.div.d1('.names').dList('.firefighter').updateFrom(this.pawns, (d, p) => {
            d.d1('.n').text(`👤 ${p.name}`);
            d.onClick(() => this.inspect(p));
            d.classed('selected', p === this.selectedPawn);
        });
    }
    inspect(pawn) {
        this.selectedPawn = pawn;
        this.updatePersonnelList();
        this.div.d1('.inspector .details .name').text('');
        const list = this.div.d1('.inspector .details .capabilities');
        const rows = [];
        pawn.capabilities.eachPair((n, skills) => rows.push([n, skills]));
        list.dList('.capability').updateFrom(rows, (row, [n, skills]) => {
            const nz = skills.filter(s => s.level !== 0);
            const all = skills.map(s => `${s.level} ${s.name}`);
            row.d1('.capability-value').text(String(skills.reduce((a, s) => a + s.level, 0)));
            row.d1('.capability-name .capability-text').text(n);
            row.d1('.capability-skills').text(nz.map(s => `${s.level} ${s.name}`).join(' '));
            row.d1('.capability-name .capability-tooltip').html(all.map(s => `<div>${s}</div>`).join(''));
        });
    }
    hide() {
        const wasShowing = this.div.showing();
        super.hide();
        if (wasShowing)
            FirehouseClosed.emit();
    }
}


/***/ }),

/***/ 9110:
/***/ ((module) => {

module.exports = ".....................................................................................\n.....................................................................................\n............✰.✰......................................................................\n...........✰..........✰..............................................................\n..✰......................T................✰.✰...✰..✰.✰✰✰.....✰...........✰...........\n................✰................T.......T..✰...........✰✰..✰✰..✰......✰.....✰.......\n..✰..............T.........#####...........✰..✰.✰✰.✰..✰.......................✰......\n.............T..✰✰......###*...*###......✰...✰✰.........✰..✰.TT✰...................✰.\n.......✰...............#h*.==.==.*h###.....✰...✰..T..✰......✰..✰✰....................\n........✰..............#...==.==...#.*#....✰...........✰....✰.............✰..........\n.....✰................✰#...==.==...+.↻#...........✰.✰...✰....✰✰......................\n.....✰...✰✰.........✰..#...........#.f#.......✰✰.....✰✰..✰....✰......................\n........✰..............#.h.........#.░#......✰.....✰..✰✰✰..✰.✰............✰..........\n...✰.✰..........✰......#◘◘.........#.f#.....✰...✰....✰.✰.T....✰✰✰...............✰....\n.......................#◘◘*...h....+.↻#...........✰✰.................................\n.......................#h....░░░*..#__#........................................T.....\n.......................###+#####...####....#+++#.........✰.....####.................✰\n........T..............#...#...#...+..*#..#*...*#......✰✰✰....#.==.#.................\n................✰......#...#...+...+....#+..hhh..+....✰✰.✰...#*.==.*#................\n......................✰###############+##*.h◘◘◘h.*#.........#........#.......✰.......\n..................................#*f#.*#..h◘◘◘h..#........#*........✰#....✰.........\n............✰...........T.........#..+..+...hhh...##########░........h#..............\n..................................#.↻#..+...........*]]]]*.#░.......*◘#..............\n......✰..........✰.......#############.*#..................#*........h#......✰.......\n..........T..........✰...+.........+.+..+......░...........#..........#..........✰...\n..........✰..............#.........###++#*░...░░░..*hh..hh*#+##########..............\n...................✰.....#.........#....#░░....░*..........#..*#✰.*.__#....✰✰.....✰..\n.........✰...✰...✰.......#.........#░..*#[[....f░#...hhhh..+...+.....✰#.✰.......✰....\n..✰......................#.........#░..◛#[[....f░#.........#...#░ff░.↻#.............✰\n...........✰.........✰...#.........#◛..◛#░░....░░#.#*....✰✰#+##########..............\n...................TT....#.........#◛..░#░*░..░░░#..#✰.✰..✰#...*h◘h..*#.............✰\n.....✰...✰...............#.........#░.._#░░░◉◉░░*#..#*..✰✰*#.........*#...........T..\n.........................###+++++###░..░##########++########..........#......✰..✰....\n......✰.............✰..............#*.._#........*..*......#..........#.............✰\n.........✰.........................#.__░#...................#........#...............\n..........✰✰..✰....................######......✰✰T..T.✰✰.....#*.==.*#....✰.✰✰........\n....✰...✰.....✰...✰.✰............................✰...✰..✰.....#.==.#.......T.........\n.......✰..✰...✰...................✰.......✰✰✰.✰✰✰✰..✰✰✰✰.✰.✰...####..................\n.....✰.........................✰..........✰..✰✰..*..✰.✰✰.✰✰✰✰........................\n...✰.......✰.T......................✰✰....✰✰.✰...✰..*✰✰✰...✰.........................\n..........✰.✰................✰..............✰.✰✰.✰..✰✰..✰✰...................✰.....✰.\n.................✰.✰...............✰.✰........✰✰✰....✰✰✰...............✰.............\n...........✰.......✰..✰...T......................*..✰......✰...✰...................✰.\n..........✰.............✰........................T..T...✰..............✰..........✰..\n....✰✰✰...............✰✰...........T......✰.........*✰...✰..........✰................\n.....................✰....✰........T................✰.........✰✰..............✰......\n..........✰....✰........✰.............✰.......................✰......................\n..........✰.........................✰..✰................✰.✰.....✰....................\n................................................SSSSSS...............................\nKEY\n✰ = Bush\nT = tree\n# = Wall\n* = Lamp\nh = Chair\n= = Bed\n+ = Door\n↻ = Toilet\nf = Sink\n░ = Counter\n◘ = Table\n_ = Tub\n] = Tv\n[ = Refrigerator\n◛ = Washer/dryer\n◉ = Oven\nS = spawn point\n";

/***/ }),

/***/ 9177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Floor)
/* harmony export */ });
/* harmony import */ var _ui_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1919);
/* harmony import */ var _drawable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1721);


class Floor extends _drawable__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    constructor() {
        super(...arguments);
        this.layer = 'floor';
        this.light = () => 0;
        this.char = () => '.';
        this.color = () => _ui_colors__WEBPACK_IMPORTED_MODULE_0__/* .BORDER */ .XE;
    }
}


/***/ }),

/***/ 9273:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ltv: () => (/* reexport */ src_select)
});

// UNUSED EXPORTS: Adder, Delaunay, FormatSpecifier, InternMap, InternSet, Node, Path, Voronoi, ZoomTransform, active, arc, area, areaRadial, ascending, autoType, axisBottom, axisLeft, axisRight, axisTop, bin, bisect, bisectCenter, bisectLeft, bisectRight, bisector, blob, blur, blur2, blurImage, brush, brushSelection, brushX, brushY, buffer, chord, chordDirected, chordTranspose, cluster, color, contourDensity, contours, count, create, creator, cross, csv, csvFormat, csvFormatBody, csvFormatRow, csvFormatRows, csvFormatValue, csvParse, csvParseRows, cubehelix, cumsum, curveBasis, curveBasisClosed, curveBasisOpen, curveBumpX, curveBumpY, curveBundle, curveCardinal, curveCardinalClosed, curveCardinalOpen, curveCatmullRom, curveCatmullRomClosed, curveCatmullRomOpen, curveLinear, curveLinearClosed, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, descending, deviation, difference, disjoint, dispatch, drag, dragDisable, dragEnable, dsv, dsvFormat, easeBack, easeBackIn, easeBackInOut, easeBackOut, easeBounce, easeBounceIn, easeBounceInOut, easeBounceOut, easeCircle, easeCircleIn, easeCircleInOut, easeCircleOut, easeCubic, easeCubicIn, easeCubicInOut, easeCubicOut, easeElastic, easeElasticIn, easeElasticInOut, easeElasticOut, easeExp, easeExpIn, easeExpInOut, easeExpOut, easeLinear, easePoly, easePolyIn, easePolyInOut, easePolyOut, easeQuad, easeQuadIn, easeQuadInOut, easeQuadOut, easeSin, easeSinIn, easeSinInOut, easeSinOut, every, extent, fcumsum, filter, flatGroup, flatRollup, forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, format, formatDefaultLocale, formatLocale, formatPrefix, formatSpecifier, fsum, geoAlbers, geoAlbersUsa, geoArea, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoContains, geoDistance, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoGraticule, geoGraticule10, geoIdentity, geoInterpolate, geoLength, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoPath, geoProjection, geoProjectionMutator, geoRotation, geoStereographic, geoStereographicRaw, geoStream, geoTransform, geoTransverseMercator, geoTransverseMercatorRaw, gray, greatest, greatestIndex, group, groupSort, groups, hcl, hierarchy, histogram, hsl, html, image, index, indexes, interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateBlues, interpolateBrBG, interpolateBuGn, interpolateBuPu, interpolateCividis, interpolateCool, interpolateCubehelix, interpolateCubehelixDefault, interpolateCubehelixLong, interpolateDate, interpolateDiscrete, interpolateGnBu, interpolateGreens, interpolateGreys, interpolateHcl, interpolateHclLong, interpolateHsl, interpolateHslLong, interpolateHue, interpolateInferno, interpolateLab, interpolateMagma, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateOrRd, interpolateOranges, interpolatePRGn, interpolatePiYG, interpolatePlasma, interpolatePuBu, interpolatePuBuGn, interpolatePuOr, interpolatePuRd, interpolatePurples, interpolateRainbow, interpolateRdBu, interpolateRdGy, interpolateRdPu, interpolateRdYlBu, interpolateRdYlGn, interpolateReds, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateRound, interpolateSinebow, interpolateSpectral, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateTurbo, interpolateViridis, interpolateWarm, interpolateYlGn, interpolateYlGnBu, interpolateYlOrBr, interpolateYlOrRd, interpolateZoom, interrupt, intersection, interval, isoFormat, isoParse, json, lab, lch, least, leastIndex, line, lineRadial, link, linkHorizontal, linkRadial, linkVertical, local, map, matcher, max, maxIndex, mean, median, medianIndex, merge, min, minIndex, mode, namespace, namespaces, nice, now, pack, packEnclose, packSiblings, pairs, partition, path, pathRound, permute, pie, piecewise, pointRadial, pointer, pointers, polygonArea, polygonCentroid, polygonContains, polygonHull, polygonLength, precisionFixed, precisionPrefix, precisionRound, quadtree, quantile, quantileIndex, quantileSorted, quantize, quickselect, radialArea, radialLine, randomBates, randomBernoulli, randomBeta, randomBinomial, randomCauchy, randomExponential, randomGamma, randomGeometric, randomInt, randomIrwinHall, randomLcg, randomLogNormal, randomLogistic, randomNormal, randomPareto, randomPoisson, randomUniform, randomWeibull, range, rank, reduce, reverse, rgb, ribbon, ribbonArrow, rollup, rollups, scaleBand, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, scaleIdentity, scaleImplicit, scaleLinear, scaleLog, scaleOrdinal, scalePoint, scalePow, scaleQuantile, scaleQuantize, scaleRadial, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialQuantile, scaleSequentialSqrt, scaleSequentialSymlog, scaleSqrt, scaleSymlog, scaleThreshold, scaleTime, scaleUtc, scan, schemeAccent, schemeBlues, schemeBrBG, schemeBuGn, schemeBuPu, schemeCategory10, schemeDark2, schemeGnBu, schemeGreens, schemeGreys, schemeObservable10, schemeOrRd, schemeOranges, schemePRGn, schemePaired, schemePastel1, schemePastel2, schemePiYG, schemePuBu, schemePuBuGn, schemePuOr, schemePuRd, schemePurples, schemeRdBu, schemeRdGy, schemeRdPu, schemeRdYlBu, schemeRdYlGn, schemeReds, schemeSet1, schemeSet2, schemeSet3, schemeSpectral, schemeTableau10, schemeYlGn, schemeYlGnBu, schemeYlOrBr, schemeYlOrRd, selectAll, selection, selector, selectorAll, shuffle, shuffler, some, sort, stack, stackOffsetDiverging, stackOffsetExpand, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse, stratify, style, subset, sum, superset, svg, symbol, symbolAsterisk, symbolCircle, symbolCross, symbolDiamond, symbolDiamond2, symbolPlus, symbolSquare, symbolSquare2, symbolStar, symbolTimes, symbolTriangle, symbolTriangle2, symbolWye, symbolX, symbols, symbolsFill, symbolsStroke, text, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, tickFormat, tickIncrement, tickStep, ticks, timeDay, timeDays, timeFormat, timeFormatDefaultLocale, timeFormatLocale, timeFriday, timeFridays, timeHour, timeHours, timeInterval, timeMillisecond, timeMilliseconds, timeMinute, timeMinutes, timeMonday, timeMondays, timeMonth, timeMonths, timeParse, timeSaturday, timeSaturdays, timeSecond, timeSeconds, timeSunday, timeSundays, timeThursday, timeThursdays, timeTickInterval, timeTicks, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeWeek, timeWeeks, timeYear, timeYears, timeout, timer, timerFlush, transition, transpose, tree, treemap, treemapBinary, treemapDice, treemapResquarify, treemapSlice, treemapSliceDice, treemapSquarify, tsv, tsvFormat, tsvFormatBody, tsvFormatRow, tsvFormatRows, tsvFormatValue, tsvParse, tsvParseRows, union, unixDay, unixDays, utcDay, utcDays, utcFormat, utcFriday, utcFridays, utcHour, utcHours, utcMillisecond, utcMilliseconds, utcMinute, utcMinutes, utcMonday, utcMondays, utcMonth, utcMonths, utcParse, utcSaturday, utcSaturdays, utcSecond, utcSeconds, utcSunday, utcSundays, utcThursday, utcThursdays, utcTickInterval, utcTicks, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcWeek, utcWeeks, utcYear, utcYears, variance, window, xml, zip, zoom, zoomIdentity, zoomTransform

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/index.js + 37 modules
var selection = __webpack_require__(8227);
;// ./node_modules/d3-dispatch/src/dispatch.js
var noop = {value: () => {}};

function dispatch_dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch_dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const src_dispatch = (dispatch_dispatch);

;// ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

;// ./node_modules/d3-timer/src/timeout.js


/* harmony default export */ function src_timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

;// ./node_modules/d3-transition/src/transition/schedule.js



var emptyOn = src_dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function schedule_set(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function schedule_get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return src_timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    src_timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

;// ./node_modules/d3-transition/src/interrupt.js


/* harmony default export */ function src_interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

;// ./node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ function selection_interrupt(name) {
  return this.each(function() {
    src_interrupt(this, name);
  });
}

;// ./node_modules/d3-interpolate/src/number.js
/* harmony default export */ function number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

;// ./node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;

var decompose_identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

;// ./node_modules/d3-interpolate/src/transform/parse.js


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? decompose_identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return decompose_identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return decompose_identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

;// ./node_modules/d3-interpolate/src/transform/index.js



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(7268);
;// ./node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = schedule_get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = schedule_set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return schedule_get(node, id).value[name];
  };
}

;// ./node_modules/d3-color/src/define.js
/* harmony default export */ function src_define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

;// ./node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

src_define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

src_define(Rgb, color_rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

src_define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

;// ./node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function src_basis(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// ./node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// ./node_modules/d3-interpolate/src/constant.js
/* harmony default export */ const src_constant = (x => () => x);

;// ./node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : src_constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : src_constant(isNaN(a) ? b : a);
}

;// ./node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ const rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

;// ./node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

;// ./node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ function transition_interpolate(a, b) {
  var c;
  return (typeof b === "number" ? number
      : b instanceof color ? rgb
      : (c = color(b)) ? (b = c, rgb)
      : string)(a, b);
}

;// ./node_modules/d3-transition/src/transition/attr.js





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function attr(name, value) {
  var fullname = (0,namespace/* default */.A)(name), i = fullname === "transform" ? interpolateTransformSvg : transition_interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

;// ./node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,namespace/* default */.A)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

;// ./node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ function delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : schedule_get(this.node(), id).delay;
}

;// ./node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    schedule_set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    schedule_set(this, id).duration = value;
  };
}

/* harmony default export */ function duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : schedule_get(this.node(), id).duration;
}

;// ./node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    schedule_set(this, id).ease = value;
  };
}

/* harmony default export */ function ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : schedule_get(this.node(), id).ease;
}

;// ./node_modules/d3-transition/src/transition/easeVarying.js


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    schedule_set(this, id).ease = v;
  };
}

/* harmony default export */ function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(6541);
;// ./node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ function filter(match) {
  if (typeof match !== "function") match = (0,matcher/* default */.A)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

;// ./node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ function merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

;// ./node_modules/d3-transition/src/transition/on.js


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : schedule_set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? schedule_get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

;// ./node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function remove() {
  return this.on("end.remove", removeFunction(this._id));
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(574);
;// ./node_modules/d3-transition/src/transition/select.js




/* harmony default export */ function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,selector/* default */.A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, schedule_get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(747);
;// ./node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ function selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,selectorAll/* default */.A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = schedule_get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

;// ./node_modules/d3-transition/src/transition/selection.js


var Selection = selection/* default */.Ay.prototype.constructor;

/* harmony default export */ function transition_selection() {
  return new Selection(this._groups, this._parents);
}

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(3683);
;// ./node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,style/* styleValue */.j)(this, name),
        string1 = (this.style.removeProperty(name), (0,style/* styleValue */.j)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,style/* styleValue */.j)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,style/* styleValue */.j)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,style/* styleValue */.j)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = schedule_set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : transition_interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

;// ./node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

;// ./node_modules/d3-transition/src/transition/text.js


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}

;// ./node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

;// ./node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ function transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = schedule_get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

;// ./node_modules/d3-transition/src/transition/end.js


/* harmony default export */ function end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = schedule_set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

;// ./node_modules/d3-transition/src/transition/index.js






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition_transition(name) {
  return (0,selection/* default */.Ay)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection/* default */.Ay.prototype;

Transition.prototype = transition_transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter,
  merge: merge,
  selection: transition_selection,
  transition: transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on,
  attr: attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: remove,
  tween: tween,
  delay: delay,
  duration: duration,
  ease: ease,
  easeVarying: transition_easeVarying,
  end: end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

;// ./node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

;// ./node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

;// ./node_modules/d3-transition/src/selection/index.js




selection/* default */.Ay.prototype.interrupt = selection_interrupt;
selection/* default */.Ay.prototype.transition = selection_transition;

;// ./node_modules/d3-transition/src/index.js





;// ./node_modules/d3-brush/src/brush.js









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush_brush(X);
}

function brushY() {
  return brush_brush(Y);
}

/* harmony default export */ function brush() {
  return brush_brush(XY);
}

function brush_brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

;// ./node_modules/d3-brush/src/index.js


;// ./node_modules/d3-selection/src/select.js


/* harmony default export */ function src_select(selector) {
  return typeof selector === "string"
      ? new selection/* Selection */.LN([[document.querySelector(selector)]], [document.documentElement])
      : new selection/* Selection */.LN([[selector]], selection/* root */.zr);
}

;// ./node_modules/d3-selection/src/index.js
















;// ./node_modules/d3-zoom/src/transform.js
function transform_Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

transform_Transform.prototype = {
  constructor: transform_Transform,
  scale: function(k) {
    return k === 1 ? this : new transform_Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new transform_Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var transform_identity = new transform_Transform(1, 0, 0);

transform.prototype = transform_Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return transform_identity;
  return node.__zoom;
}

;// ./node_modules/d3-zoom/src/zoom.js










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function zoom_defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function zoom_defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function zoom_defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function zoom() {
  var filter = zoom_defaultFilter,
      extent = zoom_defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = zoom_defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}

;// ./node_modules/d3-zoom/src/index.js



;// ./node_modules/d3/src/index.js
































/***/ }),

/***/ 9308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ FirehouseMode),
  m: () => (/* binding */ GameState)
});

// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/ui/text-stroke.ts
var text_stroke = __webpack_require__(1485);
// EXTERNAL MODULE: ./src/ui/colors.ts
var colors = __webpack_require__(1919);
// EXTERNAL MODULE: ./src/signal.ts
var signal = __webpack_require__(334);
// EXTERNAL MODULE: ./src/storage.ts
var storage = __webpack_require__(8421);
// EXTERNAL MODULE: ./src/game/capabilities.ts
var capabilities = __webpack_require__(3793);
// EXTERNAL MODULE: ./src/game/models/firehouse.ts
var firehouse = __webpack_require__(8646);
;// ./src/game/FirehouseStorage.ts


const capabilitiesToJson = (c) => {
    const o = {};
    c.eachPair((n, skills) => { o[n] = skills.map(s => ({ name: s.name, level: s.level })); });
    return o;
};
const capabilitiesFromJson = (j) => capabilities/* Capabilities */.FD.fromJSON(j);
const FirehouseStorage = {
    newGame: () => new firehouse/* FirehouseModel */.o(),
    parse: (s) => FirehouseStorage.from(JSON.parse(s)),
    from: (o) => {
        const pawns = o.pawns.map(p => new firehouse/* PawnModel */.A(p.name, capabilitiesFromJson(p.capabilities)));
        return new firehouse/* FirehouseModel */.o(pawns, o.equipment, o.upgrades, o.firehouseNum, o.name);
    },
    save: (m) => ({
        pawns: m.pawns.map(p => ({ name: p.name, capabilities: capabilitiesToJson(p.capabilities) })),
        equipment: m.equipment,
        upgrades: m.upgrades,
        firehouseNum: m.firehouseNum,
        name: m.name,
        capabilityNames: [...capabilities/* NAMES */.Xk]
    })
};

;// ./src/game/state.ts






class GameState {
    constructor(map) {
        this.map = map;
        this.introSucceeded = false;
        this.firehouse = FirehouseStorage.newGame();
        this.data = () => ({
            introSucceeded: this.introSucceeded,
            firehouse: FirehouseStorage.save(this.firehouse)
        });
        this.loadData = (d) => {
            this.introSucceeded = d.introSucceeded;
            this.firehouse = FirehouseStorage.from(d.firehouse);
            console.log('loaded gameState', this.firehouse);
        };
        this.reset = () => {
            this.introSucceeded = false;
            this.firehouse = FirehouseStorage.newGame();
        };
        FirehouseMode.on(pawns => {
            this.introSucceeded = true;
            this.firehouse.pawns = pawns;
            if (!this.firehouse.firehouseNum)
                this.firehouse.firehouseNum = (0,utils/* randTo */.JD)(97) + 3;
            this.save();
        });
    }
    save() {
        storage/* storage */.I.set('gameState', JSON.stringify(this.data()));
        text_stroke/* TextStroke */.m.centered(this.map, 'GAME SAVED', this.map.h - 2, 'saved', colors/* Colors */.Jy.rotate(new colors/* Colors */.Jy([colors/* WHITE */.UE, colors/* FOREGROUND */.u6])), 500);
    }
    load() {
        const saveJson = storage/* storage */.I.get('gameState');
        if (!saveJson)
            return;
        try {
            this.loadData(JSON.parse(saveJson));
            if (this.introSucceeded)
                FirehouseMode.emit(this.firehouse.pawns);
        }
        catch (e) {
            const key = `badSaves_gameState_${Date.now()}`;
            storage/* storage */.I.set(key, saveJson);
            storage/* storage */.I.remove('gameState');
            console.error('Archived bad gameState at', key, e);
        }
    }
    restartIntro() {
        this.reset();
        this.map.killAll();
        this.map.display.clear();
        this.map.smokeDisplay.clear();
        this.map.uiRenderer.clearStrokes();
        const { Initializer } = __webpack_require__(4104);
        const initializer = new Initializer(this.map);
        initializer.initialize();
        this.map.lighting.redraw();
    }
}
const FirehouseMode = new signal/* Signal */.H();


/***/ }),

/***/ 9620:
/***/ ((module) => {

module.exports = ".........................................................\n.........................................................\n...........##+##.........................................\n...........#*..######....................................\n..#####....#✰...*░ff#....................................\n..#*..######].h..░.◉#....................................\n..#✰...*░ff#].◘h.░.░#....................................\n..#].h..░.◉#].◘h.░.[#....................................\n..#].◘h.░.░#].h*.░.[#....................................\n..#].◘h.░.[#✰....░.░#....................................\n..#].h*.░.[#.......*###################################..\n..#✰....░.░#.........#f◉░[[░*.#..*....#f◉░[[░*.#..*...#..\n..#.......*#✰..*##+###f.......+...===.#f.......+...===#..\n..+........##+###h...#░░░░░░..#h◘.===##░░░░░░..#h◘.===#..\n..#✰..*##+##_..#h◘...#*.......##h....#.*.......##h....#..\n..##+###h..#_..#...*##..hh*...*#######...hh*...*#######..\n..#_..#h◘..#...#.==.#..h◘◘h....#....*#..h◘◘h....#....*#..\n..#_..#...*#...#.==.#..........+....f#..........+....f#..\n..#...#.==.#↻f*#.==.#*✰]]]]✰..✰#__..↻#*✰]]]]✰..✰#__..↻#..\n..#...#.==.##################+################+########..\n..#↻f*#.==.#..........................................#..\n..##########..........................................+..\nSS......+............................................##..\nSS......+............................................#...\nSS..###+###+#....###+#....###+#....###+#....###+#....+...\n....#...#*..######*..######*..######*..######*..######...\n....#◛.◛#✰...*░ff#✰...*░ff#✰...*░ff#✰...*░ff#✰...*░ff#...\n....#...#].h..░.◉#].h..░.◉#].h..░.◉#].h..░.◉#].h..░.◉#...\n....#◛.❱#].◘h.░.░#].◘h.░.░#].◘h.░.░#].◘h.░.░#].◘h.░.░#...\n....#..◛#].◘h.░.[#].◘h.░.[#].◘h.░.[#].◘h.░.[#].◘h.░.[#...\n....#◛..#].h*.░.[#].h*.░.[#].h*.░.[#].h*.░.[#].h*.░.[#...\n....#..◛#✰....░.░#✰....░.░#✰....░.░#✰....░.░#✰....░.░#...\n....#####.......*#.......*#.......*#.......*#.......*#...\n........#........#........#........#........#........#...\n........#✰..*##+##✰..*##+##✰..*##+##✰..*##+##✰..*##+##...\n........##+###h..##+###h..##+###h..##+###h..##+###h..#...\n........#_..#h◘..#_..#h◘..#_..#h◘..#_..#h◘..#_..#h◘..#...\n........#_..#...*#_..#...*#_..#...*#_..#...*#_..#...*#...\n........#...#.==.#...#.==.#...#.==.#...#.==.#...#.==.#...\n........#...#.==.#...#.==.#...#.==.#...#.==.#...#.==.#...\n........#↻f*#.==.#↻f*#.==.#↻f*#.==.#↻f*#.==.#↻f*#.==.#...\n........##############################################...\n.........................................................\n.........................................................\nKEY\n# = Wall\n+ = Door\n* = Lamp\n✰ = Bush\n░ = Counter\nf = Sink\n] = Tv\nh = Chair\n◉ = Oven\n◘ = Table\n[ = Refrigerator\n= = Bed\n_ = Tub\n↻ = Toilet\n◛ = washer/dryer\n❱ = coin machine\nS = spawn point\n";

/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G2: () => (/* binding */ Repaint),
/* harmony export */   HO: () => (/* binding */ FrameRendered),
/* harmony export */   Q7: () => (/* binding */ UIRenderer),
/* harmony export */   iQ: () => (/* binding */ RedrawMap)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6185);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7328);
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8639);
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(334);




const Repaint = new _signal__WEBPACK_IMPORTED_MODULE_3__/* .Signal */ .H();
const RedrawMap = new _signal__WEBPACK_IMPORTED_MODULE_3__/* .Signal */ .H();
const FrameRendered = new _signal__WEBPACK_IMPORTED_MODULE_3__/* .SignalWithCurrent */ .Y();
class UIRenderer {
    constructor(map) {
        this.map = map;
        this.strokes = new Map();
        this.frozenFlag = false;
        this.frozen = () => this.frozenFlag;
        this.display = new _display__WEBPACK_IMPORTED_MODULE_1__/* .Display */ .n(map.w, map.h, true);
        this.intervalId = this.start();
        _game_game__WEBPACK_IMPORTED_MODULE_2__.GameStepped.on(() => this.render());
        Repaint.on(() => this.render());
    }
    unfreeze() {
        if (!this.frozen())
            return;
        this.frozenFlag = false;
    }
    start() {
        return setInterval(() => { Repaint.emit(); }, 100);
    }
    replace(id, stroke) {
        this.remove(id);
        this.strokes.set(id, stroke);
    }
    remove(id) {
        this.strokes.delete(id);
    }
    clearStrokes() {
        this.strokes.clear();
        this.clear();
    }
    draw(x, y, char, fg, bg = 'transparent') {
        this.display.draw(x, y, char, fg, bg);
    }
    clear() {
        this.display.clear();
    }
    canvas() {
        return this.display.canvas();
    }
    attachTo(container, styles) {
        this.display.attachTo(container, styles);
    }
    freeze() {
        if (this.frozen())
            return;
        this.frozenFlag = true;
    }
    render() {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .eachPair */ .cd)(this.strokes, (id, stroke) => {
            if (!stroke.isValid()) {
                this.strokes.delete(id);
            }
        });
        this.clear();
        const sortedStrokes = [...this.strokes.values()].sort((a, b) => a.zIndex - b.zIndex);
        sortedStrokes.forEach(stroke => {
            const color = stroke.colorFn();
            stroke.cells.forEach(({ cell, char, bg }) => {
                this.draw(cell.xy.x, cell.xy.y, char, color, bg);
            });
        });
        const frame = (FrameRendered.current || 0) + 1;
        // Avoid full map redraw flicker while frozen; still advance frame for animations
        if (frame % 4 === 0 && !this.frozen())
            RedrawMap.emit();
        FrameRendered.emit(frame);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle." + "54cfb58e" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "fire-house-rl:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfire_house_rl"] = self["webpackChunkfire_house_rl"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// UNUSED EXPORTS: generateError

// EXTERNAL MODULE: ./src/d3-extend.ts
var d3_extend = __webpack_require__(452);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(1208);
;// ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/game/game.ts + 19 modules
var game = __webpack_require__(8639);
// EXTERNAL MODULE: ./src/compress.ts
var compress = __webpack_require__(5074);
// EXTERNAL MODULE: ./src/storage.ts
var storage = __webpack_require__(8421);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/game/state.ts + 1 modules
var state = __webpack_require__(9308);
// EXTERNAL MODULE: ./src/ui/firehouse.ts + 1 modules
var firehouse = __webpack_require__(8846);
// EXTERNAL MODULE: ./node_modules/d3/src/index.js + 51 modules
var src = __webpack_require__(9273);
;// ./src/html/error.html
/* harmony default export */ const error = ("<div id=\"error-modal\" class=\"modal-window error-overlay column gap-controls hidden\">\n    <pre id=\"error-text\"></pre>\n    <div class=\"row gap-buttons\">\n        <button id=\"error-issue\" class=\"submit-button\">Create Issue</button>\n        <button id=\"error-copy\" class=\"submit-button\">Copy Error</button>\n    </div>\n    <div id=\"error-status\"></div>\n    <button id=\"error-close\" class=\"error-close\">×</button>\n</div>\n");
// EXTERNAL MODULE: ./src/ui/issue.ts
var issue = __webpack_require__(4732);
// EXTERNAL MODULE: ./src/ui/modal.ts
var modal = __webpack_require__(5382);
;// ./src/ui/error.ts





class Err extends modal/* Modal */.a {
    constructor() {
        src/* select */.Ltv('body').append('div')
            .attr('id', 'error-modal')
            .attr('class', 'modal-window error-overlay column gap-controls hidden');
        super('#error-modal');
        this.m = '';
        this.s = '';
        this.submit = async () => {
            this.div.d1('#error-issue').disable(true);
            this.div.d1('#error-status').text('Submitting issue...');
            const save = localStorage.getItem('gameState');
            const z = save ? await (0,compress/* gzip */.ZI)(save) : '';
            const body = `Stack trace:\n${this.s}\n\nSave:\n${z}`;
            try {
                const n = await (0,issue/* submitIssue */.E)(this.m, body);
                this.div.d1('#error-status').text(n ? 'Issue submitted, thank you!' : 'Issue submission failed');
            }
            catch {
                this.div.d1('#error-status').text('Network error');
            }
        };
        this.div.appendFileHtml(error);
        this.div.d1('#error-close').onClick(() => this.hide());
        this.div.d1('#error-copy').onClick(() => navigator.clipboard.writeText(this.div.d1('#error-text').text()));
        this.div.d1('#error-issue').onClick(() => this.submit());
    }
    open(m, s) {
        this.m = m;
        this.s = s || 'No stack trace available';
        this.div.d1('#error-text').text(`ERROR: ${this.m}\n\nStack trace:\n${this.s}`);
        this.div.d1('#error-status').text('');
        this.div.d1('#error-issue').disable(false);
        super.show();
    }
}
const err = new Err();
const showError = (m, s) => err.open(m, s);

// EXTERNAL MODULE: ./src/game/fires.ts
var fires = __webpack_require__(6746);
;// ./src/index.ts










window.addEventListener('error', e => {
    console.error('Global error:', e.error);
    console.error('Stack trace:', e.error?.stack);
    showError(e.error?.message || 'Unknown error', e.error?.stack);
});
const generateError = () => {
    const off = game.GameStepped.on(() => {
        off();
        throw new Error('generated');
    });
};
window.generateError = generateError;
window.Fires = fires/* Fires */.UQ;
const setTitle = () => {
    const s = storage/* storage */.I.get('gameState');
    let n = 0;
    if (s)
        try {
            n = JSON.parse(s).firehouseNum || 0;
        }
        catch { }
    const l = (0,utils/* isLocal */.IX)();
    const b = l ? 'FireRL' : 'Firehouse RL';
    const t = n ? (l ? `${b}#${n}` : `${b} #${n}`) : b;
    const p = location.port;
    document.title = l && p ? `${t}:${p}` : t;
};
async function init() {
    try {
        const q = new URLSearchParams(location.search);
        const imp = q.get('import');
        const mode = q.get('mode');
        if (imp) {
            storage/* storage */.I.set('importedSave', await (0,compress/* gunzip */.kd)(imp));
            history.replaceState(null, '', location.pathname);
        }
        setTitle();
        state/* FirehouseMode */.M.on(() => setTitle());
        firehouse/* FirehouseClosed */.F.on(() => setTitle());
        if (mode === 'editor') {
            // lazy load editor so we don't do editor stuff at module load time
            // DO NOT REMOVE THIS COMMENT
            const { Editor } = await __webpack_require__.e(/* import() */ 457).then(__webpack_require__.bind(__webpack_require__, 4457));
            new Editor();
        }
        else
            new game.Game();
    }
    catch (e) {
        const m = e instanceof Error ? e.message : 'Unknown error';
        const s = e instanceof Error ? e.stack : undefined;
        showError(`Game initialization failed: ${m}`, s);
    }
}
window.addEventListener('DOMContentLoaded', init);

/******/ })()
;
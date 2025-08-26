(self["webpackChunkfire_house_rl"] = self["webpackChunkfire_house_rl"] || []).push([[457],{

/***/ 612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apartment-big.txt": 4806,
	"./apartment-complex.txt": 9620,
	"./house.txt": 5833,
	"./intro-barracks.txt": 4461,
	"./level1.txt": 4648,
	"./manor.txt": 9110,
	"./test-editor-items.txt": 9444
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 612;

/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Editor: () => (/* binding */ Editor)
});

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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/editor.css
var editor = __webpack_require__(5164);
;// ./src/editor.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(editor/* default */.A, options);




       /* harmony default export */ const src_editor = (editor/* default */.A && editor/* default */.A.locals ? editor/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(6185);
// EXTERNAL MODULE: ./src/game/map.ts + 2 modules
var map = __webpack_require__(7283);
// EXTERNAL MODULE: ./src/ui/feedback.ts + 1 modules
var feedback = __webpack_require__(5264);
// EXTERNAL MODULE: ./src/game/config.ts
var config = __webpack_require__(6457);
// EXTERNAL MODULE: ./src/draw/floor.ts
var floor = __webpack_require__(9177);
// EXTERNAL MODULE: ./src/d3-extend.ts
var d3_extend = __webpack_require__(452);
;// ./src/html/editor-panel.html
/* harmony default export */ const editor_panel = ("<div id=\"terminal\">\n  <div id=\"editor-panel\" class=\"column gap-body\">\n    <div class=\"top column gap-controls\">\n      <div class=\"row fit-container cross-aligned-center gap-button-group\">\n        <div class=\"label\"></div>\n        <div id=\"layer-choices\" class=\"column fit-container gap-controls\">\n          <div class=\"layer template\">\n            <div class=\"row fit-container gap-buttons\">\n              <div class=\"name\"></div>\n              <div class=\"column fit-container\">\n                <div class=\"choices gap-buttons\">\n                  <button class=\"choice template\"></button>\n                </div>\n                <div class=\"editor-items column gap-buttons\">\n                  <div class=\"editor-item row\">\n                    <button id=\"add-item\" class=\"button-secondary\">Add</button>\n                  </div>\n                  <div class=\"editor-item-buttons\">\n                    <div class=\"editor-item row template\">\n                      <button class=\"choice\"></button>\n                      <button class=\"button-secondary close-button\">×</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom column gap-controls\">\n      <div class=\"row gap-buttons\">\n        <div class=\"label\">Paint</div>\n        <div class=\"char\"></div>\n        <div class=\"cell-coord\"></div>\n      </div>\n      <div class=\"row gap-buttons\">\n        <div class=\"label\">Stutter</div>\n        <input id=\"stutter\" type=\"range\" min=\"0\" max=\"100\" value=\"0\" />\n        <div id=\"stutter-val\">0%</div>\n      </div>\n      <div class=\"row gap-buttons\">\n        <button id=\"undo-btn\" class=\"button-secondary\">undo</button>\n        <button id=\"paste-btn\" class=\"button-secondary\" disabled>paste</button>\n        <button id=\"rotate-left\" class=\"button-secondary hidden\" disabled>⟲</button>\n        <button id=\"rotate-right\" class=\"button-secondary hidden\" disabled>⟳</button>\n        <button id=\"copy-cancel\" class=\"button-secondary\" disabled>cxl</button>\n      </div>\n      <div id=\"tool-row\" class=\"column gap-buttons\">\n        <button class=\"tool template\" data-tool=\"\"></button>\n      </div>\n      <div id=\"fragment-preview\" class=\"panel hidden\">\n        <div class=\"row items-between\">\n          <div class=\"label\">Fragment</div>\n          <button id=\"fragment-close\" class=\"button-secondary close-button\">×</button>\n        </div>\n        <pre id=\"fragment-text\"></pre>\n      </div>\n      <div id=\"symbol-picker\" class=\"panel hidden\">\n        <div class=\"row items-between\">\n          <div class=\"label\">New Item</div>\n          <button id=\"symbol-picker-close\" class=\"button-secondary close-button\">×</button>\n        </div>\n        <div id=\"symbol-grid\" class=\"symbols\">\n          <div class=\"sym template\"></div>\n        </div>\n        <div class=\"actions\">\n          <input id=\"editor-item-name\" type=\"text\" placeholder=\"name\" />\n          <button id=\"editor-item-add\" class=\"button-secondary\" disabled>Add</button>\n        </div>\n      </div>\n      <div id=\"fragment-loader\" class=\"panel hidden\">\n        <div class=\"row items-between\">\n          <div class=\"label\">Load Fragment</div>\n          <button id=\"fragment-loader-close\" class=\"button-secondary close-button\">×</button>\n        </div>\n        <div id=\"fragment-list\" class=\"column gap-buttons\">\n          <button class=\"fragment-file template\" data-file=\"\"></button>\n        </div>\n      </div>\n      <div class=\"fill\"></div>\n      <div id=\"controls-help\" class=\"text-subtle\">\n        L/R: paint/erase · Shift: constrain · Ctrl: all layers · Hold C: copy · ←/→ or L/R: rotate\n      </div>\n      <div class=\"row gap-buttons\">\n        <button id=\"load-fragment\" class=\"button-secondary\">load fragment</button>\n        <button id=\"copy-fragment\" class=\"button-secondary\">cc clipboard</button>\n        <button id=\"submit-fragment\" class=\"button-secondary\">submit issue</button>\n        <button id=\"show-fragment\" class=\"button-secondary\">show fragment</button>\n      </div>\n      <div class=\"row gap-buttons\">\n        <button id=\"clear-map\" class=\"button-secondary\">clear</button>\n      </div>\n      <div class=\"row gap-buttons\">\n        <button id=\"simulate-button\" class=\"button-secondary\">simulate</button>\n        <div id=\"simulate-play-wrapper\" class=\"play-controls-wrapper\"></div>\n        <button id=\"simulate-step\" class=\"button-secondary hidden\">⏭️</button>\n        <button id=\"simulate-return\" class=\"button-secondary hidden\">return</button>\n      </div>\n    </div>\n  </div>\n</div>");
// EXTERNAL MODULE: ./src/game/layers.ts
var game_layers = __webpack_require__(5633);
// EXTERNAL MODULE: ./src/game/drawable-types.ts + 3 modules
var drawable_types = __webpack_require__(1363);
// EXTERNAL MODULE: ./src/draw/editor-item.ts
var editor_item = __webpack_require__(6372);
;// ./src/ui/editor-panel.ts





const buildLayerChoices = () => {
    const choices = {
        pawn: [],
        smoke: [],
        fire: [],
        walls: [],
        items: [],
        floor: []
    };
    // Populate from DrawableType registry
    Object.entries(drawable_types/* DrawableType */.Z.registry).forEach(([name, factory]) => {
        const drawable = factory();
        const char = drawable.char();
        const choice = { label: name, char, make: () => drawable_types/* DrawableType */.Z.make(char, name) };
        // Skip Floor as requested
        if (name === 'Floor')
            return;
        // Use the drawable's layer property to categorize
        const layer = drawable.layer;
        if (choices[layer]) {
            choices[layer].push(choice);
        }
        drawable.diedAndAlreadyRemovedFromCell();
    });
    return choices;
};
const layerChoices = buildLayerChoices();
const TOOL_LABELS = {
    'draw': 'draw',
    'line': 'line',
    'box': 'box',
    'fill-box': 'fbox',
    'circ-in-rect': 'ellipse rect',
    'circ-in-rect-filled': 'ellipse rect f',
    'circ-radius': 'ellipse r',
    'circ-radius-filled': 'ellipse r f'
};
class EditorPanel {
    constructor() {
        this.cell = null;
        this.tool = 'draw';
        this.layer = 'walls';
        this.choice = null;
        this.stutter = 0;
        this.extraItems = [];
        this.setCell = (c) => { this.cell = c; this.updateCell(); };
        this.setEditorItems = (items) => {
            this.extraItems = items.map(it => ({
                label: it.name,
                char: it.symbol,
                make: () => new editor_item/* EditorItem */.R(it.symbol, it.name),
                editor: true
            }));
            this.render();
        };
        this.refresh = () => this.render();
        this.div = (0,d3_extend.d1)('#terminal');
        this.div.appendFileHtml(editor_panel);
        this.choice = layerChoices['walls'][0] || null;
        this.render();
    }
    render() {
        const lc = this.div.d1('#layer-choices');
        const visible = (game_layers/* CellLayers */.v.layerNames.filter(n => n !== 'smoke' && n !== 'floor'));
        lc.dList('.layer').updateFrom(visible, (row, n) => {
            row.d1('.name').text(n);
            const choices = layerChoices[n];
            const choicesDiv = row.d1('.choices');
            choicesDiv.dList('button').updateFrom(choices, (b, ch) => {
                b.text(`${ch.char} ${ch.label}`);
                b.classed('selected', this.layer === n && !!this.choice &&
                    this.choice.label === ch.label && this.choice.char === ch.char);
                b.onClick(() => { this.layer = n; this.choice = ch; this.updatePaintInfo(); this.render(); });
            });
            const editorItems = row.d1('.editor-items');
            const editorChoices = n === 'items' ? this.extraItems : [];
            n === 'items' ? editorItems.show() : editorItems.hide();
            editorItems.d1('.editor-item-buttons').dList('.editor-item').updateFrom(editorChoices, (r, ch) => {
                const btn = r.d1('button.choice');
                btn.text(`${ch.char} ${ch.label}`);
                btn.classed('selected', this.layer === n && !!this.choice &&
                    this.choice.label === ch.label && this.choice.char === ch.char);
                btn.onClick(() => { this.layer = n; this.choice = ch; this.updatePaintInfo(); this.render(); });
                const x = r.d1('button.close-button');
                x.onClick(() => this.onDeleteEditorItem?.(ch.char));
            });
            if (n === 'items') {
                editorItems.d1('#add-item').onClick(() => this.onAddItem?.());
            }
        });
        const tools = ['draw', 'line', 'box', 'fill-box', 'circ-in-rect', 'circ-in-rect-filled', 'circ-radius', 'circ-radius-filled'];
        this.div.d1('#tool-row').dList('.tool').updateFrom(tools, (b, t) => {
            b.text(TOOL_LABELS[t]);
            b.attr('data-tool', t);
            b.classed('selected', this.tool === t);
            b.onClick(() => { this.tool = t; this.updatePaintInfo(); this.render(); });
        });
        const slider = this.div.d1('#stutter');
        const label = this.div.d1('#stutter-val');
        slider.node().value = String(this.stutter);
        label.text(`${this.stutter}%`);
        slider.onInput(() => {
            const v = parseInt(slider.node().value, 10);
            this.stutter = isNaN(v) ? 0 : Math.max(0, Math.min(100, v));
            label.text(`${this.stutter}%`);
        });
        this.updatePaintInfo();
        this.updateCell();
    }
    updatePaintInfo() {
        this.div.d1('.char').text(this.choice ? this.choice.char : '-');
    }
    updateCell() {
        this.div.d1('.cell-coord').text(this.cell ? `${this.cell.xy.x}, ${this.cell.xy.y}` : 'no cell selected');
    }
}

// EXTERNAL MODULE: ./src/game/xy.ts
var game_xy = __webpack_require__(88);
// EXTERNAL MODULE: ./src/shapes.ts
var shapes = __webpack_require__(3720);
// EXTERNAL MODULE: ./src/ui/stroke.ts
var stroke = __webpack_require__(891);
// EXTERNAL MODULE: ./src/ui/ui-renderer.ts
var ui_renderer = __webpack_require__(9889);
// EXTERNAL MODULE: ./src/game/rect.ts
var game_rect = __webpack_require__(6893);
// EXTERNAL MODULE: ./src/game/fragment.ts
var fragment = __webpack_require__(8535);
;// ./src/editor-defs.ts
const BUILTIN_DRAWABLES = [
    { symbol: '#', name: 'Wall' },
    { symbol: '+', name: 'Door' },
    { symbol: '¤', name: 'Wall light' },
    { symbol: '□', name: 'Window' },
    { symbol: '*', name: 'Lamp' },
    { symbol: '.', name: 'Floor' },
    { symbol: '+', name: 'Smoke' },
    { symbol: '▲', name: 'Fire' },
    { symbol: '@', name: 'Pawn' }
];
class EditorDefs {
    constructor() {
        this.extra = [];
        this.all = () => [...BUILTIN_DRAWABLES, ...this.extra];
        this.register = (definition) => {
            if (this.extra.some(existing => existing.symbol === definition.symbol && existing.name === definition.name))
                return;
            this.extra.push(definition);
        };
        this.remove = (symbol) => {
            this.extra = this.extra.filter(definition => definition.symbol !== symbol);
        };
        this.symbolFor = (typeName) => {
            const definition = this.all().find(d => d.name === typeName);
            return definition ? definition.symbol : typeName[0];
        };
        this.extraDefs = () => this.extra;
    }
}

// EXTERNAL MODULE: ./src/ui/play-controls.ts
var play_controls = __webpack_require__(6488);
;// ./src/editor.ts



















const UI = {
    shapeId: 'editor-shape',
    pasteId: 'editor-paste',
    strokeZ: 10,
    pasteZ: 9,
    color: '#0a0'
};
class Editor {
    constructor() {
        this.feedback = new feedback/* Feedback */.G();
        this.muted = new Set();
        this.solo = null;
        this.showLighting = false;
        this.showDarkness = false;
        this.painting = false;
        this.paintingShift = false;
        this.paintingCtrl = false;
        this.origin = null;
        this.lock = null;
        this.op = 'paint';
        this.shapeId = UI.shapeId;
        this.lastTarget = null;
        this.copyBuf = null;
        this.undoStack = [];
        this.hovered = null;
        this.pasteId = UI.pasteId;
        this.defs = new EditorDefs();
        this.symbolSel = null;
        this.simulating = false;
        this.runningMap = null;
        this.originalMap = null;
        this.simulationRunning = false;
        this.stepTimer = null;
        this.withStroke = (id, z, visible, draw) => {
            const s = new stroke/* Stroke */.t([], () => UI.color, visible, z);
            draw(s);
            this.map.uiRenderer.replace(id, s);
            ui_renderer/* Repaint */.G2.emit();
        };
        this.previewEllipse = (rect, filled) => {
            const ul = rect.ul, br = rect.br;
            this.withStroke(this.shapeId, UI.strokeZ, () => this.painting && (this.panel.tool === 'circ-in-rect' || this.panel.tool === 'circ-in-rect-filled' ||
                this.panel.tool === 'circ-radius' || this.panel.tool === 'circ-radius-filled'), s => {
                const add = (xy) => s.add(this.map.get(xy), this.panel.choice?.char || '#');
                if (filled) {
                    const { cx, cy, rx, ry } = (0,shapes/* ellipseFromRect */.Dg)(rect);
                    (0,shapes/* eachEllipseFill */.xh)(cx, cy, rx, ry, add);
                }
                else
                    (0,shapes/* eachEllipseBorderRect */.QI)(ul.x, ul.y, br.x, br.y, add);
            });
        };
        this.commitEllipse = (rect, filled) => {
            const ul = rect.ul, br = rect.br;
            const ops = [];
            const apply = (xy) => { this.applyXY(xy, ops); return true; };
            if (filled) {
                const { cx, cy, rx, ry } = (0,shapes/* ellipseFromRect */.Dg)(rect);
                (0,shapes/* eachEllipseFill */.xh)(cx, cy, rx, ry, apply);
            }
            else
                (0,shapes/* eachEllipseBorderRect */.QI)(ul.x, ul.y, br.x, br.y, apply);
            this.pushUndo(ops);
            this.clearPreview();
        };
        // Centralized gating + optional undo capture
        this.applyXY = (xy, ops) => {
            if (this.copyBuf)
                return;
            if (this.stuttered(this.op === 'paint'))
                return;
            const cell = this.map.get(xy);
            const before = ops ? this.recordCell(cell) : null;
            this.opOn(cell);
            if (ops && before)
                ops.push({ xy, type: 'set', names: before });
        };
        this.opOn = (cell) => {
            if (this.op === 'paint')
                this.paint(cell);
            else if (this.op === 'erase-current')
                this.eraseCurrent(cell);
            else
                this.eraseCell(cell);
        };
        this.stuttered = (paint) => {
            const s = this.panel.stutter;
            return paint ? (0,utils/* randTo */.JD)(100) < s : s > 0 && (0,utils/* randTo */.JD)(100) >= s;
        };
        this.undo = () => {
            const ops = this.undoStack.pop();
            if (!ops)
                return;
            // Apply inverse ops
            const inverse = [];
            ops.forEach(op => {
                const cell = this.map.get(op.xy);
                if (op.type === 'set') {
                    const prev = [];
                    game_layers/* CellLayers */.v.layerNames.forEach((layerName) => {
                        const drawable = cell.layers.data[layerName];
                        if (drawable) {
                            prev.push(drawable.constructor?.name);
                            cell.died(drawable);
                        }
                    });
                    op.names.forEach(name => {
                        const symbol = this.defs.symbolFor(name);
                        cell.create(drawable_types/* DrawableType */.Z.make(symbol, name));
                    });
                    inverse.push({ xy: op.xy, type: 'set', names: prev });
                }
                else {
                    const prev = [];
                    game_layers/* CellLayers */.v.layerNames.forEach((layerName) => {
                        const drawable = cell.layers.data[layerName];
                        if (drawable) {
                            prev.push(drawable.constructor?.name);
                            cell.died(drawable);
                        }
                    });
                    inverse.push({ xy: op.xy, type: 'set', names: prev });
                }
            });
            this.pushUndo(inverse);
            this.drawMap();
        };
        this.renderCroppedFragment = () => {
            const w = this.map.w, h = this.map.h;
            const chars = [];
            const key = new globalThis.Map();
            for (let y = 0; y < h; y++) {
                chars[y] = [];
                for (let x = 0; x < w; x++)
                    chars[y][x] = '.';
            }
            const order = ['pawn', 'fire', 'walls', 'items', 'floor'];
            for (let y = 0; y < h; y++)
                for (let x = 0; x < w; x++) {
                    const cell = this.map.grid[y][x];
                    for (const layerName of order) {
                        const drawable = cell.layers.data[layerName];
                        if (!drawable)
                            continue;
                        const symbol = drawable.char();
                        chars[y][x] = symbol;
                        const name = drawable.keyName();
                        if (name && symbol !== '.')
                            key.set(symbol, name);
                        break;
                    }
                }
            let minX = w, minY = h, maxX = -1, maxY = -1;
            for (let y = 0; y < h; y++)
                for (let x = 0; x < w; x++) {
                    if (chars[y][x] !== '.') {
                        if (x < minX)
                            minX = x;
                        if (y < minY)
                            minY = y;
                        if (x > maxX)
                            maxX = x;
                        if (y > maxY)
                            maxY = y;
                    }
                }
            if (maxX < minX || maxY < minY) { // no content
                const lines = ['.', 'KEY'];
                return lines.join('\n');
            }
            const m = 2;
            minX = Math.max(0, minX - m);
            minY = Math.max(0, minY - m);
            maxX = Math.min(w - 1, maxX + m);
            maxY = Math.min(h - 1, maxY + m);
            const rows = [];
            for (let y = minY; y <= maxY; y++) {
                let row = '';
                for (let x = minX; x <= maxX; x++)
                    row += chars[y][x];
                rows.push(row);
            }
            const lines = [...rows, 'KEY'];
            for (const [ch, tn] of key.entries())
                lines.push(`${ch} = ${tn}`);
            return lines.join('\n');
        };
        this.toggleLighting = () => {
            this.showLighting = !this.showLighting;
            (0,d3_extend.d1)('#lighting-toggle').text(this.showLighting ? 'LT*' : 'LT');
            this.updateLightingEnabled();
            this.drawMap();
        };
        this.toggleDarkness = () => {
            this.showDarkness = !this.showDarkness;
            (0,d3_extend.d1)('#darkness-toggle').text(this.showDarkness ? 'DK*' : 'DK');
            this.updateLightingEnabled();
            this.drawMap();
        };
        this.clearMap = () => {
            this.painting = false;
            this.origin = null;
            this.lock = null;
            this.clearPreview();
            this.clearCopy();
            this.undoStack = [];
            this.map.killAll();
            this.map.fill(() => new floor/* Floor */.Z());
            this.updateLightingEnabled();
            this.drawMap();
        };
        this.onKeyDown = (e) => {
            if (e.key === 'c' || e.key === 'C')
                window.keydownC = true;
            if (e.key === 'Escape' && this.copyBuf)
                this.clearCopy();
            if (!this.copyBuf)
                return;
            if (e.key === 'l' || e.key === 'L' || e.key === 'ArrowLeft') {
                e.preventDefault();
                this.rotateCopy('left');
            }
            else if (e.key === 'r' || e.key === 'R' || e.key === 'ArrowRight') {
                e.preventDefault();
                this.rotateCopy('right');
            }
        };
        this.onKeyUp = (e) => {
            if (e.key === 'c' || e.key === 'C')
                window.keydownC = false;
        };
        this.hide = (sel) => { (0,d3_extend.d1)(sel).hide(); };
        this.startSimulation = () => {
            if (this.simulating)
                return;
            this.simulating = true;
            this.originalMap = this.map;
            this.runningMap = this.map.clone();
            // Clear the container and switch to the running map
            const container = (0,d3_extend.d1)('#game-container');
            const node = container.node();
            node.innerHTML = ''; // Clear existing canvases
            this.map = this.runningMap;
            // Attach running map displays to DOM
            this.map.display.attachTo(node, { display: 'block', zIndex: '1' });
            this.map.smokeDisplay.attachTo(node, { position: 'absolute', top: '0', left: '0', zIndex: '2', pointerEvents: 'none' });
            this.map.uiRenderer.attachTo(node, { position: 'absolute', top: '0', left: '0', zIndex: '3', pointerEvents: 'none' });
            this.map.onMousemove(cell => this.onMove(cell));
            this.map.onMousedown((cell, click) => this.onDown(cell, click));
            // Update UI
            this.simulatePlayControls = new play_controls/* PlayControls */.j('#simulate-play-wrapper', {
                onPlayPause: () => this.toggleSimulation(),
                onSpeedChange: (speed) => this.setSimulationSpeed(speed),
                getIsRunning: () => this.simulationRunning
            });
            (0,d3_extend.d1)('#simulate-step').show();
            (0,d3_extend.d1)('#simulate-return').show();
            (0,d3_extend.d1)('#simulate-button').hide();
            this.drawMap();
        };
        this.toggleSimulation = () => {
            if (!this.simulating)
                return;
            if (this.simulationRunning) {
                this.pauseSimulation();
            }
            else {
                this.playSimulation();
            }
        };
        this.setSimulationSpeed = (speed) => {
            if (this.stepTimer) {
                clearInterval(this.stepTimer);
                this.stepTimer = setInterval(() => {
                    this.stepSimulation();
                }, 350 / speed);
            }
        };
        this.playSimulation = () => {
            if (!this.simulating || this.simulationRunning)
                return;
            this.simulationRunning = true;
            this.simulatePlayControls?.updatePlayPauseButton();
            this.stepTimer = setInterval(() => {
                this.stepSimulation();
            }, 350 / (this.simulatePlayControls?.getSpeed() || 1));
        };
        this.pauseSimulation = () => {
            if (!this.simulationRunning)
                return;
            this.simulationRunning = false;
            this.simulatePlayControls?.updatePlayPauseButton();
            if (this.stepTimer) {
                clearInterval(this.stepTimer);
                this.stepTimer = null;
            }
        };
        this.stepSimulation = () => {
            if (!this.simulating || !this.runningMap)
                return;
            this.runningMap.step();
            this.runningMap.lighting.redraw();
            this.drawMap();
        };
        this.returnToEditor = () => {
            if (!this.simulating || !this.originalMap)
                return;
            // Stop simulation
            this.pauseSimulation();
            // Kill everything on the running map
            if (this.runningMap) {
                this.runningMap.killAll();
            }
            // Switch back to original map
            this.map = this.originalMap;
            // Clear the container and reattach original map displays to DOM
            const container = (0,d3_extend.d1)('#game-container');
            const node = container.node();
            node.innerHTML = ''; // Clear existing canvases
            this.map.display.attachTo(node, { display: 'block', zIndex: '1' });
            this.map.smokeDisplay.attachTo(node, { position: 'absolute', top: '0', left: '0', zIndex: '2', pointerEvents: 'none' });
            this.map.uiRenderer.attachTo(node, { position: 'absolute', top: '0', left: '0', zIndex: '3', pointerEvents: 'none' });
            this.map.onMousemove(cell => this.onMove(cell));
            this.map.onMousedown((cell, click) => this.onDown(cell, click));
            // Reset state
            this.simulating = false;
            this.runningMap = null;
            this.originalMap = null;
            this.simulationRunning = false;
            this.stepTimer = null;
            // Update UI
            this.simulatePlayControls = undefined;
            (0,d3_extend.d1)('#simulate-step').hide();
            (0,d3_extend.d1)('#simulate-return').hide();
            (0,d3_extend.d1)('#simulate-button').show();
            this.drawMap();
        };
        this.map = new map/* Map */.T(config/* Config */.T.WIDTH, config/* Config */.T.HEIGHT);
        this.panel = new EditorPanel();
        this.panel.onAddItem = () => this.openSymbolPicker();
        this.panel.onDeleteEditorItem = s => this.deleteEditorItem(s);
        this.attach();
        this.init();
        this.previewHandlers = {
            'draw': c => this.stroke(c),
            'line': c => this.previewLine(c),
            'box': c => this.previewRect(c, false),
            'fill-box': c => this.previewRect(c, true),
            'circ-in-rect': c => this.previewEllipseRect(c, false),
            'circ-in-rect-filled': c => this.previewEllipseRect(c, true),
            'circ-radius': c => this.previewEllipseCenter(c, false),
            'circ-radius-filled': c => this.previewEllipseCenter(c, true)
        };
        this.commitHandlers = {
            'draw': () => this.clearPreview(),
            'line': () => this.commitLine(),
            'box': () => this.commitRect(false),
            'fill-box': () => this.commitRect(true),
            'circ-in-rect': () => this.commitEllipseRect(false),
            'circ-in-rect-filled': () => this.commitEllipseRect(true),
            'circ-radius': () => this.commitEllipseCenter(false),
            'circ-radius-filled': () => this.commitEllipseCenter(true)
        };
        this.setupLayerControls();
        this.drawMap();
    }
    openSymbolPicker() {
        const picker = (0,d3_extend.d1)('#symbol-picker');
        const grid = picker.d1('#symbol-grid');
        const used = this.usedSymbols();
        const symbols = this.buildSymbols().filter(symbol => !used.has(symbol));
        grid.dList('.sym').updateFrom(symbols, (node, symbol) => {
            node.text(symbol).onClick(() => {
                this.symbolSel = symbol;
                grid.selectAll('.sym').classed('selected', false);
                node.classed('selected', true);
                this.updateAddEnabled();
            });
        });
        const nameInput = (0,d3_extend.d1)('#editor-item-name');
        nameInput.setVal('').onInput(() => this.updateAddEnabled());
        nameInput.onKeyDown(event => {
            if (event.key === 'Enter')
                this.addEditorItem();
        });
        (0,d3_extend.d1)('#editor-item-add').onClick(() => this.addEditorItem());
        (0,d3_extend.d1)('#symbol-picker-close').onClick(() => picker.hide());
        this.symbolSel = null;
        this.updateAddEnabled();
        picker.show();
        requestAnimationFrame(() => this.centerFragment(picker));
    }
    updateAddEnabled() {
        const name = (0,d3_extend.d1)('#editor-item-name').trimmed();
        const isEnabled = this.symbolSel && name.length > 0;
        (0,d3_extend.d1)('#editor-item-add')
            .enable(!!isEnabled)
            .text(this.symbolSel ? `Add ${this.symbolSel}` : 'Add');
    }
    addEditorItem() {
        if (!this.symbolSel)
            return;
        const name = (0,d3_extend.d1)('#editor-item-name').trimmed();
        if (!name)
            return;
        const symbol = this.symbolSel;
        if (this.defs.extraDefs().some(item => item.symbol === symbol))
            return;
        this.defs.register({ symbol, name });
        this.panel.setEditorItems(this.defs.extraDefs());
        this.panel.layer = 'items';
        this.panel.choice = { label: name, char: symbol, make: () => new editor_item/* EditorItem */.R(symbol, name), editor: true };
        this.panel.refresh();
        (0,d3_extend.d1)('#symbol-picker').hide();
        this.symbolSel = null;
    }
    deleteEditorItem(symbol) {
        if (!confirm('Remove this item and all instances?'))
            return;
        this.defs.remove(symbol);
        this.panel.setEditorItems(this.defs.extraDefs());
        this.map.eachCell(cell => {
            const drawable = cell.layers.data['items'];
            if (drawable && typeof drawable.char === 'function' && drawable.char() === symbol && drawable instanceof editor_item/* EditorItem */.R)
                cell.died(drawable);
        });
        this.drawMap();
    }
    usedSymbols() {
        const symbols = new Set();
        const order = ['pawn', 'fire', 'walls', 'items', 'floor'];
        this.map.eachCell(cell => {
            const layer = order.find(name => cell.layers.data[name]);
            if (!layer)
                return;
            const drawable = cell.layers.data[layer];
            const symbol = drawable?.char();
            if (symbol)
                symbols.add(symbol);
        });
        return symbols;
    }
    buildSymbols() {
        const symbols = [];
        const pushRange = (start, end) => (0,utils/* times */.Hn)(start, end + 1, index => symbols.push(String.fromCharCode(index)));
        pushRange(33, 126);
        const ranges = [
            [0x2190, 0x21FF],
            [0x2580, 0x259F],
            [0x25A0, 0x25FF],
            [0x2700, 0x27BF]
        ];
        (0,utils/* each */.__)(ranges, ([start, end]) => pushRange(start, end));
        return symbols.filter(symbol => symbol !== '.');
    }
    attach() {
        const container = (0,d3_extend.d1)('#game-container');
        container.style('position', 'relative');
        const root = document.documentElement;
        root.style.setProperty('--map-width', `${this.map.w}ch`);
        const node = container.node();
        this.map.display.attachTo(node, { display: 'block', zIndex: '1' });
        this.map.smokeDisplay.attachTo(node, { position: 'absolute', top: '0', left: '0', zIndex: '2', pointerEvents: 'none' });
        this.map.uiRenderer.attachTo(node, { position: 'absolute', top: '0', left: '0', zIndex: '3', pointerEvents: 'none' });
        this.map.onMousemove(cell => this.onMove(cell));
        this.map.onMousedown((cell, click) => this.onDown(cell, click));
    }
    onDown(cell, c) {
        if (!cell)
            return;
        if (this.copyBuf && c.button === 'RIGHT') {
            this.clearCopy();
            this.drawMap();
            return;
        }
        if (window.keydownC)
            this.clearCopy();
        // Opposite button cancels mid-shape
        if (this.painting) {
            const currentErase = this.op !== 'paint';
            const incomingErase = c.button === 'RIGHT';
            if (currentErase !== incomingErase) {
                this.clearPreview();
                this.painting = false;
                this.paintingShift = false;
                this.origin = null;
                this.lock = null;
                this.lastTarget = null;
                return;
            }
        }
        this.painting = true;
        this.paintingShift = c.shift;
        this.paintingCtrl = c.ctrl;
        this.origin = cell.xy;
        this.lock = null;
        this.op = c.button === 'RIGHT' ? (c.ctrl ? 'erase-cell' : 'erase-current') : 'paint';
        this.onMove(cell);
        const stop = () => { this.commitIfNeeded(); this.painting = false; this.paintingShift = false; this.origin = null; this.lock = null; this.lastTarget = null; document.removeEventListener('mouseup', stop); };
        document.addEventListener('mouseup', stop);
    }
    commitLine() {
        if (!this.origin || !this.lastTarget) {
            this.clearPreview();
            return;
        }
        const a = this.map.get(this.origin);
        const b = this.lastTarget;
        const ops = [];
        (0,shapes/* eachLine */.IM)(a.xy, b.xy, xy => { this.applyXY(xy, ops); return true; });
        this.pushUndo(ops);
        this.clearPreview();
    }
    commitRect(filled) {
        if (!this.origin || !this.lastTarget) {
            this.clearPreview();
            return;
        }
        const rect = game_rect/* Rect */.r.between(this.origin, this.lastTarget.xy);
        const ops = [];
        const on = (xy) => this.applyXY(xy, ops);
        filled ? rect.eachCell(on) : rect.eachBorder(on);
        this.pushUndo(ops);
        this.clearPreview();
    }
    previewLine(toCell) {
        if (!this.origin)
            return;
        const start = this.map.get(this.origin);
        const end = toCell;
        this.withStroke(this.shapeId, UI.strokeZ, () => this.painting && this.panel.tool === 'line', s => {
            (0,shapes/* eachLine */.IM)(start.xy, end.xy, xy => {
                s.add(this.map.get(xy), this.panel.choice?.char || '#');
                return true;
            });
        });
    }
    previewRect(toCell, filled) {
        if (!this.origin)
            return;
        const rect = game_rect/* Rect */.r.between(this.origin, toCell.xy);
        this.withStroke(this.shapeId, UI.strokeZ, () => this.painting && (this.panel.tool === (filled ? 'fill-box' : 'box')), s => {
            const add = (xy) => s.add(this.map.get(xy), this.panel.choice?.char || '#');
            if (filled)
                rect.eachCell(add);
            else
                rect.eachBorder(add);
        });
    }
    previewEllipseRect(toCell, filled) {
        if (!this.origin)
            return;
        const rect = this.paintingShift ? (0,shapes/* squareBetween */.iV)(this.origin, toCell.xy)
            : game_rect/* Rect */.r.between(this.origin, toCell.xy);
        this.previewEllipse(rect, filled);
    }
    previewEllipseCenter(toCell, filled) {
        if (!this.origin)
            return;
        const rect = (0,shapes/* rectFromCenter */.er)(this.origin, toCell.xy, this.paintingShift);
        this.previewEllipse(rect, filled);
    }
    pushUndo(ops) { if (ops.length)
        this.undoStack.push(ops); }
    recordCell(cell) {
        return game_layers/* CellLayers */.v.layerNames
            .map((layerName) => {
            const drawable = cell.layers.data[layerName];
            if (!drawable)
                return null;
            return drawable.keyName();
        })
            .filter((name) => !!name);
    }
    commitEllipseRect(filled) {
        if (!this.origin || !this.lastTarget) {
            this.clearPreview();
            return;
        }
        const rect = this.paintingShift ? (0,shapes/* squareBetween */.iV)(this.origin, this.lastTarget.xy)
            : game_rect/* Rect */.r.between(this.origin, this.lastTarget.xy);
        this.commitEllipse(rect, filled);
    }
    commitEllipseCenter(filled) {
        if (!this.origin || !this.lastTarget) {
            this.clearPreview();
            return;
        }
        const rect = (0,shapes/* rectFromCenter */.er)(this.origin, this.lastTarget.xy, this.paintingShift);
        this.commitEllipse(rect, filled);
    }
    centerFragment(element) {
        const mainElement = (0,d3_extend.d1)('#main').node();
        const bounding = mainElement.getBoundingClientRect();
        const elementNode = element.node();
        const elementWidth = elementNode.offsetWidth;
        const elementHeight = elementNode.offsetHeight;
        const left = bounding.left + (bounding.width - elementWidth) / 2;
        const top = bounding.top + (bounding.height - elementHeight) / 2;
        element.style('left', `${Math.max(0, Math.round(left))}px`)
            .style('top', `${Math.max(0, Math.round(top))}px`);
    }
    captureCopyShape(a, b) {
        const mode = this.paintingCtrl ? 'cells' : 'layer';
        const tool = this.panel.tool;
        const add = (xy) => {
            if (mode === 'layer') {
                const layerName = this.panel.layer;
                const drawable = this.map.get(xy).get(layerName);
                if (!drawable)
                    return;
                const name = drawable.keyName();
                const symbol = drawable.char();
                layers.push({ dx: xy.x - a.x, dy: xy.y - a.y, name, symbol });
            }
            else {
                const items = game_layers/* CellLayers */.v.layerNames
                    .filter(n => n !== 'floor')
                    .map(layerName => this.map.get(xy).get(layerName))
                    .filter(drawable => drawable)
                    .map(drawable => ({
                    name: drawable.keyName(),
                    symbol: drawable.char()
                }));
                if (items.length)
                    cells.push({ dx: xy.x - a.x, dy: xy.y - a.y, items });
            }
        };
        const layers = [];
        const cells = [];
        const rectBetween = () => game_rect/* Rect */.r.between(a, b);
        if (tool === 'line' || tool === 'draw')
            (0,shapes/* eachLine */.IM)(a, b, xy => { add(xy); return true; });
        else if (tool === 'box')
            rectBetween().eachBorder(add);
        else if (tool === 'fill-box')
            rectBetween().eachCell(add);
        else if (tool === 'circ-in-rect' || tool === 'circ-in-rect-filled') {
            const rect = this.paintingShift ? (0,shapes/* squareBetween */.iV)(a, b) : rectBetween();
            if (tool === 'circ-in-rect-filled') {
                const { cx, cy, rx, ry } = (0,shapes/* ellipseFromRect */.Dg)(rect);
                (0,shapes/* eachEllipseFill */.xh)(cx, cy, rx, ry, add);
            }
            else
                (0,shapes/* eachEllipseBorderRect */.QI)(rect.ul.x, rect.ul.y, rect.br.x, rect.br.y, add);
        }
        else if (tool === 'circ-radius' || tool === 'circ-radius-filled') {
            const rect = (0,shapes/* rectFromCenter */.er)(a, b, this.paintingShift);
            if (tool === 'circ-radius-filled') {
                const { cx, cy, rx, ry } = (0,shapes/* ellipseFromRect */.Dg)(rect);
                (0,shapes/* eachEllipseFill */.xh)(cx, cy, rx, ry, add);
            }
            else
                (0,shapes/* eachEllipseBorderRect */.QI)(rect.ul.x, rect.ul.y, rect.br.x, rect.br.y, add);
        }
        this.copyBuf = mode === 'layer'
            ? { mode, layer: this.panel.layer, layers }
            : { mode, cells };
        this.updateCopyInfo();
    }
    pasteCopyAt(origin) {
        if (!this.copyBuf)
            return;
        const ops = [];
        const pushIfChanged = (xy, before) => {
            const after = this.recordCell(this.map.get(xy));
            if (before.length !== after.length || before.some((n, i) => n !== after[i]))
                ops.push({ xy, type: 'set', names: before });
        };
        if (this.copyBuf.mode === 'layer') {
            const layer = this.copyBuf.layer;
            for (const item of this.copyBuf.layers || []) {
                if (this.stuttered(this.op === 'paint'))
                    continue;
                const xy = origin.add(item.dx, item.dy);
                if (game_xy.XY.oob(xy.x, xy.y))
                    continue;
                const cell = this.map.get(xy);
                const before = this.recordCell(cell);
                if (this.op !== 'paint') {
                    const drawable = cell.get(layer);
                    if (drawable)
                        cell.died(drawable);
                }
                else if (!cell.occupied(layer)) {
                    cell.create(drawable_types/* DrawableType */.Z.make(item.symbol, item.name));
                }
                pushIfChanged(xy, before);
            }
        }
        else {
            const perCell = {};
            for (const item of this.copyBuf.cells || []) {
                const key = `${item.dx},${item.dy}`;
                perCell[key] = item.items;
            }
            for (const key of Object.keys(perCell)) {
                if (this.stuttered(this.op === 'paint'))
                    continue;
                const [dxString, dyString] = key.split(',');
                const xy = origin.add(parseInt(dxString, 10), parseInt(dyString, 10));
                if (game_xy.XY.oob(xy.x, xy.y))
                    continue;
                const cell = this.map.get(xy);
                const before = this.recordCell(cell);
                const items = perCell[key];
                if (this.op === 'paint') {
                    game_layers/* CellLayers */.v.layerNames
                        .filter(n => n !== 'floor')
                        .forEach(n => cell.clear(n));
                    items.forEach(item => {
                        if (item.name === 'Floor')
                            return;
                        cell.create(drawable_types/* DrawableType */.Z.make(item.symbol, item.name));
                    });
                }
                else {
                    if (this.op === 'erase-cell')
                        game_layers/* CellLayers */.v.layerNames
                            .filter(n => n !== 'floor')
                            .forEach(n => cell.clear(n));
                    else {
                        const layer = this.panel.layer;
                        const drawable = cell.get(layer);
                        if (drawable)
                            cell.died(drawable);
                    }
                }
                pushIfChanged(xy, before);
            }
        }
        this.pushUndo(ops);
        this.drawMap();
    }
    previewPasteAt(at) {
        if (!this.copyBuf) {
            this.map.uiRenderer.remove(this.pasteId);
            return;
        }
        this.withStroke(this.pasteId, UI.pasteZ, () => !!this.copyBuf, s => {
            const addAt = (dx, dy) => {
                const xy = at.add(dx, dy);
                if (game_xy.XY.oob(xy.x, xy.y))
                    return;
                const cell = this.map.get(xy);
                s.add(cell, '*');
            };
            if (this.copyBuf.mode === 'layer')
                for (const it of this.copyBuf.layers || [])
                    addAt(it.dx, it.dy);
            else
                for (const it of this.copyBuf.cells || [])
                    addAt(it.dx, it.dy);
        });
    }
    updateCopyInfo() {
        const cancelBtn = (0,d3_extend.d1)('#copy-cancel');
        const pasteBtn = (0,d3_extend.d1)('#paste-btn');
        const rotateLeftBtn = (0,d3_extend.d1)('#rotate-left');
        const rotateRightBtn = (0,d3_extend.d1)('#rotate-right');
        const count = this.copyBuf?.mode === 'layer'
            ? (this.copyBuf.layers?.length || 0)
            : (this.copyBuf?.cells?.length || 0);
        if (count) {
            const label = this.copyBuf.mode === 'layer'
                ? `cxl (${count} ${this.panel.layer})`
                : `cxl (${count} cells)`;
            cancelBtn.text(label).disable(false);
            pasteBtn.disable(false);
            rotateLeftBtn.show().disable(false);
            rotateRightBtn.show().disable(false);
        }
        else {
            cancelBtn.text('cxl').disable(true);
            pasteBtn.disable(true);
            this.map.uiRenderer.remove(this.pasteId);
            rotateLeftBtn.hide().disable(true);
            rotateRightBtn.hide().disable(true);
        }
        cancelBtn.onClick(() => { this.clearCopy(); this.drawMap(); });
        pasteBtn.onClick(() => { if (this.hovered)
            this.pasteCopyAt(this.hovered); });
        rotateLeftBtn.onClick(() => this.rotateCopy('left'));
        rotateRightBtn.onClick(() => this.rotateCopy('right'));
        const toolRow = (0,d3_extend.d1)('#tool-row');
        toolRow.selectAll('button').property('disabled', !!count);
    }
    rotateCopy(direction) {
        if (!this.copyBuf)
            return;
        const rotatePair = (dx, dy) => direction === 'right' ? { dx: dy, dy: -dx } : { dx: -dy, dy: dx };
        if (this.copyBuf.mode === 'layer')
            this.copyBuf.layers = this.copyBuf.layers?.map(layerItem => {
                const rotated = rotatePair(layerItem.dx, layerItem.dy);
                return { ...layerItem, dx: rotated.dx, dy: rotated.dy };
            });
        else
            this.copyBuf.cells = this.copyBuf.cells?.map(cellItem => {
                const rotated = rotatePair(cellItem.dx, cellItem.dy);
                return { ...cellItem, dx: rotated.dx, dy: rotated.dy };
            });
        if (this.hovered)
            this.previewPasteAt(this.hovered);
    }
    clearCopy() { this.copyBuf = null; this.map.uiRenderer.remove(this.pasteId); this.updateCopyInfo(); }
    clearPreview() { this.map.uiRenderer.remove(this.shapeId); ui_renderer/* Repaint */.G2.emit(); }
    commitIfNeeded() {
        // If we have a copy, paste on mouseup; ignore shapes
        if (this.copyBuf && this.origin && this.lastTarget) {
            const at = this.lastTarget.xy;
            this.pasteCopyAt(at);
            this.map.uiRenderer.remove(this.pasteId);
            this.clearPreview();
            return;
        }
        const tool = this.panel.tool;
        if (this.copyBuf && this.origin && this.lastTarget &&
            game_xy.XY.matches(this.origin, this.lastTarget.xy)) {
            this.pasteCopyAt(this.origin);
            this.map.uiRenderer.remove(this.pasteId);
            this.clearPreview();
            return;
        }
        if (this.op === 'paint' && window.keydownC &&
            this.origin && this.lastTarget) {
            this.clearCopy();
            this.captureCopyShape(this.origin, this.lastTarget.xy);
            this.updateCopyInfo();
            this.clearPreview();
            return;
        }
        const commit = this.commitHandlers[tool];
        if (commit) {
            commit();
            return;
        }
        this.clearPreview();
    }
    onMove(cell) {
        this.panel.setCell(cell);
        this.hovered = cell.xy;
        if (this.copyBuf && this.hovered)
            this.previewPasteAt(this.hovered);
        if (!this.painting || !cell)
            return;
        const tool = this.panel.tool;
        let target = cell;
        if (tool === 'line' && this.paintingShift && this.origin) {
            const dx = cell.xy.x - this.origin.x;
            const dy = cell.xy.y - this.origin.y;
            if (!this.lock && (dx !== 0 || dy !== 0))
                this.lock = Math.abs(dx) >= Math.abs(dy) ? 'h' : 'v';
            if (this.lock === 'h')
                target = this.map.get(game_xy.XY.at(cell.xy.x, this.origin.y));
            if (this.lock === 'v')
                target = this.map.get(game_xy.XY.at(this.origin.x, cell.xy.y));
        }
        this.lastTarget = target;
        if (this.copyBuf)
            return; // suppress shape previews while copy loaded
        const preview = this.previewHandlers[tool];
        if (preview)
            preview(target);
    }
    stroke(cell) {
        if (window.keydownC)
            return;
        this.applyXY(cell.xy);
    }
    paint(cell) {
        const ch = this.panel.choice;
        if (!ch)
            return;
        const layer = this.panel.layer;
        if (cell.occupied(layer))
            return;
        const d = ch.make();
        if (!d)
            return;
        cell.create(d);
        this.drawMap();
    }
    eraseCurrent(cell) {
        const layer = this.panel.layer;
        const d = cell.get(layer);
        if (!d)
            return;
        cell.died(d);
        this.drawMap();
    }
    eraseCell(cell) {
        game_layers/* CellLayers */.v.layerNames
            .filter(n => n !== 'floor')
            .forEach(n => cell.clear(n));
        this.drawMap();
    }
    updateLightingEnabled() {
        if (this.showLighting || this.showDarkness) {
            this.map.lighting.enable();
            this.map.eachCell(cell => {
                if (cell.layers.lit())
                    this.map.lighting.add(cell);
            });
            this.map.lighting.redraw();
        }
        else
            this.map.lighting.disable();
    }
    init() {
        this.map.fill(() => new floor/* Floor */.Z());
        this.map.lighting.disable();
        this.hide('#play-controls');
        this.hide('#next-button');
        this.hide('#freeze-button');
        this.hide('#help-button');
        this.hide('#save-group');
        this.hide('#step-info');
        (0,d3_extend.d1)('#debug-controls').show();
        (0,d3_extend.d1)('#game-button').show();
        (0,d3_extend.d1)('#game-button').onClick(() => { location.href = location.pathname; });
        (0,d3_extend.d1)('#copy-cancel').onClick(() => { this.copyBuf = null; this.updateCopyInfo(); });
        (0,d3_extend.d1)('#undo-btn').onClick(this.undo);
        (0,d3_extend.d1)('#copy-fragment').onClick(async () => {
            const txt = this.renderCroppedFragment();
            try {
                await navigator.clipboard.writeText(txt);
            }
            catch { }
        });
        (0,d3_extend.d1)('#submit-fragment').onClick(() => {
            const txt = this.renderCroppedFragment();
            const title = 'Editor: map fragment';
            const body = `\n\n\`\`\`\n${txt}\n\`\`\``;
            this.feedback.show();
            this.feedback.prefill(title, body);
        });
        (0,d3_extend.d1)('#show-fragment').onClick(() => {
            const txt = this.renderCroppedFragment();
            (0,d3_extend.d1)('#fragment-text').text(txt);
            const v = (0,d3_extend.d1)('#fragment-preview');
            v.show();
            requestAnimationFrame(() => this.centerFragment(v));
        });
        (0,d3_extend.d1)('#fragment-close').onClick(() => {
            (0,d3_extend.d1)('#fragment-preview').hide().style('left', '').style('top', '');
        });
        (0,d3_extend.d1)('#load-fragment').onClick(() => {
            this.showFragmentLoader();
        });
        (0,d3_extend.d1)('#fragment-loader-close').onClick(() => {
            (0,d3_extend.d1)('#fragment-loader').hide();
        });
        (0,d3_extend.d1)('#lighting-toggle').onClick(this.toggleLighting);
        (0,d3_extend.d1)('#darkness-toggle').onClick(this.toggleDarkness);
        (0,d3_extend.d1)('#clear-map').onClick(this.clearMap);
        (0,d3_extend.d1)('#simulate-button').onClick(this.startSimulation);
        (0,d3_extend.d1)('#simulate-step').onClick(this.stepSimulation);
        (0,d3_extend.d1)('#simulate-return').onClick(this.returnToEditor);
        window.keydownC = false;
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
        this.updateCopyInfo();
    }
    setupLayerControls() {
        (0,d3_extend.d1)('#debug-toggle').onClick(() => {
            const dbg = (0,d3_extend.d1)('#debug-controls');
            dbg.showing() ? dbg.hide() : dbg.show();
        });
        (0,d3_extend.d1)('#layer-on').onClick(() => this.turnOnAll());
        (0,d3_extend.d1)('#layer-off').onClick(() => this.turnOffAll());
        const group = (0,d3_extend.d1)('#layer-group');
        const abbreviations = (0,utils/* toMap */.J9)(game_layers/* CellLayers */.v.layerNames, layer => layer.slice(0, 3));
        game_layers/* CellLayers */.v.layerNames.forEach(layerName => {
            const button = group.append('button')
                .attr('id', `layer-${layerName}`)
                .classed('button-secondary', true)
                .text(abbreviations[layerName] || layerName.slice(0, 3));
            button.on('click', () => this.toggleLayer(layerName));
        });
    }
    getVisible() {
        if (this.solo)
            return new Set([this.solo]);
        if (this.muted.size === 0)
            return new Set();
        return new Set(game_layers/* CellLayers */.v.layerNames.filter(l => !this.muted.has(l)));
    }
    toggleLayer(layerName) {
        const button = (0,d3_extend.d1)(`#layer-${layerName}`);
        if (this.solo === layerName) {
            this.solo = null;
            button.classed('solo', false);
        }
        else if (this.solo) {
            (0,d3_extend.d1)(`#layer-${this.solo}`).classed('solo', false);
            this.solo = layerName;
            button.classed('solo', true);
        }
        else if (this.muted.has(layerName)) {
            this.muted.delete(layerName);
            button.classed('muted', false);
        }
        else {
            this.muted.add(layerName);
            button.classed('muted', true);
        }
        this.drawMap();
    }
    turnOnAll() {
        this.muted.clear();
        this.solo = null;
        game_layers/* CellLayers */.v.layerNames.forEach(n => (0,d3_extend.d1)(`#layer-${n}`).classed('muted', false).classed('solo', false));
        this.drawMap();
    }
    turnOffAll() {
        this.solo = null;
        this.muted = new Set(game_layers/* CellLayers */.v.layerNames);
        game_layers/* CellLayers */.v.layerNames.forEach(n => {
            const b = (0,d3_extend.d1)(`#layer-${n}`);
            b.classed('solo', false).classed('muted', true);
        });
        this.drawMap();
    }
    drawMap() {
        this.map.lighting.redraw();
        const visible = this.getVisible();
        const showNothing = this.muted.size === game_layers/* CellLayers */.v.layerNames.length;
        const debug = this.muted.size > 0 || this.solo !== null;
        this.map.draw(this.showLighting, visible, showNothing, debug, this.showDarkness);
    }
    async showFragmentLoader() {
        const loader = (0,d3_extend.d1)('#fragment-loader');
        const list = (0,d3_extend.d1)('#fragment-list');
        const fragmentContext = __webpack_require__(612);
        const fragmentFiles = fragmentContext.keys();
        const fragmentData = fragmentFiles.map((path) => ({
            name: path.replace('./', '').replace('.txt', ''),
            path: path,
            content: fragmentContext(path).default || fragmentContext(path)
        }));
        list.dList('.fragment-file').updateFrom(fragmentData, (btn, fragment) => {
            btn.text(fragment.name);
            btn.onClick(async () => {
                this.loadFragmentToCopyBuffer(fragment.content);
                loader.hide();
            });
        });
        loader.show();
        requestAnimationFrame(() => this.centerFragment(loader));
    }
    loadFragmentToCopyBuffer(text) {
        const parsed = fragment/* Fragment */.F.parse(text);
        const cells = [];
        // Check for unknown types and add them as editor items
        Object.entries(parsed.key).forEach(([symbol, typeName]) => {
            if (typeName === 'Floor')
                return;
            if (!drawable_types/* DrawableType */.Z.registry[typeName])
                this.defs.register({ symbol, name: typeName });
        });
        if (this.defs.extraDefs().length > 0)
            this.panel.setEditorItems(this.defs.extraDefs());
        // Parse the fragment and convert to copy buffer format
        parsed.grid.forEach((row, y) => {
            for (let x = 0; x < row.length; x++) {
                const symbol = row[x];
                if (symbol && symbol !== '.') {
                    const typeName = parsed.key[symbol];
                    if (typeName && typeName !== 'Floor')
                        cells.push({ dx: x, dy: y, items: [{ name: typeName, symbol }] });
                }
            }
        });
        // Set the copy buffer
        this.copyBuf = { mode: 'cells', cells };
        this.origin = game_xy.XY.at(0, 0);
        this.updateCopyInfo();
    }
}


/***/ }),

/***/ 4648:
/***/ ((module) => {

"use strict";
module.exports = ".....................................................................\n.............###++#####................*.............................\n.............#........#..............................................\n..+##++###++##+##.....#..............................................\n.#...........#.*#.*...#..............................########........\n.+..............#.....+.............................#.....*.#........\n.+............*.+.....#.........................*...#.......#....*...\n.#...........#..#.....#.....................*.......#.......+........\n.#......###+############+.+####..............*......#.......#....*...\n.+......#....#..+.....#........#....................#.......#........\n.#...........#..#.....#........#....................#.......+........\n.#......#....#..#.....#........#....................#.......#........\n.+###+########..#.....#.......####+#................#.......#........\n.##.....#....##+#####+#.......##...#........####+##+#####+####.......\n.##.....#..*.#..#.............##...#........#.......#.......##.......\n.##.....#....#..#.......*...*.##...#........#..*....#.......##.......\n.#+.....+.#+#####+#####+###....#...#.......####.....#.......##.......\n.+......#.#..#............#...##...#.......##.#.....#.......##.......\n..###+###+#######.....*...#....+...........##.#.....#.......##.......\n..#.....#.#..#.........######+##...######+#.##......+.......##.......\n..#.....#.#..#.......#+...+...##*..#.......####....*#.......##.......\n..#.....#.#*.#.......#....#....+...#........###.....#........#.......\n..#....*#.#.*#.......#....#...##...#.......########.#####+####.......\n..#+#+########...*...#....#...#######+#+#+####.####+#####.##..+###+#.\n........#.#..........+....#....#..*+.......#..#.....+.......#......#.\n........#.#*.........#....+....#...#.......####.....#.......#......+.\n........#.#..........#####.##+#.#..###########......#.......#......#.\n........#.#........########.#..######.........*.....#.......#......#.\n........#.#........#......#*..*+...##...........#+#######...#..*.*.#.\n........#.#........#......#....#...++...........+...#.*.#...#......#.\n........#.#........#..*...#....#...##...........#...#...+...#......#.\n........#.#........+......#....#...#.######################+###+###..\n........#.###.+###+###+####....+....#...........#...#...#...#........\n...*....#..........#...........#....#...........#...###+##*.#........\n........#..........+...........#....#...........+.......+............\n........#..........#...........#....#...........#.......#....*.......\n........#..........#...........#....#...........###+#+###............\n........#..........######++##########................................\n........#.................+....#...*.................................\n........#.....................+......................................\n........#...................................................*........\n........##########+############........**............................\n.....................................................................\nKEY\n# = Wall\n+ = Door\n* = Lamp\n";

/***/ }),

/***/ 4806:
/***/ ((module) => {

"use strict";
module.exports = "..............\n..............\n..##########..\n..#.==.#*f↻#..\n..#.==.#...#..\n..#.==.#...#..\n..#*...#.._#..\n..#..◘h#.._#..\n..#..h###+##..\n..##+##*..✰#..\n..#........+..\n..#*.......#..\n..#▭.▭....✰#..\n..#[.▭.*h.]#..\n..#[.▭.h◘.]#..\n..#▭.▭.h◘.]#..\n..#◉.▭..h.]#..\n..#ff▭*...✰#..\n..######..*#..\n.......#####..\n..............\n..............\nKEY\n# = Wall\n= = Bed\n* = Lamp\nf = sink\n↻ = toilet\n_ = tub\n◘ = Table\nh = Chair\n+ = Door\n✰ = Bush\n▭ = counter\n[ = refrigerator\n] = TV\n◉ = oven\n";

/***/ }),

/***/ 5164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `#editor-panel .label { color: #0a0; margin-right: 6px }

#editor-panel button {
  background: #000;
  color: #0a0;
  border: 1px solid #0a0;
  border-radius: 2px;
  font-family: monospace;
  font-size: 12px;
  padding: 2px 6px;
}

#editor-panel button.selected {
  background: #060;
  color: #000;
  border-color: #0c0;
}

#editor-panel .option { margin-left: 4px }

#fragment-preview {
  position: absolute;
  z-index: 1000;
  background: #000;
  border: 1px solid #0a0;
  padding: 8px;
}

#fragment-preview > .row { margin-bottom: 6px }

#fragment-preview pre {
  max-width: 80vw;
  max-height: 70vh;
  overflow: auto;
  border: 1px solid #0a0;
  padding: 8px;
}

#symbol-picker {
  position: absolute;
  z-index: 1000;
  background: #000;
  border: 1px solid #0a0;
  padding: 8px;
  max-width: calc(var(--map-width, 80vw));
  max-height: 70vh;
  overflow: auto;
}

#symbol-picker .symbols {
  display: grid;
  grid-template-columns: repeat(120, 1ch);
  gap: 2px;
}

#symbol-picker .sym {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1ch;
  height: 1.25em;
  border: 1px solid #0a0;
  cursor: pointer;
  font-family: monospace;
}

#symbol-picker .sym.selected { background: #060; color: #000 }

#symbol-picker .actions {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

#layer-choices .choices .choice { position: relative; display: inline-flex; align-items: center; gap: 4px }
#layer-choices .choices .choice .close-button { margin-left: 4px; pointer-events: auto; position: static; width: 14px; height: 14px; display: inline-flex; align-items: center; justify-content: center } 

#editor-panel #layer-choices .layer .editor-item .close-button {
  width: 14px;
  height: 14px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f44;
  border-color: #f44;
  background: #000;
} 

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5833:
/***/ ((module) => {

"use strict";
module.exports = "...........................\n...........................\n...............✰✰..✰.......\n...........✰✰.....✰...✰....\n............✰.✰..✰...T.....\n...✰T.✰.........✰...✰......\n....✰................✰✰....\n..........#########.✰✰.....\n....✰.....#[..*.hh#........\n..........#◉.░.h◘◘#..✰.....\n..✰✰......#░.░.h◘◘#........\n...✰...#######....#.....✰..\n....T..#*.#__#...*#........\n.......#=.#..#..h]#..T.....\n.......#=.#f.#..h]#........\n.....✰.#..#↻.+....#.....✰..\n.......#..##+####+#....T...\n.......#.....#*...#✰....✰..\n.......#.....+....#✰...✰...\n.......#######....#✰...✰...\n.............#....#✰.......\n.....✰.....###....#✰.✰..✰..\n..........##.+....#✰..✰....\n..........#◛.####+#........\n.......✰✰.#◛.#✰✰.....✰✰.✰..\n..........#..#✰............\n.....T.✰✰.####✰............\n.......✰✰.......T.T........\n...........................\n...........................\nKEY\n✰ = Bush\nT = Tree\n# = Wall\n[ = Refrigerator\n* = Lamp\nh = Chair\n◉ = Oven\n░ = Counter\n◘ = Table\n_ = Tub\n= = Bed\n] = Tv\nf = Sink\n↻ = Toilet\n+ = Door\n◛ = Washer/dryer\n";

/***/ }),

/***/ 9444:
/***/ ((module) => {

"use strict";
module.exports = ".#.\n#U#\n.u.\nKEY\n# = Wall\n* = Lamp\n+ = Door\nU = Unknown\nu = little unknown\n";

/***/ })

}]);
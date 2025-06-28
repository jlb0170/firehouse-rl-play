"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const utils_1 = require("../utils");
const map_1 = require("./map");
const initializer_1 = require("./initializer");
const config_1 = require("./config");
const terminal_1 = require("../ui/terminal");
const layers_1 = require("./layers");
class Game {
    constructor() {
        this.intervalId = null;
        this.running = false;
        this.showLighting = false;
        this.mutedLayers = new Set();
        this.soloLayer = null;
        this.map = new map_1.Map(config_1.Config.WIDTH, config_1.Config.HEIGHT);
        this.terminal = new terminal_1.Terminal('terminal-content');
        this.attachToDOM();
        this.setupControls();
        this.setupDebugControls();
        const initializer = new initializer_1.Initializer(this.map);
        initializer.initialize();
        this.map.lighting.redraw();
        this.drawMap();
        this.updatePlayPauseButton();
        document.addEventListener('keydown', (e) => {
            if (e.key !== ' ')
                return;
            e.preventDefault();
            this.togglePlayPause();
        });
    }
    attachToDOM() {
        const container = (0, utils_1.bombUnless)(document.getElementById('game-container'), () => 'No game-container element');
        const canvas = (0, utils_1.bombUnless)(this.map.display.getContainer(), () => 'Failed to get canvas');
        const smokeCanvas = (0, utils_1.bombUnless)(this.map.smokeDisplay.getContainer(), () => 'Failed to get smoke canvas');
        container.style.position = 'relative';
        canvas.style.display = 'block';
        canvas.style.zIndex = '1';
        smokeCanvas.style.position = 'absolute';
        smokeCanvas.style.top = '0';
        smokeCanvas.style.left = '0';
        smokeCanvas.style.zIndex = '2';
        smokeCanvas.style.opacity = '0.3';
        smokeCanvas.style.pointerEvents = 'none';
        container.appendChild(canvas);
        container.appendChild(smokeCanvas);
        this.map.onMousemove(canvas, (cell) => {
            this.terminal.setCurrent(cell);
            this.terminal.draw();
        });
    }
    setupControls() {
        (0, utils_1.onClick)((0, utils_1.$1)('playpause-button'), () => this.togglePlayPause());
        (0, utils_1.onClick)((0, utils_1.$1)('next-button'), () => this.step());
    }
    setupDebugControls() {
        (0, utils_1.onClick)((0, utils_1.$1)('lighting-toggle'), () => this.toggleLighting());
        (0, utils_1.onClick)((0, utils_1.$1)('layer-on'), () => this.turnOnAllLayers());
        (0, utils_1.onClick)((0, utils_1.$1)('layer-off'), () => this.turnOffAllLayers());
        this.createLayerButtons();
        layers_1.CellLayers.layerNames.forEach(layerName => {
            (0, utils_1.onClick)((0, utils_1.$1)(`layer-${layerName}`), () => this.toggleLayerVisibility(layerName));
        });
    }
    updatePlayPauseButton() {
        const button = (0, utils_1.$1)('playpause-button');
        button.textContent = this.running ? '⏸' : '▶';
    }
    togglePlayPause() {
        if (this.running)
            this.pause();
        else
            this.play();
    }
    pause() {
        if (!this.running)
            return;
        this.running = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.updatePlayPauseButton();
    }
    play() {
        if (this.running)
            return;
        this.running = true;
        this.intervalId = setInterval(() => {
            const start = Date.now();
            this.map.step();
            this.map.lighting.redraw();
            this.drawMap();
            this.terminal.draw();
            console.log(`step took ${Date.now() - start}ms`);
        }, 350);
        this.updatePlayPauseButton();
    }
    step() {
        this.map.step();
        this.map.lighting.redraw();
        this.drawMap();
        this.terminal.draw();
    }
    drawMap() {
        const visibleLayers = this.getVisibleLayers();
        const showNothing = this.mutedLayers.size === layers_1.CellLayers.layerNames.length;
        const debug = this.mutedLayers.size > 0 || this.soloLayer !== null;
        this.map.draw(this.showLighting, visibleLayers, showNothing, debug);
    }
    getVisibleLayers() {
        if (this.soloLayer) {
            return new Set([this.soloLayer]);
        }
        if (this.mutedLayers.size === 0) {
            return new Set();
        }
        return new Set(layers_1.CellLayers.layerNames.filter(layer => !this.mutedLayers.has(layer)));
    }
    toggleLighting() {
        this.showLighting = !this.showLighting;
        const button = (0, utils_1.$1)('lighting-toggle');
        button.textContent = this.showLighting ? 'LT*' : 'LT';
        this.drawMap();
    }
    toggleLayerVisibility(layerName) {
        const button = (0, utils_1.$1)(`layer-${layerName}`);
        if (this.soloLayer === layerName) {
            this.soloLayer = null;
            button.classList.remove('solo');
        }
        else if (this.soloLayer) {
            const oldButton = (0, utils_1.$1)(`layer-${this.soloLayer}`);
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
        layers_1.CellLayers.layerNames.forEach(layerName => {
            const button = (0, utils_1.$1)(`layer-${layerName}`);
            button.classList.remove('muted', 'solo');
        });
        this.drawMap();
    }
    turnOffAllLayers() {
        this.soloLayer = null;
        this.mutedLayers = new Set(layers_1.CellLayers.layerNames);
        layers_1.CellLayers.layerNames.forEach(layerName => {
            const button = (0, utils_1.$1)(`layer-${layerName}`);
            button.classList.remove('solo');
            button.classList.add('muted');
        });
        this.drawMap();
    }
    createLayerButtons() {
        const layerGroup = (0, utils_1.$1)('layer-group');
        const layerAbbrevs = Object.fromEntries(layers_1.CellLayers.layerNames.map(name => [
            name,
            name === 'ui' ? 'ui ' : name.slice(0, 3)
        ]));
        layers_1.CellLayers.layerNames.forEach(layerName => {
            const button = document.createElement('button');
            button.id = `layer-${layerName}`;
            button.className = 'layer-button';
            button.textContent = layerAbbrevs[layerName] || layerName.slice(0, 3);
            layerGroup.appendChild(button);
        });
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game/game");
function showError(message, stack) {
    const container = document.getElementById('game-container') || document.body;
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-overlay';
    const closeButton = document.createElement('button');
    closeButton.className = 'error-close';
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => errorDiv.remove());
    errorDiv.textContent = `ERROR: ${message}\n\nStack trace:\n${stack || 'No stack trace available'}`;
    errorDiv.appendChild(closeButton);
    container.appendChild(errorDiv);
}
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    console.error('Stack trace:', event.error?.stack);
    showError(event.error?.message || 'Unknown error', event.error?.stack);
});
function init() {
    try {
        new game_1.Game();
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        const stack = error instanceof Error ? error.stack : undefined;
        showError(`Game initialization failed: ${message}`, stack);
    }
}
window.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=index.js.map
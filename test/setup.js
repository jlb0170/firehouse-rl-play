"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
(0, utils_1.setTestMode)(true);
expect.extend({
    toBeGridChars(received, expected) {
        // Find the indentation level from the first non-empty line
        const lines = expected.split('\n');
        const firstContentLine = lines.find(line => line.trim().length > 0);
        const originalIndent = firstContentLine ? firstContentLine.match(/^\s*/)?.[0] || '' : '';
        // Reduce indentation by 4 spaces since Jest adds its own base indentation
        const indentLevel = originalIndent.length >= 4 ? originalIndent.slice(4) : '';
        // Strip leading whitespace from each line of expected
        const normalizedExpected = expected
            .split('\n')
            .map(line => line.replace(/^\s+/, ''))
            .join('\n');
        const pass = received === normalizedExpected;
        if (pass) {
            return {
                message: () => `Expected grids to not match`,
                pass: true,
            };
        }
        else {
            // Re-indent expected to match original formatting
            const indentedExpected = normalizedExpected
                .split('\n')
                .map(line => line.length > 0 ? indentLevel + line : line)
                .join('\n');
            // Received should be displayed with same indentation as expected for alignment
            const indentedReceived = received
                .split('\n')
                .map(line => line.length > 0 ? indentLevel + line : line)
                .join('\n');
            return {
                message: () => `Expected grid chars to match:\n\nExpected:${indentedExpected}\n\nReceived:${indentedReceived}`,
                pass: false,
            };
        }
    },
});
//# sourceMappingURL=setup.js.map
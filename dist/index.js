"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = (...functions) => (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
};
exports.compose = compose;
const curry = (f) => {
    return (a) => {
        return (b) => {
            return f(a, b);
        };
    };
};
exports.curry = curry;
//# sourceMappingURL=index.js.map
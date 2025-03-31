"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range = (from, to) => {
    return from < to ? [from, ...range(from + 1, to)] : [];
};
const sample = range(1, 10);
console.log(sample);

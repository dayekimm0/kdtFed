"use strict";
// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
Object.defineProperty(exports, "__esModule", { value: true });
const map = (arr, callback) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
};
const arr = [1, 2, 3];
const arrN = map(arr, (it) => it * 2);
console.log(arrN);

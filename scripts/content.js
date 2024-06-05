"use strict";
console.log(`[Course Number 2 Title]`);
const body = document.querySelector('body');
body.addEventListener('dblclick', (e) => {
    var _a, _b;
    const selectedText = (_b = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    const courseNumber = Number(selectedText);
    console.log(courseNumber);
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API = 'https://mocki.io/v1/8670d292-1dbb-4063-a74c-6ec9c2c81a81';
const body = document.querySelector('body');
body.addEventListener('dblclick', (e) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const selectedText = ((_b = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '').trim();
    if (selectedText && !Number.isNaN(Number(selectedText))) {
        const res = yield convert('The Ohio State University', 'CSE', selectedText);
        if (res) {
            console.log('[Course Number 2 Title] res:', res);
        }
    }
}));
function convert(school, department, courseNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(API);
        return (yield res.json());
    });
}

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
const API = 'http://localhost:3001/api/v1/courses';
const body = document.querySelector('body');
const box = document.createElement('p');
setUp();
function setUp() {
    box.classList.add('box');
    body.appendChild(box);
    body.addEventListener('dblclick', handleDoubleClick);
    body.addEventListener('click', handleClick);
    hideBox();
    updateBoxContent('Searching...');
}
function handleDoubleClick(e) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const selectedText = ((_b = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '').trim();
        if (selectedText && !Number.isNaN(Number(selectedText))) {
            showBox();
            const school = 'The Ohio State University';
            const department = 'CSE';
            const courseNumber = selectedText;
            const courseTitle = yield search(school, department, selectedText);
            if (courseTitle !== '') {
                updateBoxContent(`${department} ${courseNumber} ${courseTitle}`);
            }
            else {
                updateBoxContent('Not Found.');
            }
        }
    });
}
function handleClick(e) {
    if (e.target !== box) {
        hideBox();
        updateBoxContent('Searching...');
    }
}
function search(school, department, courseNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(`${API}?school=${encodeURI(school)}&department=${encodeURI(department)}&courseNumber=${encodeURI(courseNumber)}`);
            return (yield res.json()).courseTitle;
        }
        catch (err) {
            console.error('[Course Number 2 Title] Error:', err);
            return '';
        }
    });
}
function showBox() {
    box.classList.remove('hidden');
}
function hideBox() {
    box.classList.add('hidden');
}
function updateBoxContent(content) {
    box.textContent = content;
}

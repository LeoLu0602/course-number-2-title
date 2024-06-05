console.log("[Course Number 2 Title]");
var body = document.querySelector('body');
body.addEventListener('dblclick', function (e) {
    var _a, _b;
    var selectedText = (_b = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    var courseNumber = Number(selectedText);
    console.log(courseNumber);
});

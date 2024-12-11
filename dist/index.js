"use strict";
// module.exports = function setVersion(version){
//     const root = document.documentElement;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVersion = setVersion;
//     root.style.setProperty('--version', 10);
// }
function setVersion(arg) {
    var root = document.documentElement;
    console.log("------- the argument value is", arg);
    root.style.setProperty('--version', '10');
}

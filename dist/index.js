"use strict";
// module.exports = function setVersion(version){
//     const root = document.documentElement;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVersion = void 0;
//     root.style.setProperty('--version', 10);
// }
function setVersion(version) {
    var root = document.documentElement;
    console.log("------- the argument value is", version);
    var input = "@mixin border-radius(".concat(version, ", button, 10px){\n                        --pf-#{$version}-c-#{$component}--BorderRadius: #{$radius};\n                    }\n\n                    .pf-v6-c-button {\n                        //border-width: var(--version);\n                        @include border-radius($pfVersion, button, var(--rh-border-radius-default, 3px));\n                    }");
    var sass = require('sass');
    var result = sass.compileString(input);
    console.log("the result css is", result.css);
}
exports.setVersion = setVersion;

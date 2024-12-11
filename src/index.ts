
// module.exports = function setVersion(version){
//     const root = document.documentElement;

//     root.style.setProperty('--version', 10);
// }

export function setVersion(version: string): void {
    const root = document.documentElement;
    console.log("------- the argument value is", version);

    const input =  `@mixin border-radius(${version}, button, 10px){
                        --pf-#{$version}-c-#{$component}--BorderRadius: #{$radius};
                    }

                    .pf-v6-c-button {
                        //border-width: var(--version);
                        @include border-radius($pfVersion, button, var(--rh-border-radius-default, 3px));
                    }`

    const sass = require('sass');

    const result = sass.compileString(input);
    console.log("the result css is",result.css);
  }
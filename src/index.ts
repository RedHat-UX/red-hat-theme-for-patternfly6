
// module.exports = function setVersion(version){
//     const root = document.documentElement;

//     root.style.setProperty('--version', 10);
// }

export function setVersion(arg: string): void {
    const root = document.documentElement;
    console.log("------- the argument value is", arg);
    root.style.setProperty('--version', '10');
  }
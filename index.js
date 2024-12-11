
// module.exports = function setVersion(version){
//     const root = document.documentElement;

//     root.style.setProperty('--version', 10);
// }

exports.setVersion =  function (arg) {
    const root = document.documentElement;
    console.log("------- the argument value is", arg);
    root.style.setProperty('--version', 10);
}
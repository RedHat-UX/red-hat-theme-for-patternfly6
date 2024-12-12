
module.exports = function version(version){
    const root = document.documentElement;
    root.style.setProperty('--version', version);
}
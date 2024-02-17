document.getElementById("font-size-control").addEventListener("input", function () {
    let fontSize = this.value + "px";
    document.getElementById("text").style.fontSize = fontSize;
});
document.getElementById("name-input").addEventListener("input", function () {
    let outputSpan = document.getElementById("name-output");
    let name = this.value.trim();
    if (name === "") {
        outputSpan.textContent = "Anonymous";
    } else {
        outputSpan.textContent = name;
    }
});
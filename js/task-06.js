document.getElementById("validation-input").addEventListener("blur", function() {
    let inputValue = this.value;
    const requiredLength = parseInt(this.getAttribute("data-length"));
    const isValid = inputValue.length === requiredLength;
    if (isValid) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
});
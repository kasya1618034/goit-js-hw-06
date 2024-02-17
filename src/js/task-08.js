const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {};

    for (const element of form.elements) {
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }

    if (!formData.email || !formData.password) {
        alert("Fill in all fields, please!");
        return;
    }

   
    console.log("Form Data:", formData);

    form.reset();
});

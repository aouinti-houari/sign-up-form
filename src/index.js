import css from './style.css';

const submit = document.querySelector("[data-submit]");
const form = document.querySelector('form');
const passwordInput = form.querySelector('[name="password"]');
const confirmPasswordInput = form.querySelector('[name="confirm"]');
const passMatch = document.querySelector("[data-match]");
const loginBox = document.querySelector(".login-box");

submit.addEventListener('click', function (event) {
    event.preventDefault();

    loginBox.style.marginTop = "0px";

    let isFormValid = true;

    Array.from(form.elements).forEach(input => {
        if (input.nextElementSibling) {
            input.nextElementSibling.textContent = '';
        }
    });

    Array.from(form.elements).forEach(input => {
        if (!input.checkValidity()) {
            console.log("Hello")
            input.nextElementSibling.style.color = "red";
            input.nextElementSibling.textContent = input.validationMessage;
        }
    });
    // Check each input field


    // Additional check for password match
    if (passwordInput.value !== confirmPasswordInput.value) {
        isFormValid = false;
        passMatch.innerText = "The passwords do not match";
    }

    // If the form is valid, you can proceed to submit the form
    if (isFormValid) {
        console.log("Form is valid");
    }
});

const password = document.querySelector("[data-password]");
const passwordConfirm = document.querySelector("[data-password-confirm]");
const submit = document.querySelector("[data-submit]");
const passMatch = document.querySelector("[data-match]")

const passwordMatch = () => {
    passMatch.innerText = password.value === passwordConfirm.value ? "" : "The password doesn't match";
}

submit.addEventListener("click", passwordMatch);

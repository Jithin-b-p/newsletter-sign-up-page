import "./sass/style.scss";

const form = document.getElementById("newsletter-form");
const signupSection = document.getElementById("signup-section");
const emailInput = document.getElementById("newsletter-email");
const emailLabel = document.getElementById("email-label");
const errorMsg = document.getElementById("error-msg");

const successEmail = document.getElementById("success-email");
const successSection = document.getElementById("success-section");
const dismissBtn = document.getElementById("dismiss-btn");

const isValidEmail = (email) => {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return reg.test(email);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  // checking for Email validity
  const email = emailInput.value;
  if (isValidEmail(email)) {
    successEmail.textContent = email;
    signupSection.classList.toggle("hidden");
    successSection.classList.toggle("hidden");
    successSection.classList.toggle("flex-col");
    emailInput.value = "";
  } else {
    emailInput.classList.remove("email-input");
    emailInput.classList.add("email-input__error");
    emailInput.setAttribute("aria-invalid", true);
    errorMsg.removeAttribute("hidden");
  }
};

const handleDismissMessage = (event) => {
  signupSection.classList.toggle("hidden");
  successSection.classList.toggle("hidden");
  successSection.classList.toggle("flex-col");
  emailLabel.classList.toggle("label-animation");
};

const handleInputChange = (event) => {
  if (event.target.value === "") {
    emailLabel.classList.remove("label-animation");
  } else {
    emailInput.classList.remove("email-input__error");
    emailInput.classList.add("email-input");
    emailInput.removeAttribute("aria-invalid");
    emailLabel.classList.add("label-animation");
    errorMsg.setAttribute("hidden", "");
  }
};

form.addEventListener("submit", handleFormSubmit);
dismissBtn.addEventListener("click", handleDismissMessage);
emailInput.addEventListener("keydown", handleInputChange);

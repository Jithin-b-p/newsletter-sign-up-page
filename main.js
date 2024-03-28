import "./sass/style.scss";

const form = document.getElementById("newsletter-form");
const signupSection = document.getElementById("signup-section");
const emailInput = document.getElementById("newsletter-email");
const emailLabel = document.getElementById("email-label");

const successEmail = document.getElementById("success-email");
const successSection = document.getElementById("success-section");
const dismissBtn = document.getElementById("dismiss-btn");

function isValidEmail(email) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return reg.test(email);
}

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
  }
};

const handleDismissMessage = (event) => {
  signupSection.classList.toggle("hidden");
  successSection.classList.toggle("hidden");
  successSection.classList.toggle("flex-col");
  emailLabel.classList.toggle("label-animation");
};

const handleLabelDisplay = (event) => {
  if (event.target.value === "") {
    emailLabel.classList.toggle("label-animation");
  } else {
    emailLabel.classList.toggle("label-animation");
  }
};

form.addEventListener("submit", handleFormSubmit);
dismissBtn.addEventListener("click", handleDismissMessage);
emailInput.addEventListener("change", handleLabelDisplay);

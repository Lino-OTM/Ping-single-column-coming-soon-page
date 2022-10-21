const form  = document.querySelector(".hero__form"),
      email = document.querySelector(".hero__form-email-input");
      error = document.querySelector(".hero__form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value) {
    email.classList.add("input-error");
    error.style.display = "block";
  } else {
     if(!validateEmail(email.value)) {
    email.classList.add("input-error");
    error.style.display = "block";
  } else {
    email.classList.remove("input-error");
    error.style.display = "none";
    email.value = "";
  }
}});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
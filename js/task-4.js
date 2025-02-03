const form = document.querySelector(".login-form");

 form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = form.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
      alert("All form fields must be filled in");
      return;
    }

    console.log({ email: emailValue, password: passwordValue });
    form.reset();
  });
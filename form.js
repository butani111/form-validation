const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate(); // Validate all the fields of form
});

// validate funtion
const validate = () => {
  const userNameVal = userName.value.trim();
  const emailVal = email.value.trim();
  const mobileVal = mobile.value.trim();
  const passwordVal = password.value.trim();
  const cPasswordVal = cPassword.value.trim();

  // validate userName
  if (userNameVal === "") {
    setErrorMsg(userName, "username cannot be blank");
  } else if (userNameVal.length <= 2) {
    setErrorMsg(userName, "username min 3 char");
  } else {
    setSuccessMsg(userName);
  }

  // validate Email
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Invalid Email");
  } else {
    setSuccessMsg(email);
  }

  // validate Mobile no.
  if (mobileVal === "") {
    setErrorMsg(mobile, "Mobile no. cannot be blank");
  } else if (mobileVal.length != 10) {
    setErrorMsg(mobile, "Invalid Mobile no.");
  } else {
    setSuccessMsg(mobile);
  }

  // validate password
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "Minimum 6 char");
  } else {
    setSuccessMsg(password);
  }

  // validate confirmPassword
  if (cPasswordVal === "") {
    setErrorMsg(cPassword, "password cannot be blank");
  } else if (passwordVal !== cPasswordVal) {
    setErrorMsg(cPassword, "password are not matching");
  } else {
    setSuccessMsg(cPassword);
  }

  success(userNameVal);
};

// Email validation
function isEmail(emailVal) {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
}

// message controls
function setErrorMsg(input, errorMsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.remove("success");
  formControl.classList.add("error");
  small.innerText = errorMsg;
}
function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

// Success message at submit
function success(userNameVal) {
  const elements = document.getElementsByClassName("form-control");
  let allSucess = true;
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains("success")) allSucess = false;
  }
  if (allSucess) {
    // sweet alert
    swal(
      `Congratulations ${userNameVal}!`,
      "Registration successful!",
      "success"
    );
  }
}

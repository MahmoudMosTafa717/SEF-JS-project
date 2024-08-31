let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let Signup = document.getElementById("Sign-Up");

Signup.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("Please input all Data");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 500);
  }
});

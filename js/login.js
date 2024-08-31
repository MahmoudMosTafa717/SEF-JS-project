let username = document.getElementById("username");
let password = document.getElementById("password");
let Signin = document.getElementById("Sign-In");

let getusername = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

Signin.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || Signin.value === "") {
    alert("Please fill Data");
  } else {
    if (
      getusername &&
      getusername.trim() === username.value &&
      getpassword &&
      getpassword.trim() === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else alert("username or password is wrong ");
  }
});

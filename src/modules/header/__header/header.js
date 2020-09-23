import "./_header.scss";
import "../__menu/menu.js";
import "../../cards/__login-form/login-form";
import "../../cards/__registration-form/registration-form";
var registerForm = document.querySelector(".wrap__register-form");
var loginForm = document.querySelector(".wrap__login-form");
document.querySelectorAll("[name='login-btn'],[name='register-btn']").forEach((btn) => {
  var overlay = document.querySelector(".js__overlay");
  btn.onclick = (event) => {
    var nameBtn = event.target.name;
    overlay.classList.add("overlay--show");
    switch (nameBtn) {
      case "register-btn":
        registerForm.classList.add("--show");
        break;
      case "login-btn":
        loginForm.classList.add("--show");
        break;
    }
  };
  overlay.onclick = (event) => {
    registerForm.classList.remove("--show");
    loginForm.classList.remove("--show");
    overlay.classList.remove("overlay--show");
  }
})
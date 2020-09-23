import "../../formelements/__text-field/_text-field.scss";
import "../../formelements/__radio-buttons/_radio-buttons.scss";
import "../../formelements/__masked-text-field/_masked-text-field.scss";
import "../../formelements/__toggle/_toggle.scss";
import "../../formelements/__buttons/_buttons.scss";
import "./registration-form.scss";
document.querySelector("[name='btn-input']").onclick = () => {
  var loginForm = document.querySelector(".wrap__login-form");
  loginForm.classList.add("--show");
  var registerForm = document.querySelector(".wrap__register-form");
  registerForm.classList.remove("--show");
}
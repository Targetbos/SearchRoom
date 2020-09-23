import "../../formelements/__text-field/_text-field.scss";
import "../../formelements/__buttons/_buttons.scss";
import "./_login-form.scss";
document.querySelector("[name='btn-registration']").onclick = () => {
  var registerForm = document.querySelector(".wrap__register-form");
  registerForm.classList.add("--show");
}
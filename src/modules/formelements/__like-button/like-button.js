import "./_like-button.scss";
class LikeBtn {
  constructor(btn) {
    this.likeBtn = btn;
    this.numLike = this.likeBtn.lastElementChild.lastElementChild;
    this.checkboxLike = this.likeBtn.firstElementChild;
  }
  init() {
    this.checkboxLike.onchange = () => {
      if (this.checkboxLike.checked) {
        this.increment(event);
      } else {
        this.decrement(event);
      }
    }
  }
  increment() {
    this.numLike.innerText++;
    this.checkboxLike.value++;
  }
  decrement() {
    this.numLike.innerText--;
    this.checkboxLike.value--;
  }
}
document.querySelectorAll(".js__like-button").forEach((btn) => {
  var likeBtn = new LikeBtn(btn);
  likeBtn.init();
})
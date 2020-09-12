(function () {
  class CheckboxList {
    constructor(box) {
      this.checkListBox = box;
      this.list = this.checkListBox.lastElementChild;
      this.overlay = this.list.previousElementSibling;
      this.icon = this.overlay.previousElementSibling;
    }
    init() {
      this.checkListBox.onclick = () => {
        console.log(this)
        this.showList();
      }
      this.overlay.onclick = () => {
        event.stopPropagation();
        this.hideList();
      }

    }
    showList() {
      this.icon.style.transform = "rotate(-225deg)";
      this.icon.style.top = "0.4rem";
      this.overlay.classList.add("checkbox-list__overlay--show");
      this.list.classList.add("checkbox-list__list--show");
    }
    hideList() {
      this.icon.style.transform = "";
      this.icon.style.top = "";
      this.overlay.classList.remove("checkbox-list__overlay--show");
      this.list.classList.remove("checkbox-list__list--show");
    }

  }
  document.querySelectorAll('.checkbox-list').forEach((list) => {
    let newList = new CheckboxList(list);
    newList.init();
  });

})();
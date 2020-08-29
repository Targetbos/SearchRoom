(function () {
  class CheckboxList {
    constructor(box) {
      this.checkListBox = box;
      this.list = this.checkListBox.lastElementChild;
      this.overlay = this.list.previousElementSibling;
      this.icon = this.overlay.previousElementSibling;
    }
    showList() {
      this.icon.classList.add("checkbox-list__icon--rotate");
      this.overlay.classList.add("checkbox-list__overlay--show");
      this.list.classList.add("checkbox-list__list--show");
    }
    hideList() {
      this.icon.classList.remove("checkbox-list__icon--rotate");
      this.overlay.classList.remove("checkbox-list__overlay--show");
      this.list.classList.remove("checkbox-list__list--show");
    }

  }
  document.querySelectorAll('.checkbox-list').forEach((list) => {
    checkboxListInit(list);
  });

  function checkboxListInit(box) {
    var list = new CheckboxList(box);
    list.checkListBox.onclick = () => list.showList();
    list.overlay.onclick = () => {
      event.stopPropagation();
      list.hideList();
    }
  }
})();
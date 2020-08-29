// 'use strict';
(function () {

  class Guests {
    constructor(inputGuests) {
      this.inputGuests = inputGuests;
      this.overlay = this.inputGuests.parentElement.nextElementSibling;
      this.expandForm = this.overlay.nextElementSibling;
      this.btnClear = this.expandForm.lastChild.firstChild;
      this.btnApply = this.expandForm.lastChild.lastChild;
      this.adults = 0;
      this.children = 0;
      this.babies = 0;
    }

    clearForm() {
      this.adults = 0;
      this.children = 0;
      this.babies = 0;
      this.expandForm.querySelectorAll(".js__numGuests, button[name='minus']").forEach(function (el) {
        if (el.name == 'minus') {
          deactivateBtn(el);
        } else {
          el.innerText = 0;
        }
      })
      this.hideBtnClear();
    }
    hideBtnClear() {
      this.btnClear.classList.add("dropdown-guest__btn-clear--hide");
    }
    showBtnClear() {
      this.btnClear.classList.remove("dropdown-guest__btn-clear--hide");
    }
    showBtnBlock() {
      this.expandForm.classList.remove("dropdown-guest__form-expanded--hide");
      this.overlay.classList.remove("dropdown-guest__overlay--hide");
      this.inputGuests.classList.add("dropdown-guest__form--border-bottom-90deg");
    }
    hideBtnBlock() {
      this.overlay.classList.add("dropdown-guest__overlay--hide");
      this.expandForm.classList.add("dropdown-guest__form-expanded--hide");
      this.inputGuests.classList.remove("dropdown-guest__form--border-bottom-90deg");
    }
    sumGuests() {
      return this.adults + this.children + this.babies;
    }
    apply() {
      this.inputGuests.dataset.adults = this.adults;
      this.inputGuests.dataset.children = this.children;
      this.inputGuests.dataset.babies = this.babies;
      this.hideBtnBlock();
    }
    showInInput() {
      let sum = this.sumGuests()
      ''
      if (sum == 0) {
        str = "Сколько гостей";
      } else {
        str = sum == 1 ? sum + " гость" : sum > 1 && sum < 5 ? sum + " гостя" : sum > 4 ? sum + " гостей" : "Сколько гостей?";
      }

      this.inputGuests.value = str;
    }

    get numberOfGuests() {
      return {
        adults: this.adults,
        children: this.children,
        babies: this.babies
      }
    }

    set numberOfGuests(guests) {
      this.adults = guests.adults;
      this.children = guests.children;
      this.babies = guests.babies;
    }

  }

  document.querySelectorAll('.dropdown-guest__form').forEach(function (el) {
    var inputGuest = el.firstChild;
    let form = new Guests(inputGuest);
    inputGuest.onclick = () => {
      initGuestForm(form);
    }
  });

  function initGuestForm(form) {
    form.showBtnBlock();

    form.overlay.onclick = () => {
      form.hideBtnBlock();
    }

    form.expandForm.querySelectorAll("button").forEach((btn) => {
      btn.onclick = (event) => {
        let btn = event.target;
        processingClick(btn, form);
      }
    })
  }

  function processingClick(btn, form) {
    let btnName = btn.name;
    let typeGuest = btn.dataset.guest;
    let guestsObj = {
      adults: form.adults,
      children: form.children,
      babies: form.babies
    }

    switch (btnName) {

      case "minus":
        if (guestsObj[typeGuest] == '0') {
          break;
        } else if (guestsObj[typeGuest] == '1') {
          guestsObj[typeGuest]--;
          form.numberOfGuests = guestsObj;
          btn.nextElementSibling.innerText = guestsObj[typeGuest];
          deactivateBtn(btn);
        } else {
          guestsObj[typeGuest]--;
          form.numberOfGuests = guestsObj;
          btn.nextElementSibling.innerText = guestsObj[typeGuest];
        }
        break;

      case "plus":
        if (guestsObj[typeGuest] == '0') {
          activateBtn(btn);
          guestsObj[typeGuest]++;
          form.numberOfGuests = guestsObj;
          btn.previousElementSibling.innerText = guestsObj[typeGuest];
        } else {
          activateBtn(btn);

          guestsObj[typeGuest]++;
          form.numberOfGuests = guestsObj;
          btn.previousElementSibling.innerText = guestsObj[typeGuest];
        }
        break;

      case "clear":
        form.clearForm();
        form.hideBtnClear();
        break;

      case "apply":
        form.apply();
        break;
    }

    form.showInInput();

    if (form.sumGuests() == '0') {
      form.hideBtnClear()
    } else {
      form.showBtnClear()
    }

  }

  function deactivateBtn(btn) {
    btn.classList.add("dropdown-guest__btn--deactivate");
  }

  function activateBtn(btn) {
    let btnMinus = btn.parentElement.firstChild;
    btnMinus.classList.remove("dropdown-guest__btn--deactivate");
  }
})();
  import "./_dropdown-guest.scss";
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
    init() {
      let _this = this;
      this.showBtnBlock();
      if (this.sumGuests() == 0) {
        this.hideBtnClear();
      }
      this.overlay.onclick = () => {
        this.hideBtnBlock();
      }
      this.expandForm.querySelectorAll("button").forEach((btn) => {
        btn.onclick = (event) => {
          let btn = event.target;
          _this.processingClick(btn);
        }
      })
    }

    processingClick(btn) {
      let btnName = btn.name;
      let typeGuest = btn.dataset.guest;
      let guestsObj = {
        adults: this.adults,
        children: this.children,
        babies: this.babies
      }

      switch (btnName) {

        case "minus":
          if (guestsObj[typeGuest] == '0') {
            break;
          } else if (guestsObj[typeGuest] == '1') {
            guestsObj[typeGuest]--;
            this.numberOfGuests = guestsObj;
            btn.nextElementSibling.innerText = guestsObj[typeGuest];
            this.deactivateBtn(btn);
          } else {
            guestsObj[typeGuest]--;
            this.numberOfGuests = guestsObj;
            btn.nextElementSibling.innerText = guestsObj[typeGuest];
          }
          break;

        case "plus":
          if (guestsObj[typeGuest] == '0') {
            this.activateBtn(btn);
            guestsObj[typeGuest]++;
            this.numberOfGuests = guestsObj;
            btn.previousElementSibling.innerText = guestsObj[typeGuest];

          } else {
            this.activateBtn(btn);
            guestsObj[typeGuest]++;
            this.numberOfGuests = guestsObj;
            btn.previousElementSibling.innerText = guestsObj[typeGuest];
          }
          break;

        case "clear":
          this.clearForm();
          this.hideBtnClear();
          break;

        case "apply":
          this.apply();
          break;
      }

      this.showInFieldInput();

      if (this.sumGuests() == '0') {
        this.hideBtnClear()
      } else {
        this.showBtnClear()
      }

    }

    clearForm() {
      let _this = this;
      this.adults = 0;
      this.children = 0;
      this.babies = 0;
      this.expandForm.querySelectorAll(".js__numGuests, button[name='minus']").forEach(function (el) {
        if (el.name == 'minus') {
          _this.deactivateBtn(el);
        } else {
          el.innerText = 0;
        }
      })
      this.hideBtnClear();
    }
    hideBtnClear() {
      this.btnClear.classList.add("--hide");
    }
    showBtnClear() {
      this.btnClear.classList.remove("--hide");
    }
    hideBtnBlock() {
      this.overlay.classList.add("dropdown-guest__overlay--hide");
      this.expandForm.classList.add("dropdown-guest__form-expanded--hide");
      this.inputGuests.classList.remove("dropdown-guest__form--border-bottom-90deg");
    }
    showBtnBlock() {
      this.expandForm.classList.remove("dropdown-guest__form-expanded--hide");
      this.overlay.classList.remove("dropdown-guest__overlay--hide");
      this.inputGuests.classList.add("dropdown-guest__form--border-bottom-90deg");
    }

    sumGuests() {
      return this.adults + this.children;
    }
    apply() {
      this.inputGuests.dataset.adults = this.adults;
      this.inputGuests.dataset.children = this.children;
      this.inputGuests.dataset.babies = this.babies;
      this.hideBtnBlock();
    }
    showInFieldInput() {
      let sum = this.sumGuests();
      let str = "";
      if (sum == 0) {
        str = "Сколько гостей";
      } else {
        let guests = sum == 1 ? sum + " гость" : sum > 1 && sum < 5 ? sum + " гостя" : sum > 4 ? sum + " гостей" : "Сколько гостей?";
        let babies = this.babies;
        let babiesStr = this.babies == 1 ? ", " + babies + " младенец" : babies > 1 && babies < 5 ? ", " + babies + " младенца" : babies > 4 ? ", " + babies + " младенецев" : "";
        str = guests + babiesStr;
      }

      this.inputGuests.value = str;
    }

    deactivateBtn(btn) {
      btn.classList.add("dropdown-guest__btn--deactivate");
    }

    activateBtn(btn) {
      let btnMinus = btn.parentElement.firstChild;
      btnMinus.classList.remove("dropdown-guest__btn--deactivate");
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
    let guestForm = new Guests(inputGuest);
    inputGuest.onclick = () => {
      guestForm.init(inputGuest);
    }
  });
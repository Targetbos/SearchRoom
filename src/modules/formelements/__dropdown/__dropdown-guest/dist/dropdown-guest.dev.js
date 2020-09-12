"use strict";

require("./_dropdown-guest.scss");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Guests =
/*#__PURE__*/
function () {
  function Guests(inputGuests) {
    _classCallCheck(this, Guests);

    this.inputGuests = inputGuests;
    this.overlay = this.inputGuests.parentElement.nextElementSibling;
    this.expandForm = this.overlay.nextElementSibling;
    this.btnClear = this.expandForm.lastChild.firstChild;
    this.btnApply = this.expandForm.lastChild.lastChild;
    this.adults = 0;
    this.children = 0;
    this.babies = 0;
  }

  _createClass(Guests, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var _this = this;

      this.showBtnBlock();
      this.hideBtnClear();

      this.overlay.onclick = function () {
        _this2.hideBtnBlock();
      };

      this.expandForm.querySelectorAll("button").forEach(function (btn) {
        btn.onclick = function (event) {
          var btn = event.target;

          _this.processingClick(btn);
        };
      });
    }
  }, {
    key: "processingClick",
    value: function processingClick(btn) {
      var btnName = btn.name;
      var typeGuest = btn.dataset.guest;
      var guestsObj = {
        adults: this.adults,
        children: this.children,
        babies: this.babies
      };

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
        this.hideBtnClear();
      } else {
        this.showBtnClear();
      }
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this = this;

      this.adults = 0;
      this.children = 0;
      this.babies = 0;
      this.expandForm.querySelectorAll(".js__numGuests, button[name='minus']").forEach(function (el) {
        if (el.name == 'minus') {
          _this.deactivateBtn(el);
        } else {
          el.innerText = 0;
        }
      });
      this.hideBtnClear();
    }
  }, {
    key: "hideBtnClear",
    value: function hideBtnClear() {
      this.btnClear.classList.add("--hide");
    }
  }, {
    key: "showBtnClear",
    value: function showBtnClear() {
      this.btnClear.classList.remove("--hide");
    }
  }, {
    key: "hideBtnBlock",
    value: function hideBtnBlock() {
      this.overlay.classList.add("dropdown-guest__overlay--hide");
      this.expandForm.classList.add("dropdown-guest__form-expanded--hide");
      this.inputGuests.classList.remove("dropdown-guest__form--border-bottom-90deg");
    }
  }, {
    key: "showBtnBlock",
    value: function showBtnBlock() {
      this.expandForm.classList.remove("dropdown-guest__form-expanded--hide");
      this.overlay.classList.remove("dropdown-guest__overlay--hide");
      this.inputGuests.classList.add("dropdown-guest__form--border-bottom-90deg");
    }
  }, {
    key: "sumGuests",
    value: function sumGuests() {
      return this.adults + this.children + this.babies;
    }
  }, {
    key: "apply",
    value: function apply() {
      this.inputGuests.dataset.adults = this.adults;
      this.inputGuests.dataset.children = this.children;
      this.inputGuests.dataset.babies = this.babies;
      this.hideBtnBlock();
    }
  }, {
    key: "showInFieldInput",
    value: function showInFieldInput() {
      var sum = this.sumGuests();
      var str = "";

      if (sum == 0) {
        str = "Сколько гостей";
      } else {
        str = sum == 1 ? sum + " гость" : sum > 1 && sum < 5 ? sum + " гостя" : sum > 4 ? sum + " гостей" : "Сколько гостей?";
      }

      this.inputGuests.value = str;
    }
  }, {
    key: "deactivateBtn",
    value: function deactivateBtn(btn) {
      btn.classList.add("dropdown-guest__btn--deactivate");
    }
  }, {
    key: "activateBtn",
    value: function activateBtn(btn) {
      var btnMinus = btn.parentElement.firstChild;
      btnMinus.classList.remove("dropdown-guest__btn--deactivate");
    }
  }, {
    key: "numberOfGuests",
    get: function get() {
      return {
        adults: this.adults,
        children: this.children,
        babies: this.babies
      };
    },
    set: function set(guests) {
      this.adults = guests.adults;
      this.children = guests.children;
      this.babies = guests.babies;
    }
  }]);

  return Guests;
}();

document.querySelectorAll('.dropdown-guest__form').forEach(function (el) {
  var inputGuest = el.firstChild;
  var guestForm = new Guests(inputGuest);

  inputGuest.onclick = function () {
    guestForm.init(inputGuest);
  };
});
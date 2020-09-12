"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu =
/*#__PURE__*/
function () {
  function Menu(menu) {
    _classCallCheck(this, Menu);

    this.menu = menu;
    this.linkArr = this.menu.querySelectorAll("a");
    this.overlay = document.querySelector('.js__overlay');
    this.iconMobileMenu = this.menu.lastElementChild;
    this.menuList = this.menu.firstElementChild;
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      this.activeLink();
      this.showMenu();
      this.hideMenu();
    }
  }, {
    key: "activeLink",
    value: function activeLink() {
      this.linkArr.forEach(function (link) {
        link.onclick = function () {
          for (var i = 0; i < link.length; i++) {
            link[i].classList.remove("menu__link--active");
          }

          link.classList.add("menu__link--active");
        };
      });
    }
  }, {
    key: "showMenu",
    value: function showMenu() {
      var _this = this;

      this.iconMobileMenu.onclick = function () {
        _this.overlay.classList.add("overlay--show");

        _this.menuList.style.top = "0rem";
      };
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      var _this2 = this;

      this.overlay.onclick = function () {
        _this2.overlay.classList.remove("overlay--show");

        _this2.menuList.style.top = "-30rem";
      };
    }
  }]);

  return Menu;
}();

document.querySelectorAll(".menu").forEach(function (el) {
  var menu = new Menu(el);
  menu.init();
});
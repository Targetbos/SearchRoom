class Menu {
    constructor(menu) {
        this.menu = menu;
        this.linkArr = this.menu.querySelectorAll("a");
        this.overlay = document.querySelector('.js__overlay');
        this.iconMobileMenu = this.menu.lastElementChild;
        this.menuWrap = this.menu.firstElementChild;
    }
    init() {
        this.activeLink();
        this.showMenu();
        this.hideMenu();
    }
    activeLink() {
        var _this = this;
        this.linkArr.forEach((link) => {
            link.onclick = () => {
                for (let i = 0; i < link.length; i++) {
                    link[i].classList.remove("menu__link--active");
                }
                link.classList.add("menu__link--active");
            }
        })
    }
    showMenu() {
        this.iconMobileMenu.onclick = () => {
            this.overlay.classList.add("overlay--show");
            this.menuWrap.style.top = "0rem";
        }
    }

    hideMenu() {
        this.overlay.onclick = () => {
            this.overlay.classList.remove("overlay--show");
            this.menuWrap.style.top = "-30rem";
        }
    }
}
document.querySelectorAll(".menu").forEach((el) => {
    var menu = new Menu(el);
    menu.init();
})
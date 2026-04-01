class MobileNavbar{
    constructor(menuSelector, linksSelector) {
        this.mobileMenu = document.querySelector(menuSelector);
        this.navLinks = document.querySelector(linksSelector);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

    handleClick() {
        this.navLinks.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this
    }
}

const MobileNavbarInstance = new MobileNavbar(
    ".mobile-menu",
    ".nav-links",
);
MobileNavbarInstance.init();
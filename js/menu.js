(() => {
    const refs = {
      openMenuBtn: document.querySelector(".header__btn__open"),
      closeMenuBtn: document.querySelector(".header__btn__close"),
      menu: document.querySelector(".header__mob__menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();
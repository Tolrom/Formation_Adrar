const body = document.querySelector('body'),
    burger = document.querySelector('#burgerBox'),
    nav = document.querySelector('nav'),
    shop = document.querySelector('#shop'),
    shopBouton = document.querySelector('#shopLogo'),
    croixNav = document.querySelector('#croixNav'),
    croixShop = document.querySelector('#croixShop');

let compteNav = false,
    compteShop = false;

burger.addEventListener('click', () => {
    if (compteShop == false) {
        nav.style.transform = 'translateX(0)';
        body.style.overflow = 'hidden';
        compteNav = !compteNav;
    }
});

croixNav.addEventListener('click', () => {
    nav.style.transform = 'translateX(-60vw)';
    body.style.overflow = 'scroll';
    compteNav = !compteNav;
});

croixShop.addEventListener('click', () => {
        shop.style.transform = 'translateX(60vw)';
        body.style.overflow = 'scroll';
        compteShop = !compteShop;
});

shopBouton.addEventListener('click', () => {
    if (compteNav == false) {
        shop.style.transform = 'translateX(0)';
        body.style.overflow = 'hidden';
        compteShop = !compteShop;
    }
});
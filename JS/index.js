const burger = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

function burgerHandler(e) {

   menu.classList.toggle('menu__active')
   console.log(burger, menu);
}

burger.addEventListener('click', burgerHandler)
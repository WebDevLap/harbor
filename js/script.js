


const menu = document.querySelector(".header__menu")
const burger = document.querySelector('.menu__burger')
const body = document.body


document.addEventListener('click', function(event){
    const targetBurger = event.target.closest('.menu__burger')
    const headerMenuWrapper = event.target.closest('.header__menu-wrapper')

    if(!headerMenuWrapper){
        menu.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
        return
    }
    if(!targetBurger) return;
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    body.classList.toggle('lock')
})
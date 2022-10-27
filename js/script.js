


const menu = document.querySelector(".header__menu")
const burger = document.querySelector('.menu__burger')
const body = document.body


document.addEventListener('click', function(event){
    const targetBurger = event.target.closest('.menu__burger')

    if(!targetBurger) return;

    menu.classList.toggle('active')
    burger.classList.toggle('active')
    body.classList.toggle('lock')
    
})
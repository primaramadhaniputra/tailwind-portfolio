const hamburgerBtn = document.querySelector(".hamburger")
const dropDownMenu = document.querySelector('ul')


hamburgerBtn.addEventListener('click', function () {
   this.classList.toggle('hamburger-active')
   dropDownMenu.classList.toggle('menu-active')
})
const $btnToggle = document.getElementsByClassName('navbar-toggler')
const $navBar = document.getElementById("navbarNav")

$btnToggle[0].addEventListener('click', () => {
    $navBar.style.display === 'block'
        ? $navBar.style.display = 'none' 
        : $navBar.style.display = 'block' 
})
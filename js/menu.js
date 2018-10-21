var btnMenu = document.getElementById('btn-menu');
var menuNav = document.getElementById('menu-nav');

btnMenu.addEventListener('click', function(){
    menuNav.classList.toggle('mostrar');
})
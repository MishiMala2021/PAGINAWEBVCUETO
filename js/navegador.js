const lista = document.querySelector('.menu_links'); 
const iconomenu = document.querySelector('.menu_icon'); 

iconomenu.addEventListener('click', function() {
    lista.classList.toggle('menu_links--show');
});
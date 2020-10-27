/* Fazendo o menu lateral se esconder */
var checkbox = document.querySelector('#esconder');

/* Escondendo o menu lateral maior e aparecendo o menor */
checkbox.addEventListener('click', function () {

    var menu = document.querySelector('#lateral');
    var menu_menor = document.querySelector('#lateral_menor');
    
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu_menor.style.display = 'none';
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex'
    }
})

/* Escondendo o menu lateral menor e aparecendo o maior */

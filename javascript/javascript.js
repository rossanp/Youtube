/* Fazendo o menu lateral se esconder */
var checkbox = document.querySelector('#esconder');

/* Escondendo o menu lateral maior e aparecendo o menor */
checkbox.addEventListener('click', function () {

    var menu = document.querySelector('#lateral');

    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})

/* Escondendo o menu lateral menor e aparecendo o maior */

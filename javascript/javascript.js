/* Fazendo o menu lateral se esconder */
var checkbox = document.querySelector('#esconder');

checkbox.addEventListener('click', function () {

    var menu = document.querySelector('#lateral');

    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
})

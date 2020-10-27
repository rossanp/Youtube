/* Fazendo o menu lateral se esconder */
var checkbox = document.getElementById('esconder')
var menu = document.getElementById('lateral')

checkbox.addEventListener('click', function() {
    if (checkbox.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
})

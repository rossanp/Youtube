var checkbox = document.querySelector('#esconder');

checkbox.addEventListener('click', function () {

    var menu = document.getElementById("lateral");
    var menu_menor = document.getElementById("lateral_menor");
    var conteudo = document.getElementById("conteudoVideo");
    var video = document.getElementsByClassName("video");
    // pode usar a função 'querySelector' também, aí quando for classe é só colocar '.' e id '#' 
    //let video = document.querySelector(".video")

    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu_menor.style.display = 'none';
        conteudo.className = 'conteudo-video';
        video.className = 'video';
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex';
        conteudo.className = 'conteudo-video-max';
        video.className = 'video-max';
    }
})
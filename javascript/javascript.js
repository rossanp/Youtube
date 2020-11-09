var checkbox = document.querySelector('#esconder');

checkbox.addEventListener('click', function () {

    let menu = document.getElementById("lateral");
    let menu_menor = document.getElementById("lateral_menor");
    let conteudo = document.getElementById("conteudoVideo");
    let video = document.getElementById("video");

    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu_menor.style.display = 'none';
        conteudo.className = 'conteudo-video';
        /* video.className = 'video'; */
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex';
        conteudo.className = 'conteudo-video-max';
        /* video.className = 'video-max'; */
    }

/*     if (video.className === 'video') {
        for (let i = 0; i < video.className.length; i++) {
            video.className = 'video-max';
        }
    } */
})
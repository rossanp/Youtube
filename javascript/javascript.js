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
        while (video.className.length = 'video-max') {
            video.className = 'video';
          }
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex';
        conteudo.className = 'conteudo-video-max';
        while (video.className.length = 'video') {
            video.className = 'video-max';
          }
    }
})
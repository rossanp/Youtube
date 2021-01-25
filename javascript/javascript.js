/* Buscando o estado do checkbox */
var checkbox = document.querySelector('#esconder');

/* Criando a função ao ouvir o checkbox */
checkbox.addEventListener('click', function () {

    let menu = document.getElementById("lateral");
    let menu_menor = document.getElementById("lateral_menor");
    let conteudo = document.getElementById("conteudoVideo");
    let video = document.getElementById("video");
    let imgVideo = document.querySelectorAll(".img-video");
    let imgVideo1 = document.querySelectorAll(".img-video1");

    /* Modificando o CSS */
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu_menor.style.display = 'none';
        conteudo.className = 'conteudo-video';
        video.style.marginRight = '15px';
        video.style.marginBottom = '50px';
        for(x = 0; x < imgVideo1.length; x++){
            imgVideo1[x].className = 'img-video';
        }
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex';
        conteudo.className = 'conteudo-video-max';
        video.style.marginRight = '10px';
        video.style.marginBottom = '66px';
        for(x = 0; x < imgVideo.length; x++){
            imgVideo[x].className = 'img-video1';
        }
    }
    //console.log(checkbox);
    
})

/*

*/
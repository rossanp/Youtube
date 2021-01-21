/* Buscando o estado do checkbox */
var checkbox = document.querySelector('#esconder');

/* Criando a função ao ouvir o checkbox */
checkbox.addEventListener('click', function () {

    let menu = document.getElementById("lateral");
    let menu_menor = document.getElementById("lateral_menor");
    let conteudo = document.getElementById("conteudoVideo");
    let video = document.getElementById("video");
    let iframe = document.getElementById("iframe");

    /* Modificando o CSS */
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu_menor.style.display = 'none';
        conteudo.className = 'conteudo-video';
        video.style.marginRight = '15px';
        /* video.remove.style.width = "min-content"; */
        iframe.style.width= '345px';
        /* for(x = 0; x < iframe.length; x++){
            iframe[x].style.height= '190px';
            iframe[x].style.width= '360px';
        } */
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex';
        conteudo.className = 'conteudo-video-max';
        video.style.marginRight = '10px';
        video.add.style.width = "min-content";
        iframe.style.width= '345px';
        /* for(x = 0; x < iframe.length; x++){
            iframe[x].style.height= '190px';
            iframe[x].style.width= '345px';
        } */
    }
})

/*

*/
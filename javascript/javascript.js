var checkbox = document.querySelector('#esconder');

checkbox.addEventListener('click', function () {

    let menu = document.getElementById("lateral");
    let menu_menor = document.getElementById("lateral_menor");
    let conteudo = document.getElementById("conteudoVideo");
    let video = document.getElementById("video");
    var iframe = document.querySelectorAll("iframe");

    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu_menor.style.display = 'none';
        conteudo.className = 'conteudo-video';
        video.style.marginRight = '15px';
        for(x = 0; x < iframe.length; x++){
            iframe[x].style.height= '200px';
            iframe[x].style.width= '360px';
        }
    } else {
        menu.style.display = 'none';
        menu_menor.style.display = 'flex';
        conteudo.className = 'conteudo-video-max';
        video.style.marginRight = '0px';
        for(x = 0; x < iframe.length; x++){
        iframe[x].style.height= '190px';
        iframe[x].style.width= '345px';
        }
    }
})

/* .video {
    margin-bottom: 75px;
    margin-right: 15px;
}

.video-max {
    margin-bottom: 75px;
    margin-right: 0px;
} 

#iframe {
    height: 200px;
    width: 360px;
}

#video-max iframe {
    height: 190px;
    width: 345px;
}*/
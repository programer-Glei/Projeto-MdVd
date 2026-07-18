let nexDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemDom[0]);

nexDom.onclick = function(){
    showSlider('next');
    console.log("gdgsdgsçgljgçlfgj");
}

let timeRunning = 2000;
let runTimeout;

function showSlider(type){
    let SliderItemDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemDom = document.querySelectorAll('.carousel .thumbnail .item');

    if(type == 'next'){
        SliderDom.appendChild(SliderItemDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemDom[SliderItemDom - 1]);
        thumbnailBorderDom.prepend(thumbnailItemDom.length - 1);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

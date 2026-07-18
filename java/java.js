let nexDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

nexDom.onclick = function(){
    showSlider('next');
    console.log("gdgsdgsçgljgçlfgj");
}

function showSlider(type){
    let SliderItemDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemDom = document.querySelectorAll('.carousel .thumbnail .item');

    if(type == 'next'){
        SliderDom.appendChild(SliderItemDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemDom[0]);
        carouselDom.classList.add('next');
    }
}

let nexDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');

nexDom.onclick = function(){
    showSlider('next');
}

function showSlider(type){
    let SliderItemDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemDom = document.querySelectorAll('.carousel .thumbnail .item');
}

window.addEventListener('load', function(){
    new Glider(document.querySelector('.permission-list'), {

        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        disableArrows: false,
        dots: 'carousel-indicators',
        arrows: {
            next: '.carousel-next',
            prev: '.carousel-prev'
            
        }
        

    });
})
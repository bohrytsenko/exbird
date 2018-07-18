$( document ).ready(function() {

    // Mobile nav

    $(".nav_mobile__icon").click(function(){
        $(this).toggleClass('active');
        $('.nav_mobile ul').toggleClass('show');
        $('body').toggleClass('overflow');
    });

    // Slider

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Slider blog

    var swiper = new Swiper('.swiper-blog', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});

// Preloader

(function() {

    'use strict';

    var overlay = document.querySelector('.overlay'),
        loader = document.querySelector('.overlay-loader'),
        overlayTL = new TimelineMax(),
        loaderTL = new TimelineMax();

    var animateOut_2 = function() {
        overlayTL.to( overlay, .6, { top: '100%', ease: Power4.easeInOut, delay: .25 } );
        loaderTL.to( loader, .5, { y: '40', opacity: 0 } );
    };

    var animateIn = function() {
        overlayTL.fromTo( overlay, .6, { top: '100%', bottom: 0 }, { top: 0, ease: Power4.easeInOut } );
        loaderTL.fromTo( loader, .5, { y: '40', opacity: 0, delay: .30 }, { y: 0, opacity: 1, delay: .6, ease: Power2.easeOut } );
    };

    animateOut_2();
})();








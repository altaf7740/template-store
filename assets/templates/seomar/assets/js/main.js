(function ($) {
    "use strict";
   
    
new WOW().init();  
    
/*--
    Menu Sticky
-----------------------------------*/
var windows = $(window);
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});

/*--
    Mobile Menu
------------------------*/
var menuNav = $('nav.main-navigation');
menuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});
    
/*--
    Service Slider
--------------------------------------------*/
var serviceSlider = $('.service-slider-active');
serviceSlider.slick({
    accessibility: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:true,
    nextArrow: true,
    prevArrow: '<button type="button" class="slick-prev"> <i class="icofont-thin-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"> <i class="icofont-thin-right"></i> </button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
    
/*--
    Testimonial Slider
--------------------------------------------*/
var testimonial = $('.testimonial-active');
testimonial.slick({
    accessibility: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:true,
    nextArrow: true,
    prevArrow: '<span class="slick-prev"> <apan class="bi bi-arrow-left-square"></span></span>',
    nextArrow: '<span class="slick-next"> <i class="bi bi-arrow-right-square"></i> </span>',
});
/*--
    Latest Blog Slider
--------------------------------------------*/
var latestBlog = $('.latest-blog-active');
latestBlog.slick({
    accessibility: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:true,
    nextArrow: true,
    prevArrow: '<span class="slick-prev"> <apan class="bi bi-arrow-left-square"></span></span>',
    nextArrow: '<span class="slick-next"> <i class="bi bi-arrow-right-square"></i> </span>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


    
/*--
    Magnific Popup
------------------------*/
$('.img-popup').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});
// Magnific Popup Video
$('.popup-youtube').magnificPopup({
    type: 'iframe',
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
    
/* --
    counterUp 
-----------------------------*/
$('.counter-active').counterUp({
    delay: 10,
    time: 1000
});

/*--
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<img src="assets/images/icon/up.png" alt="caret" />',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});   
    
})(jQuery);	

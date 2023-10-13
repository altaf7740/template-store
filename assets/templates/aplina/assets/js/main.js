/*-----------------------------------------------------------------------------------

    Template Name: Aplina - App Landing Bootstrap 4 Template
    Template URI: http://devitems.com/preview/aplina
    Description: Aplina - App Landing page
    Author: devitems
    Author URI: http://devitems.com/
    Version: 1.0

-----------------------------------------------------------------------------------*/
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
        onePage:true
    });
    
    /*-- 
        Hero slider Active Slider 
    ------------------------------------*/
    var HeroSliderActive = $('.hero-slider-active');
    HeroSliderActive.slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"> <i class="ion-arrow-left-c"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ion-arrow-right-c"></i></button>',
    });
    
    /*-- 
        Hero Mobile Active Slider 
    ------------------------------------*/
    var HeroSliderMobileActive = $('.hero-slider-mobile');
    HeroSliderMobileActive.slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 900,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        prevArrow:false,
        nextArrow: false,
    });
    
    /*-- 
        Testimonial Active Slider 
    ------------------------------------*/
    var testimonialActive = $('.testimonial-active');
    testimonialActive.slick({
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        prevArrow:false,
        nextArrow: false,
    });
    
    /*-- 
        Screenshot Active Slider 
    ------------------------------------*/
    var screenshotActiveTwo = $('.screenshot-tow-active');
    screenshotActiveTwo.slick({
        arrows: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 800,
        infinite: true,
        slidesToShow: 4,
        slidesToScoll: 1,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
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
        Screenshot Center Active Slider 
    ------------------------------------*/
    var screenshotCenterActive = $('.screenshot-center-active');
    screenshotCenterActive.slick({
        arrows: false,
        autoplay: false,
        dots: true,
        autoplaySpeed: 800,
        infinite: true,
        centerMode: true,
        centerPadding: '240px',
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
              }
            }
        ]
    });
    
    /*--
        onePageNav JS
    ---------------------------*/
    $('.main-navigation ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
         offsetHeight: 80,
    });
    
    // Magnific Popup Video
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
    /*--
        Magnific Popup Image
    ------------------------*/
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    // CounterUp Active 
	$('.counter-active').counterUp({
		delay: 10,
		time: 1000
	});

    /*--
       You tube video active
    -------------------------*/
    $(".youtube-bg").YTPlayer({
        videoURL:"https://www.youtube.com/watch?v=1U3dbM4leKI&index=78&list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E",
        containment:'.youtube-bg',
        mute:true,
        loop:true,
        showControls: false
        
    });
    
    /*--
        ScrollUp Active
    -----------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });   
    
    
    })(jQuery);	
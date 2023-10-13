(function ($) {
    "use strict";
    
$.fn.elExists = function() {
    return this.length > 0;
};
    

/*--
Menu Sticky
-----------------------------------*/
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');

windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    } else {
        sticky.addClass('is-sticky');
    }
});
   
/*--- 
    Clickable menu active 
-------------------------------*/
const slinky = $('#menu').slinky()

/*--
    sidebarCart 
------------------------------*/
function sidebarMainmenu() {
    var menuTrigger = $('.clickable-mainmenu-active a'),
        endTrigger = $('button.clickable-mainmenu-close'),
        container = $('.clickable-mainmenu');
    menuTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('inside');
    });
    endTrigger.on('click', function() {
        container.removeClass('inside');
    });
};
sidebarMainmenu();
    
/*-- 
    One PageNav Scrolling
-------------------------------------*/
  function onePageScrolling(){
	$('.sectionNav').onePageNav();
	var scrollOffset = 0;
	$(".btn-link").on('click', function(evn){
		evn.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash, {
			gap: { nav: -scrollOffset-0 },
			animation:{
				duration: 1000,
				easing: "easeInOutExpo",
                
			}
		});
		return false;	
	});
}
onePageScrolling();
    
/*--
    Slider Height
--------------------------------*/

var $headerMedia = $('header');

function heroSliderMargin() {
    var headerHeight = ( $headerMedia.elExists() ) ? $headerMedia[0].getBoundingClientRect().height : 0;
    if ($('.header-transparant').length) {
        $('.hero-slide-item').css({
            'height': '100vh'
        });
    } else {

        $('.hero-slide-item').css({
            'height': 'calc(100vh - ' + headerHeight + 'px)'
        });
    }
}
$(window).on('load', function(){
    heroSliderMargin();
});

$(window).on('resize', function(){
    heroSliderMargin();
});
    
/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false
});

/*--
    Our Works Active Carousel 
-----------------------------------*/
$('.our-works-active').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    arrows: true,
    prevArrow: '<button class="arrow-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="arrow-next"><i class="fa fa-angle-right"></i></button>',
    centerPadding: '0',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
    

/*-- 
    Post Carousel
----------------------------*/

$('.post-carousel-active-5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    arrows: true,
    prevArrow: '<button class="post-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="post-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        },

        {
            breakpoint: 770,
            settings: {
                slidesToShow: 3
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});
    
    
$('.testimonial-slide-active').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'ease-in-out',
    dots: false,
    arrows: true,
    prevArrow: '<button class="testimonial-arrow-prev"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button class="testimonial-arrow-next"><i class="fa fa-arrow-right"></i></button>',
});
    

/*------ 
    Team
-----------------------------*/

var teamPlus = $('.plus_click');
teamPlus.on('click', function (e) {
    e.preventDefault();
    $(this).parent('.team-click-action').toggleClass('visible');

    $(this).toggleClass('team-minus');
});
 
/*--
	Video Popup
-----------------------------------*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
    
/*--
	Image Popup
-----------------------------------*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
});
    
/*--
	Counter UP
-----------------------------------*/
var counter = $('.count');
counter.counterUp({
    delay: 20,
    time: 2000
});

/*--
    Scroll Up
-----------------------------------*/
$.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="fa fa-angle-double-up"></i>',
});
    
    
})(jQuery);	

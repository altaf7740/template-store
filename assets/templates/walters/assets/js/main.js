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
/* Comtom Carousel 8*/

var screenshotCenterActive = $('.software-activation');
screenshotCenterActive.slick({
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 800,
    infinite: true,
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 769,
            settings: {
                centerPadding: '100px',
            }
        },

        {
            breakpoint: 577,
            settings: {
                centerPadding: '50px',
            }
        },
        {
            breakpoint: 321,
            settings: {
                centerPadding: '30px',
                slidesToShow: 1
            }
        }
    ]
});
    
    
$('.testimonal-nav5').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.testimonial-for5',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0',
		arrows: false,

		responsive: [{
				breakpoint: 769,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

	$('.testimonial-for5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.testimonal-nav5'
	});
    
/*-- brand -- */
$('.agency-brand-active').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    centerPadding: '0',
    responsive: [{
            breakpoint: 577,
            settings: {
                slidesToShow: 4
            }
        },

        {
            breakpoint: 481,
            settings: {
                slidesToShow: 3
            }
        },

        {
            breakpoint: 381,
            settings: {
                slidesToShow: 2
            }
        },
    ]
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
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}
    

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

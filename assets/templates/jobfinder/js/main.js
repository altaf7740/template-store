(function ($) {
"use strict";
/*--
	Mobile Menu
------------------------*/
$('.main-menu nav').meanmenu({
	meanScreenWidth: '991',
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="zmdi zmdi-close"></i>',
	meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
	meanRevealPosition: 'right',
	meanMenuCloseSize: '30px',
});
/*--
	Hero Slider
-----------------------------------*/
$('#hero-slider').nivoSlider({
    prevText: 'prev',
    nextText: 'next',
    controlNav: false,
    pauseTime: 5000,
});
/*--
	Counter UP
-----------------------------------*/
$('.counter').counterUp({
    delay: 20,
    time: 3000
});
/*--
	Fearue Job Slider
-----------------------------------*/
$('.feature-slider').slick({
    infinite: true,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
    slidesToShow: 1,
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
        }
    ]
});
/*--
	Testimonial Slider
-----------------------------------*/
$('.testimonial-slider').slick({
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
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
        }
    ]
});
/*--
	Team Slider
-----------------------------------*/
$('.team-slider').slick({
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 5,
    responsive: [
        {
        breakpoint: 1170,
            settings: {
                slidesToShow: 4,
            }
        },
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
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});
/*--
	Wow js
-----------------------------------*/
new WOW().init();
/*--
	Youtube Background Video
-----------------------------------*/
$(".hero-video-bg").YTPlayer();
/*--
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}
 

})(jQuery);	
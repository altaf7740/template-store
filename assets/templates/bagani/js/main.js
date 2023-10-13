/*-----------------------------------------------------------------------------------

  Template Name: Bagani - Gardening and Landscaping Bootstrap4 Template.
  Template URI: #
  Description: Bagani is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  
-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Sticky Header
  04. ScrollUp
  05. CounterUp
  06. Testimonial Slick Carousel
  07. Slider Activation
  08. ScrollReveal Js Init  

/*--------------------------------
[ End table content ]
-----------------------------------*/


(function($) {
    'use strict';


/*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */
    
$('.mobile-menu nav').meanmenu({
    meanMenuContainer: '.mobile-menu-area',
    meanScreenWidth: "991",
    meanRevealPosition: "right",
});

/*-------------------------------------------
  02. wow js active
--------------------------------------------- */
    new WOW().init();


/*-------------------------------------------
  03. Sticky Header
--------------------------------------------- */ 
  $(window).on('scroll',function() {    
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
      $("#sticky-header-with-topbar").removeClass("scroll-header");
     }else{
      $("#sticky-header-with-topbar").addClass("scroll-header");
     }
    });

/*--------------------------
  04. ScrollUp
---------------------------- */
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});

/*-----------------------------
  05. CounterUp
-----------------------------*/
  $('.count').counterUp({
    delay: 60,
    time: 3000
  });


/*---------------------------------------------
  06. Testimonial Slick Carousel
------------------------------------------------*/

$('.testimonial-style-3.testimonial-slider-active').slick({
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	centerPadding: '100px',
	arrows: false,
	autoplay: true,
	focusOnSelect: true,
	responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
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


/*---------------------------------------------
  07. Slider Activation
------------------------------------------------*/


$('.slider__activation__wrap').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  autoplay: false,
  autoplayTimeout: 10000,
  items:1,
  dots: false,
  lazyLoad: true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    }  
  }
});


/*-----------------------------------
  08. ScrollReveal Js Init
-------------------------------------- */

  window.sr = ScrollReveal({ duration: 800 , reset: false });
    sr.reveal('.foo');
    sr.reveal('.bar');

/*------ 05. Venobox ------*/
	$('.venobox').magnificPopup({
	  type: 'image',
	  gallery: {
			  enabled: true, // set to true to enable gallery
			}
	});


})(jQuery);





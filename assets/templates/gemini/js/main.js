/*

	Template Name: Gemini
    Template URI: https://devitems.com/html/lira-preview/
    Description: This is html5 template
    Author: BootExperts
    Author URI: https://devitems.com/
    Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================

	01. Nivo Slider Active
	02. Mailchimp Active
	03. Footer Instgram Gallery Owl Active
	04. Magnific Popup For Image
	05. TOP Menu Stick
	06. jQuery MeanMenu
	07. Masonary Section Active
	08. Home Two Slide Active
	09. Home Three Slide Active
	10. More Post Slide Active
	11. Slide Post Active
	12. scrollUp
	
================================================*/

(function ($) {
 "use strict";
 
	/*------ 01. Nivo Slider Active ------*/
	$('#ensign-nivoslider-3').nivoSlider({
		effect: 'fade',
		slices: 15,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: false,
		controlNavThumbs: false,
		pauseOnHover: true,
		manualAdvance: true,
	}); 
	
	/*------ 02. Mailchimp Active ------*/
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
		
	/*------ 03. Footer Instgram Gallery Owl Active ------*/
	$('.instgram-gallery').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: false,
	  dots:false,
	  responsive: {
		0: {
		  items: 2
		},
		600: {
		  items: 4
		},
		1000: {
		  items: 6
		}
	  }
	}) 
	
	/*------ 04. Magnific Popup For Image ------*/
	$('.instgram-pop').magnificPopup({
	  type: 'image',
	  gallery: {
			  enabled: true, // set to true to enable gallery
			}
	});
	
	/*------ 05. TOP Menu Stick ------*/
	$(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 245) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	});
	
	/*------- 06. jQuery MeanMenu ------------- */
    jQuery('#mobile-nav').meanmenu();
	
	/*------ 07. Masonary Section Active ------*/
	$('.grid').imagesLoaded( function() {
		
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1,
		  }
		});	
	});
	
	/*------ 08. Home Two Slide Active ------*/
	$('.slider-two-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})
	
	/*------ 09. Home Three Slide Active ------*/
	$('.slider-three-active').owlCarousel({
		stagePadding: 495,
		loop:true,
		margin:10,
		nav:true,
		center:true,
		dots:false,
		navText:["<i class='zmdi zmdi-chevron-left'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
		responsive:{
			0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 495
        }
		}
	})
	
	/*------ 10. More Post Slide Active ------*/
	$('.more-post-active').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: false,
	  dots:true,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 2
		},
		1000: {
		  items: 4
		}
	  }
	}) 
	
	/*------ 11. Slide Post Active ------*/
	$('.slide-post-active').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='zmdi zmdi-chevron-left'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	}) 
	
	/*------ 12. scrollUp ------*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
})(jQuery);  
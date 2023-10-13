/*
    Template Name: Cluster
    Description: This is html5 template
    Author: HasTech
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Owl Carousel
	03. Isotope
	04. Imageload
	05. jQuery MeanMenu
	06. Magnific Popup
	07. Mail Chimp
	08. Counter Up
	09. ScrollUp
	10. Wow js
 
======================================
[ End table content ]
======================================*/

(function ($) {
	"use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    var windows = $(window);
    var stick = $(".header-sticky");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 245) {
			stick.removeClass("sticky");
		}else{
			stick.addClass("sticky");
		}
	}); 
    
/*----------------------------------------
    02. Owl Carousel
---------------------------------------- */
/*----------------------------------------
    Slider Carousel
---------------------------------------- */
    $(".slider-wrapper").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        items:1,
        dots:true,
        mouseDrag : false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
/*--------------------------------------
    Testimonial Carousel
--------------------------------------- */
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        smartSpeed: 2000,
        fluidSpeed: true,
        items:1,
        center: true,
        nav:true,
        navText: ["<i class='zmdi zmdi-caret-left'></i>","<i class='zmdi zmdi-caret-right'></i>"]
    });   
    
/*------------------------
    Client Carousel
-------------------------- */
	$('.client-carousel').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 5,
        responsiveClass:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }, 
            992:{
                items:4
            }, 
            1200:{
                items:5
            }
		}
    });   
    
/*------------------------
    About Carousel
-------------------------- */
	$('.about-carousel').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 1,
        responsiveClass:true,
        nav:false,
        dots:true,
    });   
    
/*------------------------------------
    03. Isotope
-------------------------------------- */ 
	$('.grid').imagesLoaded( function() {
		// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});	
        
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		  }
		});
	});
    
/*------------------------------------
    04. Imageload
-------------------------------------- */ 
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});	
    
/*-------------------------------------------
    05. jQuery MeanMenu
--------------------------------------------- */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});
    
/*-----------------------------------------
    06. Magnific Popup
------------------------------------------- */	
/*-------------------------
    Magnific Popup Video
-------------------------- */	
     $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
/*-------------------------
    Magnific Popup Image
-------------------------- */	
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });      
    
/*----------------------------------------
	07. Mail Chimp
------------------------------------------*/
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
    
/*-----------------------------------------
    08. Counter Up
------------------------------------------ */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });
	
/*------------------------------------------
    09. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    10. Wow js
--------------------------------------------- */    
    new WOW().init();
	
})(jQuery);  
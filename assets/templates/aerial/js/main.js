/*
    Template Name: Aerial
    Description: This is html5 template
    Author: HasTech
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Menu Toggle
	03. Hamburger js
	04. Owl Carousel
	05. Isotope
	06. Imageload
	07. jQuery MeanMenu
	08. Magnific Popup
	09. Video Player
	10. ScrollUp
	11. Wow js
 
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
    
/*------------------------------------
    02. Menu Toggle
-------------------------------------- */ 
    var togle = $('.menu-toggle');
    var menunav = $('.main-menu nav');
    togle.on('click', function(){
        if( togle.hasClass('is-active') ){
            menunav.removeClass('menu-open');
        }else {
            menunav.addClass('menu-open');
        }
    });
    
/*------------------------------------
    03. Hamburger js
-------------------------------------- */ 
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
              this.classList.toggle("is-active");
            }, false);
        });
    }
    
/*----------------------------------------
    04. Owl Carousel
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
    
/*------------------------
    Gallery Carousel
-------------------------- */
	$('.gallery-carousel').owlCarousel({
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
    
/*------------------------------------
    05. Isotope
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
    06. Imageload
-------------------------------------- */ 
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});	
    
/*-------------------------------------------
    07. jQuery MeanMenu
--------------------------------------------- */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});
    
/*-----------------------------------------
    08. Magnific Popup
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
    
/*------------------------------------
	09. Video Player
--------------------------------------*/
    $(".player").YTPlayer({
        showControls: false
    }); 

/*------------------------------------------
    10. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    11. Wow js
--------------------------------------------- */    
    new WOW().init();
	
})(jQuery);  
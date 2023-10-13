/*
    Template Name: Mobile Mend - Mobile Repair HTML Template
    Template URI: https://devitems.com/html/mobile-preview/
    Description: This is html5 template
    Author: HasTech
    Author URI: https://devitems.com/
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Owl Carousel
	03. jQuery MeanMenu
	04. Counter Up
	05. Magnific Popup
	06. Portfolio Isotope
    07. ScrollUp
    08. Wow js
    09. Smooth Scroll
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
        nav:true,
        navText: ["<i class='zmdi zmdi-chevron-left'></i>","<i class='zmdi zmdi-chevron-right'></i>"],
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

/*-------------------------------------
    Client Carousel
-------------------------------------- */
    $(".client-owl").owlCarousel({
        loop:true,
        items:5,
        dots: false,
		nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:4
            }, 
            992:{
                items:5
            }, 
            1200:{
                items:5
            }
		}
    });
    
/*-------------------------------------
    Event Carousel
-------------------------------------- */
    $(".event-owl").owlCarousel({
        loop:true,
        items:1,
        dots: true,
		nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            }, 
            992:{
                items:1
            }, 
            1200:{
                items:1
            }
		}
    });
      
/*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
    });
    
/*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: true,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 1,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });   
      
/*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu'
	});
        
/*-----------------------------------------
    04. Counter Up
------------------------------------------ */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });  
    
/*--------------------------
    05. Magnific Popup
---------------------------- */    
     $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
/*--------------------------
    06. Portfolio Isotope
---------------------------- */
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
            columnWidth: '.grid-item',
          }
        });
    });
    
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });	
    
/*------------------------------------------
    07. ScrollUp
------------------------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    08. Wow js
--------------------------------------------- */    
    new WOW().init();
    
/*-------------------------------------------
    09. Smooth Scroll
--------------------------------------------- */ 
    $('.scroll-down').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: -80,
            scrollTarget: link.hash
        });
    }); 
	
})(jQuery);  
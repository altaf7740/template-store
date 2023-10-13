/*

Template:  Expo
Author: author name
Version: 1
Design and Developed by: Devitems

*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Owl Carousel
    03. jQuery MeanMenu
	04. ScrollUp jquery
	05. wow js active
	06. jQuery MeanMenu
    07. Textillate 
	08. Video Player
	09. Mail Chimp
 
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll < 245) {
        $(".sticker").removeClass("stick");
       }else{
        $(".sticker").addClass("stick");
       }
    });
	
/*------------------------------------
    02. Owl Carousel
------------------------------------- */
    $(".expu-owl-slider").owlCarousel({
		autoPlay: 8000, 
        items : 1,
		slideSpeed:500,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
/*------------------------------------
    Team Carousel
------------------------------------- */
	$('.team-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 4,
        responsiveClass:true,
        nav:false,
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:3
            }, 
            992:{
                items:4
            }, 
            1200:{
                items:4
            }
		}       
    });	
    
/*------------------------------------
    Testimonial Carousel
------------------------------------- */
	$('.testimonial-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 1,
        responsiveClass:true,
        nav:true,
        navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        pagination:true,
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

/*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
	  $('.navbar-toggle').on('click', function(event) {
      $(this).toggleClass('open');
      $('#navigation').slideToggle(400);
      $('.cart, .search').removeClass('open');
    }); 
 
 
 
    $('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.navigation-menu li a[href="#"]').on('click', function(e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
      }
    });

/*-------------------------------------------
    04. ScrollUp jquery
--------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    05. wow js active
--------------------------------------------- */
    new WOW().init();
    
/*-------------------------------------------
    06. jQuery MeanMenu
--------------------------------------------- */
	jQuery('nav#dropdown').meanmenu(); 

	      
/*--------------------------
    07. Textillate 
---------------------------- */  
    $('.tlt').textillate({
        loop: true
    });
    
/*------------------------------------
	08. Video Player
--------------------------------------*/
    jQuery("#bgndVideo").YTPlayer({
        showControls: false
    });
 
    
/*------------------------------------
	09. Mail Chimp
--------------------------------------*/
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
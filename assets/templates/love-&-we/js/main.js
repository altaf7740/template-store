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
	05. jQuery MeanMenu
	06. wow js active
    06. jQuery MeanMenu
	07. Textilate Activation
	08. Video Player
    09. Countdown
 
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
    $(".love-owl-slider").owlCarousel({
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
    Story Carousel
------------------------------------- */
	$('.story-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 3,
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
                items:2
            }, 
            992:{
                items:3
            }, 
            1200:{
                items:3
            }
		}       
    });	  
    
/*------------------------------------
    Gift Carousel
------------------------------------- */
	$('.gift-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 5,
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
                items:5
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
        pagination:true,
        dotData:true,
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
           
/*--------------------------
    03. Portfolio Isotope
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
    
/*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
	  $('.navbar-toggle').on('click', function(event) {
      $(this).toggleClass('open');
      $('.navigation').slideToggle(400);
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
          
/*--------------------------
    04. Magnific Popup
---------------------------- */	
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
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
    
/*--------------------------
    09. Countdown
---------------------------- */ 
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>Days</div><div class="cdown hours"><span class="counting">%-H</span>Hour</div><div class="cdown minutes"><span class="counting">%M</span>Mint</div><div class="cdown seconds"><span class="counting">%S</span>Secs</div>'));
        });
    });

    
})(jQuery);
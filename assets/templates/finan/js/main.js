/*-----------------------------------------------------------------------------------

  Template Name: Finan Finance & Business HTML Template.
  Template URI: #
  Description: Finan is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: HasTech
  Author URI: https://themeforest.net/user/hastech/portfolio
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Portfolio  Masonry (width)
  04. Sticky Header
  05. ScrollUp
  06. Magnific Popup
  07. Testimonial Slick Carousel
  08. Home Slider
  09. CounterUp  
  10. Background Toutube Video

  
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
      meanScreenWidth: "767",
      meanRevealPosition: "right",
    });

/*-------------------------------------------
  02. wow js active
--------------------------------------------- */

    new WOW().init();

/*-------------------------------------------
  03. Portfolio  Masonry (width)
--------------------------------------------- */ 
  $('.ml-portfolio-page').imagesLoaded( function() {
        // filter items on button click
        $('#ml-filters').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $containerpage.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('#ml-filters li').on('click', function () {
            $('#ml-filters li').removeClass('is-checked');
            $(this).addClass('is-checked');
            var selector = $(this).attr('data-filter');
            $containerpage.isotope({ filter: selector });
            return false;
        });
        var $containerpage = $('.ml-portfolio-page');
        $containerpage.isotope({
            itemSelector: '.pro-item',
            filter: '*',
            transitionDuration: '0.7s',
            masonry: {
                columnWidth: '.pro-item'
            }
          });
      });



/*-------------------------------------------
  04. Sticky Header
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
  05. ScrollUp
---------------------------- */
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});


/*--------------------------------
  06. Magnific Popup
----------------------------------*/

     $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
     
  $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 100,
        gallery:{
            enabled:true, 
        }
    });


/*---------------------------------------------
  07. Testimonial Slick Carousel
---------------------------------------------*/

  $('.our-testimonial-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      autoplay:true,
      // fade: true,
      dots: false,
  });


/*-----------------------------------------------
  08. Home Slider
-------------------------------------------------*/

  if ($('.slider-activetion-wrap').length) {
    $('.slider-activetion-wrap').owlCarousel({
      loop:false,
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
        },
        800:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        },
        1400:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  }



/*-----------------------------
  09. CounterUp
-----------------------------*/
  $('.count').counterUp({
    delay: 60,
    time: 3000
  });

/*---------------------------------
  10. Background Toutube Video 
------------------------------------*/
     $('.youtube-bg').YTPlayer({
     });




})(jQuery);





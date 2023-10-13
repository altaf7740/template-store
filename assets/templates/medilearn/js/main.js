/*-----------------------------------------------------------------------------------

  Template Name: Medilearn  Medical HTML Template.
  Template URI: #
  Description: Medilearn is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
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
  04. CounterUp 
  05. Parallax
  06. Sticky Header
  07. Tab panel
  08. Slider Area 
  09. Testimonial Slick Carousel
  10. Accordion
  11. ScrollUp 
  12. Background Toutube Video


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

/*-----------------------------
  04. CounterUp
-----------------------------*/
      $('.count').counterUp({
        delay: 60,
        time: 3000
      });
/*---------------------------
  05. Parallax
-----------------------------*/
$('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="medilearn-count days"><span class="count-inner"><span class="time-count">%-D</span> <p>Days</p></span></span> : <span class="medilearn-count hour"><span class="count-inner"><span class="time-count">%-H</span> <p>Hours</p></span></span> : <span class="medilearn-count minutes"><span class="count-inner"><span class="time-count">%M</span> <p>Minutes</p></span></span> : <span class="medilearn-count second"><span class="count-inner"><span class="time-count">%S</span> <p>Seconds</p></span></span>'));
        });
    });

/*-------------------------------------------
  06. Sticky Header
--------------------------------------------- */ 
  $(window).on('scroll',function() {    
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
      $("#sticky-header-with-topbar").removeClass("scroll-header");
     }else{
      $("#sticky-header-with-topbar").addClass("scroll-header");
     }
    });
/*-------------------------------------------
  07. Tab panel
--------------------------------------------- */
    $('.tp-portfolio-small-image a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
/*--------------------------------
  08. Slider Area
-----------------------------------*/
  $('.slider-activation').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      fade: false,
      dots: true,
  });

/*--------------------------------
  09. Testimonial Slick Carousel
-----------------------------------*/
  $('.testimonial-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      fade: true,
      dots: true,
  });

/*--------------------------------
  10. Accordion
-----------------------------------*/


$( "#ml-accordion" ).accordion();


/*--------------------------
  11. ScrollUp
---------------------------- */
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});

/*---------------------------------
  12. Background Toutube Video 
------------------------------------*/
$('.youtube-bg').YTPlayer({
     });



})(jQuery);





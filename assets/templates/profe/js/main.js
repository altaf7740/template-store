/*-----------------------------------------------------------------------------------

  Template Name: Profe Corporate Business Template.
  Template URI: #
  Description: Profe is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Product  Masonry (width)
  04. Sticky Header
  05. ScrollUp
  06. CounterUp
  07. Search Bar
  08. Toogle Menu
  09. Overlay Close  
  10. Magnific Popup
  11. Home Slider
  13. Bg Images

  
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
  03. Product  Masonry (width)
--------------------------------------------- */ 

  $('.feature__container').imagesLoaded( function() {
    
      // filter items on button click
      $('.feature__menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      }); 
      // init Isotope
      var $grid = $('.feature__list').isotope({
        itemSelector: '.single__pro',
        percentPosition: true,
        transitionDuration: '0.7s',
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.single__pro',
        }
      });

  });

  $('.feature__menu button').on('click', function(event) {
      $(this).siblings('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
      event.preventDefault();
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


/*-----------------------------
  06. CounterUp
-----------------------------*/
  $('.count').counterUp({
    delay: 60,
    time: 3000
  });


/*------------------------------------    
  07. Search Bar
--------------------------------------*/ 
    
  $( '.search__open' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search__box__show__hide' );
    return false;
  });

  $( '.search__close__btn .search__close__btn_icon' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search__box__show__hide' );
    return false;
  });




/*------------------------------------    
  08. Toogle Menu
--------------------------------------*/

  $('.toggle__menu').on('click', function() {
    $('.offsetmenu').addClass('offsetmenu__on');
    $('.body__overlay').addClass('is-visible');

  });

  $('.offsetmenu__close__btn').on('click', function() {
      $('.offsetmenu').removeClass('offsetmenu__on');
      $('.body__overlay').removeClass('is-visible');
  });


/*------------------------------------    
  09. Overlay Close
--------------------------------------*/
  $('.body__overlay').on('click', function() {
    $(this).removeClass('is-visible');
    $('.offsetmenu').removeClass('offsetmenu__on');
  });




/*--------------------------------
  10. Magnific Popup
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





/*-----------------------------------------------
  11. Home Slider
-------------------------------------------------*/

  if ($('.slider__activation__wrap').length) {
    $('.slider__activation__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000,
      autoplay: false,
      navText: [ '<i class="zmdi zmdi-chevron-left"></i><span>Prev</span>', '<span>Next</span><i class="zmdi zmdi-chevron-right"></i>' ],
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
      }
    });
  }


  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });





/*-------------------------------------------------
  12. Upcoming Carousel Active
----------------------------------------------------*/

    $('.indicator__style--1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,  
                centerPadding: '10px',
                }
            },
            {
              breakpoint: 767,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,  
                centerPadding: '10px',
                }
            },
            {
              breakpoint: 320,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                focusOnSelect: false,
                }
            }
        ]


    });





/*-------------------------------------------------
  13. Bg Images
----------------------------------------------------*/


    $('[data-image]').each(function() {
     $(this).css('background', 'rgba(0, 0, 0, 0) url(' + $(this).attr('data-image') + ') repeat scroll center center / cover');
    });

















})(jQuery);





/*-----------------------------------------------------------------------------------

  Template Name: Mounter  Corporate HTML Template.
  Template URI: #
  Description: Mounter is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
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
  06. Testimonial Activation
  07. Testimonial Activation
  08. Popular Courses Wrap
  09. Magnific Popup
  10. CounterUp
  11. Circular Bars - Knob
  12. Animate Text Style    
  13. Menu icon
  14. scrollReveal Js Init

  
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


$('.portfolio__area').imagesLoaded( function() {
  
  // filter items on button click
  $('.portfolio__menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  }); 
  // init Isotope
  var $grid = $('.portfolio__wrap').isotope({
    itemSelector: '.pro__item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.pro__item',
    }
  });

});

$('.portfolio__menu button').on('click', function(event) {
  $(this).siblings('.is-checked').removeClass('is-checked');
  $(this).addClass('is-checked');
  event.preventDefault();
});




/*-------------------------------------------
  04. Sticky Header
--------------------------------------------- */ 
var win = $(window);
var sticky_id = $("#sticky-header-with-topbar");
win.on('scroll',function() {    
  var scroll = win.scrollTop();
  if (scroll < 245) {
    sticky_id.removeClass("scroll-header");
  }else{
    sticky_id.addClass("scroll-header");
  }
});

/*--------------------------
  05. ScrollUp
---------------------------- */
$.scrollUp({
  scrollText: '<i class="icofont icofont-simple-up"></i>',
  easingType: 'linear',
  scrollSpeed: 900,
  animation: 'fade'
});




/*-----------------------------------------------
  06. Testimonial Activation
-------------------------------------------------*/
$(".testimonial__activation").owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  autoplay: true,
  navText: [ '<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>' ],
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

/*-----------------------------------------------
  07. Testimonial Activation
-------------------------------------------------*/


$(".testimonial__activation--2").owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  autoplay: false,
  autoplayTimeout: 10000,
  items:1,
  dots: true,
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



/*-----------------------------------------------
  08. Popular Courses Wrap
-------------------------------------------------*/


$(".slider__activation__wrap").owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  autoplay: false,
  navText: [ '<i class="icon ion-ios-arrow-left"></i>', '<i class="icon ion-ios-arrow-right"></i>' ],
  autoplayTimeout: 30000,
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




/*--------------------------------
  09. Magnific Popup
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




/*-----------------------------
  10. CounterUp
-----------------------------*/
$('.count').counterUp({
  delay: 60,
  time: 3000
});







/*-----------------------------------
  11. Circular Bars - Knob
-------------------------------------- */  
if(typeof($.fn.knob) != 'undefined') {
  $('.knob').each(function () {
    var $this = $(this),
      knobVal = $this.attr('data-rel');
    $this.knob({
    'draw' : function () { 
      $(this.i).val(this.cv + '%')
    }
    });

    $this.appear(function() {
      $({
        value: 0
      }).animate({
        value: knobVal
      }, {
        duration : 2000,
        easing   : 'swing',
        step     : function () {
        $this.val(Math.ceil(this.value)).trigger('change');
        }
      });
    }, {accX: 0, accY: -150});
  });
}


/*-----------------------------------
  12. Animate Text Style
-------------------------------------- */ 
$('.animate_text_style').textillate({
  loop: true,
});


/*-----------------------------------
  13. Menu icon
-------------------------------------- */
$('.menu__icon').on('click', function(){
  $('.main__menu__nav').toggleClass('show-menu');
  if ( $(this).find("i").hasClass('click-menu-open')){
    $(this).find("i").removeClass('click-menu-open').addClass('click-menu-close');
  }else{
    $(this).find("i").removeClass('click-menu-close').addClass('click-menu-open');
  }
});


/*-----------------------------------
  14. scrollReveal Js Init
-------------------------------------- */

window.sr = ScrollReveal({ duration: 800 });
sr.reveal('.foo');
sr.reveal('.bar');




$(".slide-down-btn a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});




})(jQuery);





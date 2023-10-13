/*-----------------------------------------------------------------------------------

  Template Name: T-Srt HTML Template.
  Template URI: #
  Description: T-Srt is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: HasTech
  Author URI: https://themeforest.net/user/hastech/portfolio
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Sticky Header
  04. ScrollUp 
  05. Testimonial Slick Carousel
  06. Testimonial Slick Carousel
  07. About Images Carousel As Nav
  08.  Plus Minus Button
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
  03. Sticky Header
--------------------------------------------- */  
  $(window).on('scroll',function() {    
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
      $('#sticky-header-with-topbar').removeClass('scroll-header');
     }else{
      $('#sticky-header-with-topbar').addClass('scroll-header');
     }
    });

/*--------------------------
  04. ScrollUp
---------------------------- */
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
/*-------------------------------------
  05. Testimonial Slick Carousel
----------------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        fade: true,
    });
/*--------------------------------
  06. Testimonial Slick Carousel
-----------------------------------*/
    $('.our-testimonial-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        prevArrow: '<button type="button" class="slick-prev custom-slick-btn"><h3>P</h3></button>',
        nextArrow: '<button type="button" class="slick-next custom-slick-btn"><h3>N</h3></button>'
    });

/*--------------------------------------------
  07. About Images Carousel As Nav
-----------------------------------------------*/
    $('.about-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        prevArrow: '<button type="button" class="slick-prev custom-slick-btn"><h3>P</h3></button>',
        nextArrow: '<button type="button" class="slick-next custom-slick-btn"><h3>N</h3></button>',

        responsive: [
            {
              breakpoint: 769,
              settings: {
                dots: false,
                slidesToShow: 1,  
                centerPadding: '0px',
                centerMode: false,
                }
            },
            {
              breakpoint:480,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });



// selectpicker

$('.selectpicker').selectpicker();

$.fn.replaceClass = function (pFromClass, pToClass) {
    return this.removeClass(pFromClass).addClass(pToClass);
};
$('.order-single-btn .btn.dropdown-toggle').replaceClass('btn-default','order-btn-default');





/*-------------------------------
  08. Plus Minus Button 
--------------------------------*/


    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat( oldValue ) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1 + ' Piece') {
                var newVal = parseFloat( oldValue ) - 1;
            } else {
                newVal = 1;
            }
        }


        $button.parent().find("input").val(newVal + ' Piece');
    });










})(jQuery);





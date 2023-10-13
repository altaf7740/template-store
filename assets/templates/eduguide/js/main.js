/*

Template:  Theme Name
Author: author name
Version: 1
Design and Developed by: BM Rafiq + Masud Rana
NOTE: If you have any note put here. 

*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu
	02. wow js active
	03. scrollUp jquery active
	04. slick carousel 

 
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";



/*------------------------------------------------
      Top menu stick
     -------------------------------------------------- */
    // var sticky_menu = $("#sticky-header");
    // var pos = sticky_menu.position();
    // if (sticky_menu.length) {
    //     var windowpos = sticky_menu.top;
    //     $(window).on('scroll', function() {
    //         var windowpos = $(window).scrollTop();
    //         if (windowpos > pos.top) {
    //             sticky_menu.addClass("sticky");
    //         } else {
    //             sticky_menu.removeClass("sticky");
    //         }
    //     });
    // }



    /*---------------------
     jQuery MeanMenu
    --------------------- */
	jQuery('nav#dropdown').meanmenu();	


    /*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
    new WOW().init();



    /*--
    slick slider
    ------------------------*/
    $('.slider-active').slick({
      centerMode: true,
      dots: true,
      fade: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 

    
    
    /*---------------------
    chosen
    --------------------- */
    jQuery('.orderby').chosen({disable_search: true, width: "auto"});
    
    
    /*---------------------
    countdown
  --------------------- */
    $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
		});
    });
    
    
    /*----------------------------
     counter js active
    ------------------------------ */
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-active2').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-active3').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 

    
    /*--------------------------
    scrollUp
    ---------------------------- */	
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    }); 
    
/*----------------------------
     sticky active
    ------------------------------ */  
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $('.stick-h2').removeClass('stick');
        }else{
            $('.stick-h2').addClass('stick');
        }
    }); 
    
    
    
    
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt1').textillate({
      loop: true,
      in: {
        effect: 'fadeInDown',
      },
      out: {
        effect: 'flip',
      },
    });
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt').textillate({
      loop: true,
      in: {
        effect: 'fadeInRight',
      },
      out: {
        effect: 'fadeOutLeft',
      },
    });
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt3').textillate({
      loop: true,
      in: {
        effect: 'rotateIn',
      },
      out: {
        effect: 'rotateIn',
      },
    });
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt4').textillate({
      loop: true,
      in: {
        effect: 'slideInUp',
      },
      out: {
        effect: 'slideInUp',
      },
    });
    
    
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt5').textillate({
      loop: true,
      in: {
        effect: 'flipInX',
      },
      out: {
        effect: 'flipInX',
      },
    });
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt6').textillate({
      loop: true,
      in: {
        effect: 'lightSpeedIn',
      },
      out: {
        effect: 'lightSpeedIn',
      },
    });
    
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt7').textillate({
      loop: true,
      in: {
        effect: 'tada',
      },
      out: {
        effect: 'tada',
      },
    });
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt8').textillate({
      loop: true,
      in: {
        effect: 'swing',
      },
      out: {
        effect: 'swing',
      },
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*************************
          tooltip
    *************************/
    $('[data-toggle="tooltip"]').tooltip();





})(jQuery);

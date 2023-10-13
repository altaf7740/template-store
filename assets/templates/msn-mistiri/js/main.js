(function ($) {
 "use strict";
    
    /*----------------------------
    jQuery MeanMenu
    ------------------------------ */
        $('nav#dropdown').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
    });	
    
    /*----------------------------
     camera js active
    ------------------------------ */  
    
    jQuery('#camera_wrap_1').camera({
        height: '42%',
        loader: 'bar',
        pagination: true,
        thumbnails: true,
        playPause: false,
        barDirection: 'leftToRight',
        barPosition: 'top',
        fx: 'random'
    });
    
    /*----------------------------
     wow js active
    ------------------------------ */
     new WOW().init();
    
    /*----------------------------
     counter js active
    ------------------------------ */
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

    /*--------------------------
        jQuery smooth scroll
    ---------------------------- */	
	$('li.smoot-menu a').bind('click', function (event) {
		var $anchor = $(this);
		var headerH = '78';
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});
	
    /*--------------------------
        jQuery smooth scroll
    ---------------------------- */	
	$('.hs-btn').bind('click', function (event) {
		var $anchor = $(this);
		var headerH = '74';
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});

    /*--------------------------
        jQuery scroll psy
    ---------------------------- */
    var top_offset = $('.header-bottom').height() - 0;  // get height of fixed navbar
    $('.primary-menu').onePageNav({
        scrollOffset: top_offset
    }); 
	
    /*--------------------------
        jQuery sticky
    ---------------------------- */

        $(".header-bottom").sticky({
            topSpacing: 0
        });
    
    
    
    /*--
    Testimonial Slick Carousel
    -----------------------------------*/
        $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    /*--
        Testimonial Slick Carousel as Nav
    -----------------------------------*/
    $('.testimonial-image-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-text-slider',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
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
    
    
    //venbox start
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true,
        titleattr: 'data-title'
    })
    //venbox end
    
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
    $("#toTop").on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });
    
    
    
    
	
})(jQuery); 
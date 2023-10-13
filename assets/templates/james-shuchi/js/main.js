(function ($) {
 "use strict";
 
/*----------------------------------
	Slider
-----------------------------------*/
 $('.slider-active').owlCarousel({
    loop:true,
	autoplay:true,
    nav:false,
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
})
/*----------------------------------
	timeline-active
-----------------------------------*/
 $('.timeline-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/*----------------------------------
	upcomming-active
-----------------------------------*/
 $('.upcomming-active').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/*----------------------------
  MagnificPopup
------------------------------ */

$('.image-link').magnificPopup({
	type: 'image',
	gallery:{
	enabled:true
	}
});
/*----------------------------
  MagnificPopup
------------------------------ */

$('.image-gallery').magnificPopup({
	type: 'image',
	gallery:{
	enabled:true
	}
});

/*----------------------------
  MagnificPopup
------------------------------ */

$('.latest_blog-active').magnificPopup({
	type: 'image',
	gallery:{
	enabled:true
	}
});
/*----------------------------
  Sticky Header
------------------------------ */
 $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 245) {
    $("#main_h").removeClass("sticky");
   }else{
    $("#main_h").addClass("sticky");
   }
  });

/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('#mobile-menu-active').meanmenu();		
 
})(jQuery);  
(function ($) {
"use strict";

    /*--
     Menu Sticky
    -----------------------------------*/
    var win = $(window);
	var headersticky = $('#header-sticky');
    
    win.on('scroll',function() {    
        var scroll = win.scrollTop();
        if (scroll < 245) {
            headersticky.removeClass("scroll-header");
        }else{
            headersticky.addClass("scroll-header");
        }
    });
  
    
/* meanmenu */
$('.main-menu nav').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
 });
 

/*---------------------
price slider
--------------------- */
var sliderrange = $('#slider-range');
var amountprice = $('#amount');
$(function() {
	sliderrange.slider({
		range: true,
		min: 20,
		max: 100,
		values: [0, 100],
		slide: function(event, ui) {
			amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	amountprice.val("$" + sliderrange.slider("values", 0) +
		" - $" + sliderrange.slider("values", 1));
});


/*----------------------------
	Cart Plus Minus Button
------------------------------ */
$(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
$(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function() {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	if ($button.text() === "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	$button.parent().find("input").val(newVal);
});

    

/* related product active */
$('.related-product-slider').owlCarousel({
	loop: true,
	nav: false,
	item: 4,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		1000: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
})
	
/*---------------
Product Quantity
----------------*/
$('.product-quantity').append('<span class="dec qtybtn"><i class="ion-ios-arrow-left"></i></span><span class="inc qtybtn"><i class="ion-ios-arrow-right"></i></span>');
$('.qtybtn').on('click', function() {
	var $button = $(this);
	var oldValue = $button.parent().find('input').val();
	if ($button.hasClass('inc')) {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	$button.parent().find('input').val(newVal);
});
    
/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/* working-categories-active */
$('.working-categories-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/* client-active */
$('.client-active').owlCarousel({
    stagePadding: 540,
    loop:true,
	center: true,
    nav:false,
    items:1,
    responsive:{
        0:{
			stagePadding: 0
        },
        992:{
			stagePadding: 250
        },
        1200:{
			stagePadding: 340,
        },
        1500:{
			stagePadding: 440,
        },
        1700:{
			stagePadding: 540,
        }
    }
})
/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* client-love-active */
$('.client-love-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/* counter */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


    
/* lates-blog-active */
$('.lates-blog-active').owlCarousel({
    loop:true,
	center: true,
    nav:false,
	autoplay:true,
    items: 3,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:3
        }
    }
})




/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
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

/* image-link */
$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/* Scroll Up */
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="fa fa-angle-up"></i>',
});	


/* magnificPopup */
$('.video-popup').magnificPopup({
  type: 'iframe'
});

/* blog-thumb-active */
$('.blog-thumb-active').owlCarousel({
    loop:true,
    nav:true,
	autoplay:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



  
  
  

/* Circular Progress */
	$('.circular-progress').waypoint(function(){

		$('.circular-progress').easyPieChart({
			lineWidth: 3,
			trackColor: false,
			scaleLength: 0,
			barColor: '#f7ca18'
		});

	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	});
	
	

    /*--- clickable menu active ----*/
    const slinky = $('#menu').slinky()
    
    
    /*====== sidebarCart ======*/
    function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        
        menuTrigger.on('click', function() {
            container.addClass('inside');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();	
	
	
	
	
/* WOW active */
new WOW().init();	
	
	
	
	
/*-----------------------------------------------
  11. Datepicker
-------------------------------------------------*/


  $( '#datepicker' ).datepicker();
	
	
	/*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });
	

})(jQuery);	
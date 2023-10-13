/* ======================================
	
	Template: Shopzone
	Css Name: Header
	Version: 1
	Design and Developed by:Shopzone Theme
	NOTE: This is Footer style file. All footer related style included in this file.

========================================= */

/*================================================
[  Table of contents  ]
================================================

	1. jQuery Mobile MeanMenu
	2. Nivo slider
	3. showlogin toggle function
	4. showcoupon toggle function
	5. Create an account toggle function
	6. Create an account toggle function
	7. Countdown Active
	8. Single Product Owl Cursol
	9. Mailchimp Active
	10. Client Slider Owl Cursol
	11. Testimonial Owl Active
	12. price slider
	13. Single Product Owl Cursol
	14. Single Product zoom active
	15. Single Product Quantity Plus Minus
	16. scrollUp
	17. Magnific Popup

================================================*/

(function ($) {
 "use strict";
 
	/*------ 1. jQuery Mobile MeanMenu ------*/
	jQuery('#mobile-nav').meanmenu();
	
	/*------ 2. Nivo slider ------*/
	$('#ensign-nivoslider').nivoSlider({
		effect: 'slideInRight',
		slices: 15,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: true,
		controlNavThumbs: true,
		pauseOnHover: false,
		manualAdvance: true
	});	 

	/*------ 3. showlogin toggle function ------*/
	$( '#showlogin' ).on('click', function() {
       $( '#checkout-login' ).slideToggle(900);
    }); 	

	/*------ 4. showcoupon toggle function ------*/
	$( '#showcoupon' ).on('click', function() {
       $( '#checkout_coupon' ).slideToggle(900);
    });	 

	/*------ 5. Create an account toggle function ------*/
	$( '#cbox' ).on('click', function() {
       $( '#cbox_info' ).slideToggle(900);
    });	 

	/*------ 6. Create an account toggle function ------*/
	$( '#ship-box' ).on('click', function() {
       $( '#ship-box-info' ).slideToggle(1000);
    });
	 
	/*------ 7. Countdown Active ------*/
	$('[data-countdown]').each(function() {
	   var $this = $(this), finalDate = $(this).data('countdown');
	   $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	   });
	});
	 
	/*------ 8. Single Product Owl Cursol ------*/
	$('.product-gallery').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 2
		},
		1000: {
		  items: 4
		}
	  }
	})
	
	/*------ 9. Mailchimp Active ------*/
	$('#mc-form').ajaxChimp({
		 language: 'en',
		 callback: mailChimpResponse,
		 // ADD YOUR MAILCHIMP URL BELOW HERE!
		 url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
		});
		function mailChimpResponse(resp) {
		 if (resp.result === 'success') {
		  $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		  $('.mailchimp-error').fadeOut(400);
		  
		 } else if(resp.result === 'error') {
		  $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		 }  
	}
		
	/*------ 10. Client Slider Owl Cursol ------*/
	$('.client-slider-cursol').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  animateOut: 'slideOutDown',
	  animateIn: 'flipInY',
	  navText:["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	})
	
	/*------ 11. Testimonial Owl Active ------*/
	$('.testimonial-gallery').owlCarousel({
	  loop: true,
	  margin: 0,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
	  responsive: {
		0: {
		  items: 2
		},
		600: {
		  items: 2
		},
		1000: {
		  items: 6
		}
	  }
	})
	
	/*------ 12. price slider ------*/
	$(function() {
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	});	
	
	/*------ 13. Single Product Owl Cursol ------*/
	$('.pro-img-tab-slider').owlCarousel({
	  loop: true,
	  margin: 30,
	  autoplay: false,
	  nav: true,
	  dots:false,
	  navText:["<i class='arrow_carrot-left'></i>","<i class='arrow_carrot-right'></i>"],
	  responsive: {
		0: {
		  items: 3
		},
		600: {
		  items: 4
		},
		1000: {
		  items: 4
		}
	  }
	})
	
	/*------ 14. Single Product zoom active ------*/
	$('.simpleLens-lens-image').simpleLens({
		loading_image: 'img/loading.gif'
	}); 
	
    /*------ 15. Single Product Quantity Plus Minus ------*/
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text("+")) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
         // Don't allow decrementing below zero
        if (oldValue > 0) {
       var newVal = parseFloat(oldValue) - 1;
       } else {
       newVal = 0;
        }
        }
      $button.parent().find("input").val(newVal);
    });
	
	/*------ 16. scrollUp ------*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	
	/*------ 17. Magnific Popup ------*/
	$('.popup-instragram').magnificPopup({
		type: 'image'
	});
	
})(jQuery);  
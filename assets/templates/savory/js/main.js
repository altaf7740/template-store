(function ($) {
 "use strict";
/*---------------------
 Menu
--------------------- */	
    $(".menu-toggle").on('click', function(){
        $( ".header-area" ).toggleClass( "opened" );
    });
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
/*----------------------------
	Testimonial List owl active
------------------------------ */  
  $(".testimonial-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	 	  
      singleItem : true,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"]
  });
/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	    
/*--------------------------
	scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });     
/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 496 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );      
/*----------------------------------
 Create an account toggle function 
 ----------------------------------*/
	 $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });	
	 
/*--------------------------------
	Create an account toggle function
---------------------------------*/
	$( '#cbox' ).on('click', function() {
		$( '#cbox_info' ).slideToggle(900);
	});
 	
/*---------------------
	venobox
--------------------- */
    $('.venobox').venobox(); 
 
 
/*----------------------------
	Input Plus Minus Button
------------------------------ */ 
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
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
/*-------------------------
	showlogin toggle function
--------------------------*/
	$( '#showlogin' ).on('click', function() {
		$( '#checkout-login' ).slideToggle(900);
	}); 

/*-------------------------
	showcoupon toggle function
--------------------------*/
	$( '#showcoupon' ).on('click', function() {
		$( '#checkout_coupon' ).slideToggle(900);
	});

    
/*---------------------
 Faq page Accrodian
--------------------- */
	 $('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-plus-square").removeClass("fa-plus-square").addClass("fa-minus-square");
		}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-minus-square").removeClass("fa-minus-square").addClass("fa-plus-square");
		});	
/*----------------------------
	jQuery MeanMenu
------------------------------ */ 
	$('.mobile-menu').meanmenu();
    $('#date-picker').datepicker({ dateFormat: 'dd-mm-yy'}); 
})(jQuery); 
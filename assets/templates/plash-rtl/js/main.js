(function ($) {
 "use strict";
/*----------------------------
    Toogle Search
------------------------------ */
    $('.header-search').on('click', function() {
        $('.search').toggleClass('open');
        return false;
    });
    $('#search-form input[type=submit]').on('click', function() {
        $('.search').toggleClass('open');
        return true;
    });
    $(document).on('click', function(event) {
        var target = $(event.target);

        if (!target.is('.header-search') && !target.closest('.search').size()) {
            $('.search').removeClass('open');
        }
    });
    
/*----------------------------
 Sidebar Toggle Menu
------------------------------ */
    $('.show-submenu').on('click', function() {
        $(this).parent().find('.submenu').toggleClass('submenu-active'); 
        $(this).toggleClass('submenu-active');  
        return false;  
    });
    $('.show-submenu-dropdown').on('click', function() {
        $(this).parent().find('.submenu-dropdown').toggleClass('submenu-dropdown-active'); 
        $(this).toggleClass('submenu-dropdown-active');  
        return false;  
    });
     
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
    new WOW().init();

/*----------------------------
 arrival owl active
------------------------------ */
    $('.arrival-owl').owlCarousel({
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 4,
        responsiveClass:true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:3
            }, 
            992:{
                items:3
            }, 
            1200:{
                items:4
            }
        }        
    });
    
/*----------------------------
 price-slider active
------------------------------ */  
    $( '#slider-range' ).slider({
        range: true,
        min: -5,
        max: 310,
        values: [ 40, 250 ],
        slide: function( event, ui ) {
		$( '#amount' ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( '#amount' ).val( "$" + $( '#slider-range' ).slider( 'values', 0 ) +
	   " - $" + $( '#slider-range' ).slider( 'values', 1 ) ); 
   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
              	  
/*--------------------------
 Elevatezoom 
---------------------------- */	
    $('#zoom1').elevateZoom({
        gallery:'gallery_01',
        responsive : true, 
        galleryActiveClass: 'active', 
        imageCrossfade: true,
        easing : true,
        cursor: 'default',
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });
     
/*----------------------------------------------
    Personal Address toggle function
-----------------------------------------------*/
    $('#add-new-address').on('click', function(){
        $('#add-new-address-info').slideToggle();
    });
    $('#transfer').on('click', function(){
        $('#transfer-info').slideToggle();
    });
    $('#payment').on('click', function(){
        $('#payment-info').slideToggle();
    });
    $('#paypal').on('click', function(){
        $("#paypal-info").slideToggle();
    });

/*----------------------------
    Input Plus Minus Button
------------------------------ */ 
    $('.cart-plus-minus').append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');
	    $('.qtybutton').on('click', function() {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
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
		$button.parent().find('input').val(newVal);
    });


})(jQuery); 
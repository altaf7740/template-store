(function ($) {
 "use strict";
    
/*------------------------
    WOW active 
------------------------- */
  new WOW().init(); 
    
/*------------------------
    jQuery MeanMenu
------------------------- */
$('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu-area .mobile-menu",
});  
/*---------------------------
 owl active
-----------------------------*/    
$('.slider-active').owlCarousel({
    loop:true,
    items:1,
    autoplay: false,
    dots:false,
    nav:true,
    navText:['<i class="icofont icofont-simple-left"></i>','<i class="icofont icofont-simple-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
});
/*---------------------------
 owl active
-----------------------------*/    
$('.brand-active').owlCarousel({
    loop:true,
    items:5,
    autoplay: false,
    dots:false,
    nav:false,
    responsive:{
        0:{items:1},
        480:{items:2},
        767:{items:4},
        992:{items:5},
        1200:{items:5}
    }
});
/*---------------------------
 owl active
-----------------------------*/    
$('.product-small-thum').owlCarousel({
    loop:true,
    items:4,
    margin: 15,
    autoplay: false,
    dots:false,
    nav:false,
    responsive:{
        0:{items:2},
        480:{items:3},
        767:{items:3},
        992:{items:4},
        1200:{items:4}
    }
}); 
$('.product-small-thum a').on('click', function () {
    $('.product-small-thum a').removeClass('active');
});
    
/*---------------------------
 owl active
-----------------------------*/    
$('.related-product-active').owlCarousel({
    loop:true,
    items:4,
    margin: 15,
    autoplay: false,
    dots:false,
    nav:false,
    responsive:{
        0:{items:1},
        480:{items:2},
        767:{items:3},
        992:{items:4},
        1200:{items:4}
    }
}); 
    
    
/*---------------------------------
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="icofont icofont-simple-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
}); 
    

/*----------------------------
    serch-container JS
------------------------------*/
$(".right-blok-box .serch-container i").on('click', function () {
    $(".right-blok-box .serch-container").toggleClass("active_magnifier");
});
  
$('.right-blok-box .serch-container i').on('click', function() {
    if($(this).hasClass('fa fa-close')){
        $(this).removeClass('fa fa-close').addClass('icon-magnifier');
			$('.blog-search').removeClass('active');
		}else {
            $(this).removeClass('fa fa-search').addClass('fa fa-close');
			$('.blog-search').addClass('active');
		}
})
    
/*-------------------------------
    price-slider active
-------------------------------*/  
$( "#price-slider" ).slider({
   range: true,
   min: 0,
   max: 120,
   values: [ 20, 115 ],
   slide: function( event, ui ) {
        $( "#min-price" ).val('£' + ui.values[ 0 ] );
        $( "#max-price" ).val('£' + ui.values[ 1 ] );
     }
  });
  $( "#min-price" ).val('£' + $( "#price-slider" ).slider( "values", 0 ));   
  $( "#max-price" ).val('£' + $( "#price-slider" ).slider( "values", 1 )); 
     
/*-----------------------------
  showcoupon toggle function
-----------------------------*/
$( '#showcoupon' ).on('click', function() {
    $( '#checkout-coupon' ).slideToggle(500);
});
    
/*--- Checkout ---*/
$("#chekout-box").on("change",function(){
    $(".account-create").slideToggle("100");
});
    
/*-- Checkout -----*/
$("#chekout-box-2").on("change",function(){
    $(".ship-box-info").slideToggle("100");
});   
   
/*-----------------------
    Nice Select
------------------------- */	
$('.nice-select').niceSelect(); 
    
/*-------------------------------------
    Magnific Popup video popup 
--------------------------------------*/
$('a.video-popup').magnificPopup({
    type: 'iframe',
    gallery: {
      enabled: true
    }

});
    
/*--- image-link ---*/
    
$('a.popup-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }   
    
}); 
    
    
/* counterUp */
$('.count').counterUp({
    delay: 10,
    time: 1000
}); 
    
    
    
    
    
    
    
    
    
    
    
    
    
 
})(jQuery); 
(function ($) {
 "use strict";
    
/*-----------------------------
	Preloader
---------------------------------*/
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");;
    });
    
/*-----------------------------
	Menu Stick
---------------------------------*/
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 1){  
            $('.sticker').addClass("stick");
        }   
        else{
            $('.sticker').removeClass("stick");
        }
    });
       
/*----------------------------
    jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
    Wow js active
------------------------------ */
    new WOW().init();

/*----------------------------
    Arrival owl active
------------------------------ */
    $('.tab-item-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,   
    autoplay:false,
    smartSpeed:2000,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2, 
        },
        678:{
            items:2, 
        },
        960:{
            items:3,
        },
        1200:{
            items:5,
            loop:false,
        }
    }
});
   
/*----------------------------
    Feature owl active
------------------------------ */
   $('.feature-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true, 
    autoplay:false,
    smartSpeed:2000,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1 
        },
        480:{
            items:2, 
        },
        678:{
            items:2, 
        },
        960:{
            items:3,
        },
        1200:{
            items:3,
            loop:false,
        }
    }        
});
    
/*----------------------------
    Testimonial owl active
------------------------------ */
    $('.testi-owl').owlCarousel({
    autoPlay: false, 
    smartSpeed: 1800,
    fluidSpeed: true,   
    animateOut: 'slideOutRight',
    animateIn: 'flipInX',
    dotData:false,
    items : 1,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true, 
    responsive:{
        0:{
            items:1 
        },
        480:{
            items:1, 
        },
        678:{
            items:1, 
        },
        960:{
            items:1,
        },
        1200:{
            items:1,
            loop:false,
        }
    }        
});
    
/*----------------------------
    Client owl active
------------------------------ */
    $('.client-owl').owlCarousel({
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 5,
        responsiveClass:true,
        nav:true,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
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
                items:4
            }, 
            1200:{
                items:5
            }
        }        
    });  
     
/*--------------------------
    Countdown
---------------------------- */ 
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>Days</div><div class="cdown hours"><span class="counting">%-H</span>Hour</div><div class="cdown minutes"><span class="counting">%M</span>Mint</div><div class="cdown seconds"><span class="counting">%S</span>Secs</div>'));
        });
    });
    
/*----------------------------
 price-slider active
------------------------------ */  
    $( "#slider-range" ).slider({
        range: true,
        min: -80,
        max: 460,
        values: [ 25, 325 ],
        slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );
               	  
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
    $("#add-new-address").on('click', function(){
        $("#add-new-address-info").slideToggle();
    });
    
    $("#transfer").on('click', function(){
        $("#transfer-info").slideToggle();
    });
    
    $("#payment").on('click', function(){
        $("#payment-info").slideToggle();
    });
    
    $("#paypal").on('click', function(){
        $("#paypal-info").slideToggle();
    });
          
/*--------------------------
    ScrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
/*------------------------------------
	Video Player
--------------------------------------*/
    jQuery("#bgndVideo").YTPlayer({
        showControls: false
    });
 
/*------------------------------------
	MailChimp
--------------------------------------*/
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
         
/*--------------------------
    Textillate 
---------------------------- */  
    $('.tlt').textillate({
        loop: true
    });
    
/*--------------------------
    ColorSwitcher
---------------------------- */
    $('.ec-handle').on('click', function(){
        $('.ec-colorswitcher').trigger('click')
        $(this).toggleClass('btnclose');
        $('.ec-colorswitcher') .toggleClass('sidebarmain');
        return false;
    });
    $('.ec-boxed,.pattren-wrap a,.background-wrap a').on('click', function(){
        $('.as-mainwrapper').addClass('wrapper-boxed');
        $('.as-mainwrapper').removeClass('wrapper-wide');
    });
    $('.ec-wide').on('click', function(){
        $('.as-mainwrapper').addClass('wrapper-wide');
        $('.as-mainwrapper').removeClass('wrapper-boxed');
    });
 
})(jQuery); 

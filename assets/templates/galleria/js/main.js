(function ($) {
	"use strict";

    $(document).ready(function(){
        
        //Home Two Three left sidebar
        $('.show-submenu').on('click', function() {
            $(this).parent().find('.submenu').toggleClass('submenu-active'); 
            $(this).toggleClass('submenu-active');  
            return false;  
        });
        
        // Product Carousel
        $(".single-p-slide").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 5,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [979,3],
            itemsTablet : [768,2],
            itemsMobile: [479,1]
        });
        // Homepage Three Product Carousel
        $(".single-p-slide-homepage-three").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 3,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet : [768,2],
            itemsMobile: [479,1]
        });
        // HomeTwo Product Carousel
        $(".single-p-slide-homepage-two").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 5,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [979,3],
            itemsTablet : [768,2],
            itemsMobile: [479,1]
        });
        // Blog Carousel
        $(".blog-items").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 2,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,2],
            itemsDesktopSmall : [979,1],
            itemsTablet : [768,1],
            itemsMobile: [479,1]
        });
        // Home Three Blog Carousel
        $(".blog-items-three").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 1,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsMobile : [767,1]
        });
        // Home Two Brand Carousel
        $(".brand-items").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 1,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsMobile : [767,1]
        });
        // Home Three Brand Carousel
        $(".brand-home-three").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 6,
            pagination:false,
            navigation:false,
            itemsDesktop : [1199,6],
            itemsDesktopSmall : [979,4],
            itemsMobile : [767,2]
        });
        //Home Three Faeature Carousel 
        $(".fearure-carousel-home-three").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 3,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsMobile : [767,1]
        });
        // Hot Products Carousel
        $(".hot-p-items").owlCarousel({
            autoPlay: false, 
            slideSpeed:2000,
            items : 3,
            pagination:false,
            navigation:true,
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsMobile : [767,1]
        });
        //MeanMenu Js
        jQuery('nav#dropdown').meanmenu();	
        //ScollUp
        $.scrollUp({
            scrollName: 'scrollUp',
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade',
            animationInSpeed: 2000
        });
        //Price-slider js
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 300,
			values: [ 25, 225 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        //Countdown
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<h4 class="cdown days"><span class="counting">%-D</span><span>days</span></h4><h4 class="cdown hours"><span class="counting">%-H</span><span>hrs</span></h4><h4 class="cdown minutes"><span class="counting">%M</span><span>mins</span></h4><h4 class="cdown seconds"><span><span class="counting">%S</span><span>secs</span></h4>'));
            });
        });	
        //Comming Soon Count Down
        $('.countdown').ClassyCountdown({
            theme: "white-very-wide",
            end: $.now() + 5001000
        });
    });

    jQuery(window).load(function(){
        
        $(".close-btn").on('click', function() {
            $(".newsletter-area").addClass("hide");
            $("body").removeClass("newsletter-open");
        });
        
      
    });

}(jQuery));	
(function ($) {
 "use strict";
     
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
    new WOW().init();

/*----------------------------
 client owl active
------------------------------ */
    $('.client-owl').owlCarousel({
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 5,
        responsiveClass:true,
        nav:false,
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
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
          
/*--------------------------
    Counter Up
---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });

/*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    
/*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
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

/*--------------------------
Circle Chart js
---------------------------- */	
     $('#myStat1').circliful({animationstep: 0.2,});
     $('#myStat2').circliful({animationstep: 0.2,});
     $('#myStat3').circliful({animationstep: 0.2,});
     $('#myStat4').circliful({animationstep: 0.2,});
     $('#myStat5').circliful({animationstep: 0.2,});
     $('#myStat6').circliful({animationstep: 0.2,});
          
/*--------------------------
    Venubox
---------------------------- */	
    $('.venobox').venobox({    
        border: '10px',          
        titleattr: 'data-title',  
        numeratio: true,           
        infinigall: true      
    });
    
/*--------------------------
    Portfolio Isotope
---------------------------- */
//    $(window).load(function(){
        if($.fn.isotope){
            var $portfolio = $('.gallery_items');
            $portfolio.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                layoutMode: 'fitRows',
            });
            $('.filter-menu li').on('click', function(){
                $('.filter-menu li').removeClass('current_menu_item');
                $(this).addClass('current_menu_item');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector,
                });
            });
        }
//    });
    

})(jQuery); 

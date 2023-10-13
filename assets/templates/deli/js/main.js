(function ($) {
	"use strict";

    jQuery(function($){

        /* tooltip */
         $('[data-toggle="tooltip"]').tooltip();
        
        /* scroll-to-top button show and hide */
            jQuery(window).scroll(function(){
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('.scrollup').fadeIn();
                } else {
                    jQuery('.scrollup').fadeOut();
                }
            });
        
        /* scroll-to-top animate */
            jQuery('.scrollup').on('click', function(){
                jQuery("html, body").animate({ scrollTop: 0 }, 600);
                    return false;
            });
        
        /* Client Owl Carousel */
        $('.clients-carousel').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            responsive:{
                0:{
                    items:2
                },
                480:{
                    items:4
                },
                768:{
                    items:5
                }
            }        
        }); 
        
        /* Blog Owl Carousel */
        $('.owl_wrapper').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:3
                }
            }        
        }); 
        
        /* Sale Owl Carousel */
        $('.owl_sale_wrapper').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                768:{
                    items:4
                }
            }        
        }); 
        
        /* Tab Owl Carousel */
        $(".featured_item").owlCarousel({
            loop:true,
            responsiveClass:true,
            autoplay: false,
            controlsClass: "featured-controls",
            nav: true,
            navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:3
                }
            }        
        });
        
        /* Clothing Owl Carousel */
        $(".clothing_content, .bag_content").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            controlsClass: "cloth-controls",
            nav: true,
            navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:3
                }
            }        
        }); 
       
        /* Countdown */
        $('[data-countdown]').each(function() {
              var $this = $(this), finalDate = $(this).data('countdown');
              $this.countdown(finalDate, function(event) {
                $this.html(event.strftime('<span class="cdown days"><p>Days</p><p class="time-count">%-D</p></span> <span class="cdown hour"> <p>Hrs</p><p class="time-count">%-H</p></span> <span class="cdown minutes"> <p>Mins</p><p class="time-count">%M</p></span> <span class="cdown second"> <p>Secs</p><p class="time-count">%S</p></span>'));
              });
            });	
        

        /* Deal Owl Carousel */
        $(".deal_awl").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            controlsClass: "deal-controls",
            nav: true,
            navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:1
                }
            }        
        });
        
        /* Small Blog Owl Carousel */
        $(".small_blog_owl_wrapper").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            controlsClass: "small-controls",
            nav: true,
            navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                768:{
                    items:1
                }
            }        
        });
        
        /* Team Member Owl Carousel */
        $(".team_member_wrapper").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            autoplay: false,
            controlsClass: "member-controls",
            nav: true,
            navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items: 1
                },
                768:{
                    items: 3
                },
                970:{
                    items: 4
                }
            }        
        });
        
        /* toggle menu */
           $('.show-submenu').on('click', function(){
            $(this).parent().find('.submenu').toggleClass('submenu-active'); 
            $(this).toggleClass('submenu-active');  
            return false;  
        });

        
        /* price slider */
        $(function() {
          $( "#slider-range" ).slider({
           range: true,
           min: 0,
           max: 700,
           values: [ 50, 500 ],
           slide: function( event, ui ) {
            $( "#min-amount" ).val( "£" + ui.values[ 0 ] );
            $( "#max-amount" ).val( " £" + ui.values[ 1 ] );
           }
          });
          $( "#min-amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) );
          $( "#max-amount" ).val( "£" + $( "#slider-range" ).slider( "values", 1 ) );
	   });	
        
        /* Elevatezoom */
       $("#zoom_01").elevateZoom();
       $("#zoom_02").elevateZoom();
       $("#zoom_03").elevateZoom();
        
        /* MeanMenu Js */
        jQuery('nav#dropdown').meanmenu();
    
    });

        jQuery(window).load(function(){
        
        /* newsletter section */
           $(".close").on('click', function() {
            $(".newsletter_popup_area").addClass("hide");
            $("body").removeClass("newsletter_open");
        });        
    });

}(jQuery));	
/*----------------------

    Template Name: Gethost Htlml template
    Template URI: http://hastech.company/
    Description: This is html5 template
    Author: Hastech
    Author URI: http://hastech.company/
    Version: 1.0
---------------------------*/
(function($) {
    "use strict";
    
    /*-------------------------------------------
    	 jQuery MeanMenu
    --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();
    
    /*-------------------------------------------
    	 wow js active
    --------------------------------------------- */
    new WOW().init();
	
    /*----------------------------
       stickey menu
    ----------------------------*/
    $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 265) {
		$(".sticky-header").removeClass("sticky");
	   }else{
		$(".sticky-header").addClass("sticky");
           }
    });

    /*-------------
        Erctor slider active
    -----------------*/
    /*----------------------
		Nivo slider activation
	----------------------*/
	$('#mainSlider').nivoSlider({
        directionNav: false,
        animSpeed: 1000,
        slices: 10,
        pauseTime: 1000,
        pauseOnHover: false,
        controlNav: true,
        manualAdvance: true,
        prevText: '<i class="fa fa-chevron-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-chevron-right nivo-next-icon"></i>'
    });
    
    
    
    
     $('.testimonial-list').slick({
    	   arrows: false,
		   slidesToShow: 1,
		   dots: true,
		   customPaging: function(slider, i) {
                return '<a href="javascript:void(0)">' + (i + 1) + '</a>';
            },
		   responsive: [
            {
			  breakpoint: 350,
			  settings: {
				centerPadding: '20px',
			  }
			}
		  ]
  	});
    
    $(".project_list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1]
    });
    
    
    
    var pagination = $('.project_list .owl-page');

    pagination.each(function() {
    var index = $(this).index();
    $(this).text(index + 1);
    });

    $('.brand-list').slick({
    	   arrows: false,
		   slidesToShow: 5,
		   dots: false,
		   responsive: [
            {
			  breakpoint: 479,
			  settings: {
				centerPadding: '20px',
                slidesToShow: 1
			  }
			},
            {
			  breakpoint: 768,
			  settings: {
				centerPadding: '20px',
                slidesToShow: 2
			  }
			},
            {
			  breakpoint: 991,
			  settings: {
				centerPadding: '20px',
                slidesToShow: 3
			  }
			}
		  ]
  	});
    
   /*----------------------
		MagnificPopup activation
	----------------------*/
    $('.project-view a, .thumbnail-view a').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });	
    $('.video-view a').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });
    /*--------------------------
        Counter Up
    ---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 3000
    });
    
    /*-------------------------------------------
    	14. Isotope masonry active
    --------------------------------------------- */
   if ($.fn.isotope) {

        $(".our-project-list").isotope({
            filter: '*',
            layoutMode: 'packery',
            itemSelector: '.single-project'
        });    
        $('.project-menu-filter li').on('click', function () {
            $(".project-menu-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".our-project-list").isotope({
                filter: selector,
                /*layoutMode: 'vertical',
                vertical: {
                  horizontalAlignment: 0.5,
                },*/
                animationOptions: {
                    duration: 0,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

    };

    /*-------------------------------------------
    	scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*---------------------
        Circular Bars - Knob
    --------------------- */	
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');
	
		  $this.knob({
			'draw' : function () { 
			  $(this.i).val(this.cv + '%')
			}
		  });
		  
		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
	  }	
    
    
    
    
      

    




    
})
(jQuery);





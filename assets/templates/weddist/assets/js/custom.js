(function ($) {
    'use strict';
    $.fn.elExists = function() {
        return this.length > 0;
    };
    
    /*--- 
        Clickable menu active 
    -------------------------------*/
    const slinky = $('#menu').slinky()
    
    /*--
        sidebarCart 
    ------------------------------*/
    function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active a'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();
    
    
    
    $(window).on('load', function () {
		dataBackgroundImage();
	});
    /*--
        Data Background Image 
    -----------------------------------*/
    function dataBackgroundImage(){
        $('.bg-image , .bg-image-two').each(function(){
            var $this = $(this),
                $image = $this.data('bgimage');

            $this.css({
                'background-image': 'url(' + $image + ')'
            });
        });
    }dataBackgroundImage();
    
    
    /*--
        Slider Height
	--------------------------------*/
    
    var $headerMedia = $('header');

    function heroSliderMargin() {
        var headerHeight = ( $headerMedia.elExists() ) ? $headerMedia[0].getBoundingClientRect().height : 0;
		if ($('.header-transparant').length) {
			$('.single-slide-one , #gmap, #hero-map , #hero-map1').css({
				'min-height': '100vh'
			});
		} else {
			
			$('.single-slide-one , #gmap , #hero-map , #hero-map1').css({
				'min-height': 'calc(100vh - ' + headerHeight + 'px)'
			});
		}
	}
    $(window).on('load', function(){
        heroSliderMargin();
    });
    
    $(window).on('resize', function(){
        heroSliderMargin();
    });
    
    /*--
        Hero Slider
    --------------------------------------------*/
    var heroSlider = $('.hero-slider-one');
    heroSlider.slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: false,
              }
            }
        ]
    });
    
    /*--
        Resent program Slider
    --------------------------------------------*/
    var resentProgram = $('.resent-program-active');
    resentProgram.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1 ,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /*--
        Popular venues Slider
    --------------------------------------------*/
    var popularVenues = $('.popular-venues-active');
    popularVenues.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1 ,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /*--
        most Popular venues Slider
    --------------------------------------------*/
    var popularVenues = $('.most-popular-venues-active');
    popularVenues.slick({
        rows: 2,
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /*--
        Popular venues Slider
    --------------------------------------------*/
    var popularVenues = $('.popular-venues-active-3');
    popularVenues.slick({
        rows: 2,
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1 ,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--
        Testimonial Slider
    --------------------------------------------*/
    var testimonialActive = $('.testimonial-active');
    testimonialActive.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /*--
        Latest Blog Slider
    --------------------------------------------*/
    var latestBlog = $('.latest-blog-active');
    latestBlog.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1 ,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--
        venues Details Slider
    --------------------------------------------*/
    var venuesDetailsAtv = $('.venue-slider');
    venuesDetailsAtv.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow:true,
        nextArrow: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
    });
    
    /*--
        Testimonial Slider Active
    --------------------------------------------*/
	var testimonialSlider = $('.work-proces-active');

	testimonialSlider.on('init afterChange', function(e){
		$(this).find('.slick-slide.slick-active').first().addClass('first-elem');
		$(this).find('.slick-slide.slick-active').last().addClass('last-elem');
		$(this).find('.slick-slide:not(.slick-active)').removeClass('first-elem last-elem');
		$(this).find('.slick-slide.slick-active.slick-current').removeClass('first-elem last-elem');
        
	});

	testimonialSlider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        dots: false,
        arrows: true,
        prevArrow: false,
        nextArrow: false,
        adaptiveHeight: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
        
    /*--
        Nice Select
    ------------------------*/
    $('.nice-select').niceSelect()

    
    /*--
	   Price Range Slider
    ------------------------*/
    $('#price-range').slider({
        range: true,
        min: 0,
        max: 10000,
        step: 10,
        values: [650, 5000],
       slide: function( event, ui ) {

        $('.ui-slider-handle:eq(0)').html( '<span>' + '$' + ui.values[ 0 ] + '</span>');
        $('.ui-slider-handle:eq(1)').html( '<span>' + '$' + ui.values[ 1 ] + '</span>');

       }
    });
    $('.ui-slider-handle:eq(0)').html( '<span>' + '$' + $( "#price-range" ).slider( "values", 0 ) + '</span>' );
    $('.ui-slider-handle:eq(1)').html( '<span>' + '$' + $( "#price-range" ).slider( "values", 1 ) + '</span>' );    

 
    /*--
        Masonary
    ----------------------*/
    $(window).on('load', function(){
		var $masonry = $('.masonary-blog-layout');
		var $grid = $('.grid-item');
		$grid.hide();

		$masonry.imagesLoaded({
			background: true
		}, function () {
			$grid.fadeIn();
			$masonry.masonry({
				itemSelector: '.grid-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		}); 
    })
	 

    /*--
        showlogin toggle function
    --------------------------*/
    $( '#showlogin' ).on('click', function() {
        $('#checkout-login' ).slideToggle(500);
    }); 

    /*--
        showcoupon toggle function
    --------------------------*/
    $( '#showcoupon' ).on('click', function() {
        $('#checkout-coupon' ).slideToggle(500);
    });

    /*--
        Checkout 
    --------------------------*/
    $("#chekout-box").on("change",function(){
        $(".account-create").slideToggle("100");
    });

    /*-- 
        Checkout 
    ---------------------------*/
    $("#chekout-box-2").on("change",function(){
        $(".ship-box-info").slideToggle("100");
    }); 
  /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // Magnific Popup Video
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
    /*--
        ScrollUp Active
    -----------------------------------*/
    $.scrollUp({
        scrollText: '<i class="ti-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

/*--
    Google Map
-----------------------------------*/

// Google Map For Single Property Map
$('.googleMap-2,.contact-map').each(function(){
    if($(this).length){
        var $this = $(this);
        var $lat = $this.data('lat');
        var $long = $this.data('long');
        function initialize() {
            var mapOptions = {
                zoom: 14,
                scrollwheel: false,
                center: new google.maps.LatLng($lat, $long),
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#F1F1F1"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "color": "#F1F1F1"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#F1F1F1"
                            },
                            {
                                "weight": 1.8
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ECECEC"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#FF5151"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#fff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#F1F1F1"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#F9F9F9"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#B7B7B7"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#8b8b8b"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#EBEBEB"
                            }
                        ]
                    }
                ]  
            };
            var map = new google.maps.Map(document.getElementById('googleMap-2'), mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: 'assets/image/icon/map-icon.png',
                map: map,
                animation: google.maps.Animation.BOUNCE
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
});
    
 

    
})(jQuery);

(function ($) {
    "use strict";
/*--
Commons Variables
-----------------------------------*/
var windows = $(window);
    
/*--
    Menu Sticky
-----------------------------------*/
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});
    
/*--
    Header Search 
-----------------------------------*/
var $headerSearchToggle = $('.header-search-toggle');
var $headerSearchForm = $('.header-search-form');
    
$headerSearchToggle.on('click', function() {
    var $this = $(this);
    if(!$this.hasClass('open')) {
        $this.addClass('open').find('i').removeClass('icofont-search-2').addClass('icofont-close-line');
        $headerSearchForm.slideDown();
    } else {
        $this.removeClass('open').find('i').removeClass('icofont-close-line').addClass('icofont-search-2');
        $headerSearchForm.slideUp();
    }
});
    
/*--
    Youtube Background Video 
-----------------------------------*/
$(".player").YTPlayer();

/*--
    Mobile Menu
-----------------------------------*/
var mainMenuNav = $('.main-menu');
mainMenuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});

/*--
    Sliders
-----------------------------------*/
// Hero Slider
$('.hero-slider').slick({
    infinite: true,
    fade: true,
    dots: false,
    prevArrow: '<button class="slick-prev"><i class="icofont-long-arrow-left"></i>Pre</button>',
    nextArrow: '<button class="slick-next">Next<i class="icofont-long-arrow-right"></i></button>',
    responsive: [
        {
        breakpoint: 992,
            settings: {
                dots: false,
                arrows: true,
            }
        },
    ]
});
// Hero Slider Three
$('.hero-slider-three').slick({
    infinite: true,
    arrows: false,
    fade: false,
    dots: false,
    autoplaySpeed: 1000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Hero Slider Three
$('.hero-game-slide').slick({
    infinite: true,
    arrows: false,
    fade: false,
    dots: false,
    autoplaySpeed: 1000,
    autoplay: false,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerPadding: '25%',
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerPadding: '0',
            }
        },
    ]
});  
    
// Testimonial Slider (Content)
$('.testimonial-slider-content').slick({
    infinite: true,
    arrows: false,
    fade: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
});
// blog image Slider (Content)
$('.blog-img-slider').slick({
    infinite: true,
    arrows: true,
    fade: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>'
});
// Featured Slider
$('.featured-slide').slick({
    infinite: true,
    arrows: false,
    fade: false,
    dots: false,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Upcoming Game Slider
$('.upcoming-game-slider').slick({
    infinite: true,
    arrows: false,
    fade: false,
    dots: false,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Game Slider
$('.game-slide').slick({
    arrows: true,
    row: 2,
    fade: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Video Slider
$('.video-slider-active').slick({
    arrows: true,
    autoplay: false,
    dots: false,
    autoplaySpeed: 800,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true,
    prevArrow: '<button class="slick-prev"><i class="icofont-long-arrow-left"></i>Pre</button>',
    nextArrow: '<button class="slick-next">Next<i class="icofont-long-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
            }
        },
    ]

});


    
    
// Forum Note Active   
$('#summernote').summernote({
    height: 410,
    minHeight: null,
    maxHeight: null, 
    focus: true 
});    

// Nice Select Active
$('select').niceSelect();   
    
/*----------------------------------- 
    Game Tab Slider Active 
--------------------------------------*/  
$('.game-image-large').each(function () {
    var $this = $(this);
    var $thumb = $this.siblings('.game-image-thumbs');
    $this.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        centerMode: false,
        centerPadding: 0,
        asNavFor: $thumb,
    });
});
$('.game-image-thumbs').each(function () {
    var $this = $(this);
    var $details = $this.siblings('.game-image-large');
    $this.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
        asNavFor: $details,
        responsive: [
            {
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 600,
                settings: {}
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
          ]

    });
}); 
    
// gallery Slider
$('.gallery-slider-2-column').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="icofont-long-arrow-up"></i></button>',
    nextArrow: '<button class="slick-next"><i class="icofont-long-arrow-down"></i></button>',
    responsive: [
        {
            breakpoint: 1501,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
    
// One PageNav JS
    $('.main-menu ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        offsetHeight: 80,
    });


// ScrollUp Active
    
$.scrollUp({
    scrollText: '<i class="fa fa-angle-double-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});

/*----- 
	Shipping Form Toggle
--------------------------------*/ 
$('[data-shipping]').on('click', function(){
    if( $('[data-shipping]:checked').length > 0 ) {
        $('#shipping-form').slideDown();
    } else {
        $('#shipping-form').slideUp();
    }
})

/*----- 
	Payment Method Select
--------------------------------*/
$('[name="payment-method"]').on('click', function(){
    
    var $value = $(this).attr('value');

    $('.single-method p').slideUp();
    $('[data-method="'+$value+'"]').slideDown();
    
}) 

/*--
	Wow Active
-----------------------------------*/
    new WOW().init();
    
/*--
    Magnific Popup
-----------------------------------*/
$('.image-popup').magnificPopup({
    type: 'image',
});
$('.gallery-popup').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true,
    },
});
$('.video-popup').magnificPopup({
    type: 'iframe',
});
   
/*--
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}
    
})(jQuery);	
(function ($) {
    "use strict";

/*--
    Mobile Menu
------------------------*/
$('.ht-main-menu nav').meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.ht-mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});

/*-- DeopDown Menu --*/
$('.sub-menu, .mega-menu').hide();
$('li').hover(
  function() {
    if( $(this).children('ul').size() > 0 && $(this).children().hasClass('sub-menu') || $(this).children().hasClass('mega-menu') ) {
        $(this).children().stop().slideDown(400);
    }
  }, function() {
    $(this).children('.sub-menu, .mega-menu').stop().slideUp(300);
  }
);
if( $(window).width() < 767 ) {
    $('.sub-menu, .mega-menu').removeClass('sub-menu mega-menu');
}


/*--
    Testimonial Slider
--------------------------------------------*/
    
/*-- Testimonial Slider Two --*/
$('.ht-testimonial-slider-two').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScoll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
});



/*--
	Isotop with ImagesLoaded
-----------------------------------*/
var isotopFilter = $('.isotop-filter');
var isotopGrid = $('.isotop-grid');
var isotopGridItem = '.isotop-item';

isotopFilter.find('button:first-child').addClass('active');

/*-- Images Loaded --*/
isotopGrid.imagesLoaded(function () {

    /*-- init Isotope --*/
    var initial_items = isotopGrid.data('show');
    var next_items = isotopGrid.data('load');
    var loadMoreBtn = $('.load-more-toggle');

    var $grid = isotopGrid.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'masonry',
    });


    /*-- Isotop Filter Menu --*/
    isotopFilter.on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        isotopFilter.find('button').removeClass('active');
        $(this).addClass('active');

        // use filterFn if matches value
        $grid.isotope({filter: filterValue});
        updateFilterCounts();

    });

    /*-- Update Filter Counts --*/
    function updateFilterCounts() {

        // get filtered item elements
        var itemElems = $grid.isotope('getFilteredItemElements');

        if (isotopGridItem.hasClass('hidden')) {
            isotopGridItem.removeClass('hidden');
        }

        var index = 0;

        $(itemElems).each(function () {
            if (index >= initial_items) {
                $(this).addClass('hidden');
            }
            index++;
        });

        $grid.isotope('layout');
    }

    /*-- Function that Show items when page is loaded --*/
    function showNextItems(pagination) {

        var itemsMax = $('.hidden').length;
        var itemsCount = 0;

        $('.hidden').each(function () {
            if (itemsCount < pagination) {
                $(this).removeClass('hidden');
                itemsCount++;
            }
        });

        if (itemsCount >= itemsMax) {
            loadMoreBtn.hide();
        }

        $grid.isotope('layout');
    }

    /*-- Function that hides items when page is loaded --*/
    function hideItems(pagination) {

        var itemsMax = $(isotopGridItem).length;
        var itemsCount = 0;

        $(isotopGridItem).each(function () {
            if (itemsCount >= pagination) {
                $(this).addClass('hidden');
            }
            itemsCount++;
        });

        if (itemsCount < itemsMax || initial_items >= itemsMax) {
             loadMoreBtn.hide();
        }

        $grid.isotope('layout');
    }

    /*-- Function that Load items when Button is Click --*/
    loadMoreBtn.on('click', function (e) {
        e.preventDefault();
        showNextItems(next_items);
    });

    hideItems(initial_items);

    
    
});
    
/*--
	Tilt Hover Effects 
-----------------------------------*/  
(function() {
    var tiltSettings = [
    {},
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 5, y: -5, z: 0},
                rotation : {x: 0, y: 0, z: 6},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) { 
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
    }

    // Preload all images.
    $('.tilter').imagesLoaded(function () {
        init();
    });

})();


})(jQuery);	
(function ($) {
 "use strict";

    /* menu hide/open */

    $('.mainmenu-open button').on('click', function(){
        $('.mainmenu').toggleClass('open');
        $('.mainmenu-open button i').toggleClass('fa-bars');
        $('.mainmenu-open button i').toggleClass('fa-times');
        $('.header-area').toggleClass('h-bg-color');
    });

    /* SmoothSroll */

    $('li.smooth-menu a').on('click', function (event) {
        var $anchor =$(this);
        var headerH ='90';
        $('html, body').stop().animate({
            'scrollTop': $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
    /* scrollspy */
    $('body').scrollspy({ target: '.navbar-collapse',offset: 95 });

    /* TOP Menu Stick */

    var s = $("#sticker");
    var pos = s.position();
    $(window).on('scroll',function() {
        var windowpos = $(window).scrollTop();
        if (windowpos > pos.top) {
        s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });

    /* mobile menu */

    $('.mobile-menu').meanmenu();


    /* mixitup */

    $('.tour-place').mixItUp();

    /* honeymoon owl carousel */

    $(".honeymoon-slider").owlCarousel({
        items : 1,
        navigation : true,
        navigationText : ["","<i class='fa fa-angle-left'></i>"],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768,1]
    });

    /* testimonial owl carousel */

    $(" .testimonial-slider").owlCarousel({
        loop:true,
        items : 1,
        transitionStyle : "backSlide",
        navigation : true,
        navigationText : ["",""],
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet : [768,1]
    });

    /* partner owl carousel */

    $(" .partners-company").owlCarousel({
        loop:true,
        items : 5,
        transitionStyle : "backSlide",
        navigation : true,
        navigationText : ["",""],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet : [768,3]
    });

    /* partner owl carousel */

    $(" .instragram-area").owlCarousel({
        loop:true,
        items : 5,
        transitionStyle : "backSlide",
        navigation : true,
        navigationText : ["",""],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet : [768,1]
    });

    /* venobox */

    $('.venobox').venobox();


    /* Scroll to Top */
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 300) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scrollUp').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

})(jQuery);

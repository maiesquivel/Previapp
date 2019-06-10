$(document).ready(function() {

    // Fade in bubbles
    var $element = $(".floating-shapes")
    $($element).delay(1000).fadeIn("slow");

    // hide nav bg after click
    $('.collapse a').click(function(){
        var $element = $(".navbar .collapse");
        var $nav = $(".change-background");
        $($element).collapse('hide');
        $nav.removeClass('inMobile');
        $nav.removeClass('outMobile');
        var $parent = $(".navbar-toggler");
        $($parent).removeClass('open');
    });

    // hide/show nav bg on mobile
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('open');
        var $element = $(".navbar-toggler");
        var $nav = $(".change-background");
        if ( $element.attr( 'aria-expanded' ) == 'false') {
            $nav.addClass('inMobile');
            $nav.removeClass('outMobile');
        } else {
            $nav.removeClass('inMobile');
            $nav.addClass('outMobile');
        }
    });

    // remove collased on screen width
    var removeMobile = function() {
        var screenWidth = document.body.clientWidth;
        if (screenWidth > 991) {
            var $element = $(".navbar-toggler");
            var $nav = $(".change-background");
            var $navCol = $(".navbar-collapse")
            $($element).addClass('collapsed');
            $($element).attr("aria-expanded","false");
            $($element).removeClass('open');
            $nav.removeClass('inMobile');
            $nav.removeClass('outMobile');
            $navCol.removeClass('show');
            
        };
    };
    $(window).resize(function(){
        removeMobile();
    });
    removeMobile();

    // Call function hide/show nav bg on scroll
    onScroll();
});

$(document).scroll(function () {
    // Call function hide/show nav bg onScroll
    onScroll();

    // Call function onScrollToTop
    onScrollToTop();
});

function onScroll () {
    var $nav = $(".change-background");
    if( $(this).scrollTop() > 150 ){
        $nav.addClass('inScrolled');
        $nav.removeClass('outMobile');
        $nav.removeClass('outScrolled');
    }
    if( $(this).scrollTop() < 100 ){
        $nav.removeClass('inScrolled');
        $nav.addClass('outScrolled');
    }
};

function onScrollToTop () {
    var $element = $(".scroll-top");
    if( $(this).scrollTop() > 500 ){
        $($element).fadeIn();
    } else {
        $($element).fadeOut();
    };
};
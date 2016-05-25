/**
 * Created by lirui on 16/5/24.
 */

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['first', 'second', 'third', 'forth', 'fifth'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'forthSlide', 'fifthSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        afterLoad: function(anchorLink, index) {

            if (index == 1) {
                $('#one img').stop(true, true).fadeIn(2500);
                $('#one .oneText').stop(true, true).delay(1000).fadeIn(2500);
            } else if (index == 2) {
                $('#two .code').stop(true, true).animate({height: '240px'}, 3000, function () {
                    $('#two .picContainer').stop(true, true).animate({height: '220px'}, 2000);
                });
            } else if (index == 3) {
                
            }
        },

        onLeave: function(index, nextIndex, direction) {
            if (index == 1) {
                $('#up').show();
            }
            if (index == 6) {
                $('#down').show();
            }

            if (index == 2 && direction == 'up') {
                $('#up').hide();
            }
            if (index == 5 && direction == 'down') {
                $('#down').hide();
            }

            if (index == 1) {
                $('#one img').stop(true, true).hide();
                $('#one .oneText').stop(true, true).hide();
            } else if (index == 2) {
                $('#two .code').stop(true, true).height(0);
                $('#two .picContainer').stop(true, true).height(0);
            }
        }
    });

    $('#up').click(function () {
        $.fn.fullpage.moveSectionUp();
    });

    $('#down').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
});
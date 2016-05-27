/**
 * Created by lirui on 16/5/24.
 */

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', '', '', '', '', '', ''],
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
        recordHistory: false,

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
                $('#tac2016 img').stop(true, true).fadeIn(2500);
                $('#tac2016 .oneText').stop(true, true).delay(1000).fadeIn(2500);
            } else if (index == 2) {
                $('#tac img').stop(true, true).animate({left: '0'}, 1000);
            } else if (index == 3) {
                $('#workshop .code').stop(true, true).animate({height: '240px'}, 3000, function () {
                    $('#workshop .picContainer').stop(true, true).animate({height: '400px'}, 2000);
                });
            } else if (index == 4) {
                var delayArray = [3.5, 3, 1.5, 1, 2.5, 2, 0.5, 4, 0];
                $('#technology img').each(function (index) {
                    $(this).css('transition', '');
                    $(this).removeClass('drop').addClass('up');
                    $(this).css('transition', 'transform 1.5s ease ' + delayArray[index] + 's');
                    $(this).removeClass('up').addClass('drop');
                });
                $('#technology h3:last').stop(true, true).delay(6000).fadeIn(1000);
            } else if (index == 7) {
                $('#welcome h1').stop(true, true).fadeIn(2500);
                $('#welcome h2').stop(true, true).delay(1000).fadeIn(2500);
            }
        },

        onLeave: function(index, nextIndex, direction) {

            if (index == 1) {
                $('#tac2016 img').stop(true, true).hide();
                $('#tac2016 .oneText').stop(true, true).hide();
            } else if (index == 2) {
                $('#tac img:even').stop(true, true).css({'left': '1500px'});
                $('#tac img:odd').stop(true, true).css({'left': '-1500px'});
            } else if (index == 3) {
                $('#workshop .code').stop(true, true).height(0);
                $('#workshop .picContainer').stop(true, true).height(0);
            } else if (index == 4) {
                $('#technology img').each(function () {
                    $(this).css('transition', '');
                    $(this).removeClass('drop').addClass('up');
                });
                $('#technology h3:last').stop(true, true).fadeOut(0);
            } else if (index == 7) {
                $('#welcome h1').stop(true, true).hide();
                $('#welcome h2').stop(true, true).hide();
            }
        }
    });
});
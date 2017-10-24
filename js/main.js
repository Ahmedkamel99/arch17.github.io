
$(function () {

    'use strict';

    // Our Auto Slider Code

    (function autoSlider() {

        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();
                });
            }
        });
    }());
            $('.chosse  li').click(function () {
         // Add Selected Class To Active Link
         $(this).addClass('active').siblings().removeClass('active');
         // Hide All Divs
        });
});

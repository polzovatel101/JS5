/**
 * Created by Илья Яновой on 08.04.2016.
 */
$(function() {
    $('.jcarousel').jcarousel();

    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
    
    $("#mySelect").heapbox();
});

$(function () {
    var $withSubmenu = $('.with_submenu');

    $withSubmenu.on('mouseenter', function () {
        console.log(this);
        $(this).find('.submenu').animate({ backgroundColor: '#fff'}, 300).first().fadeIn(300);
    });

    $withSubmenu.on('mouseleave', function () {
        $(this).children('.submenu').first().fadeOut(100);
    });
});

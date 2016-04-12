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
    var $withSubsubmenu = $('.with_subsubmenu');
    var $submenu = $('.submenu');
    var $subsubmenu = $('.subsubmenu');

    $withSubmenu.on('mouseenter', function () {
        console.log(this);
        $submenu.show(300); //animate({display: 'block', backgroundColor: 'green'}, 150); //attr('style', 'display: block');
    });

    $withSubmenu.on('mouseleave', function () {
        $submenu.hide(100);//removeAttr('style', 'display: block');
    });

    $withSubsubmenu.on('mouseenter', function () {
        console.log(this);
        $subsubmenu.show(300);//attr({'style': 'display: block'});
    });

    $withSubsubmenu.on('mouseleave', function () {
        $subsubmenu.hide(100);//removeAttr('style', 'display: block');
    })
});

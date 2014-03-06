/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();
(function($) {
    var numChild = $('.carousel-inner').children('.item').length;
    var fileName = '';
    for (var i=1;i<=numChild;i++) {
        if (i.toString().length < 2) {
            fileName = '0'+i+'.jpg';
        } else {
            fileName = i+'.jpg';
        }
        var imgFile = 'img/'+fileName;
//        $('.carousel-inner .item:nth-child('+i+')').addClass('item-bg');
        $('.carousel-inner .item:nth-child('+i+')').css('background-image', 'url("'+imgFile+'")');
    }
    
    $('.carousel').carousel({
        interval: false
    });
    
    $('#mainMenu').mainMenu();
    
    $('#mainCarousel').carousel(2);
})(jQuery);

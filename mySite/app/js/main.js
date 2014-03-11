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

    $('#mainCarousel').on('slid.bs.carousel', function(evt) {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getActiveIndex();
  var indexList = $(this).find('.carousel-indicators li');
  $.each (indexList, function() {
console.log(indexList.data('slideTo'));      
  });
 //        $(this).find('.carousel-indicators li').data('slideTo');
//console.log(listCount); 

    });
    function copyIndicator() {
//        $('.my-carousel-indicator').data('slide-to');
return $('#mainCarousel').find('.carousel-indicators .active').data('slideTo');
    }
})(jQuery);

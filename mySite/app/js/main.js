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
        var $this = $(this);
  var carouselData = $this.data('bs.carousel');
  var currentIndex = carouselData.getActiveIndex();
  $('a.nav-control').each(function(idx) {
//console.log(idx);
if (idx === currentIndex) {
//console.log($(this).attr('class'));
$(this).addClass("active");
} else {
    $(this).removeClass("active");
}
  });
 //        $(this).find('.carousel-indicators li').data('slideTo');
//console.log(listCount); 

    });
    function copyIndicator() {
//        $('.my-carousel-indicator').data('slide-to');
return $('#mainCarousel').find('.carousel-indicators .active').data('slideTo');
    }
    
    
// Object Test
    var Test = function() {
        this.options = '';

this.init = function(opt) {
    this.options = opt;
};

        this.CLog = function() {
            console.log("Inside Test Option: " + this.options);
        };

    };
/*
    Test.prototype.CLog = function() {
        console.log("Test Option:" + this.option);
    };
*/    
    var thisTest = new Test();
    thisTest.init('15');
    thisTest.CLog();
    var Test2 = function(){};
    Test2.prototype = new Test();
    Test2.prototype.constructor = Test2;
    var thatTest = new Test2();
    thatTest.init('24');
    thatTest.CLog();
        
})(jQuery);

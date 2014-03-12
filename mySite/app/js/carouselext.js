/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();

(function($) {
    $.fn.carouselExt = function(opt) {
        var target = opt['targetID'];
        var interval = opt['interval'];
        
        $('#'+target).carousel({
            interval: interval
        });
        
        if ("onhashchange" in window) {
            window.onhashchange = function() {
//console.log(window.location.hash.substr(1) in opt);
                if (window.location.hash.substr(1) in opt) {
                    var page = opt[window.location.hash.substr(1)];
//console.log("Page :"+page);
                    $('#'+target).carousel(page);
                }
            };
        }
    };
})(jQuery);

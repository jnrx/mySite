/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();
(function($) {
    $.fn.hideMenu = function() {
       $(this).css('left', '-200px');
    };

    $.fn.showMenu = function() {
       $(this).css('left', '0px');
    };
})(jQuery);

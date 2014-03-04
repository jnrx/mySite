/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();
(function($) {
    $.fn.mainMenu = function() {
        $(this).hideMenu();
        $(this).on({
            mouseenter: function() {
                $(this).showMenu();
            }, mouseleave: function() {
                $(this).hideMenu();
            }
        });
    };
    $.fn.hideMenu = function() {
//       $(this).css('left', (0 - $(this).width()));
        $(this).animate({"left": (0 - $(this).width())});
    };

    $.fn.showMenu = function() {
//       $(this).css('left', '0px');
        $(this).animate({"left": "0px"});
    };
})(jQuery);

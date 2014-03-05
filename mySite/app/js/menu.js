/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();
(function($) {
    $.fn.mainMenu = function() {
        $(this).showMenu();
        $(this).on({
            mouseenter: function() {
                $(this).showMenu();
            },
            mouseleave: function() {
                $(this).hideMenu();
//            },
//            click: function() {
//                $(this).toggle(function() {$(this).showMenu();}, function(){$(this).hideMenu();});
            }
            

        });
    };
    $.fn.hideMenu = function() {
        $(this).animate({"left": (0 - $(this).width())});
    };

    $.fn.showMenu = function() {
        $(this).animate({"left": "0px"});
    };
})(jQuery);

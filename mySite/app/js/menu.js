/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();
(function($) {
    var menuDisplay = 0;
    var thisMenu = $(this);
    $.fn.mainMenu = function() {
        $(this).hideMenu();
        $(this).on({
/*            mouseenter: function() {
                $(this).showMenu();
            },
            mouseleave: function() {
                $(this).hideMenu();
            },
*/            click: function() {
                switch(menuDisplay) {
                    case 0:
                        $(this).showMenu();
                        break;
                    case 1:
                        $(this).hideMenu();
                        break;
                    
                }
            }
        });
        $("div:not(.navbar-wrapper)").on({
            click: function() {
                $('.mainMenu').hideMenu();
            }
        });
    };
    $.fn.hideMenu = function() {
        menuDisplay = 0;
        $(this).animate({"left": (0 - $(this).width())});
    };

    $.fn.showMenu = function() {
        menuDisplay = 1;
        $(this).animate({"left": "0px"});
   };
})(jQuery);

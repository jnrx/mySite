/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();

(function($) {
    $.fn.mainMenu = function() {
        var myID = "#" + $(this).attr("id");
        $(myID).showMenu();

        $("body").on('click', function(event) {
            event.stopPropagation();
            if ($(this).find(myID).hasClass("nav-open")) {
                $(this).find(myID).hideMenu();
            }
        });

        $("body").on('click', myID, function(event) {
            event.stopPropagation();
            if ($(this).hasClass("nav-open")) {
                $(this).hideMenu();
            } else {
                $(this).showMenu();
            }
        });
    };
    $.fn.hideMenu = function() {
        $(this).removeClass("nav-open");
        $(this).addClass("nav-close");
    };

    $.fn.showMenu = function() {
        $(this).removeClass("nav-close");
        $(this).addClass("nav-open");
   };
})(jQuery);

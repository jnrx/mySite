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
        $(window).on("resize load", function() {
//console.log($("body").find(".navbar-toggle").css("display"));
            if ($("body").find(".navbar-toggle").css("display") === "none") {
//console.log("myID="+myID);
                $("body").off();
                $(myID).hideMenu();

                $("body").on('click', function(event) {
//console.log("Body Clicked");
                    event.stopPropagation();
                    if ($(this).find(myID).hasClass("nav-open")) {
                        $(this).find(myID).hideMenu();
                    }
                });

                $("body").on('click', myID, function(event) {
//console.log("Menu Clicked");
                    event.stopPropagation();
                    if ($(this).hasClass("nav-open")) {
                        $(this).hideMenu();
                    } else {
//console.log("Menu Closed");
                        $(this).showMenu();
                    }
                });
//            console.log("this is none");
           } else {
               $("body").off();

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

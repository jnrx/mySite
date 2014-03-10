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
            if ($("body").find(".navbar-tab").css("display") === "block") {
//console.log("myID="+myID);
                $("body").off();
                $(myID).hideMenu();

                $(".mainCanvas").on('click', function(event) {
//console.log("Canvas Clicked");
                    if ($("body").find(myID).hasClass("nav-open")) {
                        $("body").find(myID).hideMenu();
//                        event.stopPropagation();
                    }
                });

                $("body").on('click', myID, function(event) {
//console.log("Menu Clicked");
                    if ($(this).hasClass("nav-open")) {
                        $(this).hideMenu();
//                        event.stopPropagation();
                    } else {
//console.log("Menu Closed");
                        $(this).showMenu();
//                        event.stopPropagation();
                    }
                });
           } else {
//console.log("this is none");
//               $("body").off();

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

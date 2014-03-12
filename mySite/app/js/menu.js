/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();

(function($) {
    $.fn.mainMenu = function(opt) {
        var $this = $(this);
        $(window).on("resize load", function() {
//console.log($("body").find(".navbar-toggle").css("display"));
            if ($this.find(".navbar-tab").css("display") === "block") {
//console.log("myID="+myID);
                $this.off();
                $this.hideMenu();

                $("body").find(".mainCanvas").on('click', function(event) {
//console.log("Canvas Clicked");
                    if ($this.hasClass("nav-open")) {
                        $this.hideMenu();
//                        event.stopPropagation();
                    }
                });
//console.log($this.find('.navbar-tab').attr('class'));
                $this.find(".navbar-tab").on('click', function() {
//console.log("Menu Clicked");
                    if ($this.hasClass("nav-open")) {
                        $this.hideMenu();
//                        event.stopPropagation();
                    } else {
//console.log("Menu Closed");
                        $this.showMenu();
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

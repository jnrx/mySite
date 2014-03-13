/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

jQuery.noConflict();

(function($) {
    $.fn.mainMenu = function() {
        var $this = $(this);
/*
        var chkNavTab = function() {
            if ($this.find(".navbar-tab").css("display") === "block") {
                return true;
            } else {
                return false;
            }
        };
*/        
        if ($this.find(".navbar-tab").css("display") === "block") {
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
//console.log("this is none");
//               $("body").off();

        }
    };
    $.fn.hideMenu = function() {
        $(this).find("img").attr("src", "img/al2r.gif");
        $(this).removeClass("nav-open");
        $(this).addClass("nav-close");
    };

    $.fn.showMenu = function() {
        $(this).find("img").attr("src", "img/ar2l.gif");
        $(this).removeClass("nav-close");
        $(this).addClass("nav-open");
   };
})(jQuery);

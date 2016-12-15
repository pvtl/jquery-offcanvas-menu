/*
 * jQuery Off Canvas Menu v1.2
 * http://codepen.io/mcnamee/pen/Wbvoew
 * Copyright (c) 2014 Matt Mcnamee
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
  $.fn.offCanvasMenu = function(options) {

    // Default Settings
    var settings = $.extend({
      menu_ul: '.offCanvas_menu',
      position: 'right'
    }, options ),
       this_btn = this,
       this_btn_id = this.attr('id'),
       respective_menu = $('div[data-menu="' + this_btn_id +'"]');

    // Set the side which it'll slide in ==========================================
    if( settings.position == 'left' ) {
      respective_menu.addClass('offCanvas_left');
    }
    
    // Style the hamburger menu ==========================================
    this.html('<span class="offCanvas_trigger_item"></span><span class="offCanvas_trigger_item"></span><span class="offCanvas_trigger_item"></span>');
    this.addClass('offCanvas_trigger');
    
    // Open/Close Menu ==========================================
    $('html').on('click', '#' + this_btn_id, function(e){
      e.preventDefault();
      
      if(settings.position == 'left') {
        $('.onCanvas').addClass('onCanvas_left');
      } else {
        $('.onCanvas').removeClass('onCanvas_left');
      }

      $('html').toggleClass('offCanvas_open').one('otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
         // Wait for the transitions to end before giving body overflow:hidden
        $('html').toggleClass('overflow_hidden');
      });

       respective_menu.toggleClass('offCanvas_menu_open');

       // Check if transitions are not supported - eg. IE9
      if($('html').hasClass('no-csstransitions')) {
        $('html').toggleClass('overflow_hidden');
      }

       // Change icon when animation is complete
       setTimeout(function() {
        this_btn.toggleClass('offCanvas_trigger_open');
       }, 200);
      
      return false;
    });

    // Accordion in offCanvas menu ==========================================
    // -- Add class to all li's w/ ul's
    $( settings.menu_ul + ' li').each(function(){
      if( $(this).has('ul').length ) {
        $(this).addClass('offCanvas_menu_has_children');
        $(this).append('<span class="offCanvas_menu_has_children_indicator"><svg><polygon points="0,2 10,2 5,10"/></svg></span>');
      }
    });

    // Drop Downs
    $('.offCanvas_menu_has_children_indicator').on('click', function(e){
      e.preventDefault();
      $(this).parent('li').toggleClass('offCanvas_menu_sub_open').children('ul').slideToggle(400);

      return false;
    });
  }
}(jQuery));

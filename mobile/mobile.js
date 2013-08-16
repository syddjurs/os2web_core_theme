(function ($) {
  Drupal.behaviors.os2web_mobile_theme_sub = {
    attach: function (context, settings) {

      $('article img').each(function(){
        if($(this).width() > $(window).width()){
	  $(this).width($(window).width());
	}
      });

      $('.node-contentpage iframe').remove();

      $('a[href^="#"]').live('click',function(event){
          event.preventDefault();
          var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
          //change this number to create the additional off set        
          var customoffset = 100;
          $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
      });
    }
  };
}(jQuery));

(function($){
  $(window).resize(function() {

    var width = jQuery('.views_slideshow_cycle_main').width();
    var ratio = (jQuery('.views-slideshow-cycle-main-frame').width() / 1.792349727);

    jQuery('.views-slideshow-cycle-main-frame').height(ratio);
    jQuery('.views-slideshow-cycle-main-frame').width(width);

    jQuery('.views-slideshow-cycle-main-frame-row').each(function(){
      jQuery(this).height(ratio);
      jQuery(this).width(width);

    });
      
  }); 
}(jQuery));



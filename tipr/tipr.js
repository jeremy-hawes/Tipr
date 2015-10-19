
/*
Tipr 2.0.1
Copyright (c) 2015 Tipue
Tipr is released under the MIT License
http://www.tipue.com/tipr
*/


(function($) {

     $.fn.tipr = function(options) {
     
          var set = $.extend( {
               
               'speed'        : 200,
               'mode'         : 'bottom'
          
          }, options);

          return this.each(function() {
          
               var tipr_cont = '.tipr_container_' + set.mode;

               $(this).hover(
                    function ()
                    {
                         var d_m = set.mode;

                         if ($(this).attr('data-mode'))
                         {
                              d_m = $(this).attr('data-mode')
                              tipr_cont = '.tipr_container_' + d_m;   
                         }
                         
                         var out = '<div class="tipr_container_' + d_m + '"><div class="tipr_point_' + d_m + '"><div class="tipr_content">' + $(this).attr('data-tip') + '</div></div></div>';
                         
                         $(this).append(out);
                    
                         var w_t = $(tipr_cont).outerWidth();
                         var w_e = $(this).width();
                         var m_l = (w_e / 2) - (w_t / 2);
                    
                         $(tipr_cont).css('margin-left', m_l + 'px');
                         $(this).removeAttr('title alt');
                         
                         $(tipr_cont).fadeIn(set.speed);              
                    },
                    function ()
                    {   
                         $(tipr_cont).remove();    
                    }     
               );
                              
          });
     };
     
     // Force tipr to top on 'top' setting
     $('.tip').on('mouseover', function(){
     	var objHeight = $(this).height(),
     		tipHeight = $('.tipr_container_top').height(),
			cutHeight = objHeight * 0.5,
			setHeight = objHeight + tipHeight,
			setHeightNeg = '-' + setHeight + 'px';
     	$(this).find('.tipr_container_top').css({
	     	'margin-top' : setHeightNeg
	     });
     });
     
     // Force tipr to bottom on 'bottom' setting
     $('.tip').on('mouseover', function(){
     	var objHeight = $(this).height(),
     		tipHeight = $('.tipr_container_bottom').height(),
			cutHeight = objHeight * 0.5,
			setHeight = objHeight + tipHeight,
			setHeightNeg = '-' + setHeight + 'px';
     	$(this).find('.tipr_container_bottom').css({
	     	'margin-bottom' : setHeightNeg
	     });
     });
     
})(jQuery);

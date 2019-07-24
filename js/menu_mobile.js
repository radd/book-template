$(function(){
    
    $('#header .navigation_control').click(function(){
      if($('#header').hasClass('active-menu-mobile')) {
        $('#header').removeClass('active-menu-mobile');
      } else {
        $('#header').addClass('active-menu-mobile');
      }
		$('#navigation').slideToggle();
	});

    $('#header #navigation .menu > li').each(function(){
		if($(this).find('.sub-menu').length<1) return;
		$(this).addClass('parent')
		 $(this).append('<a href="#" class="ico-collapse"></a>').find('.ico-collapse').html('<i class="icon-down-open"></i>')
		 	.click(function(){

 					$(this).prev().slideToggle();
 					return false;
				}
			);

		});



}); 
$(function(){

    $(window).scroll(function (event) {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if($( "#header" ).hasClass("ghost_menu")) {
             if(scrollTop > windowHeight ) {
            $( "#header" ).removeClass("ghost_menu").fadeOut(0).fadeIn();
            } 
        }
        if(!$( "#header" ).hasClass("ghost_menu")) {
             if(scrollTop <= windowHeight ) {
                $( "#header" ).fadeOut(200);
                setTimeout(
                    function() 
                    {
                        $( "#header" ).addClass("ghost_menu").fadeIn(0);
                    }, 300);
            } 
        }
        
    });

}); 
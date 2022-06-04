new WOW().init();

/* AUTHOR LINK */
$('.about-me-img img, .authorWindowWrapper').hover(function() {
  $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function() {
  //$('.authorWindowWrapper').stop().css('display', 'none').find('p').removeClass('trans');
});

$(window).scroll(function(){				 
	$('.container p').each(function(){
    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(this).offset().top,
       		distance      = (elementOffset - scrollTop),
			    windowHeight  = $(window).height(),
			    breakPoint    = windowHeight*0.9;

			if(distance > breakPoint) {
				$(this).addClass("more-padding");	
			}  if(distance < breakPoint) {
				$(this).removeClass("more-padding");	
			}
	});
});






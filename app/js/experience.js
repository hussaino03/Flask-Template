new WOW().init();

/* AUTHOR LINK */
$('.about-me-img img, .authorWindowWrapper').hover(function() {
  $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function() {
  //$('.authorWindowWrapper').stop().css('display', 'none').find('p').removeClass('trans');
});
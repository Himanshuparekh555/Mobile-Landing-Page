// Loader
$(window).on('load', function () {
  $("#loading").delay(300).fadeOut(300);
})
$(document).ready(function() {

    // Hamburger active
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
    });
    $('.hamburger,.overlay').click(function() {
        $(".main_nav,.overlay").toggleClass('active');
    });
    $('.overlay').click(function() {
        $(".hamburger").toggleClass('active');
    });
    // AOS Initialize 
    AOS.init();
    
    // OwlCarousel
    $('.recruits-slider').owlCarousel({
      loop:false,
      nav:false,
      dots:false,
      stagePadding: 50,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
    
});

$(document).on('turbolinks:load', function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    nav: false,
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
  });
});
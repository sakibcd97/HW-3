$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: false,
    autoplay:true,
    autoplaySpeed:3000,
    //  navText: ['<span class="prev">Prev</span>', '<span class="next">Next</span>'],
  });

  $(".menu").on("click", function () {
    $(".nav_menu").slideToggle();
  });
});

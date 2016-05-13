$(function () {

  console.log('App.js is loaded.');

  $(init);

  function init() {
    $('.image-slider').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      dots: true,
      asNavFor: '.episode-slider'
    });

    $('.episode-slider').slick({
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      fade: true,
      arrows: false,
      asNavFor: '.image-slider'
    });
  }

});
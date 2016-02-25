$(function () {

  console.log('App.js is loaded.');

  $(init);

  function init() {
    $('.image-slider').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true
    });

    $('.episode-slider').slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true
    });
  }

});
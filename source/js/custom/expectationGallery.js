(function () {

  var WIDTH = 1360;
  $(document).ready(function () {
    if ($(window).width() >= 1360) {
    } else {
      sliderOptions();
    }
  });
  var sliderOptions = function () {
    if ($('.expectation__photo-box').hasClass('slick-initialized')) {
      $('.expectation__photo-box').slick('unslick');
      $('.expectation__photo-box.slick-slider').off('click', nextSlide);
    }
    $('.expectation__photo-box').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      arrows: false,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1360,
        settings: 'unslick'
      }]
    });
    if ($(window).width() >= 1360) {
      $('.expectation__photo-box.slick-slider').off('click', nextSlide);
    } else {
      $('.expectation__photo-box.slick-slider').on('click', nextSlide);
    }
    $(window).on('resize', function () {
      if ($(window).width() >= 1360) {
        $('.expectation__photo-box.slick-slider').off('click', nextSlide);
      } else {
        $('.expectation__photo-box.slick-slider').on('click', nextSlide);
      }
    });

    function nextSlide() {
      $(this).slick('slickNext');
    }
  }

  var flag = false;

  var galleryType = function () {
    var windowWidth = window.innerWidth;
    if (windowWidth > WIDTH) {
      flag = true;
      window.addEventListener('resize', sliderInit);
    } else {
      sliderOptions();
      window.addEventListener('resize', sliderDestroy);
    }
  }

  var sliderInit = function () {
    var initWidth = window.innerWidth;
    if (initWidth < WIDTH) {
      if (flag) {
        sliderOptions();
        flag = false;
        window.addEventListener('resize', sliderDestroy);
      }
    }
  }

  var sliderDestroy = function () {
    destroyWidth = window.innerWidth;
    if (destroyWidth > WIDTH) {
      if (!flag) {
        galleryType();
      }
    }
  }

  galleryType();
}());

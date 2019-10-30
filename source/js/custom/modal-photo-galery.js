$('body').on('click', function (e) {

  if (!$(e.target).parents('.galery__item-img').length && !$(e.target).closest('.progress__gallery-list').length && !$(e.target).hasClass('show__btn-slider')&&!$(e.target).closest('.expectation__photo-box').length) {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
    galeryDestroy();
  }
});

function galeryDestroy() {
  if ($('.galery__slider').hasClass('slick-initialized')) {
    setTimeout(unslick, 250);

    function unslick() {
      $('.galery__slider').slick('unslick');
    }
  }
}

function initSlidersModalPhoto(slider, begin) {
  if (slider.hasClass('slick-initialized')) {
    $(slider).slick('unslick');
  }
  if (begin == undefined) {
    begin = 0;
  }

  $(slider).slick({
    arrows: false,
    initialSlide: parseInt(begin)
  });
  $('.galery__item-img img').off('click');
  $('.galery__item-img img').on('click', function () {
    $(slider).slick('slickNext');
  });

  $('.galery__item-img .close').off('click');
  $('.galery__item-img .close').on('click', function () {
    galeryDestroy();
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });
}

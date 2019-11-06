$(document).ready(function () {

  var tidingsSwiper = undefined;

  function initSwiper() {
    var screenWidth = $(window).outerWidth();
    if ( (screenWidth < (1360)) && (tidingsSwiper == undefined)) {
      $('.tidings__list').addClass('swiper-wrapper');
      $('.tidings__item').addClass('swiper-slide');
      tidingsSwiper = new Swiper('.tidings-swiper-container', {
        direction: 'horizontal',
        loop: false,
        slideToClickedSlide: true,
        spaceBetween: 20,
      });
    } else if ((screenWidth >= 1360) && (tidingsSwiper != undefined)) {
      tidingsSwiper.destroy();
      tidingsSwiper = undefined;
      $('.tidings__list.swiper-wrapper').removeAttr('style');
      $('.tidings__item.swiper-slide').removeAttr('style');
      $('.tidings__list.swiper-wrapper').removeClass('swiper-wrapper');
      $('.tidings__item.swiper-slide').removeClass('swiper-slide');
    }
  }
  
  initSwiper();

  $(window).resize(function() {
    initSwiper();
  });

});

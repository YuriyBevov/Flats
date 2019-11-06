$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slideToClickedSlide: true,
    spaceBetween: 20,

    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },

    breakpoints: {
      1360: {
        slidesPerView: 3,
        spaceBetween: 35,
      }
    }
  });
});

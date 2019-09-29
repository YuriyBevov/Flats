(function () {
  var burgerIcon = document.querySelector('.main-nav__toggle');
  var menu = document.querySelector('.main-nav__list');

  menu.classList.remove('main-nav--nojs');
  menu.classList.add('hidden')

  var onBurgerMenuClickHandler = function (evt) {
    evt.preventDefault();
    menu.classList.toggle('hidden');
  };

  burgerIcon.addEventListener('click', onBurgerMenuClickHandler);
}());

(function () {
  var tableBtn = document.querySelectorAll('.description__table');

  for (var i = 0; i < tableBtn.length; i++) {

    tableBtn[i].classList.remove('table--nojs');
    tableBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      this.classList.toggle('active');
    })
  }

})();

  // change active feedback-link

(function () {
  var toggleLinks = document.querySelectorAll('.feedback__toogle-link');
  var activeLink = document.querySelector('.feedback__toogle-link--active');

  for (var i = 0; i < toggleLinks.length; i++) {
    toggleLinks[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      activeLink.classList.remove('feedback__toogle-link--active');
      this.classList.add('feedback__toogle-link--active');
      activeLink = this;
    });
  }
}());

// slick.init

$(document).ready(function(){
  $('.estate__slider-box').slick({
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<button id="prev" type="button" class="estate__slider-prevBtn"></button>',
    nextArrow: '<button id="next" type="button" class="estate__slider-nextBtn"></button>',
    responsive : [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.review__video-box').slick({
    lazyLoad: 'progressive',
    adaptiveHeight: true,
    arrows: false,
  });

  $('.review__photo-box').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
  });
});

(function () {
  var burgerIcon = document.querySelector('.main-nav__toggle');
  var menu = document.querySelector('.main-nav__list');

  var onBurgerMenuClickHandler = function (evt) {
    evt.preventDefault();
    menu.classList.toggle('hidden');
  };

  burgerIcon.addEventListener('click', onBurgerMenuClickHandler);
}());

  /* Top slider */

(function () {

  var sliderItems = document.querySelectorAll('.developer__slider-item');
  var btnLeft = document.querySelector('.developer__slider-leftBtn');
  var btnRight = document.querySelector('.developer__slider-rightBtn');
  var currentPhoto = document.querySelector('.active');
  var activePhoto = 0;
  var sliderLength = sliderItems.length;

  for (var i = 0; i < sliderItems.length; i++) {
    if(sliderItems[i].classList.contains('active')) {
      activePhoto = i;
    };
  };

  var removeAllClasses = function () {
    currentPhoto.classList.remove('active');
  };

  var addActiveClass = function () {
    sliderItems[activePhoto].classList.add('active');
  };

  var onNextBtnClick = function (evt) {
    removeAllClasses();
    if(activePhoto < sliderLength - 1) {
      currentPhoto = sliderItems[activePhoto + 1];
      activePhoto += 1;
    } else {
      currentPhoto = sliderItems[0];
      activePhoto = 0;
    }
    addActiveClass();
  };

  var onPreviousBtnClick = function (evt) {
    removeAllClasses();

    if(activePhoto > 0) {
      currentPhoto = sliderItems[activePhoto-1];
      activePhoto -= 1;
    } else {
      currentPhoto = sliderItems[sliderLength-1];
      activePhoto = sliderLength - 1;
    }
    addActiveClass();
  };

  btnRight.addEventListener('click', onNextBtnClick);
  btnLeft.addEventListener('click', onPreviousBtnClick);
}());

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

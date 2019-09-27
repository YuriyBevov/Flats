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

  /* Top slider */

/*(function () {

  var sliderItems = document.querySelectorAll('.developer__slider-item');
  var btnLeft = document.querySelector('.developer__slider-btn--left');
  var btnRight = document.querySelector('.developer__slider-btn--right');
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


(function () {
  var items = document.querySelectorAll('.rating__list-item');
  var itemList = document.querySelector('.rating__list');

  var coords = itemList.getBoundingClientRect().top;
  var top = itemList.offsetHeight;
  var topY = itemList.clientY;

  var animation = function () {
    if (coords - top <= 0) {
      console.log('ok');
      anime({
        targets: '.rating__list-item',
        translateY: 550,
        duration: 2000,
        delay: anime.stagger(50)
      });

      anime({
        targets: '.rating__list-background',
        bottom: '0px',
        left: '-50px',
        rotate: '90deg',
        duration: 1500,
        easing: 'easeInOutQuad',
        delay: anime.stagger(200)
      });
      document.removeEventListener('scroll', animation);
    } else {
      console.log('else');
      document.addEventListener('scroll', animation);
    }
  };

document.addEventListener('scroll', animation);
}());*/

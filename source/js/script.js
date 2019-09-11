(function () {
  var burgerIcon = document.querySelector('.main-nav__toggle');
  var menu = document.querySelector('.main-nav__list');

  var onBurgerMenuClickHandler = function (evt) {
    evt.preventDefault();
    menu.classList.toggle('hidden');
    console.log('ok')
  };

  burgerIcon.addEventListener('click', onBurgerMenuClickHandler);
}());

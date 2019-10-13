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

// скролл по якорю

$(document).ready(function(){
	$(".scrollLink").on("click","a", function (evt) {
		evt.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 2000);
	});
});

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

  $('.catalog__slider').slick({
    arrows: true,
    prevArrow: '<button id="prev" type="button" class="catalog__slider-prevBtn"></button>',
    nextArrow: '<button id="next" type="button" class="catalog__slider-nextBtn"></button>',
    slidesToShow: 1,
    mobileFirst: true,
  });

});


(function() {

  var width = 1360;

  var sliderOptions = function () {
    $('.expectation__photo-box').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      arrows: false,
      mobileFirst: true,
        responsive: [
            {
                breakpoint: 1360,
                settings: 'unslick'
            }
        ]
    });
  }

  var flag = false;

  var galleryType = function () {
    var windowWidth = window.innerWidth;
    if (windowWidth > width) {
      flag = true;
      window.addEventListener('resize', sliderInit);
    } else {
      sliderOptions();
      window.addEventListener('resize', sliderDestroy);
    }
  }

  var sliderInit = function () {
    var initWidth = window.innerWidth;
    if (initWidth < width) {
      if (flag) {
        sliderOptions();
        flag = false;
        window.addEventListener('resize', sliderDestroy);
      }
    }
  }

  var sliderDestroy = function () {
    destroyWidth = window.innerWidth;
      if (destroyWidth > width) {
        if (!flag) {
          galleryType();
        }
      }
  }

  galleryType();
}());


(function(){
  var modalBtn = document.querySelectorAll('.flats__modalBtn');
  var modal = document.querySelector('.catalog__modal');
  var listItem = document.querySelectorAll('.flats__item');
  var list = document.querySelector('.flats__list');
  var windowWidth = window.innerWidth;
  console.log(windowWidth);
  var desktop;
  var deadlineMenu;


  var deadlineList = document.querySelector('.flats__deadline-list');
  var deadlineListHeight = deadlineList.clientHeight;
  var title = document.querySelector('.flats__title');

  var showDeadlineList = function () {
    deadlineList.classList.toggle('flats__deadline-list--closed');
  }

  title.addEventListener('click', showDeadlineList);

  for (var i = 0; i < modalBtn.length; i++) {
    var j = i;

    var showCurrentModal = function () {

      modalBtn[j].addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.toggle('modal--closed');
        var itemHeight = listItem[j].clientHeight; // !!! temp
        var coordsX = list.getBoundingClientRect().left;
        var coordsY = listItem[j].getBoundingClientRect().top + itemHeight + pageYOffset;

        window.addEventListener('resize', function(){
          coordsX = list.getBoundingClientRect().left;
          coordsY = listItem[j].getBoundingClientRect().top + itemHeight + pageYOffset;
        })

        // var itemHeight = listItem[k].clientHeight; // !!! temp

        if (windowWidth > 1360) {
          desktop = true;
          modal.style.left = coordsX + 'px';
          modal.style.top = coordsY + 'px';
          console.log('это десктоп версия');
        } else {
          desktop = false;
          modal.style.left = 0 + 'px';
          modal.style.top = 0 + 'px';
          console.log('это не десктоп версия');
        }

        window.addEventListener('resize', function(){
          var currentWidth = window.innerWidth;
          windowWidth = currentWidth;
          console.log(windowWidth);
          if (currentWidth > 1360) {
            console.log('>1360');
            desktop = true;
            modal.style.left = coordsX + 'px';
            modal.style.top = coordsY + 'px';
            console.log('это десктоп версия');
          } else {
            console.log('<1360');
            desktop = false;
            modal.style.left = 0 + 'px';
            modal.style.top = 0 + 'px';
            console.log('это не десктоп версия');
          }
        })
      })
    }
    showCurrentModal();
  }

  /*var coordsX = list.getBoundingClientRect().left;
  var coordsY = listItem[0].getBoundingClientRect().top + pageYOffset;

  window.addEventListener('resize', function(){
    coordsX = list.getBoundingClientRect().left;
    coordsY = listItem[0].getBoundingClientRect().top + pageYOffset;
  })

  // var itemHeight = listItem[k].clientHeight; // !!! temp

  if (windowWidth > 1360) {
    desktop = true;
    modal.style.left = coordsX + 'px';
    modal.style.top = coordsY + 'px';
    console.log('это десктоп версия');
  } else {
    desktop = false;
    modal.style.left = 0 + 'px';
    modal.style.top = 0 + 'px';
    console.log('это не десктоп версия');
  }

  window.addEventListener('resize', function(){
    var currentWidth = window.innerWidth;
    windowWidth = currentWidth;
    console.log(windowWidth);
    if (currentWidth > 1360) {
      console.log('>1360');
      desktop = true;
      modal.style.left = coordsX + 'px';
      modal.style.top = coordsY + 'px';
      console.log('это десктоп версия');
    } else {
      console.log('<1360');
      desktop = false;
      modal.style.left = 0 + 'px';
      modal.style.top = 0 + 'px';
      console.log('это не десктоп версия');
    }
  })*/


}());

/*(function(){
  var modalBtn = document.querySelectorAll('.flats__modalBtn');
  var modal = document.querySelector('.catalog__modal');
  var listItem = document.querySelectorAll('.flats__item');
  var list = document.querySelector('.flats__list');

  var deadlineList = document.querySelector('.flats__deadline-list');
  var deadlineListHeight = deadlineList.clientHeight;
  var title = document.querySelector('.flats__title');

  var showDeadlineList = function () {
    deadlineList.classList.toggle('flats__deadline-list--closed');
  }

  title.addEventListener('click', showDeadlineList);

  for (var j = 0; j < modalBtn.length; j++) {

    var k = j

    var openModal = function () {

      var coordsY = listItem[k].getBoundingClientRect().top + pageYOffset;

      modalBtn[k].addEventListener('click', function (evt) {
        evt.preventDefault();

        var coordsX = list.getBoundingClientRect().left;
        modal.style.left = coordsX + 'px';

        window.addEventListener('resize', function () {
          var windowWidth = window.innerWidth;

          coordsX = list.getBoundingClientRect().left;
          modal.style.left = coordsX + 'px';
        })

        var itemHeight = listItem[k].clientHeight;
        console.log(deadlineListHeight);
        modal.style.top = coordsY + itemHeight + 'px';
        modal.classList.toggle('modal--closed');
      })
    }

    openModal();
  }
}());*/

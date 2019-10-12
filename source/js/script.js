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

  /*$('.review__slider').slick({
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: false,
    adaptiveWidth: false,
    mobileFirst: true,
      responsive: [
          {
              breakpoint: 1360,
              settings: {
              slidesToShow: 2
            }
          }
      ]
  });*/

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

/*(function () {
  var modalBtn = document.querySelector('.oneroom__modal');
  var oneroomModal = document.querySelector('.catalog__modal');
  var logoBtn = document.querySelector('.modal__link');

  modalBtn.addEventListener('click', function (evt){
    console.log('click')
    evt.preventDefault();
    oneroomModal.classList.remove('modal--closed');
  });

  logoBtn.addEventListener('click', function(){
    oneroomModal.classList.add('modal--closed');
  })
}())*/

(function(){
  var modalBtn = document.querySelectorAll('.oneroom__modal');
  var oneroomModal = document.querySelector('.catalog__modal');
  var linkItem = document.querySelectorAll('.flats__item');


for (var j = 0; j < modalBtn.length; j++) {
  /*var linkTopCoords = modalBtn[j].offsetTop;
  var linkLeftCoords = modalBtn[j].offsetLeft;
  console.log(linkTopCoords);
  console.log(linkLeftCoords);*/

  var k = j

  var openModal = function () {
    var coords = linkItem[k].getBoundingClientRect();

    var coordsTop = coords.top + document.body.scrollTop;

    console.log('li + ' + coords);
    console.log('li + ' + coordsTop);
    console.log('li + ' + coords);

    modalBtn[k].addEventListener('click', function (evt) {
      evt.preventDefault();
      oneroomModal.style.left = coords.left + 'px';
      console.log('Modalleft = ' + oneroomModal.style.left);
      oneroomModal.style.top = coords.top + 'px';
      console.log('Modaltop = ' + oneroomModal.style.top);
      oneroomModal.classList.remove('modal--closed');
    })
  }
  openModal();
}


  /*for (var i = 0; i < modalBtn.length; i++ ) {
    modalBtn[i].addEventListener('click', function (evt){
      console.log('click')
      evt.preventDefault();
      oneroomModal.classList.remove('modal--closed');
    });
  }*/
}())

// ?autoplay=1

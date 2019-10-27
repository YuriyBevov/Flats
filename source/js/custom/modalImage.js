;
(function () {
  $(document).ready(function () {
    //Модальное окно modal-image
    $('.modal-image__item').on('click', modalPhoto);

    $('.modal-image__close').on('click', function () {
      $('.modal-image').removeClass('modal-image--active');
    });

    function modalPhoto() {
      let src = $(this).find('img').attr('src');
      let srcBig = $(this).find('img').attr('data-big-src');
      $('.modal-image').addClass('modal-image--active');
      if (srcBig != '') {
        $('.modal-image img').attr('src', srcBig);
      } else {
        $('.modal-image img').attr('src', src);
      }
    }

    //--------------------------expections---------------------------
    let arrayPhotos = []; //Массив фотографий

    arrayPhotos[0] = { photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[1] = { photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[2] = { photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    arrayPhotos[3] = { photo: 'img/devSlider-img1.jpg' , photoLarge: 'img/devSlider-img1.jpg'};
    $parent = $('.galery__wrapper .galery__slider');
    if ($(window).width() < 1360) {
      $('.expectation .modal-image__item').off('click', modalPhoto);
      $('.expectation .modal-image__item').removeClass('modal-image__item');
    } else {
      $('.expectation__item').addClass('modal-image__item');
      $('.expectation__item').on('click', modalPhoto);
    }
    $(window).on('resize', function () {
      if ($(window).width() < 1360) {
        $('.expectation .modal-image__item').off('click', modalPhoto);
        $('.expectation .modal-image__item').removeClass('modal-image__item');
      } else {
        console.log("удаляем");
        
        $('.expectation__item').addClass('modal-image__item');
        $('.expectation__item').on('click', modalPhoto);
      }
    });

    function showModalSlider(listObjects, parent) {
      $(parent).html('');
      let strHTML = '';
      for (let i = 0; i < listObjects.length; i++) {
        strHTML += '<div class="galery__item"><img src="'+listObjects[i].photoLarge+'" alt="image"></div>';
      }
      console.log(parent);
      
      $(parent).append(strHTML);
      let $slider = $(parent);
        if ($slider.length && $slider.hasClass('slick-initialized')) {
          $($slider).slick('unslick');
        }
        setTimeout(initSlidersModalPhoto, 200 , $slider) ;
    };
    $('.expectation__show-btn').on('click', function () {
      showModalSlider(arrayPhotos, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
      $('.galery__wrapper .modal__title').text('Ожидание/реальность')
    });

    function initSlidersModalPhoto(slider) {
      $(slider).slick({
        arrows: false,
        //   speed: 500,
        //  fade: true,
      });

      $(slider).on('click', function () {
        $(slider).slick('slickNext');
      });
    }

  });

})();
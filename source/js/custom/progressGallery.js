;
(function () {
  $(document).ready(function () {
    let arrayPhotos = []; //Массив фотографий
    let countVisible = 4;

    arrayPhotos[0] = { year: 2020, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[1] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[2] = { year: 2021, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[3] = { year: 2020, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[4] = { year: 2019, month: 'may', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[5] = { year: 2020, month: 'june', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[6] = { year: 2021, month: 'february', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[7] = { year: 2019, month: 'may', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[8] = { year: 2020, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[9] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[10] = { year: 2019, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[11] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[12] = { year: 2020, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[13] = { year: 2021, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[14] = { year: 2020, month: 'october', photo: 'img/progress_foto.png' , photoLarge: 'img/progress_foto.png'};
    arrayPhotos[15] = { year: 2019, month: 'february', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[16] = { year: 2019, month: 'june', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[17] = { year: 2021, month: 'september', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[18] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[19] = { year: 2021, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[20] = { year: 2021, month: 'june', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[21] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[22] = { year: 2019, month: 'august', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[23] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[24] = { year: 2019, month: 'january', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[25] = { year: 2019, month: 'august', photo: 'img/progress_foto.png' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[26] = { year: 2019, month: 'september', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[27] = { year: 2021, month: 'august', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[28] = { year: 2019, month: 'october', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[29] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg' , photoLarge: 'img/analog_1.jpg'};
    arrayPhotos[30] = { year: 2019, month: 'january', photo: 'img/analog_1.jpg', photoLarge: 'img/analog_1.jpg'};

    let filter = { //Фильтр фотографий
      year: '',
      month: ''
    };

    $year = $('.progress__form-select--year').val();
    $month = $('.progress__form-select--month').val();
    filter.year = $year;
    filter.month = $month;
    let filterList = getFilterList(arrayPhotos, filter); //Получаем отфильтрованный список

    let $parent = $('.progress__gallery-list');
    updateGalery(filterList, $parent);


    $('.progress__form-select--year, .progress__form-select--month').on('change', function () {
      $year = $('.progress__form-select--year').val();
      $month = $('.progress__form-select--month').val();

      filter.year = $year;
      filter.month = $month;
      filterList = getFilterList(arrayPhotos, filter); //Получаем отфильтрованный список
      updateGalery(filterList, $parent);
    });

    function updateGalery(listObjects, parent, begin) {
      $('.progress__btn.show__btn').removeClass('hidden');
      $('.progress__wrapper .nothing').addClass('hidden');
      let strHTML = '';
      if ($(parent).hasClass('galery__slider')) {
        $('.galery__slider').html('');
        for (let i = 0; i < listObjects.length; i++) {
          strHTML += '<div class="galery__item"><div class="galery__item-img"><span class="close">&#10006;</span><img src="' + listObjects[i].photo + '" alt="image"></div></div>';
        }
        $('.galery__slider').html(strHTML);

      } else {
        $('.progress__gallery-list').html('');
        let j = 0;
        for (let i = 0; i < listObjects.length && i < countVisible; i++) {
          j++;
          strHTML += '<li class="progress__gallery-item modal-image__item"><picture><source type="image/webp" srcset=""><img class="progress__image" src="' + listObjects[i].photo + '" data-big-src="' + listObjects[i].photoLarge + '" data-index="'+i+'"alt="фото ЖК" width="310" height="180"></picture></li>';
        }
        if (j == 0) {
          $('.progress__btn.show__btn').addClass('hidden');
          $('.progress__wrapper .nothing').removeClass('hidden');
        }
        $(parent).append(strHTML);
      }

      $('.progress__image').off('click');
      $('.progress__image').on('click', clickImg);
      if ($(parent).hasClass('galery__slider')) {
        let $slider = $('.galery__slider');
        initSlidersModalPhoto($slider, begin);//функция из modal-photo-galery.js
      }

      function clickImg() {
        let begin = $(this).attr('data-index');
        updateGalery(filterList, $('.galery__slider'), begin);
        $('.modal-photo-galery').addClass('modal-photo-galery--active');
      }
    }

    function getFilterList(arrayPhotos, filter) { //Получить отфильтрованный список
      let tempList = [];
      for (let i = 0; i < arrayPhotos.length; i++) {
        if (arrayPhotos[i].year == filter.year && arrayPhotos[i].month.toLowerCase() == filter.month.toLowerCase()) {
          tempList.push(arrayPhotos[i]);
        }
      }
      return tempList;
    }

    $('.progress__btn').click(function () {
      updateGalery(filterList, $('.galery__slider'));
      $('.modal-photo-galery').addClass('modal-photo-galery--active');
    });

  });
})();

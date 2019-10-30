$(document).ready(function () {

  $('.main-nav__list').removeClass('main-nav--nojs');

  $('.main-nav__list').addClass('hidden');

  $('.main-nav__toggle').on('click', function() {
    $('.main-nav__list').toggle('hidden');
  });

  $('body').on('click', function (e) {
    if(!$(e.target).hasClass('light__btn')){
    if (!$('.modal').hasClass('modal--closed')) {
      if (!$(e.target).closest('.modal__wrapper').length) {
        $('.modal').addClass('modal--closed');
      }
    }

    if (!$(e.target).closest('.consultation__wrapper').length) {
      $('.consultation__modal').addClass('modal--closed');
      }
    if (!$(e.target).closest('.modal-feedback__wrapper').length) {
      $('.modal-feedback').removeClass('modal-feedback--active');
      }
    }
    if (!$(e.target).closest('.modal-to-book__wrapper').length && !$(e.target).hasClass('btnToBook')) {
      $('.modal-to-book').removeClass('modal-to-book--active');
    }

  });


  $('.modal-to-book__wrapper .modal__close-btn').on('click', function () {
    $('.modal-to-book').removeClass('modal-to-book--active');
  });

  $('.modal-photo-galery .modal__close-btn').on('click', function () {
    $('.modal-photo-galery').removeClass('modal-photo-galery--active');
  });

  $('#btnOpenExcursionModal').on('click', function () {
    $('.excursion.excursion__modal').removeClass('modal--closed ');
  });
  $('.excursion .modal-close-btn').on('click', function () {
    $('.excursion.excursion__modal').addClass('modal--closed');
  });
  $('.modal__header-btn-close').on('click', function () {
    $(this).closest('.modal').addClass('modal--closed');
  });
  $('.excursion__modal').on('click', function (e) { //Закрытие модального окна по клику на фон
    if ($(this).has(e.target).length === 0 && !$(e.target).hasClass('expectation__btn') && !$(e.target).hasClass('ui-icon-circle-triangle-e') && !$(e.target).hasClass('ui-icon-circle-triangle-w') && !$(e.target).hasClass('ui-corner-all')) { //Если не содержит этот target (модальное окно)
      if (!$(this).hasClass('modal--closed')) { //Если открыто окно
        $(this).addClass('modal--closed');
      }
    }
  });

  $('#consultationBtn').on('click', function () {
    $('.consultation__modal').removeClass('modal--closed');
  });

  $('.consultation .modal__closeBtn').on('click', function() {
    $('.consultation__modal').addClass('modal--closed');
  });

  /*$('.main-nav__list').click(function (e) {
    if ($(this).has(e.target).length === 0) { //Если не содержит этот target (модальное окно)
      if (!$(this).hasClass('hidden')) { //Если открыто окно
        $(this).addClass('hidden');
      }
    }
  });*/

});

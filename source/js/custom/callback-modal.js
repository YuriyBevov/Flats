$(document).ready(function () {

  $('.callback__modal').on('click', function (e) {
    if(!$(e.target).hasClass('callback__modal-closeBtn')){
      if (!$('.callback__modal').hasClass('modal--closed')) {
        if (!$(e.target).closest('.modal__wrapper').length) {
          $('.callback__modal').addClass('modal--closed');
        }
      }
    }
  });

  $('.mainMotgage__btn').on('click', function () {
    $('.callback__modal').removeClass('modal--closed');
  });

  $('.callback__modal-closeBtn').on('click', function () {
    if($('.callback__modal').hasClass('modal--closed')) {
      $('.callback__modal').removeClass('modalClosed');
    } else {
      $('.callback__modal').addClass('modal--closed');
    }
  });

});

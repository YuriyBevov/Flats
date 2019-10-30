$(document).ready(function () {


  $('.blog__show-btn').click(function () {//Читать полностью
    $('.blog__wrapper').find('.hidden').removeClass('hidden');
    $(this).addClass('hidden');
  });

});

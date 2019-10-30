$(document).ready(function () {
  $(".scrollLink").on("click", "a", function (evt) {
    evt.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2000);
  });
});

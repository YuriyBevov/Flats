$(document).ready(function () {
  AOS.init({
    once: true,
    duration: 700,
    offset: 60
  });

  setTimeout(function () {
    AOS.refresh();
  }, 200);


  $(window).on('resize', function () {
    AOS.refresh();
  });
});

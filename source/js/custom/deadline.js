$(document).ready( function () {
  var deadlineList = document.querySelector('.flats__deadline-list');
  var title = document.querySelector('.flats__title');

  var showDeadlineList = function () {
    deadlineList.classList.toggle('flats__deadline-list--closed');
  }

  if ($('.flats__title').length) {
    title.addEventListener('click', showDeadlineList);
  }

});

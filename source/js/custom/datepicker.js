$(document).ready( function () {
  //Календарь datapicker]
  $('#hasDatepicker').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    onSelect: function (dateText, inst) {
      let day = $(this).datepicker('getDate').getDate();
      let month = $(this).datepicker('getDate').getMonth();
      $('.date-info .date').text(day + '.' + month);
    }
  });
  //Select time excursion
  $('.excursion__select-time').on('input', function () {
    $('.date-info .time').text($(this).val() + ':00');
  });

});

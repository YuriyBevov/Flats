$(document).ready(function () {

  $('#btnOpenMortgage').on('click', function () {
    $('.mortgage.mortgage__modal').removeClass('modal--closed');
  });

  $('.mortgage .modal__close-btn').on('click', function () {
    $('.mortgage.mortgage__modal').addClass('modal--closed ');
  });

  $('.mortgage__modal').click(function (e) {
    if ($(this).has(e.target).length === 0) { //Если не содержит этот target (модальное окно)
      if (!$(this).hasClass('modal--closed')) { //Если открыто окно
        $(this).addClass('modal--closed');
      }
    }
  });

  //-----------------калькулятор модальное окно--------------------
  let valueMortgageWork = 2;
  let valueMortgageIncome = 50000;
  let valueMortgagePayment = 500000;
  let $mortgageCapital = $('#mortgage-capital');
  let $mortgageWork = $('#mortgage-work');
  let $mortgageIncome = $('#mortgage-income');
  let $mortgagePayment = $('#mortgage-payment');
  let $result = $('.mortgage__expectancy-value-wrap');
  checkExpectancy();
  $('#mortgage__income-range').on('input', function () {
    valueMortgageIncome = parseInt($(this).val());
    let str;
    if (valueMortgageIncome >= 100000) {
      str = 'больше ' + 100000;
    } else {
      str = valueMortgageIncome;
    }
    $mortgageIncome.val(str);
    checkExpectancy();
  });
  $('#mortgage__work-range').on('input', function () {
    valueMortgageWork = parseInt($(this).val());
    let str;
    let $year = $('.mortgage-work__year');
    if (valueMortgageWork >= 15) {
      str = 'больше 15';
    } else {
      str = valueMortgageWork;
    }
    $mortgageWork.val(str);
    if (valueMortgageWork == 1) {
      $year.text('год')
    } else if (valueMortgageWork >= 2 & valueMortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    checkExpectancy();
  });
  //Открытие закрытие модальных окон
  /*$('body').on('click', function (e) {
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
  $('#btnOpenMortgage').on('click', function () {
    $('.mortgage.mortgage__modal').removeClass('modal--closed');
  });

  $('.mortgage .modal__close-btn').on('click', function () {
    $('.mortgage.mortgage__modal').addClass('modal--closed ');
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
  });*/



  $($mortgagePayment).on('input', function () {
    valueMortgagePayment = $(this).val();
    checkExpectancy();
  });
  $($mortgageIncome).on('input', function () {
    valuemortgageIncome = $(this).val();
    $mortgageIncome.val(valuemortgageIncome);
    checkExpectancy();
  });
  $($mortgageWork).on('input', function () {
    let $year = $('.mortgage-work__year');
    let $mortgageWork__value = $('.mortgageWork__value');
    valuemortgageWork = $(this).val();
    if (valuemortgageWork == 1) {
      $year.text('год')
    } else if (valuemortgageWork >= 2 & valuemortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    $mortgageWork__value.text(valuemortgageWork)
    if (valuemortgageWork >= 15)
      $mortgageWork__value.text('более ' + valuemortgageWork + " ");
  });
  $($mortgageCapital).on('change', function () {

    valuemortgageIncome = $(this).val();
    if (this.checked) {} else {}
    checkExpectancy();
  });

  function checkExpectancy() {
    valueMortgageWork = parseInt(valueMortgageWork);
    valueMortgageIncome = parseInt(valueMortgageIncome);
    valueMortgagePayment = parseInt(valueMortgagePayment);
    let result = 65;
    if (valueMortgageWork > 5) {
      result++;
    }
    if (valueMortgageWork > 10) {
      result++;
    }
    if (valueMortgageWork == 15) {
      result++;
    }
    result += valueMortgagePayment * 0.00001;
    result += (valueMortgageIncome - 35000) / 2950;
    result = Math.round(result);
    if (result > 93) {
      result = 93;
    }
    $result.text(result);
  }
  //-----------------калькулятор модальное окно--------------------
  //-----калькулятор
  var contributionVal = 0,
    rateVal = 0,
    timeVal = 0;
  $("#contribution, #rate, #time").keypress(function (event) {
    event = event || window.event;

    if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
      return false;
  });
  $("#contribution").on('input', function () {
    contributionVal = $(this).val();
    updateResultCalc();
  });
  $("#rate").on('input', function () {
    rateVal = $(this).val();
    updateResultCalc();
  });
  $("#time").on('input', function () {
    timeVal = $(this).val();
    updateResultCalc();
  });

  function toNumber(x) { //Делает пробелы, между числами
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(",");
  }

  function updateResultCalc() {
    contributionVal = parseInt(contributionVal);
    rateVal = parseInt(rateVal);
    timeVal = parseInt(timeVal);
    if (contributionVal != 0 && rateVal != 0 && timeVal != 0 && contributionVal != '' && rateVal != '' && timeVal != '' && contributionVal >= 10000) {
      let result = ((contributionVal * rateVal / 100) / 12) * timeVal;
      result = +result.toFixed(2);
      result = toNumber(result);
      if (result != NaN && result != undefined && result != 'NaN') {

        $('.calculator__result').text(result + ' руб.');
      } else {
        $('.calculator__result').text(0 + ' руб.');
      }

    }

  }
});

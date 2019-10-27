$(document).ready(function (currentData) {

var chartData = [];

chartData[0] = [63, 83, 36, 90, 43, 125, 67]; //студии
chartData[1] = [80, 111, 44, 90, 45, 125, 110]; // 1к
chartData[2] = [45, 58, 87, 23, 95, 41, 54]; // 2к
chartData[3] = [80, 88, 75, 148, 95, 125, 46]; // 3к
chartData[4] = [6, 32, 5, 90, 95, 125, 110]; // 4к
chartData[5] = [11, 83, 75, 90, 95, 125, 30]; //5+к

var currentData = [80, 111, 44, 90, 45, 125, 110];

var btn = document.querySelectorAll('.chart__btn');

for(var i = 0; i < btn.length; i++){
  $(btn[i]).attr('data-item', i);
}

$(btn).on('click', function () {
  var number = $(this).attr('data-item');
  currentData = chartData[number];

  $('.chart__btn--active').removeClass('chart__btn--active');
  $(this).addClass('chart__btn--active');

  fillChart(currentData);
});


var fillChart = function (currentData) {

  var ctx = document.getElementById('myChart').getContext('2d');
  var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19',
    'май’19'
  ]; //  массив для изменяемыхданных

  // console.log(currentData);

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: dataLabels,
      datasets: [{
        label: '',
        backgroundColor: 'rgba(233,70,70, 0.1)',
        borderColor: 'rgb(233,70,70)',
        borderWidth: 1,
        pointHoverBackgroundColor: 'rgb(233,70,70)',
        spanGaps: true,
        data: currentData
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#7be37b',
        bodyFontSize: 16,
        bodyFontColor: '#fefcfc',
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true
          },
          ticks: {
            min: 0,
            max: 150,
            stepSize: 25
          }
        }]
      }
    }
  });
}

fillChart(currentData);
});

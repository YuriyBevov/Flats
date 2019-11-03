;
$(document).ready(function () {

  var cardArray = [
    {
      img: 'img/analog_1.jpg',
      name: 'ЖК Новое Мурино',
      metro: 'Девяткино',
      distance: '15 мин пешком',
      price:
        [
          {
            type: 'Студия',
            cost: '1 500 000'
          },
          {
            type: '1 ккв',
            cost: '2 000 000'
          },
          {
            type: '2 ккв',
            cost: '3 000 000'
          },

          {
            type: '3 ккв',
            cost: '4 500 000'
          },

          {
            type: '4 ккв',
            cost: '5 000 000'
          },
          {
            type: '5 ккв',
            cost: '6 000 000'
          },
        ]
    },

    {
      img: 'img/analog_1.jpg',
      name: 'ЖК Новое Девяткино',
      metro: 'Мурино',
      distance: '30 мин пешком',
      price:
        [
          {
            type: 'Студия',
            cost: '1 000 000'
          },
          {
            type: '1 ккв',
            cost: '2 500 000'
          },
          {
            type: '2 ккв',
            cost: '2 800 000'
          },

          {
            type: '3 ккв',
            cost: '3 500 000'
          },
        ]
    }
  ]

  var fragment = document.createDocumentFragment(); // card fragment
  var infoFragment = document.createDocumentFragment();
  var offerCardTemplate = document.querySelector('#offerCard'); // card template
  var offerCardInfoTemplate = document.querySelector('#offerCardInfo'); // card info template
  var offerList = document.querySelector('#offerList'); // card box

  var fillCardItem = function (element, cardData) {
    element.querySelector('.offer__img').setAttribute('src', cardData.img);
    element.querySelector('.offer__name').textContent = cardData.name;
    element.querySelector('.offer__position-metro').textContent = cardData.metro;
    element.querySelector('.offer__position-distance').textContent = cardData.distance;
  };

  var createCardNode = function () { // создаю карточки жк
    for(var i = 0; i < cardArray.length; i++) {
      var cardNode = offerCardTemplate.content.cloneNode(true);
      var cardData = cardArray[i];

      fillCardItem(cardNode, cardData);
      fragment.appendChild(cardNode);
    };
    offerList.appendChild(fragment);
  };

  if ($('.offer').length) {
    createCardNode();
  }

  var fillCardInfo = function (element, infoData) {
    element.querySelector('.offer__type').textContent = infoData.type;
    element.querySelector('.offer__cost-from').textContent = infoData.cost;
  };

  var createInfoNode = function () {
    var infoBox = document.querySelectorAll('.offer__info-wrapper');  // выбераю все контейнеры, в созданных карточках
    for(var i = 0; i < cardArray.length; i++) {

      for(var j = 0; j < cardArray[i].price.length; j++ ){
        var infoNode = offerCardInfoTemplate.content.cloneNode(true);
        var infoData = cardArray[i].price[j];

        fillCardInfo(infoNode, infoData);
        infoFragment.appendChild(infoNode);
      }

      infoBox[i].appendChild(infoFragment); // вставляю фрагмент с данными в созданные карточки
    };
  };

  if ($('.offer').length) {
    createInfoNode();
  }
});

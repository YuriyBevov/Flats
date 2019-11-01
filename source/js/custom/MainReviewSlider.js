;
  $(document).ready(function () {

    let $slider = $('.mainReview__slider');
    let slides = '';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Мурино»</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Девяткино</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Кудрово</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Мурино»</div></div>';
    slides += '<div class="advice-slider__item"><div class="advice-slider__item-video"><iframe style="width:100%; height:216px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="advice-slider__item-desc">ЖК «Новое Мурино»</div></div>';

    $($slider).append(slides);

    $($slider).slick({
      adaptiveHeight: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button id="prev" type="button" class="advice-slider__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
      nextArrow: '<button id="next" type="button" class="advice-slider__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

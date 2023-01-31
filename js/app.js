window.swiper = new Swiper({
  el:'.slider__contenedor',
  slideClass:'slider__slide',
  createElements: true,
  autoplay: {
    delay: 3500
  },
  loop: true,
  pagination: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },

});


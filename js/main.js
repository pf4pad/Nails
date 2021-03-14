$(function(){
  $('.slider').slick({
    dots: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      arrows: true,
      prevArrow:'<button class="slider-btn slider-btnPrev"><img src="img/arrow-btnNext.svg">',
nextArrow:'<button class="slider-btn slider-btnNext"><img src="img/arrow-btnPrev.svg">'
 
});
});
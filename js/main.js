 
   
    function toggleMenu(params) {

      const menuToggle = document.querySelector('.toggle');
      const navugation = document.querySelector('.header__list');
      menuToggle.classList.toggle('active')
      navugation.classList.toggle('active')

    };


    $(function(){
  $('.slider').slick({
    dots: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      arrows: false    
 });
});
  
      const menuToggle = document.querySelector('.toggle');
      const navugation = document.querySelector('.header__list');
   
     function toggleMenu(params) {

       
       menuToggle.classList.toggle('active');
       navugation.classList.toggle('active');
      document.body.classList.toggle('lock');

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
  
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const  menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
const gotoBlock = document.querySelector(menuLink.dataset.goto);
const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (navugation.classList.contains('active')) {
        menuToggle.classList.toggle('active');
       navugation.classList.remove('active');
      document.body.classList.remove('lock');
      };
      

    window.scrollTo({
top: gotoBlockValue,
behavior: "smooth"


    });
    
    e.preventDefault();

    }
  }
}
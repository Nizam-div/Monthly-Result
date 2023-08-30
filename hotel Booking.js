


var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2700,
        disableOnInteraction:false,
    },
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider",{
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 2700,
        disableOnInteraction:false,
    },
   pagination: {
    el:".swiper-pagination",
    clickable: true,
   },
   breakpoints: {
    0:{
        slidesPerView:1,
    },
   768:{
        slidesPerView:2,
    },
    991:{
        slidesPerView:3,
    },
   },
});
  
  
   
   let accordions = document.querySelectorAll('.faqs .row .content .box');

   accordions.forEach(acco=>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
       acco.classList.add('active')
    }
   });
   

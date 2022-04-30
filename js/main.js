const dl = document.querySelector('dl');
const dt = dl.querySelectorAll('dt');
const dd = dl.querySelectorAll('dd');

dl.addEventListener('click', e =>{
    if(e.target ==dl) return;
    let targetdt = e.target.closest('dt');
    actitation(dd);
    actitation(dt);
    targetdt.classList.add('on');
    targetdt.nextElementSibling.classList.add('on');
})

function actitation(item){
    for(let el of item){
        el.classList.remove('on');
    }
}


const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
    for (const element of saElementList) {
      if (!element.classList.contains('show')) {
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.add('show');
        }
      }
    }
  }

  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);


  var swiper = new Swiper(".grid", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper_I = new Swiper(".mySwiper_I", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
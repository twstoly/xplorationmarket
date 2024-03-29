// Scroll Reveal 
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.text', { origin: "left", interval: 200 })
ScrollReveal().reveal('.hook', { origin: "left", interval: 200 })
ScrollReveal().reveal('.mounted-photos', { origin: "left", interval: 200 })
ScrollReveal().reveal('.custom-mounts', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.samples', { origin: "left", interval: 200 })
ScrollReveal().reveal('.notebooks', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.categories', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.prices', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.heading', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.title', { origin: "left", interval: 200 })
ScrollReveal().reveal('.swiper', { origin: "left", interval: 200 })
ScrollReveal().reveal('.accord-list', { origin: "left", interval: 200 })
ScrollReveal().reveal('.form_item', { origin: "left", interval: 200 })
ScrollReveal().reveal('.information', { origin: "left", interval: 200 })
ScrollReveal().reveal('.footer-col', { origin: "bottom", interval: 200 })

// About us Page
ScrollReveal().reveal('.aboutText', { origin: "left", interval: 200 })
ScrollReveal().reveal('.aboutPerson', { origin: "left", interval: 200 })
// Content Page
ScrollReveal().reveal('.contentHeading', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.contentText', { origin: "bottom", interval: 200 })
// Payment Page
ScrollReveal().reveal('.paymentHeader', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.paymentList', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.paymentPerson', { origin: "bottom", interval: 200 })
// Cookies Page
ScrollReveal().reveal('.cookiesHeader', { origin: "bottom", interval: 200 })
ScrollReveal().reveal('.cookiesContent', { origin: "bottom", interval: 200 })

// var scrollPos = 0;
// var isdown = true;
// var isUp = true;
// // adding scroll event
// window.addEventListener('scroll', function () {
//   // detects new state and compares it with the new one
//   if ((document.body.getBoundingClientRect()).top > scrollPos) {

//   }
//   else {

//   }
//   // saves the new position for iteration.
//   scrollPos = (document.body.getBoundingClientRect()).top;
// });


// Scroll To Top Progressbar
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "flex";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Select The Elements
var toggle_btn;
var big_wrapper;
var menu_item;
var hamburger_menu;
function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  menu_item = document.querySelector(".menu_item");
  hamburger_menu = document.querySelector(".hamburger-menu");
}
const main = document.querySelector("main");
declare();
function toggleAnimation() {
  document.body.classList.add("stop-scrolling");
  events();
}
function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
  menu_item.addEventListener("click", () => {
    big_wrapper.classList.remove("active");
  });
}
events();
// Testimonials Swiper
var swiper = new Swiper(".js-testimonials-slider", {
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".js-testimonials-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    }
  }
});
// Scroll Reveal 
  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
  });

  ScrollReveal().reveal('.text', { origin: "bottom", interval: 200 })
  ScrollReveal().reveal('.hook', { origin: "bottom", interval: 200 })


  // Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log("entry", entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));



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
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// Scroll Reveal \r\nScrollReveal({\r\n  reset: true,\r\n  distance: '60px',\r\n  duration: 1000,\r\n  delay: 200\r\n});\r\n\r\nScrollReveal().reveal('.text', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.hook', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.mounted-photos', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.custom-mounts', { origin: \"bottom\", interval: 200 })\r\nScrollReveal().reveal('.heading', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.cards', { origin: \"bottom\", interval: 200 })\r\nScrollReveal().reveal('.title', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.swiper', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.accord-list', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.form_item', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.information', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.information', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.footer-col', { origin: \"bottom\", interval: 200 })\r\n\r\n// About us Page\r\nScrollReveal().reveal('.aboutText', { origin: \"left\", interval: 200 })\r\nScrollReveal().reveal('.aboutPerson', { origin: \"left\", interval: 200 })\r\n// Content Page\r\nScrollReveal().reveal('.contentHeading', { origin: \"bottom\", interval: 200 })\r\nScrollReveal().reveal('.contentText', { origin: \"bottom\", interval: 200 })\r\n// Payment Page\r\nScrollReveal().reveal('.paymentHeader', { origin: \"bottom\", interval: 200 })\r\nScrollReveal().reveal('.paymentList', { origin: \"bottom\", interval: 200 })\r\nScrollReveal().reveal('.paymentPerson', { origin: \"bottom\", interval: 200 })\r\n// Cookies Page\r\nScrollReveal().reveal('.cookiesHeader', { origin: \"bottom\", interval: 200 })\r\nScrollReveal().reveal('.cookiesContent', { origin: \"bottom\", interval: 200 })\r\n\r\nvar scrollPos = 0;\r\nvar isdown = true;\r\nvar isUp = true;\r\n// adding scroll event\r\nwindow.addEventListener('scroll', function () {\r\n  // detects new state and compares it with the new one\r\n  if ((document.body.getBoundingClientRect()).top > scrollPos) {\r\n\r\n  }\r\n  else {\r\n\r\n  }\r\n  // saves the new position for iteration.\r\n  scrollPos = (document.body.getBoundingClientRect()).top;\r\n});\r\n\r\n\r\n// Scroll To Top Progressbar\r\nlet calcScrollValue = () => {\r\n  let scrollProgress = document.getElementById(\"progress\");\r\n  let progressValue = document.getElementById(\"progress-value\");\r\n  let pos = document.documentElement.scrollTop;\r\n  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\r\n  let scrollValue = Math.round((pos * 100) / calcHeight);\r\n  if (pos > 100) {\r\n    scrollProgress.style.display = \"flex\";\r\n  } else {\r\n    scrollProgress.style.display = \"none\";\r\n  }\r\n  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;\r\n  scrollProgress.addEventListener(\"click\", () => {\r\n    document.documentElement.scrollTop = 0;\r\n  });\r\n}\r\nwindow.onscroll = calcScrollValue;\r\nwindow.onload = calcScrollValue;\r\n// Select The Elements\r\nvar toggle_btn;\r\nvar big_wrapper;\r\nvar menu_item;\r\nvar hamburger_menu;\r\nfunction declare() {\r\n  toggle_btn = document.querySelector(\".toggle-btn\");\r\n  big_wrapper = document.querySelector(\".big-wrapper\");\r\n  menu_item = document.querySelector(\".menu_item\");\r\n  hamburger_menu = document.querySelector(\".hamburger-menu\");\r\n}\r\nconst main = document.querySelector(\"main\");\r\ndeclare();\r\nfunction toggleAnimation() {\r\n  document.body.classList.add(\"stop-scrolling\");\r\n  events();\r\n}\r\nfunction events() {\r\n  toggle_btn.addEventListener(\"click\", toggleAnimation);\r\n  hamburger_menu.addEventListener(\"click\", () => {\r\n    big_wrapper.classList.toggle(\"active\");\r\n  });\r\n  menu_item.addEventListener(\"click\", () => {\r\n    big_wrapper.classList.remove(\"active\");\r\n  });\r\n}\r\nevents();\r\n// Testimonials Swiper\r\nvar swiper = new Swiper(\".js-testimonials-slider\", {\r\n  grabCursor: true,\r\n  spaceBetween: 30,\r\n  loop: true,\r\n  pagination: {\r\n    el: \".js-testimonials-pagination\",\r\n    clickable: true,\r\n  },\r\n  navigation: {\r\n    nextEl: \".swiper-button-next\",\r\n    prevEl: \".swiper-button-prev\",\r\n  },\r\n  breakpoints: {\r\n    767: {\r\n      slidesPerView: 2,\r\n    }\r\n  }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpQ0FBaUMsK0JBQStCO0FBQ2hFLGlDQUFpQywrQkFBK0I7QUFDaEUsMkNBQTJDLCtCQUErQjtBQUMxRSwwQ0FBMEMsaUNBQWlDO0FBQzNFLG9DQUFvQywrQkFBK0I7QUFDbkUsa0NBQWtDLGlDQUFpQztBQUNuRSxrQ0FBa0MsK0JBQStCO0FBQ2pFLG1DQUFtQywrQkFBK0I7QUFDbEUsd0NBQXdDLCtCQUErQjtBQUN2RSxzQ0FBc0MsK0JBQStCO0FBQ3JFLHdDQUF3QywrQkFBK0I7QUFDdkUsd0NBQXdDLCtCQUErQjtBQUN2RSx1Q0FBdUMsaUNBQWlDO0FBQ3hFO0FBQ0E7QUFDQSxzQ0FBc0MsK0JBQStCO0FBQ3JFLHdDQUF3QywrQkFBK0I7QUFDdkU7QUFDQSwyQ0FBMkMsaUNBQWlDO0FBQzVFLHdDQUF3QyxpQ0FBaUM7QUFDekU7QUFDQSwwQ0FBMEMsaUNBQWlDO0FBQzNFLHdDQUF3QyxpQ0FBaUM7QUFDekUsMENBQTBDLGlDQUFpQztBQUMzRTtBQUNBLDBDQUEwQyxpQ0FBaUM7QUFDM0UsMkNBQTJDLGlDQUFpQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsOERBQThELFlBQVksYUFBYSxZQUFZO0FBQ25HO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veHBsb3JhdGlvbm1hcmtldC8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU2Nyb2xsIFJldmVhbCBcclxuU2Nyb2xsUmV2ZWFsKHtcclxuICByZXNldDogdHJ1ZSxcclxuICBkaXN0YW5jZTogJzYwcHgnLFxyXG4gIGR1cmF0aW9uOiAxMDAwLFxyXG4gIGRlbGF5OiAyMDBcclxufSk7XHJcblxyXG5TY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy50ZXh0JywgeyBvcmlnaW46IFwibGVmdFwiLCBpbnRlcnZhbDogMjAwIH0pXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmhvb2snLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcubW91bnRlZC1waG90b3MnLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuY3VzdG9tLW1vdW50cycsIHsgb3JpZ2luOiBcImJvdHRvbVwiLCBpbnRlcnZhbDogMjAwIH0pXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmhlYWRpbmcnLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuY2FyZHMnLCB7IG9yaWdpbjogXCJib3R0b21cIiwgaW50ZXJ2YWw6IDIwMCB9KVxyXG5TY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy50aXRsZScsIHsgb3JpZ2luOiBcImxlZnRcIiwgaW50ZXJ2YWw6IDIwMCB9KVxyXG5TY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5zd2lwZXInLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuYWNjb3JkLWxpc3QnLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuZm9ybV9pdGVtJywgeyBvcmlnaW46IFwibGVmdFwiLCBpbnRlcnZhbDogMjAwIH0pXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmluZm9ybWF0aW9uJywgeyBvcmlnaW46IFwibGVmdFwiLCBpbnRlcnZhbDogMjAwIH0pXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmluZm9ybWF0aW9uJywgeyBvcmlnaW46IFwibGVmdFwiLCBpbnRlcnZhbDogMjAwIH0pXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmZvb3Rlci1jb2wnLCB7IG9yaWdpbjogXCJib3R0b21cIiwgaW50ZXJ2YWw6IDIwMCB9KVxyXG5cclxuLy8gQWJvdXQgdXMgUGFnZVxyXG5TY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5hYm91dFRleHQnLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuYWJvdXRQZXJzb24nLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGludGVydmFsOiAyMDAgfSlcclxuLy8gQ29udGVudCBQYWdlXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLmNvbnRlbnRIZWFkaW5nJywgeyBvcmlnaW46IFwiYm90dG9tXCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuY29udGVudFRleHQnLCB7IG9yaWdpbjogXCJib3R0b21cIiwgaW50ZXJ2YWw6IDIwMCB9KVxyXG4vLyBQYXltZW50IFBhZ2VcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcucGF5bWVudEhlYWRlcicsIHsgb3JpZ2luOiBcImJvdHRvbVwiLCBpbnRlcnZhbDogMjAwIH0pXHJcblNjcm9sbFJldmVhbCgpLnJldmVhbCgnLnBheW1lbnRMaXN0JywgeyBvcmlnaW46IFwiYm90dG9tXCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcucGF5bWVudFBlcnNvbicsIHsgb3JpZ2luOiBcImJvdHRvbVwiLCBpbnRlcnZhbDogMjAwIH0pXHJcbi8vIENvb2tpZXMgUGFnZVxyXG5TY3JvbGxSZXZlYWwoKS5yZXZlYWwoJy5jb29raWVzSGVhZGVyJywgeyBvcmlnaW46IFwiYm90dG9tXCIsIGludGVydmFsOiAyMDAgfSlcclxuU2Nyb2xsUmV2ZWFsKCkucmV2ZWFsKCcuY29va2llc0NvbnRlbnQnLCB7IG9yaWdpbjogXCJib3R0b21cIiwgaW50ZXJ2YWw6IDIwMCB9KVxyXG5cclxudmFyIHNjcm9sbFBvcyA9IDA7XHJcbnZhciBpc2Rvd24gPSB0cnVlO1xyXG52YXIgaXNVcCA9IHRydWU7XHJcbi8vIGFkZGluZyBzY3JvbGwgZXZlbnRcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAvLyBkZXRlY3RzIG5ldyBzdGF0ZSBhbmQgY29tcGFyZXMgaXQgd2l0aCB0aGUgbmV3IG9uZVxyXG4gIGlmICgoZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkudG9wID4gc2Nyb2xsUG9zKSB7XHJcblxyXG4gIH1cclxuICBlbHNlIHtcclxuXHJcbiAgfVxyXG4gIC8vIHNhdmVzIHRoZSBuZXcgcG9zaXRpb24gZm9yIGl0ZXJhdGlvbi5cclxuICBzY3JvbGxQb3MgPSAoZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkudG9wO1xyXG59KTtcclxuXHJcblxyXG4vLyBTY3JvbGwgVG8gVG9wIFByb2dyZXNzYmFyXHJcbmxldCBjYWxjU2Nyb2xsVmFsdWUgPSAoKSA9PiB7XHJcbiAgbGV0IHNjcm9sbFByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc1wiKTtcclxuICBsZXQgcHJvZ3Jlc3NWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3MtdmFsdWVcIik7XHJcbiAgbGV0IHBvcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgbGV0IGNhbGNIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICBsZXQgc2Nyb2xsVmFsdWUgPSBNYXRoLnJvdW5kKChwb3MgKiAxMDApIC8gY2FsY0hlaWdodCk7XHJcbiAgaWYgKHBvcyA+IDEwMCkge1xyXG4gICAgc2Nyb2xsUHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzY3JvbGxQcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHNjcm9sbFByb2dyZXNzLnN0eWxlLmJhY2tncm91bmQgPSBgY29uaWMtZ3JhZGllbnQoIzAzY2M2NSAke3Njcm9sbFZhbHVlfSUsICNkN2Q3ZDcgJHtzY3JvbGxWYWx1ZX0lKWA7XHJcbiAgc2Nyb2xsUHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gIH0pO1xyXG59XHJcbndpbmRvdy5vbnNjcm9sbCA9IGNhbGNTY3JvbGxWYWx1ZTtcclxud2luZG93Lm9ubG9hZCA9IGNhbGNTY3JvbGxWYWx1ZTtcclxuLy8gU2VsZWN0IFRoZSBFbGVtZW50c1xyXG52YXIgdG9nZ2xlX2J0bjtcclxudmFyIGJpZ193cmFwcGVyO1xyXG52YXIgbWVudV9pdGVtO1xyXG52YXIgaGFtYnVyZ2VyX21lbnU7XHJcbmZ1bmN0aW9uIGRlY2xhcmUoKSB7XHJcbiAgdG9nZ2xlX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWJ0blwiKTtcclxuICBiaWdfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmlnLXdyYXBwZXJcIik7XHJcbiAgbWVudV9pdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X2l0ZW1cIik7XHJcbiAgaGFtYnVyZ2VyX21lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpO1xyXG59XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuZGVjbGFyZSgpO1xyXG5mdW5jdGlvbiB0b2dnbGVBbmltYXRpb24oKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic3RvcC1zY3JvbGxpbmdcIik7XHJcbiAgZXZlbnRzKCk7XHJcbn1cclxuZnVuY3Rpb24gZXZlbnRzKCkge1xyXG4gIHRvZ2dsZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFuaW1hdGlvbik7XHJcbiAgaGFtYnVyZ2VyX21lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJpZ193cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgbWVudV9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBiaWdfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcbmV2ZW50cygpO1xyXG4vLyBUZXN0aW1vbmlhbHMgU3dpcGVyXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLXRlc3RpbW9uaWFscy1zbGlkZXJcIiwge1xyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiBcIi5qcy10ZXN0aW1vbmlhbHMtcGFnaW5hdGlvblwiLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;
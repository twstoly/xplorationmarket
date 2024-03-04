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
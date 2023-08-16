console.log("script loaded");

// * ==========================================================================
// ! This is code for the projects carousel
// * ==========================================================================

const buttons = document.querySelectorAll("[data-carousel-button]");

console.log(`button is ${buttons.length}`);

buttons.forEach((button) => {
  console.log("buttons");
  button.addEventListener("click", () => {
    console.log("button clicked");
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const proj = button
      .closest("[data-carousel]")
      .querySelector("[data-projects]");

    const active_prj = proj.querySelector("[data-active]");
    let newIndex = [...proj.children].indexOf(active_prj) + offset;

    if (newIndex < 0) newIndex = proj.children.length - 1;
    if (newIndex >= proj.children.length) newIndex = 0;

    proj.children[newIndex].dataset.active = true;
    delete active_prj.dataset.active;
  });
});

// * ==========================================================================
// ! This is code for the gallery
// * ==========================================================================

var path = window.location.pathname;
console.log(path);
if (path === "/HTML/gallery.html") {
  //! this for looping through the images
  const images = document.querySelectorAll("[data-pic]");
  let i = 0;

  setInterval(function () {
    console.log("in timeout");
    if (i == 0) {
      images[i].className = "fade-in-image";
    } else if (i == images.length) {
      images[i - 1].className = "fade-out-image";
      images[0].className = "fade-in-image";
      i = 0;
    } else {
      images[i - 1].className = "fade-out-image";
      images[i].className = "fade-in-image";
    }

    i++;
  }, 2000);
} else {
  console.log("clear timeout");
  clearInterval();
}

// * ==========================================================================
// ! This is code for displaying current year next to copyright
// * ==========================================================================

var date = document.getElementById("date");

let cur_year = new Date().getFullYear();

date.innerText = cur_year;

//* =================================================================================================
//! THIS CODE IS FOR DARK MODE ACROSS THE DIFFERENT PAGES
//* =================================================================================================

const darkMode_Toggle = document.getElementById("shrink_btn_big");
const small_bar = document.getElementById("left_side_small");
const big_bar = document.getElementById("left_side");
var nav_bar_active = window.matchMedia("(min-width: 800px)");
var darkMode_off = false;
var darkMode;

if (localStorage.getItem("dark-mode")) {
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem("dark-mode");
} else {
  darkMode = "light";
}

localStorage.setItem("dark-mode", darkMode);

if (localStorage.getItem("dark-mode") == "dark") {
  document.documentElement.style.setProperty("--background_color", "#182230");
  document.documentElement.style.setProperty("--dark_shades", "#182230");
  document.documentElement.style.setProperty("--primary_color", "#ecf1f3");
}

// Toggle dark UI

darkMode_Toggle.addEventListener("click", () => {
  //   console.log("big btn pressed");

  if (darkMode_off === false) {
    // console.log("dark mode on");
    darkMode_off = true;

    document.documentElement.style.setProperty("--background_color", "#182230");
    document.documentElement.style.setProperty("--dark_shades", "#182230");
    document.documentElement.style.setProperty("--primary_color", "#ecf1f3");

    localStorage.setItem("dark-mode", "dark");
  } else {
    // console.log("dark mode off");

    document.documentElement.style.setProperty("--background_color", "#e9eef1");
    document.documentElement.style.setProperty("--dark_shades", "#763a3a");
    document.documentElement.style.setProperty("--primary_color", "#102020e7");

    localStorage.setItem("dark-mode", "light");

    darkMode_off = false;
  }
});

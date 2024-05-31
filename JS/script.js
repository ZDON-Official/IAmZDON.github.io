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

// var path = window.location.pathname;
// console.log(path);
// if (path === "/HTML/gallery.html") {
//   //! this for looping through the images
//   const images = document.querySelectorAll("[data-pic]");
//   let i = 0;

//   setInterval(function () {
//     console.log("in timeout");
//     if (i == 0) {
//       images[i].className = "fade-in-image";
//     } else if (i == images.length) {
//       images[i - 1].className = "fade-out-image";
//       images[0].className = "fade-in-image";
//       i = 0;
//     } else {
//       images[i - 1].className = "fade-out-image";
//       images[i].className = "fade-in-image";
//     }

//     i++;
//   }, 2000);
// } else {
//   console.log("clear timeout");
//   clearInterval();
// }

// * ==========================================================================
// ! This is code for displaying current year next to copyright
// * ==========================================================================

var date = document.getElementById("date");

let cur_year = new Date().getFullYear();

date.innerText = cur_year;

//* =================================================================================================
//! THIS CODE IS FOR DARK MODE ACROSS THE DIFFERENT PAGES
//* =================================================================================================

//* -------------------------------------------------------------------------------------------------
//! Const variable for theme colors
const secondary_color_dark = "#bfa181";
const secondary_color_light = "#62449b";

const text_color_light = "#102020e7";
const text_color_dark = "rgba(255, 255, 255, 0.7)";

const primary_color_light = "#102020e7";
const primary_color_dark = "rgba(255, 255, 255, 0.7)";

const dark_shades_light = "white";
const dark_shades_dark = "transparent";

const background_color_light = "white";
const background_color_dark = "#182230";

//* -------------------------------------------------------------------------------------------------

const darkMode_Toggle = document.getElementById("dark_mode_toggle");
var mobile_screen = window.matchMedia("(max-width: 767px)");
var darkMode_on;
var darkMode; // TODO <------ Save this in local storage too

//? Needed?
// TODO - remove if dead code
if (localStorage.getItem("dark-mode")) {
  //! if dark mode is in storage, set variable with that value
  // darkMode = localStorage.getItem("dark-mode");
} else {
  // darkMode = "light-mode";
}

//! check if DARK MODE is toggled on
if (localStorage.getItem("darkMode_toggle")) {
  console.log("dark mode is on");
  darkMode_on = JSON.parse(localStorage.getItem("darkMode_toggle"));
} else {
  console.log("dark mode is off");
  darkMode_on = false;
}

// localStorage.setItem("dark-mode", darkMode);
localStorage.setItem("darkMode-toggle", darkMode_on);

//! if dark mode is already toggled on when a new page is loaded
if (localStorage.getItem("dark-mode") == "dark") {
  turn_dark_mode_on();
}

//! Toggle dark Mode UI
darkMode_Toggle.addEventListener("click", () => {
  console.log("Theme switch button clicked");

  if (darkMode_on === false) {
    console.log("dark mode turned on");
    darkMode_on = true;

    turn_dark_mode_on();

    // console.log(darkMode_Toggle.classList);

    //! update the local storage
    // localStorage.setItem("dark-mode", "dark");
    localStorage.setItem("darkMode_toggle", darkMode_on);
  } else {
    console.log("Light mode on");

    turn_light_mode_on();

    darkMode_on = false;

    // localStorage.setItem("dark-mode", "light");
    localStorage.setItem("darkMode_toggle", darkMode_on);
  }
});

//! Toggles dark mode on
function turn_dark_mode_on() {
  document.documentElement.style.setProperty(
    "--background_color",
    background_color_dark
  );
  document.documentElement.style.setProperty("--dark_shades", dark_shades_dark);
  document.documentElement.style.setProperty(
    "--secondary_color",
    secondary_color_dark
  );
  document.documentElement.style.setProperty(
    "--primary_color",
    "rgba(255, 255, 255, 0.7)"
  );
  document.documentElement.style.setProperty("--text_color", text_color_dark);
  darkMode_Toggle.classList.remove("fa-sun");
  darkMode_Toggle.classList.add("fa-moon");
}

//! Toggles light mode on
function turn_light_mode_on() {
  document.documentElement.style.setProperty(
    "--background_color",
    background_color_light
  );
  document.documentElement.style.setProperty(
    "--dark_shades",
    dark_shades_light
  );
  document.documentElement.style.setProperty(
    "--primary_color",
    primary_color_light
  );
  document.documentElement.style.setProperty(
    "--secondary_color",
    secondary_color_light
  );
  document.documentElement.style.setProperty("--text_color", text_color_light);

  darkMode_Toggle.classList.remove("fa-moon");
  darkMode_Toggle.classList.add("fa-sun");
}

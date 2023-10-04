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

const darkMode_Toggle = document.getElementById("dark_mode_toggle");
var mobile_screen = window.matchMedia("(max-width: 767px)");
var darkMode_on;
var darkMode; // <------ Save this in local storage too

if (localStorage.getItem("dark-mode")) {
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem("dark-mode");
} else {
  darkMode = "light";
}

if (localStorage.getItem("darkMode_toggle")) {
  console.log("dark mode is on");
  darkMode_on = JSON.parse(localStorage.getItem("darkMode_toggle"));
} else {
  console.log("dark mode is off");
  darkMode_on = false;
}

localStorage.setItem("dark-mode", darkMode);
localStorage.setItem("darkMode-toggle", darkMode_on);

if (localStorage.getItem("dark-mode") == "dark") {
  document.documentElement.style.setProperty("--background_color", "#182230");
  document.documentElement.style.setProperty("--dark_shades", "transparent");
  document.documentElement.style.setProperty("--secondary_color", "#bfa181");
  document.documentElement.style.setProperty(
    "--primary_color",
    "rgba(255, 255, 255, 0.7)"
  );
  document.documentElement.style.setProperty(
    "--text_color",
    "rgba(255, 255, 255, 0.7)"
  );
  darkMode_Toggle.classList.remove("fa-sun");
  darkMode_Toggle.classList.add("fa-moon");

  // if (mobile_screen.matches) {
  //   document.documentElement.style.setProperty("--text_color", "rgba(255, 255, 255, 0.7)");
  // }
}

// Toggle dark UI

darkMode_Toggle.addEventListener("click", () => {
  console.log("Dark mode button clicked");

  if (darkMode_on === false) {
    console.log("dark mode on");
    darkMode_on = true;

    document.documentElement.style.setProperty("--background_color", "#182230");
    document.documentElement.style.setProperty("--dark_shades", "transparent");
    document.documentElement.style.setProperty("--secondary_color", "#bfa181");
    document.documentElement.style.setProperty(
      "--primary_color",
      "rgba(255, 255, 255, 0.85)"
    );
    document.documentElement.style.setProperty(
      "--text_color",
      "rgba(255, 255, 255, 0.7)"
    );

    darkMode_Toggle.classList.remove("fa-sun");
    darkMode_Toggle.classList.add("fa-moon");

    console.log(darkMode_Toggle.classList);

    // if (mobile_screen.matches) {
    //   document.documentElement.style.setProperty("--text_color", "#e9eef1");
    // }

    localStorage.setItem("dark-mode", "dark");
    localStorage.setItem("darkMode_toggle", darkMode_on);
  } else {
    // console.log("dark mode off");

    document.documentElement.style.setProperty("--background_color", "white");
    document.documentElement.style.setProperty("--dark_shades", "white");
    document.documentElement.style.setProperty("--primary_color", "#102020e7");
    document.documentElement.style.setProperty("--secondary_color", "#763a3a");
    document.documentElement.style.setProperty("--text_color", "#102020e7");

    darkMode_Toggle.classList.remove("fa-moon");
    darkMode_Toggle.classList.add("fa-sun");

    // if (mobile_screen.matches) {
    //   document.documentElement.style.setProperty("--text_color", "#102020e7");
    // }

    darkMode_on = false;

    localStorage.setItem("dark-mode", "light");
    localStorage.setItem("darkMode_toggle", darkMode_on);
  }

  console.log(darkMode_on);
  console.log(`toggle is ${JSON.parse(darkMode_on)}`);
});

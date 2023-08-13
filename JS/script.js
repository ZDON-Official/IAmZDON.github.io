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
// const fs = require('fs');
// var img = fs.readdirSync('/gallery_assets/')
console.log(path);
if (path === "/HTML/gallery.html") {
  //! this is for loading new images into the div
  // var fs = require('fs');
  // var img = fs.readdirSync('/gallery_assets/')

  // const cur_img = document.que('img')
  // let pic_ctn = document.getElementsByClassName('pic-ctn')

  // img.forEach(pic => {
  //     console.log(`file name ${pic}`)
  // })

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

// * ==========================================================================
// ! This is code for navbar
// * ==========================================================================

// const nav_bar = document.getElementById("shrink_btn")

// navBarFunction(nav_bar_active)
// nav_bar_active.addEventListener("change", navBarFunction)

// nav_bar.addEventListener("click", () => {
//     console.log('btn pressed')

//     if(theme_off === false){
//         theme_off = true
//         document.documentElement.style.setProperty('--BG', 'rgb(33, 36, 53)');
//         document.documentElement.style.setProperty('--dark_shades', '#05383f');
//     }else{
//         document.documentElement.style.setProperty('--BG', 'rgb(231, 231, 231)');
//         document.documentElement.style.setProperty('--dark_shades', '#305256');

//         theme_off = false
//     }
// })

// nav_bar_big.addEventListener("click", () => {
//     console.log('big btn pressed')
//     if(theme_off === false){
//         theme_off = true
//         document.documentElement.style.setProperty('--BG', 'rgb(33, 36, 53)');
//         document.documentElement.style.setProperty('--dark_shades', '#05383f');
//     }else{
//         document.documentElement.style.setProperty('--BG', 'rgb(231, 231, 231)');
//         document.documentElement.style.setProperty('--dark_shades', '#305256');

//         theme_off = false
//     }
// })

// var auto_hide = window.matchMedia("max-width: 600px")

// function autoHide(x){
//     big_bar.style.display = "none"
//     small_bar.style.display = "flex"
// }
// autoHide(auto_hide)
// auto_hide.addEventListener("change", autoHide)

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
  // if the above is 'dark' then apply .dark to the body
  // document.body.classList.add("dark");

  document.documentElement.style.setProperty("--BG", "rgb(33, 36, 53)");
  document.documentElement.style.setProperty("--dark_shades", "#05383f");

  //! hide the 'dark' button
  // $('.dark-button').hide();

  //! show the 'light' button
  // $('.light-button').show();
}

// Toggle dark UI

darkMode_Toggle.addEventListener("click", () => {
  //   console.log("big btn pressed");

  if (darkMode_off === false) {
    // console.log("dark mode on");
    darkMode_off = true;

    document.documentElement.style.setProperty(
      "--background_color",
      "rgb(33, 36, 53)"
    );
    document.documentElement.style.setProperty("--dark_shades", "#05383f");
    document.documentElement.style.setProperty("--main_color", "#ecf1f3");

    // document.body.classList.add("dark");
    localStorage.setItem("dark-mode", "dark");
  } else {
    // console.log("dark mode off");

    document.documentElement.style.setProperty(
      "--background_color",
      "rgb(255, 255, 255)"
    );
    document.documentElement.style.setProperty("--dark_shades", "#ecf1f3");
    document.documentElement.style.setProperty("--main_color", "#142727df");


    // document.body.classList.remove("dark");
    localStorage.setItem("dark-mode", "light");

    darkMode_off = false;
  }
});

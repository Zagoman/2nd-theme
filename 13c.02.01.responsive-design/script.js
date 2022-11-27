"use strict";
import { animate, stagger, inView } from "https://cdn.skypack.dev/motion";

document.addEventListener("DOMContentLoaded", init);
let nav, burger, mobileNav;
function init() {
  nav = document.querySelector("nav");
  burger = document.querySelector(".burger");
  mobileNav = document.querySelector(".mobile_nav");

  nav.dataset.navOpen = false;

  burger.addEventListener("click", () => {
    console.log("click");
    handleNav();
  });
}

function handleNav() {
  console.log(nav.dataset.navOpen);
  if (nav.dataset.navOpen === "false") {
    console.log("hello");
    animate(".mobile_nav", { transform: "translateX(0)" });
    nav.dataset.navOpen = "true";
  } else {
    animate(".mobile_nav", { transform: "translateX(100%)" });
    nav.dataset.navOpen = "false";
  }
}

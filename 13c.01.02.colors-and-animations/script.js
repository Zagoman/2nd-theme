"use strict";
import { animate, stagger, inView } from "https://cdn.skypack.dev/motion";

const sections = document.querySelectorAll("section");

inView("h2", ({ target }) => {
  animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] });
});

inView("section > div", ({ target }) => {
  animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] });
});

inView("article section", ({ target }) => {
  animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] });
});

inView("footer section", ({ target }) => {
  animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] });
});

document.querySelectorAll("[type='button']").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    animate(btn.querySelector("span"), { x: 6 }, { duration: 0.3, easing: [0.17, 0.55, 0.55, 1] });
  });
});

document.querySelectorAll("[type='button']").forEach((btn) => {
  btn.addEventListener("mouseout", () => {
    animate(btn.querySelector("span"), { x: 0 }, { duration: 0.3, easing: [0.17, 0.55, 0.55, 1] });
  });
});

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mouseover", () => {
    animate(a.querySelector("span"), { x: 6 }, { duration: 0.3, easing: [0.17, 0.55, 0.55, 1] });
  });
});

document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mouseout", () => {
    animate(a.querySelector("span"), { x: 0 }, { duration: 0.3, easing: [0.17, 0.55, 0.55, 1] });
  });
});

function changeColorTheme() {
  if (document.documentElement.dataset.theme !== "dark") {
    document.documentElement.dataset.theme = "dark";
    return;
  }
  document.documentElement.dataset.theme = "light";
  return;
}

document.querySelector("[type='checkbox']").addEventListener("change", () => {
  console.log("hello");
  changeColorTheme();
});

"use strict";
const stage = document.querySelector("#stage");
const ball = document.querySelector("#ball");

const ballBoundaries = ball.getBoundingClientRect();
const stageBoundaries = stage.getBoundingClientRect();

const centerX = (stageBoundaries.width - ballBoundaries.width) / 2;
const centerY = (stageBoundaries.height - ballBoundaries.height) / 2;

console.log(centerX);
const fourPointKF = [
  { transform: `translate(${centerX}px, 0)` },
  { transform: `translate(${centerX * 2}px, ${centerY}px)` },
  { transform: `translate(${centerX}px, ${centerY * 2}px)` },
  { transform: `translate(0, ${centerY}px)` },
];

fourPointKF.push({ transform: `translate(${centerX}px, 0)` });

const fourPoint_prop = {
  duration: 3000,
  iterations: Infinity,
};

const fourpoint_ani = ball.animate(fourPointKF, fourPoint_prop);

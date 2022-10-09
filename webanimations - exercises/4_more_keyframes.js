"use strict";
"use strict";
const ball = document.querySelector("#ball");

const fourPointKF = [{ transform: "translate(42vw,0" }, { transform: "translate(85vw,20vw" }, { transform: "translate(42vw,41vw" }, { transform: "translat(0, 20vw)" }];

fourPointKF.push({ transform: "translate(42vw,0" });

const fourPoint_prop = {
  duration: 3000,
  iterations: Infinity,
};

const fourpoint_ani = ball.animate(fourPointKF, fourPoint_prop);

"use strict";
import { animate } from "https://cdn.skypack.dev/motion";

animate(
  ".ball",
  {
    rotate: 200,
    translateX: 400,
  },
  {
    duration: 2,
  }
).finished.then(() => {
  animate(
    ".ball",
    {
      scale: 0,
    },
    {
      duration: 2,
    }
  );
});

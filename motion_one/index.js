"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";
animate(
  ".box",
  {
    rotate: 45,
    translateY: 100,
    translateX: 100,
  },
  {
    delay: stagger(0.4),
    duration: 1.5,
  }
);

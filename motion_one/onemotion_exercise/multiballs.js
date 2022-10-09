"use strict";
import { animate, stagger, spring } from "https://cdn.skypack.dev/motion";

animate(
  ".ball",
  {
    y: -100,
  },
  {
    direction: "alternate",
    duration: 1,
    repeat: Infinity,
    delay: stagger(0.2),
  }
);

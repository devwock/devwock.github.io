"use strict";

document.querySelectorAll(".tile").forEach((tile) => {
  const image = tile.querySelector(".tile-image");

  if (image) {
    tile.style.setProperty("--image", `url("${image.src}")`);
  }
});

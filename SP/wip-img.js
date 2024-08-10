function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var animOptions = [
  { name: "Blink", ext: ".png" },
  { name: "Smoke", ext: ".gif" },
  { name: "WIP", ext: ".png" }
];

var choice = animOptions[getRandomInt(animOptions.length)];

let ANIM_FULL = `./Content/Site/${choice.name}${choice.ext}`;

var img = document.createElement("img");
img.src = ANIM_FULL;
var src = document.getElementById("header");

function addImg() {
  src.appendChild(img);
}

addImg()

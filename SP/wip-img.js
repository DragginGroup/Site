import {getRandomInt} from './api/Math.js'

var animOptions = [
  { name: "Blink", ext: ".png" },
  { name: "Smoke", ext: ".gif" },
  { name: "WIP", ext: ".png" }
];

var choice = animOptions[getRandomInt(animOptions.length)];

let ANIM_FULL = `/Blog/Content/Site/${choice.name}${choice.ext}`;

// alert(ANIM_FULL) // debug // just started working and it's annoying

var img = document.createElement("img");
img.src = ANIM_FULL;
var src = document.getElementById("header");

function addImg() {
  src.appendChild(img);
}

addImg()

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const image = document.getElementById('wip');
var ANIM_NAME = "WIP";
var ANIM_EXT = ".png"
var CHANCE = getRandomArbitrary(0, 2);

switch(CHANCE):
  case 1: ANIM_NAME = "Blink";
       
  case 2: ANIM_NAME = "Smoke"; ANIM_EXT = ".gif";
      
  default: ANIM_NAME = "WIP"
  
var ANIM_FULL = "/Blog/Content/Site/" + ANIM_NAME + ANIM_EXT;

image.src = ANIM_FULL;

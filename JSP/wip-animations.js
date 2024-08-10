// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() {
  var ANIM_NAME = "WIP";
  var CHANCE = getRandomInt(3);

  switch(CHANCE):
    case 1: ANIM_NAME = "Blink";
    case 2: ANIM_NAME = "Smoke";
    default: ANIM_NAME = "WIP"
  
  var ANIM_FULL = "/Blog/Content/Site/" + ANIM_NAME + ".png";

  document.getElementsByClassName("wip")[0].src = ANIM_FULL;
});

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

  var ANIM_NAME = "WIP";
  var CHANCE = getRandomArbitrary(0, 2);

  switch(CHANCE):
    case 1: ANIM_NAME = "Blink";
        
    case 2: ANIM_NAME = "Smoke";
        
    default: ANIM_NAME = "WIP"
  
  var ANIM_FULL = "/Blog/Content/Site/" + ANIM_NAME + ".png";

  document.getElementsByClassName("wip")[0].src = ANIM_FULL;

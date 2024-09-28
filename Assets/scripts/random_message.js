import {
  DEFAULT_MESSAGE_INDEX
}
from "./global/random_message.js";
import {
  randomInt,
  random
}
from "./utilities/math.js";

var new_message = "[MSG]";

var JSON = {
  messages: []
};

// low max numbers first
addMessage("Mods are officially supported!", 1.0, 0, 2, true);
addMessage("hope you enjoy your time here!", 1, 1, 10);
addMessage("random message lolz!", 5, 0, 15);
addMessage("you are in for a blast!", 10, 0, 20);
addMessage("Check our our projects if you want!", 20, 0, 30);
addMessage("have fun!", 5, 0, 50);
addMessage("over 1000 commits for basic things!", 1, 0, 70);
addMessage("the 1 in 1000000!", 1, 0, 1000000);
addMessage("you have alot of free time", 1, 0, 10000000000000000);
// high max numbers last

new_message = DEFAULT_MESSAGE_INDEX;

var array = JSON.messages;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const randoI = randomInt(element.min, element.max);
  const randoF = random(element.min, element.max);
  const CAN_CHANGE_MSG = ((element.float) ? randoF == element.wanted : randoI == element.wanted) && new_message == DEFAULT_MESSAGE_INDEX;

  if (CAN_CHANGE_MSG) {
    new_message = element.msg;
    break;
  }
}

document.getElementById("message").innerHTML = new_message;

function addMessage(msgA = "missing argument lol", wantedA = 1, minA = 1, maxA =10, floatA = false) {
  var newmsg = {
    msg: msgA,
    wanted: wantedA,
    min: minA,
    max: maxA,
    float: floatA
  };

  JSON.messages.push(newmsg);
}

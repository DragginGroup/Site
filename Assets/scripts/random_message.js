import { DEFAULT_MESSAGE_INDEX } from "./GLOBAL.js";
import { randomInt } from "./utilities/math.js";

var new_message = "[MSG]";

var JSON = { messages: [] };

// low max numbers first
addMessage("Mods are officially supported!", 1, 0, 2);
addMessage("hope you enjoy your time here!", 1, 1, 10);
addMessage("random message lolz!", 5, 0, 15);
addMessage("you are in for a blast!", 10, 0, 20);
addMessage("Check our our projects if you want!", 20, 0, 30);
addMessage("have fun!", 5, 0, 50);
addMessage("over 1000 commits", 1, 0, 70);
addMessage("the 1 in 1000000!", 1, 0, 1000000);
addMessage("the 1 in 1000000!", 1, 0, 1000000);
// high max numbers last

new_message = DEFAULT_MESSAGE_INDEX;

var array = JSON.messages;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const rando = randomInt(element.min, element.max);
  const CAN_CHANGE_MSG = rando == element.wanted && new_message == DEFAULT_MESSAGE_INDEX;

  if (CAN_CHANGE_MSG) {
    new_message = element.msg;
    break;
  }
}

document.getElementById("message").innerHTML = new_message;

function addMessage(msgA = "missing argument lol", wantedA = 5, minA = 0, maxA = 10) {
  var newmsg = { msg: msgA, wanted: wantedA, min: minA, max: maxA };
  
  JSON.messages.push(newmsg);
}

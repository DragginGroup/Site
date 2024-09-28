import { DEFAULT_MESSAGE_INDEX } from "./global/random_message.js";
import { randomInt } from "./utilities/math.js";

var final_message = DEFAULT_MESSAGE_INDEX;

var JSON = {
  messages: [],
};

// low max numbers first
addMessage("Mods are officially supported!", 1, 0, 2);
addMessage("hope you enjoy your time here!", 1, 1, 10);
addMessage("random message lolz!", 5, 0, 15);
addMessage("you are in for a blast!", 10, 0, 20);
addMessage("Check our our projects if you want!", 20, 0, 30);
addMessage("have fun!", 5, 0, 50);
addMessage("over 1000 commits for basic things!", 1, 0, 70);
addMessage("the 1 in 1000000!", 1, 0, 1000000);
addMessage("you have alot of free time", 1, 0, 1000000000);
// high max numbers last

var array = JSON.messages;

for (let index = 0; index < array.length; index++) {

  const element = array[index];
  const randoI = randomInt(element.min, element.max);
  const CAN_CHANGE_MSG = randoI == element.wanted && final_message == DEFAULT_MESSAGE_INDEX;

  if (CAN_CHANGE_MSG) {
    final_message = element.msg;
    break;
  }
}

document.getElementById("message").innerHTML = final_message;

function addMessage(
  msgA = "missing argument lol",
  wantedA = 1,
  minA = 1,
  maxA = 10
) {
  var newmsg = {
    msg: msgA,
    wanted: wantedA,
    min: minA,
    max: maxA
  };

  JSON.messages.push(newmsg);
}

import { randomInt } from "./utilities/math.js";

var new_message = "[MSG]";
var DEFAULT_MESSAGE = "have a good time.";

var JSON = {
  messages: [
    {
      msg: "hope you enjoy your time here!",
      wanted: 1,
      min: 1,
      max: 10
    },
    {
      msg: "you are in for a blast!",
      wanted: 10,
      min: 0,
      max: 20
    },
    {
      msg: "have fun!",
      wanted: 5,
      min: 0,
      max: 50
    },
    {
      msg: "Mods are officially supported!",
      wanted: 1,
      min: 0,
      max: 2
    },
    {
      msg: "Check out our projects if you want!",
      wanted: 20,
      min: 0,
      max: 30
    }
  ]
};

addMessage("forcing you to be here.",1,1,1);

new_message = DEFAULT_MESSAGE;

var array = JSON.messages;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const rando = randomInt(element.min, element.max);

  if (rando == element.wanted && new_message == DEFAULT_MESSAGE) {
    new_message = element.msg;
    break;
  }
}

document.getElementById("message").innerHTML = new_message;

function addMessage(msgA = "missing argument lol", wantedA = 5, minA = 0, maxA = 10) {
  var newmsg = {
    msg: msgA,
    wanted: wantedA,
    min: minA,
    max: maxA
  };
  
  JSON.messages.push({newmsg});
}

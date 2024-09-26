import { randomInt } from "./utilities/math.js";

var msg = document.getElementById("message");
var new_message = "[MSG]";

var json = {
  messages: [
    {
      msg: "hope you enjoy your time here!",
      wanted: 1,
      min: 1,
      max: 1,
    },
    {
      msg: "you are in for a blast!",
      wanted: 10,
      min: 0,
      max: 20,
    },
    {
      msg: "have fun!",
      wanted: 5,
      min: 0,
      max: 50,
    },
    {
      msg: "Mods are officially supported!",
      wanted: 1,
      min: 0,
      max: 2,
    },
    {
      msg: "Check out our projects if you want!",
      wanted: 20,
      min: 0,
      max: 30,
    },
  ],
};

new_message = json.messages[0].msg;

var array = json.messages;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  const rando = randomInt(element.min, element.max);

  if (rando = element.wanted) {
    new_message = element.msg;
    break;
  }
}

msg.innerHTML = new_message;

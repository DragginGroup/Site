var msg = document.getElementById('message');
var new_message = "[MSG]";
var messages = [
    "hope you enjoy your time here!"/*,
    "you are in for a blast!",
    "have fun!",
    "Mods are officially supported!",
    "Check out our projects if you want!"*/
]

new_message = messages[Math.random() * messages.length];
msg.innerHTML = new_message;
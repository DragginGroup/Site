import { CREDITS, init } from "./utilities/creditsUtil.js";

init();

var creds = CREDITS[0];
var element = document.createElement('p');
element.innerHTML = creds;

document.getElementById('credits').append(element);
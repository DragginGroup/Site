import { returnVersion } from "./utilities/version-utility.js";

var version = returnVersion('version-dev');
var element = document.getElementById('version');

element.innerHTML = `Dragging Site: ${version}`;
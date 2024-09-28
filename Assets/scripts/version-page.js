import { returnVersion } from "./utilities/version-utility.js";

var element = document.getElementById('version');
var versionString = returnVersion('version-dev');

element.innerHTML = `Dragging Site: ${versionString}`;
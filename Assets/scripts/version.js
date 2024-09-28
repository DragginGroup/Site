import { returnVersion } from "./utilities/version.js";

var version = returnVersion('version-dev');
var element = document.getElementById('version');

element.innerText = version;
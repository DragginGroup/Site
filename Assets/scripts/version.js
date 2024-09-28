import { MODE } from "./global/version.js";
import { returnVersion } from "./utilities/version.js";

var version = returnVersion(MODE);
var element = document.getElementById('version');

element.innerText = version;
import { DEV_MODE } from "./global/version.js";
import { returnVersion } from "./utilities/version.js";

var version = returnVersion(`version${(DEV_MODE) ? '-dev' : ''}`);
var element = document.getElementById('version');

element.innerHTML = version;
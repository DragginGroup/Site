import { MOD_DATA } from "./modding/data.js";
import { returnVersion } from "./utilities/version-utility.js";

var element = document.getElementById('version');
var versionString = returnVersion('version');
var name = (MOD_DATA.enabled) ? MOD_DATA.name : 'Draggin Site';
var fullasstring = `${name}: ${versionString}`;

element.innerText = fullasstring;
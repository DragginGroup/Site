import { validVersion } from '/Blog/SP/util/version.js';

var string_ver = ""
string_ver = validVersion();

document.getElementById('version').innerHTML = "Blog Version: " + string_ver

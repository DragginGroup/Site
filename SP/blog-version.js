import { validVersion } from '/Blog/SP/util/version.js';

 // only here cause of some bullshit conflict thingy
let VERSION = "0.2.4"
let SUFFIX = ""
let PREFIX = ""
let FALLBACK_VERSION = "0.0.0\nversion error"

var string_ver = ""
string_ver = validVersion();

document.getElementById('version').innerHTML = "Blog Version: " + string_ver

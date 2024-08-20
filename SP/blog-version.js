import { validVersion } from '/Blog/SP/util/version.js';
import { stringVersion } from '/Blog/SP/settings/version-display.js';

 // only here cause of some bullshit conflict thingy
let VERSION = "0.2.4"
let SUFFIX = ""
let PREFIX = ""
let FALLBACK_VERSION = "0.0.0\nversion error"

var string_ver = ""
string_ver = validVersion(stringVersion())

document.getElementById('version').innerHTML = "Blog Version: " + string_ver

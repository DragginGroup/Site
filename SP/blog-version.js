import {DISPLAY, VERSION, DATE, SUFFIX, PREFIX, FALLBACK_VERSION, validVersion, date, version} from './util/version.js'

var string_ver = ""
string_ver = validVersion()

document.getElementById('version').innerHTML = "Blog Version: " + string_ver

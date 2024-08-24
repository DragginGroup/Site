import { validVersion } from '/Blog/SP/util/version.js';
import { MOD_NAME, MOD_ENABLED } from '/Blog/SP/modding/api.js';

var string_ver = '';
string_ver = validVersion("dev");

var name = MOD_ENABLED ? MOD_NAME : "Blog";

document.getElementById('version').innerHTML = name + " Version: " + string_ver

import { validVersion } from '/Blog/SP/util/version.js';
import { MOD_NAME, MOD_ENABLED } from '/Blog/SP/modding/api.js';

var string_ver = validVersion("version");

var name = "Blog";

if (MOD_ENABLED == true)
  name = MOD_NAME;

document.getElementById('version').innerHTML = name + " Version: " + string_ver

import { validVersion } from '/Blog/SP/util/version.js';
import { MOD_NAME,  MOD_ENABLED } from '/Blog/SP/mod/mod-api.js';

var string_ver = ""
string_ver = validVersion("dev");

var name = "Blog";

if (MOD_ENABLED == true)
  name = MOD_NAME;

document.getElementById('version').innerHTML = name + " Version: " + string_ver

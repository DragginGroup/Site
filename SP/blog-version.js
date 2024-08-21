import { validVersion } from '/Blog/SP/util/version.js';
import { MOD_NAME } from '/Blog/SP/modding/api.js';

var string_ver = ""
string_ver = validVersion("dev");

var name = "Blog";

if (MOD_NAME != "")
  name = MOD_NAME;

document.getElementById('version').innerHTML = name + " Version: " + string_ver

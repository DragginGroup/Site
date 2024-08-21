import { validVersion } from '/Blog/SP/util/version.js';
import { MOD_NAME, returnModStats } from '/Blog/SP/modding/api.js';

var string_ver = ""
string_ver = validVersion('');

var name = "Blog";

if (returnModStats() == true)
  name = MOD_NAME;

document.getElementById('version').innerHTML = name + " Version: " + string_ver

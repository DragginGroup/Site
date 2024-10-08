import { MOD_API_VERSION, returnModConsole } from "./modding/api.js";
import { MOD_DATA } from "./modding/data.js";


var mod_console = returnModConsole();
var mod_console_str = '';

mod_console_str += 'Modding API version: ' + MOD_API_VERSION + '<br>';
mod_console_str += 'Mod: ' + MOD_DATA.name + ' version: ' + MOD_DATA.version + '<br>';

for (let index = 0; index < mod_console.length; index++) {
    const element = mod_console[index];
    mod_console_str += element + '<br>'
}

document.getElementById('console').innerHTML = mod_console_str;
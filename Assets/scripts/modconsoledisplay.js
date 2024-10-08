import { returnModConsole } from "./modding/api.js";

var mod_console = returnModConsole();
var mod_console_str = '';

for (let index = 0; index < mod_console.length; index++) {
    const element = mod_console[index];
    mod_console_str += element + '<br>'
}

document.getElementById('console').innerHTML = mod_console_str;
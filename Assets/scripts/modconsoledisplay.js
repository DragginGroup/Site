import { returnModConsole } from "./modding/api.js";

var mod_console = returnModConsole();

document.getElementById('console').innerHTML = mod_console;
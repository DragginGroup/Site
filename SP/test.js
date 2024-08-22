import { readJSON, readText } from './util/readfiles.js';
import { replaceImg, replaceText } from '/Blog/SP/modding/api.js';

var file = readText('/Blog/Content/Site/data/testjson', 'txt');

var replace1 = document.getElementById("replace");
replace1.innerHTML = file;

var replace2 = document.getElementById("beep");
replace2.innerHTML = "duak";

replaceText('replace', file, true);

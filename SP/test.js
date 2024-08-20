import { readJSON } from './util/readfiles.js';

var file = readJSON('/Blog/Content/Site/data/testjson');

var replace1 = document.getElementById("replace");
replace1.innerHTML = file;

var replace2 = document.getElementById("beep");
replace2.innerHTML = "duak";

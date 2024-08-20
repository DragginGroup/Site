import { readJSON } from './util/readfiles.js';

var file = readJSON('/Blog/Content/Site/data/testjson');
var replace = document.getElementById("replace");

replace.innerHTML = file;

import { returnPath } from '/Blog/SP/util/files.js';
import { readText } from '/Blog/SP/util/readfiles.js';

var mod_path = "Mod/" + MOD_NAME + '/';

export var MOD_NAME = "Test";
export var MOD_VERSION = "0.1.0";

export var MOD_API_VERSION = "0.0.8";

export function replaceImg(id, replacement) {
  // https://stackoverflow.com/a/48344753
  // Tomas Kenzgaila
  
  var path = returnPath(replacement, mod_path);
  
  var imgReplace = document.getElementsByClassName(id)[0];
  imgReplace.src = path;
  
  imgReplace.style.visibility = "visible";
}

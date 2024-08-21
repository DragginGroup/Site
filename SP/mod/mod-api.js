import { returnPath } from '/Blog/SP/util/files.js';
import { readText } from '/Blog/SP/util/readfiles.js';

export var MOD_NAME = "Test";
export var MOD_VERSION = "0.1.0";

export var MOD_API_VERSION = "0.0.10";

export function replaceImg(id, replacement) {
  // https://stackoverflow.com/a/48344753 
  // Tomas Kenzgaila

  var full_path = "/Blog/Content/Mod/" + MOD_NAME + '/' + replacement;
  
  var imgReplace = document.getElementsByClassName(id)[0]; 
  imgReplace.src = full_path;
  
  imgReplace.style.visibility = "visible";
}

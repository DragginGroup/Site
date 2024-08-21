import { returnPath } from '/Blog/SP/util/files.js';
import { readText } from '/Blog/SP/util/readfiles.js';

export let MOD_NAME = "Test";

export var MOD_VERSION = "1.0.0P";
MOD_VERSION = readText(returnPath('version', "Mod/" + MOD_NAME + '/'));

export let MOD_ENABLED = true;

export let MOD_API_VERSION = "0.0.6";

export function replaceImg(id, replacement) {
  // https://stackoverflow.com/a/48344753 - Tomas Kenzgaila
  
  var path = returnPath(replacement, "Mod/" + MOD_NAME + '/');
  
  var imgReplace = document.getElementsByClassName(id)[0];
  imgReplace.src = path;
  
  imgReplace.style.visibility = "visible";
}

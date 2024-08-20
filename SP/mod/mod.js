import { returnPath } from '/Blog/SP/util/files.js';

export let MOD_NAME = "Test";
export let MOD_VERSION = "0.0.0";

export let MOD_API_VERSION = "0.0.4";

export function replaceImg(id, replacement) {
  // https://stackoverflow.com/a/48344753 - Tomas Kenzgaila
  
  var path = returnPath(replacement, "Mod/" + MOD_NAME + '/');
  
  var imgReplace = document.getElementsByClassName(id)[0];
  imgReplace.src = path;
  
  imgReplace.style.visibility = "visible";
}

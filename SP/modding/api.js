import { readFile } from '/Blog/SP/util/gpt.js';

export let API_VERSION = '0.1.10';

export let MOD_NAME = "Test";
export let MOD_VERSION = '0.1.0'; // returnFileContent('/Blog/Content/Mod/'+MOD_NAME+'/version.txt');

export let MOD_ENABLED = false;

export function replaceImg(id, replacement, ignore_enable) {
  // https://stackoverflow.com/a/48344753
  // Tomas Kenzgaila

  var path = "/Blog/Content/Mod/" + MOD_NAME + '/' + replacement;

  var imgReplace = document.getElementsByClassName(id)[0];  
  
  if (MOD_ENABLED == true || ignore_enable == true){
    if (replacement != "")
      imgReplace.src = path;
  
    imgReplace.style.visibility = "visible";
  }
}

export function replaceText(id, replacement, ignore_enable) {
  var txtReplace = document.getElementById(id);
  
  if (MOD_ENABLED == true || ignore_enable == true){
    if (replacement != "")
      txtReplace.innerHTML = replacement;
  }
}

export function returnFileContent(filepath)
{
  return readFile(filepath);
}

export function toggleMod() {
  if (MOD_ENABLED == true)
    MOD_ENABLED = false;
  else
    MOD_ENABLED = true;

  return MOD_ENABLED;
}

export function returnModStats() {
  return MOD_ENABLED;
}

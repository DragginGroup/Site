export let API_VERSION = '0.1.2';

export let MOD_NAME = "Test";
export let MOD_VERSION = "0.1.0";
export let MOD_ENABLED = true;

export function replaceImg(id, replacement) {
  // https://stackoverflow.com/a/48344753
  // Tomas Kenzgaila

  var path = "/Blog/Content/Mod/" + MOD_NAME + '/' + replacement;

  var imgReplace = document.getElementsByClassName(id)[0];  
  
  if (replacement != "")
    imgReplace.src = path;
  
  imgReplace.style.visibility = "visible";
}

export function replaceText(id, replacement) {
  var txtReplace = document.getElementById(id);
  
  if (replacement != "")
    txtReplace.innerHTML = replacement;
}

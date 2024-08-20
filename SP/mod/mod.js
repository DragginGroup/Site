export let MOD_NAME = "Test";
export let MOD_VERSION = "0.0.0";

export let MOD_API_VERSION = "0.0.3";

export function replaceImg(id, replacement) {
  // https://stackoverflow.com/a/48344753 - Tomas Kenzgaila
  var imgReplace = document.getElementsByClassName(id)[0];
  imgReplace.src = "/Blog/Content/Mod/" + MOD_NAME + '/' + replacement;
  imgReplace.style.visibility = "visible";
}

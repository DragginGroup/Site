export let API_VERSION = '0.1.11';

export let MOD_TITLE = 'Test';

export let MOD_VERSION = '0.1.0';
export let MOD_DATE = '2024.9.0';

export var MOD_ENABLED = true;

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
  
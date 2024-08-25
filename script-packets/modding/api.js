import { replaceImage } from '../util/WebUtil.js';

export let API_VERSION = '0.1.12';

export let MOD_TITLE = 'Test';

export let MOD_VERSION = '0.1.0';
export let MOD_DATE = '2024.9.0';

export var MOD_ENABLED = true;

export function replaceImg(id = 'name', replacement = 'ninjamuffer', ignore_enable = false) {
    var path = "/Blog/Content/Mod/" + MOD_TITLE + '/' + replacement;

    if (MOD_ENABLED == true || ignore_enable == true){
      if (replacement != "" || replacement != null)
        replaceImage(path, id, true);
    }
  }
  
export function replaceText(id = 'name', replacement = 'ninjamuffer', ignore_enable = false) {
    var txtReplace = document.getElementById(id);
    
    if (MOD_ENABLED == true || ignore_enable == true){
      if (replacement != "" || replacement != null)
        txtReplace.innerHTML = replacement;
    }
  }
  

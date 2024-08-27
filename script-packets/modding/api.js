import { replaceImage } from '../util/WebUtil.js';
import { MOD_DATE, MOD_TITLE, MOD_VERSION, MOD_ENABLED } from "../util/Global.js";

export let API_VERSION = '0.1.12';

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
  

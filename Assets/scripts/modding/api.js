import { MOD_DATA } from "./data.js";


export const MOD_API_VERSION = "0.2";

export function createParagraph(html) { 
    var paragraph = document.createElement('p');
    paragraph.innerHTML = html;
    
    return paragraph;
}
export function createImage(source, ext="png") { 
    var img = document.createElement('img');
    img.src = '/Site/Assets/modding/'+MOD_DATA.name+'/images/'+source+"."+ext;
    
    return img;
}
import { MOD_DATA } from "./data.js";


export const MOD_API_VERSION = "0.2";

/*
author: @IdealistCat
purpose: create a paragraph element for the page along with adding text to it.
*/
export function createParagraph(html) { 
    var paragraph = document.createElement('p');
    paragraph.innerHTML = html;
    
    return paragraph;
}

/*
author: @IdealistCat
purpose: create an image element for the page along with setting the source url.
*/
export function createImage(source, ext="png") { 
    var img = document.createElement('img');
    img.src = '/Site/Assets/modding/'+MOD_DATA.name+'/images/'+source+"."+ext;
    
    return img;
}
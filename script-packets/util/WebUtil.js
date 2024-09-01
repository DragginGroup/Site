export function replaceImage(path = '/Blog/Content/Site/website_icon.png', id = "", classBool = true) {
    var imgReplace = classBool ? document.getElementsByClassName(id)[0] : document.getElementById(id);  
    
    imgReplace.src = path;
    imgReplace.style.visibility = "visible";
}

export function changeTitle(newTitle = 'WindowUtil - New Title') {
    document.title = newTitle;
}
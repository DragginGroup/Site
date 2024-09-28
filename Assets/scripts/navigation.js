function changeHref(elementId, newhref) {
    var element = document.getElementById(elementId)
    
    element.href = newhref;
}

changeHref('projectPage', '/404.html');
function setHref(id, href) {
  var a = document.getElementById(id);
  a.href = inital + href;
}

var GITLINK = "https://github.com/DragginGroup/Blog/issues/new/choose"
let VERSION = document.getElementById('version').innerHTML

if (VERSION.contains('-dev')) {
  GITLINK = "https://github.com/PortilizenDev/Blog/issues/new/choose"
}

setHref('reportI', GITLINK)

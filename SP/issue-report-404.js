import {setHref} from './util/href.js'

var GITLINK = "https://github.com/DragginGroup/Blog/issues/new/choose"
let VERSION = document.getElementById('version').innerHTML

if (VERSION.contains('d')) {
  GITLINK = "https://github.com/IdealistCat/Blog/issues/new/choose"
}

setHref('reportI', GITLINK, '')

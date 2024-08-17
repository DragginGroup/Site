/*
  id: text id: ex: backBtn
  href: the file your heading too. ex: blog.html
  inital: what comes before the href: ex: ../Blog/Pages
*/

// import {setHref} from './util/href-setup.js';

export function setHref(id, href, inital="/Blog/Pages/") {
  var a = document.getElementById(id);
  a.href = inital + href;
}

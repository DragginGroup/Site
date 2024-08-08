/*
  id: text id: ex: baxkBtn
  href: the file your heading too. ex: blog.html
  inital: what comes before the href: ex: ../Blog/Pages
*/
function setHref(id, href) {
  var a = document.getElementById(id);
  a.href = href;
}

setHref('BlogsPage', './Pages/Blogs.html')
setHref('LatestBlog', './Pages/Blogs/B1.html')
setHref('CreditsPage', './Pages/Misc/Credits.html')

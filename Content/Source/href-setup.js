/*
  id: text id: ex: baxkBtn
  href: the file your heading too. ex: blog.html
  inital: what comes before the href: ex: ../Blog/Pages
*/
function setHref(id, href, inital="/Blog/Pages/") {
  var a = document.getElementById(id);
  a.href = inital + href;
}

setHref('BlogsPage', 'Blogs.html')
setHref('LatestBlog', 'Blogs/B1.html')
setHref('CreditsPage', 'Misc/Credits.html')

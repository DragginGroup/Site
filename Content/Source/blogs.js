class Header = {
  
  title: "",
  date: "",
  summary: "",
  authors: []

  function returnDefault()
  {
    title = "PLACEHOLDER"
    date = "6-9-6969"
    summary = "this is fuck blog, fucked blog"
    authors = ["fufk", "bubz"]
  }
}

let function setHeaderShit(header = Header, title, date, summary, authors)
{
  header.title = title
  header.date = date
  header.summary = summary
  header.authors = authors
}

let function setBlogHeader(id, header = Header)
{
  var headerShit = "Title: "+header.title
  headerShit = headerShit + "\nDate: "+header.date
  headerShit = headerShit + "\nSummary: "+header.summary
  headerShit = headerShit + "\nAuthors: "+header.authors
  
  var a = document.getElementById(id);
  a.innerHTML = headerShit
}

var headerShiz = new Header()

setHeaderShit(headerShiz, "DRAGGIN BLOG 1", "8-8-2024", "The first Dragging Blog!", ["Madness-Rombank"])
setBlogHeader("blog1T‎", headerShiz)

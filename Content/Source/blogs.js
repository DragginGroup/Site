var title: "",
var date: "",
var summary: "",
var authors: []

let function returnDefault()
  {
    title = "PLACEHOLDER"
    date = "6-9-6969"
    summary = "this is fuck blog, fucked blog"
    authors = ["fufk", "bubz"]
  }
}

let function setHeaderShit(title, date, summary, authors)
{
  this.title = title
  this.date = date
  this.summary = summary
  this.authors = authors
}

let function setBlogHeader(id)
{
  var headerShit = "Title: "+title
  headerShit = headerShit + "\nDate: "+date
  headerShit = headerShit + "\nSummary: "+summary
  headerShit = headerShit + "\nAuthors: "+authors
  
  var a = document.getElementById(id);
  a.innerHTML = headerShit
}

setHeaderShit("DRAGGIN BLOG 1", "8-8-2024", "The first Dragging Blog!", ["Madness-Rombank"])
setBlogHeader("blog1T‎")

class Header = {
  
  var title: "",
  var date: "",
  var summary: "",
  var authors: []

  function returnDefault()
  {
    title = "PLACEHOLDER"
    date = "6-9-6969"
    summary = "this is fuck blog, fucked blog"
    authors = ["fufk", "bubz"]
  }
}


function setBlogHeader(id, header = new Header)
{
  var headerShit = "Title: "+header.title
  headerShit = headerShit + "\nDate: "+header.date
  headerShit = headerShit + "\nSummary: "+header.summary
  headerShit = headerShit + "\nAuthors: "+header.authors
  
  var a = document.getElementById(id);
  a.innerHTML = headerShit
}

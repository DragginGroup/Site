var dev = 1

var gitpage = "Blog"

var version_prefix = "Blog Version: V"
var version_suffix = ""
var version_dev_suffix = "_dev"
var version = "0.2.0"

if(dev == 1) {
  gitpage = "Blog-Develop"
  version_suffix = version_suffix + version + version_dev_suffix
}

document.getElementById('message')
  .innerHTML = version_prefix + version + version_suffix

fetch('https://api.github.com/repos/DragginGroup/' + gitpage + '/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    var commit = res[0].commit

    var ex1 = "Replaced old image code"
    var ex2 = "2 Examples for Latest Commit Text Length Fix"
    var ex3 = "Fix Order and Better Second Example for Commit Length Fix"

    var regMsg = 'Latest Commit: "' + commit.message + '" by ' + commit.author.name

    var msg = regMsg

    if(commit.message.length > ex1.length)
      msg = 'Latest Commit: "' + commit.message + '"\nby ' + commit.author.name
    if(commit.message.length > ex2.length)
      msg = 'Latest Commit: \n"' + commit.message + '"\nby ' + commit.author.name

    try {
      document.getElementById('message')
        .innerHTML = msg
    } catch (err) {
      document.getElementById('message')
        .innerHTML = err
      console.log(err)
    }

    if(commit.message.length > ex3.length) {
      msg = regMsg
      document.getElementById('message')
        .style.fontSize = x - small
    }
  })

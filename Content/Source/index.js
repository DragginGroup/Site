var GITPAGE = "Blog"
export { VERSION as version} from "constants.js"
var version_text = document.getElementById('version')
var latestCommit = document.getElementById('message')

version_text.innerHTML = version

function fetchLatestCommit() {
    .fetch('https://api.github.com/repos/DragginGroup/' + GITPAGE + '/commits?per_page=1').then(res => res.json()).then(res => {
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
      latestCommit.innerHTML = msg
    } catch (err) {
      latestCommit.innerHTML = err
      console.log(err)
    }

    if(commit.message.length > ex3.length) {
      msg = regMsg
      latestCommit.style.fontSize = x - small
    }
  })
}

fetchLatestCommit()

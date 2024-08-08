let METADATA = JSON.stringify("https://raw.githubusercontent.com/PortilizenDev/Blog/main/Content/Site/metadata.json")
let VERSION = "0.2.1"
let SUFFIX = "-dev"
let PREFIX = "v"
let FALLBACK_VERSION = "0.0.0\nversion error"

var string_ver = ""

function validVersion()
{
  if (VERSION.length < 5)
    return FALLBACK_VERSION;

  return PREFIX + VERSION + SUFFIX;
}

try {
  string_ver = METADATA.version
} catch(err) {
  string_ver = validVersion()
}

document.getElementById('version').innerHTML = "Blog Version: " + string_ver

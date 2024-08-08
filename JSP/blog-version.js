let VERSION = "0.2.1"
let SUFFIX = "-dev"
let FALLBACK_VERSION = "ersion error"

var string_ver = ""

function validVersion()
{
  if (VERSION.length < 5)
    return FALLBACK_VERSION;

  return VERSION + SUFFIX;
}

string_ver = validVersion()

document.getElementById('version').innerHTML = "Blog Version: v" + string_ver

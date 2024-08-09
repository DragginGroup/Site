let VERSION = "0.2.2"
let SUFFIX = ""
let PREFIX = ""
let FALLBACK_VERSION = "0.0.0\nversion error"

var string_ver = ""

function validVersion()
{
  if (VERSION.length < 5)
    return FALLBACK_VERSION;

  return PREFIX + "v" + VERSION + SUFFIX;
}

string_ver = validVersion()

document.getElementById('version').innerHTML = "Blog Version: " + string_ver

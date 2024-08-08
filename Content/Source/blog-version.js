let VERSION = "0.2.0"
let FALLBACK_VERSION = "version error"

var string_ver = ""

function validVersion()
{
  if (VERSION.length < 5)
    return FALLBACK_VERSION;

  return VERSION;
}

string_ver = validVersion()

document.getElementById('version').innerHTML = "Blog Version: v" + string_ver

let METADATA = JSON.parse("./Content/Site/metadata.json")
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
try{string_ver = METADATA.version}catch(err){string_var = "\n"+err}

document.getElementById('version').innerHTML = "Blog Version: v" + string_ver

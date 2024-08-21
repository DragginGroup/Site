import { MOD_VERSION, returnModStats } from '/Blog/SP/modding/api.js';

let DATE = "2024.8.21"
let VERSION = "0.2.6"

let SUFFIX = ""
let PREFIX = ""

let FALLBACK_VERSION = "0.0.0"
let FALLBACK_DATE = "2024.8.8"

export function validVersion(type = "") { 
  var ver = getVersion();

  if (type == "dev")
    ver = getVersion() + "-development";
  if (type == "date")
    ver = getDate();
  
  return ver;
}

function getDate()
{
  if (DATE.length > 7)
    return DATE;
  else
    return FALLBACK_DATE;
}

function getVersion()
{
  if (VERSION.length > 4)
    if (returnModStats() == true)
      return "v" + MOD_VERSION;
  
    return PREFIX + "v" + VERSION + SUFFIX;
  else
    return FALLBACK_VERSION;
}

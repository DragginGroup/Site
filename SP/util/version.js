import { MOD_VERSION, returnModStats } from '/Blog/SP/modding/api.js';

let DATE = "2024.9.0"
let VERSION = "0.2.8"

let SUFFIX = ""
let PREFIX = ""

let FALLBACK_VERSION = "0.0.0-E"
let FALLBACK_DATE = "2024.8.8-E"

export function validVersion(type) { 
  var ver = '';

  if (type == "dev")
    ver = getVersion() + "-development";
  else if (type == "date")
    ver = getDate();
  else
    ver = getVersion();
  
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
    else
      return PREFIX + "v" + VERSION + SUFFIX;
  else
    return FALLBACK_VERSION;
}
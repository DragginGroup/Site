import { MOD_VERSION, MOD_ENABLED } from '/Blog/SP/modding/api.js';

let DATE = "2024.9.0"
let VERSION = "0.2.8"

let FALLBACK_VERSION = "0.0.0-E"
let FALLBACK_DATE = "2024.8.8-E"

export function validVersion(type) { 
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
    if (MOD_ENABLED == true)
      return "v" + MOD_VERSION;
    else
      return "v" + VERSION;
  else
    return FALLBACK_VERSION;
}

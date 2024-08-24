import { MOD_VERSION, returnModStats, MOD_ENABLED } from '/Blog/SP/modding/api.js';

let DATE = "2024.8.25"
let VERSION = "0.2.7"

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
  var version_return = VERSION;
  
  if (returnModStats() == true)
    version_return = MOD_VERSION;
  
  if (version_return.length > 4)
    return 'v' + version_return;
  else
    return FALLBACK_VERSION;
}

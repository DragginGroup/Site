import { MOD_NAME, MOD_VERSION,  MOD_ENABLED } from '/Blog/SP/mod/mod-util.js';

let DATE = "2024.8.30"
let VERSION = "0.2.6"

let SUFFIX = ""
let PREFIX = ""

let FALLBACK_VERSION = "0.0.0"
let FALLBACK_DATE = "2024.8.8"

export function validVersion(type = "version") { 
  var ver = version();

  if (type == "dev")
    ver = version() + "-development";


  if (type == "date")
    ver = date();
  
  return ver;
}

function date()
{
  if (DATE.length > 7)
    return DATE;
  else
    return FALLBACK_DATE;
}

function version()
{
  var ourver = VERSION;

  if (MOD_ENABLED)
    ourver = MOD_VERSION;
  
  if (VERSION.length > 4)
    return PREFIX + "v" + ourver + SUFFIX;
  else
    return FALLBACK_VERSION;
}

let DISPLAY = "version"

let DATE = "2024.8.19"

let VERSION = "0.2.5"

let SUFFIX = "d"
let PREFIX = ""

let FALLBACK_VERSION = "0.0.0"

function validVersion() { return version(); }

function date()
{
  if (DATE.length > 7)
    return DATE;
  else
    return FALLBACK_VERSION;
}

function version()
{
  if (VERSION.length > 4)
    return PREFIX + "v" + VERSION + SUFFIX;
  else
    return date();
}

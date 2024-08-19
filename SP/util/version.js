export let VERSION = "0.2.5"
export let DATE = "2024.8.19"
export let SUFFIX = "d"
export let PREFIX = ""
export let FALLBACK_VERSION = "version error"

export function validVersion()
{
  if (VERSION.length > 4)
    return PREFIX + "v" + VERSION + SUFFIX;
  else
    if (DATE.length < 5)
      return FALLBACK_VERSION;
    else
      return DATE;

}

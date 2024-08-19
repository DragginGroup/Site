export let DISPLAY = "version"
export let VERSION = "0.2.5"
export let DATE = "2024.8.19"
export let SUFFIX = "d"
export let PREFIX = ""
export let FALLBACK_VERSION = "version error"

export function validVersion()
{
  if (DISPLAY == "date")
    date()
  else
    version()

}

export function date()
{
  if (DATE.length > 4)
      return DATE;
  else
      return FALLBACK_VERSION;
}

export function version()
{
  if (VERSION.length > 4)
      return PREFIX + "v" + VERSION + SUFFIX;
  else
    return FALLBACK_VERSION;
}

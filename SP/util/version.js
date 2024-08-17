export let VERSION = "0.2.4"
export let SUFFIX = "-dev"
export let PREFIX = ""
export let FALLBACK_VERSION = "version error"

export function validVersion()
{
  if (VERSION.length < 5)
    return FALLBACK_VERSION;

  return PREFIX + "v" + VERSION + SUFFIX;
}

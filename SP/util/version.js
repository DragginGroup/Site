import {localStorage,  setting, stringVersion} from '/Blog/SP/settings/version-display.js'

export let VERSION = "0.2.5"
export let DATE = "2024.8.19"
export let SUFFIX = "d"
export let PREFIX = ""
export let FALLBACK_VERSION = "version error"

export function validVersion()
{
  if (VERSION.length > 4)
    if (stringVersion({ localStorage }) == "date")
      date();
    else
      return PREFIX + "v" + VERSION + SUFFIX;
  else
    date();

}

export function date()
{
  if (DATE.length < 5)
      return FALLBACK_VERSION;
    else
      return DATE;
}

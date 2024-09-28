import {
  DEV_LABEL,
  MISSING_TYPE,
  VERSION,
  DEV_VERSION,
  DATE_VERSION,
  DATE_DEV_VERSION,
} from "../global/version.js";

export function returnVersion(type = "version") {
  var ver = "";

  switch (type) {
    case "date-dev":
      ver = DATE_DEV_VERSION;
    case "date":
      ver = DATE_VERSION;
    case "version-dev":
      ver = DEV_VERSION + DEV_LABEL;
    case "version":
      ver = VERSION;
    default:
      ver = VERSION + MISSING_TYPE;
  }

  return ver;
}

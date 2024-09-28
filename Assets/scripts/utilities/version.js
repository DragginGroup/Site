import {
  DEV_LABEL,
  MISSING_TYPE,
  VERSION,
  DEV_VERSION,
  DATE_VERSION,
  DATE_DEV_VERSION,
  VERSION_LABEL
} from "../global/version.js";

export function returnVersion(type = "version") {
  var ver = "";

  switch (type) {
    case "date-dev":
      ver = `${DATE_DEV_VERSION} ${VERSION_LABEL} ${DEV_LABEL}}`;
    case "date":
      ver = `${DATE_VERSION} ${VERSION_LABEL}`;
    case "version-dev":
      ver = `v${VERSION} ${VERSION_LABEL} ${DEV_LABEL}`;
    case "version":
      ver = `v${VERSION} ${VERSION_LABEL}`;
    default:
      ver = `v${VERSION} ${VERSION_LABEL} ${MISSING_TYPE}`;
  }

  return ver;
}

import { MOD_DATA, returnModData } from "../modding/data.js";

export const VERSION_DATA = {
  version: "0.3.2",
  version_label: "",
  dev_label: "(PROTOTYPE)",
  missing_type: "(NULL VERSION TYPE)",
  dev_mode: true,
  next_label_char: " "
};

/*
author: @IdealistCat
purpose: return the game version.
*/
export function returnVersion(type = "version") {
  var ver = "";

  var devLabel = VERSION_DATA.dev_label;
  var missingType = VERSION_DATA.missing_type;
  var nlc = VERSION_DATA.next_label_char;
  var devLabel_full = VERSION_DATA.dev_mode ? nlc + devLabel : "";

  var version = (MOD_DATA.enabled) ? MOD_DATA.version : VERSION_DATA.version;
  var versionLabel = (MOD_DATA.enabled)? '' : (VERSION_DATA.version_label.length > 0) ? nlc : '' + VERSION_DATA.version_label;
  
  switch (type.toLowerCase()) {
    case "version":
      ver = `v${version}${versionLabel}${devLabel_full}`;
  }

  if (ver == "") ver = `v${version}${versionLabel}${nlc}${missingType}`;

  return ver;
}

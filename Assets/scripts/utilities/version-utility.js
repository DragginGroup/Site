import { MOD_DATA, returnModData } from "../modding/data.js";

// nicodrag versioning
// [total amount of updates].[Major].[minor].[changes/commits since last minor/major version change]
export const VERSION_DATA = {
  version: "0.3.0",
  version_nicodrag: "14.1.2.0",
  version_label: "site console + modding here and there",
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

  var version = (MOD_DATA.enabled)? MOD_DATA.version : nlc + VERSION_DATA.version_nicodrag;
  var version_nicodrag = (MOD_DATA.enabled) ? MOD_DATA.nicodrag_version : nlc + VERSION_DATA.version;
  var versionLabel = (MOD_DATA.enabled)? '' : nlc + VERSION_DATA.version_label;
  
  switch (type.toLowerCase()) {
    case 'nicodrag':
      ver = `v${version_nicodrag}${versionLabel}${devLabel_full}`
    case "version":
      ver = `v${version}${versionLabel}${devLabel_full}`;
  }

  if (ver == "") ver = `v${version}${versionLabel}${nlc}${missingType}`;

  return ver;
}

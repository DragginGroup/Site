export const VERSION_DATA = {
  version: "0.3.0",
  version_date: "10/1/2024",
  version_label: "shit works so its epic now!",
  dev_label: "(PROTOTYPE)",
  missing_type: "(NULL VERSION TYPE)",
  dev_mode: true,
  next_label_char: " ",
};

export function returnVersion(type = "version") {
  var ver = "";

  var version = VERSION_DATA.version;
  var date_version = VERSION_DATA.version_date;
  var versionLabel = VERSION_DATA.version_label;
  var devLabel = VERSION_DATA.dev_label;
  var missingType = VERSION_DATA.missing_type;
  var nlc = VERSION_DATA.next_label_char;
  var devLabel_full = VERSION_DATA.dev_mode ? nlc + devLabel : "";

  switch (type.toLowerCase()) {
    case "date":
      ver = `${date_version}${nlc}${versionLabel}${devLabel_full}`;
    case "version":
      ver = `v${version}${nlc}${versionLabel}${devLabel_full}`;
    default:
      ver = `v${version}${nlc}${versionLabel}${nlc}${missingType}`;
  }

  return ver;
}

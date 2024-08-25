import { returnVersion } from "./util/VersionUtil.js";
import { MOD_ENABLED, MOD_TITLE } from "./modding/api.js";

export const versionType = 'dev';

var versionText = document.getElementById('version');
var versionString = returnVersion(versionType);
var currentBlogTitle = MOD_ENABLED ? MOD_TITLE : 'Blog';

versionText.innerText = currentBlogTitle + ' Version: ' + versionString;
import { returnVersion } from "./util/VersionUtil.js";
import { MOD_ENABLED, MOD_TITLE } from "./modding/api.js";

var versionText = document.getElementById('version');
var versionString = returnVersion('dev');
var currentBlogTitle = MOD_ENABLED ? MOD_TITLE : 'Blog';

versionText.innerText = currentBlogTitle + ' Version: ' + versionString;
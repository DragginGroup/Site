import { returnVersion, returnStable } from "./util/VersionUtil.js";
import { MOD_ENABLED, MOD_TITLE } from "./modding/api.js";

//                       [version, build_type]
export const versionType = 'development';

var versionText = document.getElementById('version');

var versionString = returnVersion(versionType);
var buildString = returnStable(versionType);

var currentBlogTitle = MOD_ENABLED ? MOD_TITLE : 'Blog';

versionText.innerText =  `${currentBlogTitle} ${buildString} Version: ${versionString}`;
// buildTy.innerText = buildString;
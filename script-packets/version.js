import { returnVersion, returnStable, VERSION } from "./util/VersionUtil.js";
import { MOD_ENABLED, MOD_TITLE } from "./modding/api.js";
import { throwError } from "./util/ConsoleUtil.js";

export const versionType = 'development';

var versionText = document.getElementById('version');

var versionString = '';

try {
    versionString = returnVersion(versionType);
} catch (error) {
    versionString = VERSION;
    throwError(error);
}

var buildString = returnStable(versionType);

var currentBlogTitle = MOD_ENABLED ? MOD_TITLE : 'Blog';

versionText.innerText =  `${currentBlogTitle} Version: ${versionString} ${buildString}`;
// buildTy.innerText = buildString;
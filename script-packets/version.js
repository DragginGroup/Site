import { returnVersion, returnStable } from "./util/VersionUtil.js";
import { MOD_ENABLED, MOD_TITLE } from "./modding/api.js";

//                       [version, build_type]
export const versionType = ['dev', 'dev'];

var versionText = document.getElementById('version');
var buildTy = document.getElementById('buildtype');

var versionString = returnVersion(versionType[0]);
var buildString = returnStable(versionType[1]);

var currentBlogTitle = MOD_ENABLED ? MOD_TITLE : 'Blog';

versionText.innerText = currentBlogTitle + ' Version: ' + versionString;
buildTy.innerText = buildString;
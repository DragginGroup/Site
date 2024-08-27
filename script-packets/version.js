import { returnVersion, returnStable } from "./util/VersionUtil.js";
import { MOD_ENABLED, MOD_TITLE } from "./modding/api.js";
import { VERSION_TYPE } from './util/Global.js';

var versionText = document.getElementById('version');
var buildTy = document.getElementById('buildtype');

var versionString = returnVersion(VERSION_TYPE);
var buildString = returnStable(VERSION_TYPE);

var currentBlogTitle = MOD_ENABLED ? MOD_TITLE : 'Blog';

versionText.innerText = `${currentBlogTitle} Version: ${versionString} ${buildString}`;
// buildTy.innerText = buildString;
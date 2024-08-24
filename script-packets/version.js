import { returnVersion } from "./util/VersionUtil.js";

var versionText = document.getElementById('version');
var versionString = returnVersion('dev');
var currentBlogTitle = 'Blog';

versionText.innerText = currentBlogTitle + ' Version: ' + versionString;
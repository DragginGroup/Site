var DEVELOPER_MODE = 1

var GITPAGE = "Blog"

var VERSION = "0.2.0"
var VERSION_PREFIX = "Blog Version: V"
var VERSION_SUFFIX = ""
var VERSION_DEV_SUFFIX = "_dev"

if(DEV == 1) {
  GITPAGE = "Blog-Develop"
  VERSION_SUFFIX = VERSION_SUFFIX + VERSION_DEV_SUFFIX 
}

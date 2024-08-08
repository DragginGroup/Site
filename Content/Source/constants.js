export var DEVELOPER_MODE = 1

export var GITPAGE = "Blog"

export var VERSION = "0.2.0"
export var VERSION_PREFIX = "Blog Version: V"

var VERSION_SUFFIX = ""
var VERSION_DEV_SUFFIX = "_dev"

if(DEVELOPER_MODE == 1) {
  GITPAGE = "Blog-Develop"
  VERSION_SUFFIX = VERSION_SUFFIX + VERSION_DEV_SUFFIX 
}

export {GITPAGE}
export {VERSION_SUFFIX}

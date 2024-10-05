import { log } from "../utilities/siteconsole.js";
import { returnModData, versionCheck, modApiVersionCheck} from "./data.js";

log('mod version check result: '+versionCheck());
log('mod api version check result: '+modApiVersionCheck());
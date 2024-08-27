import { MOD_VERSION, MOD_DATE, MOD_ENABLED } from "../modding/api.js";

const VERSION = '0.2.8';
const DATE = '2024.8.26';

export function returnVersion(vertype = 'version') {

    var date_type = vertype.toLowerCase().startsWith('date');
    var dev_type = vertype.toLowerCase().includes('dev');

    var version_str = MOD_ENABLED ? MOD_VERSION : VERSION;
    var version_date_str = MOD_ENABLED ? MOD_DATE : DATE;
    var develop_str = ` (PROTOTYPE)`;
    
    var version_return = 'v' + version_str;

    if (date_type == true) version_return = version_date_str;
    if (dev_type == true) version_return += develop_str;

    return version_return;
}

export function returnStable(type = 'regular') {
    var build_type = "Stable";
    var dev_type = type.toLowerCase().includes('dev');

    if (dev_type == true) build_type = "Unstable";

    return build_type;
}

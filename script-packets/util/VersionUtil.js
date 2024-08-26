import { MOD_VERSION, MOD_DATE, MOD_ENABLED } from "../modding/api.js";

const VERSION = '0.2.8';
const DATE = '2024.9.1';

export function returnVersion(type = 'version') {
    
    var version_str = MOD_ENABLED ? MOD_VERSION : VERSION;
    var version_date_str = MOD_ENABLED ? MOD_DATE : DATE;

    var develop_str = ' (PROTOTYPE)';
    
    var version_return = 'v' + version_str;

    switch (type.toLowerCase()) {
        case 'date':
            version_return = version_date_str;
        case 'date-development' || 'date-dev' || 'date-develop':
            version_return = version_date_str + develop_str;
        case 'development' || 'dev' || 'develop':
            version_return = 'v' + version_str + develop_str;
    }

    return version_return;
}

export function returnStable(type = 'regular') {
    var build_type = "Stable";

    switch (type.toLowerCase()) {
        case 'development' || 'dev' || 'develop':
            build_type = "Unstable Build";
    }

    return build_type;
}

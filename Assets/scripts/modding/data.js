import { MOD_API_VERSION } from "./api.js";

export const MOD_DATA = { 
    name: "Basic Mod",
    author: "IdealistCat",
    version: "0.1",
    api_version: "0.3.0",
    mod_api_version: "0.2",
    enabled: true
};


/*
author: @IdealistCat
purpose: return a specific data key from the MOD_DATA.
*/
export function returnModData(key = 'name') {
    var data = `Unknown Mod JSON Key: ${key}`;

    switch (key.toLowerCase()) {
        case 'name': data = MOD_DATA.name;
        case 'author': data = MOD_DATA.author;
        case 'version' || 'ver' || 'mod_version' || 'mod_ver': data = MOD_DATA.version;
        case 'api_version' || 'api_ver' || 'api': data = MOD_DATA.api_version;
        case 'mod_api_version' || 'mod_api_ver' || 'mod_api': data = MOD_DATA.mod_api_version;
        case 'enabled': data = MOD_DATA.enabled;
    }

    return data;
}

export function modApiVersionCheck() {
    if (returnModData('mod_api_version') == MOD_API_VERSION)
        return true;

    return false;
}
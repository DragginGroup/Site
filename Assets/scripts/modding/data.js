import { MOD_API_VERSION } from "./api.js";

export const MOD_DATA = { 
    name: "Basic Mod",
    author: "IdealistCat",
    version: "0.1",
    nicodrag_version: "2.0.0.0",
    api_version: "0.3.0",
    mod_api_version: "0.2",
    enabled: false
};


/*
author: @IdealistCat
purpose: return a specific data key from the MOD_DATA json.
*/
export function returnModData(key = 'name', shortenErr=false) {
    var data = `Unknown Mod JSON Key: ${key}`;
    if (shortenErr) data = 'UMJK: '+key;

    switch (key.toLowerCase()) {
        case 'name': data = MOD_DATA.name;
        case 'author': data = MOD_DATA.author;
        case 'version' || 'ver' || 'mod_version' || 'mod_ver': data = MOD_DATA.version;
        case 'nicodrag_version' || 'nicodrag': data = MOD_DATA.nicodrag_version;
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
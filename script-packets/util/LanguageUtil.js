import { replaceText } from '../modding/api.js';

function replaceTxtLanguage(textID = 'name', language = {}) {
    replaceText(textID, language[textID], true);
}

var language = 'spanish';

var spanish = {
    "name" : "spanish site"
};

var lang = {}
lang = spanish;

replaceTxtLanguage("name", lang);

import { replaceText } from '../modding/api.js';

function replaceTxtLanguage(textID = 'name', language = {}) {
    replaceText(textID, language[textID], true);
}

var language = 'spanish';

var spanish = {
    "name" : "spanish site"
};

replaceTxtLanguage("name", spanish);

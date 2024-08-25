import { replaceText } from '../modding/api.js';

// Language
var language = 'Spanish';

// Language Jsons
const jsonSP = {
    "name" : "BLOG ARRASTRANDO",
    "slogan" : "¡El blog para todo lo relacionado con el arrastre!",
    "care" : "Programado manualmente y cuidado con amor y cuidado por parte de todo el equipo.",
    "braincells" : "Creo que está hecho con 10 células cerebrales."
} // Spanish

var lang = {}

// Set Cur Language
switch (language.toLowerCase()) {
    case 'spanish' || 'sp': lang = jsonSP;
}

// text replacement
function replaceTxtLanguage(textID = 'name') {
    if (lang[textID] != null)
        replaceText(textID, lang[textID], true);
}

// index.html
replaceTxtLanguage("name", lang);
replaceTxtLanguage("slogan", lang);
replaceTxtLanguage("care", lang);
replaceTxtLanguage("braincells", lang);

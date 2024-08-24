import { replaceText } from '/Blog/SP/modding/api.js';

const language_name = 'Spanish';

// Language Jsons
const jsonEN = {
    "name" : "DRAGGING BLOG",
    "slogan" : "The Blog for all things Dragging Related!",
    "care" : "Manually Programmed and Cared for with Love and Care from all of the team",
    "braincells" : "Made with 10 braincells, I think."
}; // English

const jsonSP = {
    "name" : "BLOG ARRASTRANDO",
    "slogan" : "¡El blog para todo lo relacionado con el arrastre!",
    "care" : "Programado manualmente y cuidado con amor y cuidado por parte de todo el equipo.",
    "braincells" : "Creo que está hecho con 10 células cerebrales."
} // Spanish

// Current Language Json Modifying
const curLanguage = {};

switch (language_name.toUpperCase()) {
    case 'SPANISH' || 'SP': curLanguage = jsonSP;
    case 'ENGLISH' || 'EN': curLanguage = jsonEN;
    default: curLanguage = jsonEN;
}

// Text Replacement
languageReplace("name");
languageReplace("slogan");
languageReplace("care");
languageReplace("braincells");

// Function for replacing text easily
function languageReplace(identifier = "name") {
    replaceText(identifier, curLanguage[identifier]);
}

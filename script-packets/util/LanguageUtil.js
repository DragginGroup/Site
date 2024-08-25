import { replaceText } from '../modding/api.js';

// Language
var language = 'Spanish';

// Language Jsons
const jsonSP = {
    // General
    "WIPblog" : "Sitio de blog Work In Progress - Grupo Draggin",
    // Home page
    "name" : "BLOG ARRASTRANDO",
    "slogan" : "¡El blog para todo lo relacionado con el arrastre!",
    "care" : "Programado manualmente y cuidado con amor y cuidado por parte de todo el equipo.",
    "braincells" : "Creo que está hecho con 10 células cerebrales.",
    // Credits page (hell)
    "beloved" : "Github mi amado",
    "blogteam" : "Equipo del blog",
    "ic" : "IdealistCat - Programación líder, arte, animación",
    "dc" : "Drago Cuven - Programación Lua",
    "df" : "Djotta Flow - Arte, Animación",
    "t" : "Trippy - Pruebas",
    "suggestors" : "Sugerentes/Asistentes de Discord",
    "t.69" : "trippy.69 - Página de ayuda",
    "b7" : "bit7 - Relleno de texto",
    "d_c" : "drago_cuven - Implementación de Wasmoon",
    "pl" : "pauleps - idea del club de frijoles/solución de token inesperada",
    "ys" : "yadav_saurabh - generador de código qr que se utilizó",
    "special" : "agradecimiento especial",
    "h" : "Hazel - Código de texto desplazable Tomado de funkin.me",
    "funkcrew" : "Funkin Crew Inc - funkin.me, toda la inspiración para este sitio",
    "tk" : "Tomas Kenzgaila - Reemplazar el código de imagen utilizado para MODDING",
    "markk" : "Markknol: Visor de registros de consola utilizado durante el desarrollo",
    // 404 page
    "" : "",
    // Help page
    "" : "",
    // Bloglist page
    "" : "",
    // Blog 1 page
    "" : "",
    // Blog 2 page
    "" : "",
    // Comiclist page
    "" : "",
    // IdealistCatComic page
    "" : "",
    // Settings page
    "" : ""
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

for (let index = 0; index < Object.keys(lang).length; index++) {
    const element = Object.keys(lang)[index];

    replaceTxtLanguage(element);
    console.log(element);
}

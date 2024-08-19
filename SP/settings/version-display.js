const button = document.querySelector("[vd-toggle]");

export const localStorage = localStorage.getItem("version-display");
export let setting = stringVersion({ localStorage });

export function stringVersion({ localStorage }) {
  if (localStorage !== null) {
    return localStorage;
  }

  return "version";
}

// import {localStorage,  setting, stringVersion} from '/Blog/SP/settings/version-display.js'

function updateHtml({ attribute }) {
  document.querySelector("html").setAttribute("vd", attribute);
}

updateHtml({ attribute: currentThemeSetting });

button.addEventListener("click", (event) => {
  const set = setting === "version" ? "date" : "version";

  localStorage.setItem("version-display", set);
  updateThemeOnHtmlEl({ attribute: set });

  setting = set;
});

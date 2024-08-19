const button = document.querySelector("[vd-toggle]");
const localStorage = localStorage.getItem("version-display");
let setting = stringVersion({ localStorage });

function stringVersion({ localStorage }) {
  if (localStorage !== null) {
    return localStorage;
  }

  return "version";
}

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

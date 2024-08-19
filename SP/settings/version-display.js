const button = document.querySelector("[vd-toggle]");
const localStorage = localStorage.getItem("version-dispkay");

function stringVersion({ localStorage }) {
  if (localStorage !== null) {
    return localStorage;
  }

  return "version";
}

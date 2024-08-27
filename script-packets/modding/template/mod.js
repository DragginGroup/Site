import { replaceImg, replaceText, toggleMod } from '../api.js';
import { MOD_NAME, MOD_VERSION, MOD_ENABLED } from '/Blog/script-packets/util/Global/js';

// Text
replaceText('name', MOD_NAME, true);
replaceText('version', 'v'+MOD_VERSION, true);
replaceText('description', 'Tester Modder', true);

// Mod Toggle
var button = document.querySelector("[toggle]")

button.addEventListener("click", (event) => {
  toggleMod();
  button.innerHTML = 'Enabled: '+MOD_ENABLED;
});
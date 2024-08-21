import { replaceImg, replaceText, toggleMod } from '/Blog/SP/modding/api.js';
import { MOD_NAME, MOD_VERSION, MOD_ENABLED } from '/Blog/SP/modding/api.js';

// Text
replaceText('name', MOD_NAME, true);
replaceText('version', MOD_VERSION, true);
replaceText('description', 'Tester Modder', true);

// Mod Toggle
var button = document.getElementById('toggle');

button.addEventListener("click", (event) => {
  toggleMod();
  replaceText('toggle', 'Enabled: '+MOD_ENABLED);
});

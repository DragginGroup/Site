import { CREDITS, init } from "./utilities/creditsUtil.js";

init();

for (let index = 0; index < CREDITS.length; index++) {
    const person = CREDITS[index];
    
    document.getElementById('credits').append(person); 
}
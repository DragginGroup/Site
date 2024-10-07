/*
author: @IdealistCat
purpose: random integer.
*/
export function randomInt(min, max) {
    var result = random(min, max);
    
    return Math.floor(result);
}

/*
author: @IdealistCat
purpose: random float.
*/
export function random(min, max) {
    var result = Math.random() * max;

    if (result < min)
        result = min;

    return result;
}
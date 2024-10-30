export const CREDITS = [];

export function addCredit(person, job) {
    var newElement = document.createElement('p');
    newElement.innerHTML = person + ' - ' + job;

    CREDITS.push(newElement);
}

export function init() {
    addCredit('IdealistCat', 'Programming, Art');
    addCredit('Markknol', 'Console Log Viewer Programming');
}
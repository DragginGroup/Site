export const CREDITS = [];

export function addCredit(person, job) {
    CREDITS.push({
        user: person,
        work: job
    });
}

export function init() {
    addCredit('IdealistCat', 'Programming, Art');
}
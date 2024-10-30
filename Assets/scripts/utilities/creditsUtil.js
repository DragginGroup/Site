export const CREDITS = [];

export function addCredit(person, job) {
    CREDITS.push({
        user: person,
        work: job
    });
}

addCredit('IdealistCat', 'Programming, Art');
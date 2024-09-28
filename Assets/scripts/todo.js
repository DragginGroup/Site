var TODO = { items = [] };

function addTODOitem(nameA = "", completedA = false, priorityA = false) {
    var new_item = { name: nameA, completed: completedA, priority: priorityA};
    TODO.items.push(new_item);
}

addTODOitem('make proper TODO page', false, true);
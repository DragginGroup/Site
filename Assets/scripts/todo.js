var TODO = { items: [] };

function addTODOitem(nameA = "", completedA = false, priorityA = false) {
    var new_item = { name: nameA, completed: completedA, priority: priorityA};
    TODO.items.push(new_item);
}

addTODOitem('make proper TODO page', false, true);
addTODOitem('modding', false, true);

var array = TODO.items;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    var para = document.createElement('p');
    para.innerHTML = element.name;
    if (element.priority) {
        document.body.prepend(para);
    } else {
        document.body.append(para);
    }
}
// variables
var header = document.createElement('h1');
var div = document.createElement('div');

var project = document.createElement('a');
var github = document.createElement('a');

header.innerHTML = 'Navigation';
div.className = 'navigation';

project.innerHTML = 'Project';
project.id = 'projectPage';

github.innerHTML = 'Github';
github.id = 'github';

document.body.prepend(document.createElement('hr'));
document.body.prepend(github);
document.body.prepend(project);
document.body.prepend(div);
document.body.prepend(header);
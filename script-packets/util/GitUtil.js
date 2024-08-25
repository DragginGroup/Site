export var git = require('git -rev-sync');

console.log(git.short());
// 75bf4ee

console.log(git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log(git.branch());
// master

const Task = require('./task');
const repoFactory = require('./repoFactory');

let task1 = new Task(repoFactory.getRepo('task').get(1))


let user = repoFactory.getRepo('user').get(1);
let project = repoFactory.getRepo('project').get(1)

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
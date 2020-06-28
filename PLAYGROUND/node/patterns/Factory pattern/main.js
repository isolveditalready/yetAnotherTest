const Task = require('./task')
const Repo = require('./taskRepository')
const userRepo = require('./userRepository')
const projectRepo = require('./projecctRepository')

let task1 = new Task(Repo.get(1))
let user = userRepo.get(1);
let project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
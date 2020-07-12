var repoFactory = function () {

    console.log(`this is ${this.taskRepo}`)
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                console.log("Retrieving from cache");
                return this.taskRepo;
            } else {
                console.log("Retrieving from reg");
                var taskRepo = require('./taskRepository')();
                console.log(`this2 is ${this.taskRepo}`)
                return this.taskRepo;

            }
        }

        if (repoType === 'user') {
            var userRepo = require('./userRepository');
            return userRepo;
        }

        if (repoType === 'project') {
            var projectRepo = require('./projectRepository');
            return projectRepo;
        }
    }
}
module.exports = new repoFactory;
let Repo = require('./taskRepository')

let Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype = {
    complete: function () {
        console.log(`completing task: ${this.name}`);
        this.completed = true;
    },

    save: function () {
        console.log(`saving Task: ${this.name}`)
        Repo.save(this)
    }
}

module.exports = Task;
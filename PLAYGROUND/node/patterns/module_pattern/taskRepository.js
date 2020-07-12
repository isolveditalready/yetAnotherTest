let repo = function () {
    // yes
    let db = {};

    let get = function (id) {
        console.log(`Getting task ${id}`)
        return {
            name: 'new task from db'
        }
    }
    let save = function (task) {
        console.log(`saving ${task.name} to the db`)
    }

    // pub API
    return {
        get: get,
        save: save
    }
}

module.exports = repo();
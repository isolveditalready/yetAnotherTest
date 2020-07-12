let repo = function () {

    let db = {};

    let get = function (id) {
        console.log(`Getting project ${id}`)
        return {
            project: {
                name: 'new training'
            }
        }
    }


    // pub API
    return {
        get: get
    }
}

module.exports = repo()
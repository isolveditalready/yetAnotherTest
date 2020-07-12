let repo = function () {

    let db = {};

    let get = function (id) {
        console.log(`Getting user ${id}`)
        return {
            user: {
                name: 'mike tyson'
            }
        }
    }


    // pub API
    return {
        get: get
    }
}

module.exports = repo()
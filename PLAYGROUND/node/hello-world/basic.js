const fs = require("fs");
const util = require("util");
let read = util.promisify(fs.readFile);

let hello = async () => {};

/*

let read = util.promisify(fs.readFile);

Promise
    .all([
        read('data/1.txt'), 
        read('data/2.txt'), 
    ])
    .then(data => {
        const [ data1,data2 ] = data;
        console.log(data1.toString());
        console.log(data2.toString());
    })
    .catch(err => {
        console.log("you suck in life " + err);
    });
/*
const fs = require('fs');
const util = require('util');

let read = util.promisify(fs.readFile);
read('data.txt')
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.log("you suck");
    })



const fs = require('fs');

new Promise 
    ( (resolve,reject) => {
        fs.readFile('data1.txt', (err,data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
    .then(data => {
        console.log(data.toString());
    })
    .then(data=> {
        console.log('finitio');
    })
    .catch(err => {
        console.log(err);
    })

Promise.resolve('pre')
    //new Promise((resolve,reject) => {
     //   resolve('good');
        //reject('bad');
    //})
    .then(value => {
        console.log(value);
        return 'shit';
    })
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.log(err);
    });


const fs = require('fs');

function getCurrenttime(){
    let currentdatetime = new Date().getTime();
    return currentdatetime;
}

for (var i=2; i< 3; ++i ) {
 //   fs.readFile('data1.txt', (err,data) => {
      fs.readFile('data/' + i + '.txt', (err,data) => { 
        console.log(data.toString().trim());

        setTimeout( () => {
            console.log("i is " + i + " date is " + getCurrenttime())
            console.log(data.toString());
        },1000);
    });
}

console.log('here');


const fs = require('fs');

console.log('yahoo');

fs.readFile('data1.txt', (err,data) => {
    console.log(data.toString());
});


// class
class thing {
    constructor(_id) {
        this._id = _id;
    }

    // same as id() {}   as word get is implied
    get id() {
        return this._id;
    }
}

let t = new thing(555);
console.log(t.id);


// generators
function* range(start,end) {
    while (start < end) {
        yield start;
        start += 1;
    }
}

for (let i of range(0,10)) {
    console.log("before");
    console.log(i);
    console.log("after");
}

//
const fs = require('fs');

readFile('data1.txt' (err,data) => {
    console.log(data.toString());
});

console.log('here');
*/

userguy = 'john2';

let user = {
    'john': 'user1',
    'john1': 'user2'

};

console.log("userguy is " + userguy);

if ( user[userguy] ) {
    console.log("yes");
} else {
    console.log("no");
}
## find mongodb path

1)do ps -ef | grep mongod
--> 11882 ? SLl 1:24 /usr/bin/mongod -f /etc/mongod.conf

2.

    grep dbPath /etc/mongod.conf
       -->  dbPath: /var/lib/mongo

## create user and passwd

use admin
db.createUser(
{
user: "admin",
pwd: 'meisterjimd',
roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
}
)
\*\*\* userAdminAnyDatabase means you can do anything
\*\*\* above is wrong.. actually this just means it can create users but cannot really do anything..

## create true super user

db.createUser(
{
user: "mongo-root",
pwd: "passw0rd",
roles: [ { role: "root", db: "admin" } ]
}
)

## creating other users(but maybe no good)

db.createUser(
{
user: "k7",
pwd: "passw0rd",
roles: [ { role: "editUser", db: "tours" } ]
}
)

db.createUser(
{
user: "k8",
pwd: "passw0rd",
roles: [ { role: "readWrite", db: "tours" } ]
}
)

## create Role

db.createRole(

{
createRole: "editUser",
privileges: [
{ resource: { db: "tour", collection: "" },
actions: [ "insert","update","createIndex", "createCollection" ] }
],

roles: [{ role: "read", db: "tour"}]

})

## creeate user with readwrite to specific database

db.createUser(
{
user:"tracerouteadmin",
pwd:'meisterjimd',
roles: [ { role:"dbOwner", db:"traceroutedb"},"readWrite"]
}

)

## restart w/ auth

_serer side_
mongod --auth --port 27017 --dbpath /var/lib/mongodb

## restart w/out auth

_serer side_
mongod --port 27017 --dbpath /var/lib/mongodb

## how to login for client

mongo --port 27017 --authenticationDatabase "admin" -u "admin" -p
\*\*\* admin continues to have to logon like above

## how to see who I am logged in as under cli

db.runCommand( { connectionStatus: 1, showPrivileges: true } )

## show all the database

show dbs

## show all tables (collection)

db.getCollectionNames()

## to create addtional user

use traceroutedb
db.createUser(
{
user: "cpmonuser",
pwd: "meisterjimd",
roles: [ { role: "readWrite", db: "traceroutedb" },
{ role: "read", db: "reporting" } ]
}
)

\*\*\* second role is for different db

## login as xmen

mongo --port 27017 traceroutedb -u "xmen" -p

## to create database

use databasename

## to start the client

mongo

## to use db

--> use databasename
use nba

\*\* above also creates the db named nba. HOWEVER, it will not show up on show dbs UNTIL
one inserts at least one record

## create table and structure OR create collection

--> insert single record
db.knicks.insertOne(
{
name:"patrick ewing",
position: "center",
height:220,
salary:3000
}
)

--> insert many
db.knicks.insertMany(
[
{
name:"Charles Oakely",
position: "forward",
height:210,
salary:4444
},
{
name:"John Starks",
position: "guard",
height:195,
salary:1000
},
{
name:"Anthony Mason",
position: "guard",
height:198,
salary:2000
}
]
)

db.shit.insertOne(
{
ip:1,
num:111,
result:[
{1:"1"},
{2:"2"}
]

}
)

db.shit.insertMany(
[
{
ip:1,
num:111,
result:[
{1:"10.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"10.49.143.254 (10.49.143.254) 0.1203 ms 0.192 ms 0.171 ms"}
]

},
{
ip:1,
num:112,
result:[
{1:"10.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"10.49.143.254 (10.49.143.254) 0.1203 ms 0.192 ms 0.171 ms"}
]
},
{
ip:1,
num:113,
result:[
{1:"10.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"10.49.143.254 (10.49.143.254) 0.1203 ms 0.192 ms 0.171 ms"}
]
}
]
)

db.traceroute.insertMany(
[
{
ip:"1.1.1.1",
date:202005121030,
status:"success",
result:[
{1:"10.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"10.49.143.254 (10.49.143.254) 0.1203 ms 0.192 ms 0.171 ms"}
]
},
{
ip:"1.1.1.1",
date:202005121031,
status:"success",
result:[
{1:"10.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"10.49.143.251 (10.49.143.251) 0.1203 ms 0.192 ms 0.171 ms"}
]
},
{
ip:"1.1.1.1",
date:202005121032,
status:"success",
result:[
{1:"10.49.143.252 (10.49.143.252) 0.2203 ms 0.11192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.199 ms 0.171 ms"},
{3:"10.49.143.251 (10.49.143.251) 0.1203 ms 0.192 ms 0.171 ms"}
]
},
{
ip:"1.1.1.2",
date:202005121030,
status:"success",
result:[
{1:"20.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"20.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"20.49.143.254 (10.49.143.254) 0.1203 ms 0.192 ms 0.171 ms"}
]
},
{
ip:"1.1.1.2",
date:202005121031,
status:"fail",
result:[
{1:"10.49.143.252 (10.49.143.252) 0.203 ms 0.192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.192 ms 0.171 ms"},
{3:"10.49.143.251 (10.49.143.251) 0.1203 ms 0.192 ms 0.171 ms"},
{4:" * * * "},
{5:" * * * "}
]
},
{
ip:"1.1.1.2",
date:202005121032,
status:"success",
result:[
{1:"10.49.143.252 (10.49.143.252) 0.2203 ms 0.11192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.199 ms 0.171 ms"},
{3:"* * *"},
{4:"* * *"},
{5:"* * *"},
{6:"* * *"},
{7:"* * *"}
]
},
{
ip:"1.1.1.2",
date:202005121033,
status:"success",
result:[
{1:"10.49.143.252 (10.49.143.252) 0.2203 ms 0.11192 ms 0.171 ms"},
{2:"10.49.143.252 (10.49.143.253) 0.203 ms 0.199 ms 0.171 ms"},
{3:"* * *"},
{4:"* * *"},
{5:"* * *"},
{6:"* * *"},
{7:"* * *"},
{8:"* * *"},
{9:"* * *"}
]
}
]
)

## to get everything

db.knicks.find({});

## drop database

> use tour;
> switched to db tour
> db.dropDatabase()
> { "dropped" : "tour", "ok" : 1 }

## drop table or drop collection

db.knicks.drop();

## remove all the data in collection

> db.tracerouteschedulerts.remove({})

## find criteria

--> find salary is greater than x

> db.knicks.find( { salary: { \$gt: 2000}}).limit(5)

--> find between two dates
db.knicks.find( {salary: {$gte:2000,$lt:6000} } ).pretty();

db.knicks.find(  
 {
salary: {$gte:2000,$lt:6000},  
 status: { \$eq: "YES"}

}
);

## update

db.knicks.updateOne(
{name:"Anthony Mason"},
{
\$set: {"height": 200}
}
)

db.knicks.updateMany(
{"height": {$gt: 200}},
    {
        $set: {salary: 5000}
}
)

## replace (completely)

db.knicks.replaceOne( {name:"Anthony Mason"}, {name:"Anthony Mason", enemy:"yes"})

## remove specific field

--> > db.knicks.insert( {status: "current"} )
After above, knicks will contains
{ "\_id" : ObjectId("5ebacc6367a5f64270006dd1"), "status" : "current" }
if you want to just remove status
db.knicks.update({}, {\$unset:{status:1}}, {multi:true});
if you wanted to get rid of entire thing
db.knicks.deleteOne({"\_id":ObjectId("5ebacc6367a5f64270006dd1")});

## want to add new field to all records

> db.knicks.update({},{\$set: {status: "YES"}}, false,true)

     **** {} refering to entire record

## remove specfici record

> db.test.find({})
> { "\_id" : 0, "name" : "time", "score" : 5 }
> { "\_id" : 1, "name" : "john", "score" : 4 }
> { "\_id" : ObjectId("5ecd5ef91f435fa6b019c7cc"), "name" : "sarah", "score" : 6 }
> db.test.remove({name: {\$eq: "sarah"}})
> WriteResult({ "nRemoved" : 1 })
> db.test.find({})
> { "\_id" : 0, "name" : "time", "score" : 5 }
> { "\_id" : 1, "name" : "john", "score" : 4 }

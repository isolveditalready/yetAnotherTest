## when you login, you have no idea. what's going.

-Your task is to figure out the admin user and create a new user who can editnew db

## this is what you should do

i)is it running already(mongodb)

     - if it's running
           1)not running as secure

           2)running as secure
                  a)kill mongod
                  b)restart mongd as none authetnication mode
                  c)login as client  (simple mongo will do for now)
                  d)create a new admin user for specific database
           3)kill the db and start w/ authentication

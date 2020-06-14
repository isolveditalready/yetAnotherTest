import pymongo
import time
import datetime
from random import *
from pymongo import MongoClient

client = MongoClient('mongodb://mongo-root:passw0rd@192.168.56.102:27017')

stringToStuff = 'blabh blah blahhhhh'

def createLoop():
    return randint(5,15)

def tGenerator(e):
    firstTime = 1 
    print(e)
    returnString = ''
    for i in range(e):
        if firstTime is 1:
            returnString +=   str(i+1) + " " + stringToStuff
            firstTime = 2
        else: 
            returnString +=  "," +  str(i+1) + " " + stringToStuff
    return returnString

db = client['pytest']
collection = db['test']
names = db.test.find()

collection2 = db['pytestResult']
for p in names:
    print(p['name'])
    name2 = p['name'] 
    post = {
        'name':name2,
        'score':8,
        'date':datetime.datetime.now(),
        #"traceroute": ['1 aksdfjas;dkfjsa;dfkj','2 ;alksdjf;askdjf;asdfjkasdf', '3 ;alksdfj;asdlkfj;asdfj',]
        'traceroute': tGenerator(createLoop()).split(',') 
    }
    collection2.insert_one(post)



"""
__END__
collection = client['tracerouteschedulerts']
print(f'collection is ${collection}')
print(type(collection))
DATABASE_PASSWORD=abc123
#DATABASE=mongodb://xmen:<PASSWORD>@192.168.56.102:27017/tour
DATABASE=mongodb://tracerouteuser:<PASSWORD>@192.168.56.102:27017/tracerouted
"""
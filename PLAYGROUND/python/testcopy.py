import pymongo
import time
from datetime import datetime 
from pymongo import MongoClient


#clent = MongoClient('mongodb://tracerouteuser:abc123@192.168.56.102', 27017)
client = MongoClient('mongodb://mongo-root:passw0rd@192.168.56.102:27017')

db = client['pytest']
collection2 = db['pytestResult']
greaterdate = datetime(2020,5,26,19,45,0)
print(greaterdate)
collectionFound = collection2.find({
    #'date': {'$gt':'2020-05-26 19:45.00.000000'},
    #'date': {'$gt':'2020-05-26T19:45:00.000Z'},
    'date': {'$gt': "ISODate"('2020-05-26T19:45:00.000Z')},
    'name': {'$eq': 'sarah'}
})

for c in collectionFound:
    print(c)
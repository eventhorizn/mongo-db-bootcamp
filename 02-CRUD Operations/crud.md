# CRUD Notes

CRUD stands for:
1. Create
    - insertOne(data, options)
    - insertMany(data, options)
1. Read
    - find(filter, options)
    - findOne(filter, options)
1. Update
    - updateOne(filter, data, options)
    - updateMany(filter, data, options)
    - replaceOne(filter, data, options)
1. Delete
    - deleteOne(filter, options)
    - deleteMany(filter, options)

## Databases, Collections, Documents

1. Databases Contain Collections
    - Collections are Tables in regular DBs
1. Collections Contain Documents
    - Documents are the data pieces
1. All are created implicity when you insert data
    - Don't have to create before you start inserting

## JSON vs BSON

1. MongoDB actually uses BSON behind the scenes
    - We will always use and see JSON
1. It's more effecient to store BSON
    - Size and timing
1. Supports additional types
    - ObjectId for example makes it 'invalid' json
    - MongoDB can understand it even if it's not valid json
1. Will accept 'json' where the key isn't a string
    - Technically invalid json
1. Can also manually pick a key
    - _key: 'keyVal'

## CRUD Operations and MongoDB

No matter how you interface w/ MongoDB, you'll need to interact through CRUD operations

1. Some levels (analysis) it's just reading data
1. Others (admin), it's all
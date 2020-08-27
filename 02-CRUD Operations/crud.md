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
1. On read, mongoDB uses a cursor (due to the danger of returning lots of data)
    - Doesn't return an array by default

Look to the .mongodb file in the folder for more info

## Projection

Take a data set from the database

An application may only need some of that data
- You can pull everything and filter on the app side
- But it's better to do that on the db side

## Embedded Documents and Arrays

1. Core feature of mongoDB
1. You can have a field in your document, that's also a document
    - It's turtles all the way down
1. Up to 100 levels of nesting
1. Overall document size max is 16mb
1. Can also store arrays in a document
    - Can store any data
    - List of data

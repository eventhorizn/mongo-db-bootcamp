# Create Operations

## Create Documents

1. insertOne()
1. insertMany()
1. insert()
    - Can take one or many documents
    - Depreciated
1. mongoimport

## WriteConcern

The Storage Engine doesn't alwasy write to disk immediately

Sometimes it writes to memory to keep things fast

You can configure a WriteConcern on an insert

```
{w: 1, j: undefined}
```

1. w: 1 (how many instances)
1. j: undefined (journal)
    - Todo, things the storage engine needs to do
    - Describes the write operation
    - Default is journal is not being used
    ```
    {w: 1, j: true}
    ```
1. Only return if written to disk
    ```
        {w: 1, wtimeout: 200, j: true}
    ```
1. Gives server timeout before failing

## Atomicity

### InsertOne

1. If an insert fails, we have a Roll Back
    - Nothing is saved
1. If it succeeds, all is inserted
1. For each document
    - Fails as a whole, or succeeds as a whole

### InsertMany

1. Only get this for each document, not for the list
1. CRUD Ops are atomic on the Document level
    - Including Embedded Documents

## Import Data

Call from shell

**As of MongoDB 4.4, this tool is relesed separately**

[MongoDB Tools](https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools) 
    
- Can also manually import through Compass, worked fine

```
mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop
```

1. mongoimport is the command
1. tv-shows.json is the file (need to be in the folder)
1. -d movieData is database
1. -c movies is collection
1. --jsonArray is the type of data
1. --drop is to drop the db/collection if exists

**Final Note**

You need to open the cmd window where the import file is, or at least point to the folder location during import command
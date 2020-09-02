# Reading Data

[Find Documentation](https://docs.mongodb.com/manual/reference/method/db.collection.find/)

## Methods, Filters, & Operators

### Method

db.myCollection.**find()**

### Filter

db.myCollection.find(**{age: 32}**)

### Operator

db.myCollection.find({age: **{$gt: 30}**})
- The filter is considered a **range filter**

## Operators Overview

### Query & Projection

- Query Selectors 
- Projection Operators

**Read Operators**

Delete uses the same operators

### Update

- Fields
- Arrays

### Query Modifiers

- Deprecated

### Aggregation

- Pipeline Stages
- Pipeline Operators

## Query Selectors & Projection Operators

[Documentation](https://docs.mongodb.com/manual/reference/operator/query/)

### Query Selectors

1. Comparison
1. Logical
1. Element
1. Evaluation
1. Array
1. Comments
1. Geospatial

### Projection Operators

1. $
1. $elemMatch
1. $meta (related to indexes)
1. $slice

## Understanding Cursors

[Cursor Documentation](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/)

1. find() returns a cursor (pointer)
    - Instead of returning all the results (could be millions)
    - Only returns 20
    - Returns documents 1 by 1
1. If you write an app w/ a mongodb driver
    - You have to control that cursor manually
    - You have a query that finds 1000 items...
    - The cursor automatically does fetching for you
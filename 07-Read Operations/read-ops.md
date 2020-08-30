# Reading Data

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
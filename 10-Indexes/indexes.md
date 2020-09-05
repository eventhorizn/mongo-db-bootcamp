# Indexes

1. All about retrieving data efficiently
1. If used incorrectly, can slow things down
1. Text Indexes are good as they tend to be searched often, and are usually different document to document
    - Booleans would not be good, only 2 options

## Why/What Indexes?

```
db.products.find({seller: "Max"})
```

1. To fulfill this query w/o an index, mongodb does a collection scan
1. It scans ALL documents, then filters
1. An index exists separately to the collection.
1. It's an ordered list of items w/ a pointer to the full document.
1. Much quicker to find right index, then get document

**Don't use too many indexes**

1. You pay performance cost on inserts
    - You make an element on the index for each insert
    - Along w/ pointers

## Indexes Behind the Scenes

When you type ```createIndex()``` what happens?

We can't see the index, but you can think of it as:
- List of values + pointers to the original document

Something like this for an 'age' field index

```
(29, "address in memory/ collection a1")
```

## Query Diagnosis &  Query Planning

1. explain()
1. explain("queryPlanner")
    - Show summary for executed query
    - Winning plan
1. explain("executionStats")
    - Show detailed summary for executed query 
    - Winning plan
    - Possible rejected plans
1. explain("allPlansExecution")
    - Show details summary for executed query
    - Winning plan 
    - Winning plan decision process

### Determine if Query is Efficient

1. Millisceonds Process Time
    - IXSCAN typically beats COLLSCAN  
1. # Keys (in Index) Examined
1. # Documents Examined (should be close to keys)
1. # Documents Returned (Should be close to documents examined)

## Winning Plans

How does MongoDB figure out which plan is best?

MongoDB Lets 'approaches' (indexes) race each other
- Doesn't use all data (maybe 100 documents)

MongoDB caches this plan as "Winning" plan for future queries so it doesn't need to race again
- Cache is cleared after:
    - Certain amount of inserts (1000)
        - Needs to reconsider plan after so many new documents
    - Index is Rebuilt
    - Other Indexes are Added or Removed
    - MongoDB Server is Restarted

## Building Indexes

Two different ways

1. Foreground (Most of our examples)
    - Collection is locked during index creation
    - Faster
1. Background
    - Collection is accessible during index creation
    - Slower

# Useful Resources & Links

1. [Partial Filter Expressions](https://docs.mongodb.com/manual/core/index-partial/)
1. [Supported Default Languages](https://docs.mongodb.com/manual/reference/text-search-languages/#text-search-languages)
1. [Use Different Languages in Same Index](https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/#create-a-text-index-for-a-collection-in-multiple-languages)
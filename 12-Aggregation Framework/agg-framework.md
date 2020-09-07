# Aggregation Framework

Retrieving Data Efficiently & In a Structured Way

**Think about the difference between app data and report data**

## What is Aggregation Framework?

[Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)

[Aggregation Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/cond/)

1. Alternative to Find
1. You build a pipeline to your output
    - Collection -> $match -> $sort -> $group -> $project -> Output

## $group vs $project

1. $group
    - n:1
    - Sum, Count, Average, Build Array
1. $project
    - 1:1 
    - Include/Exclude Fields
    - Transform Fields (w/i a single document)

## Aggregation Optimization

[Aggregation Optimization](https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/)
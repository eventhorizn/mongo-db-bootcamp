# MongoDB Bootcamp

## Setup/Info

1. Install [MongoDB](https://www.mongodb.com/try/download/community)
    - Free Community edition
1. Install [VSCode Extension](https://docs.mongodb.com/mongodb-vscode/)
1. [MongoDB Documentation](https://docs.mongodb.com/)

## What is mongoDB?

1. It's a database
    - Mongo comes from: 'humongous'
1. Built to store lots and lots of data
1. In mongo db we have collections instead of tables
    - inside of a collection you have a document
        - json format (key, value)
    - Inside a collection, you are schemaless
1. MongoDB converts json to bson format behind the scenes

## How does MongoDB differ from SQL DB

1. MongoDB is a 'nosql' solution
1. Stores data together in a document
1. Document data can have multiple structures
    - Can get messy, but developers need to keep it clean
1. No schema
1. Use it for apps that may evolve, where data reqs aren't defined
1. Less 'tables' (collections)
    - You store data together, so app pulls more at once

## MongoDB Ecosystem

**MongoDB is the name of the company that makes the db MongoDB 'Database'**

1. Atlas (Cloud solution)
1. Mobile for storing data
1. Compass (GUI)
1. BI Connectors (Data Science)
1. MongoDB Charts (Data Science)
1. Stitch (serverless back-end solution)
    - Serverless query api
    - Serverless Functions
    - Database Triggers
    - Real-Time sync
        - Syncs w/ database in clould and mobile

# The Shell and The Server

## Getting Started

My takeaway is that there is a lot of options for mongo db that I probably won't care about, but I should know about them

1. [Official Docs](https://docs.mongodb.com/manual/)
1. [Mongo Shell](https://docs.mongodb.com/manual/mongo/)
    - I won't add all the commands, since the documentation has it all
    - mongo --help is the big command to know
        - Don't login to mongo first
        - Shows all the mongo options
    - [Shell Details](https://docs.mongodb.com/manual/reference/program/mongo/)
1. [Configuration File](https://docs.mongodb.com/manual/reference/configuration-options/)
    - Might be one auto created, and can create it anywhere (as long as mongo knows where to find)
    - A way to save settings in one file (and source control)
1. [Server Help](https://docs.mongodb.com/manual/reference/program/mongod/)
    - mongod --help
1. Database and Collection help
    - connect to mongo (type mongo)
    - db.help()
    - db.Collection.help()
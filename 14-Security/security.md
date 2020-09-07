# Security & User Authentication

## Security Checklist

1. Authentication & Authorization
    - Db has users, and your code will have to authenticate w/ the db to do CRUD operations
1. Transport Encryption
    - Data that is sent from app to server is encrypted
1. Encryption at Rest
    - Data in Db needs to be encrypted
1. Auditing
    - Who did what, which actions occured
1. Server & Network Config and Setup
    - Network you are using to host MongoDB should also be secured
1. Backups & Software Updates
    - Regularly backup data
    - Make sure software is up-to-date for security updates

## Role Based Access Control

1. Authentication
    - Identifies valid users of the db
    - Analogy: You are employed and may access the office
1. Authorization
    - Identifies what these users may actually do in the db
    - Analogy: You are employed as an accountant and may access office and process orders

![](role-based-access.png)

## Why Roles?

**Different Types of Database Users**

1. Administrator
    - Needs to be able to manage the db config, create users, etc
    - Does NOT need to be able to insert or fetch data
1. Developer/App
    - Needs to be able to do CRUD
    - Does NOT need to be able to create users or manage d
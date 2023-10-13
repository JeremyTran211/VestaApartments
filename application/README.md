# Application Folder

## Purpose
The purpose of this folder is to store all the source code and related files for your team's application. You are free 
to organize the contents of the prototypes' folder as you see fit. But remember your team is graded on how you use Git. 
This does include the structure of your application. Points will be deducted from poorly structured application folders.

## Please use the rest of the README.md to store important information for your team's application. 

## REST API endpoint to provide listings from database using GET operation
http://localhost:3000/listings

## for mapping CRUD operations to MySQL 

## REST API Operations for listings 
GET /listings → getMultiple() - this operation will be invoked by frontend/UI to retrieve listings from MYSQL database
POST /listings → create()     - this operation will be invoked by frontend/UI to insert listings into MYSQL database
PUT /listings/:id → update()  - this operation will be invoked by frontend/UI to update exisiting listings in MYSQL database
DELETE /listings/:id → remove()  - this operation will be invoked by frontend/UI to delete listings from MYSQL database

## REST API Operations for users
GET /users → getMultiple()      -  this operation will be invoked by frontend/UI to retrieve users from MYSQL database
POST /users → create()          -  this operation will be invoked by frontend/UI to insert user into MYSQL database
PUT /users/:id → update()       - this operation will be invoked by frontend/UI to update exisiting users in MYSQL database
DELETE /users/:id → remove()    - this operation will be invoked by frontend/UI to delete users from MYSQL database




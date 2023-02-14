# Electromerce-Back-End

## Description
My task is to build the back end for an e-commerce site by modifying starter code. I will have to configure a working Express.js API to use Sequelize to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributors](#contributors)
* [Report Bugs](#bugreport)

## Installation
Clone the repository in your terminal machine or git bash
Clone Via SSH: $ git clone git@github.com:miklos-petronia/Electromerce-Back-End.git

Input your MySQL username and password in the server.js file.
Cd/ into the cloned directory and install dependencies. 
To start the application, type the following into the terminal: $ node server.js

## Usage

 1. install npm init -y to create a new .json file
 2. npm i
 3. npm i inquirer@8.2.4
 4. npm i mysql
 5. npm i sequelize 
 6. Make sure to run .sql file in mySQL workbench
 7. npm run seed
 7. SOURCE ./db/shema.sql
 8. npm run start

## Video illustration

https://drive.google.com/file/d/1EPPBPRWuPERqSqaIIjjAgvLhpBFdvbcp/view?usp=share_link

## License 
 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

## Credits
Columbia classes videos, documentations & some videos online

## Contributors
N/A

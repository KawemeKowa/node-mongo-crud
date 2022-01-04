## Project Title

A node app to create quotes and read quotes using mongo db and express. This simple application creates API's (Server) to perform CRUD (Create, Read, Update and Delete) operations on a mongo database and uses ejs template engine to render the html to the client side.

---
## Requirements

For development, you will need Node.js and a node global package, npm, installed in your environement.

You will also need a mongo database. You can use Mongo DB atlas https://www.mongodb.com/atlas/database

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###


---

## Install

    $ git clone https://github.com/KawemeKowa/node-mongo-crud.git
    $ cd node-mongo-crud
    $ npm install

## Configure app
You will need a mongo database connection string.

Create a file called .env in the root directory

add the connection string to the .env file

MONGO_CONNECTION_STRING = 'your_mongo_connectiong_string'

## Running the project

    $ npm run dev

## Simple build for production

    $ npm build


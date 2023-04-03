// README.md

### Installation Guide

- Clone this repository [here](https://github.com/XephorNova/hdfc_tasl.git).
- Run yarn install to install all dependencies

### Usage

- Run yarn start to start the application.
- Connect to the API using Postman on port 9000.

### API Endpoints

| HTTP Verbs | Endpoints      | Action                                               | Header                   | Request                                                                 |
| ---------- | -------------- | ---------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------- |
| POST       | /user          | To Create a New User                                 |                          | {name: "John", email:"email", password: "password", role_name: "Admin"} |
| POST       | /login         | To login an existing user account and get user token |                          | {email: "email", password: "password" }                                 |
| POST       | /:user_id/post | To Create New Post                                   | x-access-token = <token> | {post_message: "Hello World Post"}                                      |
| PUT        | /post/:post_id | To Edit a post                                       | x-access-token = <token> | {post_message: "Updated Post Message"}                                  |
| DELETE     | /post/:post_id | To delete the post                                   | x-access-token = <token> |                                                                         |
| GET        | /post/:user_id | To get all the post by user                          |                          |                                                                         |
| GET        | /user/:user_id | Get all the details about user                       |                          |                                                                         |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

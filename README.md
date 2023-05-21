# SQL TO-DO APP

## Description

This was my weekend project on SQL week! Using this simple web app, the user can add tasks to a to-do list, mark tasks as complete (with visual queues to keep track), and delete tasks.

This project also has several feature branches, which have extra style changes and functionality improvements.

## Screenshots

![Master branch screenshot](/images/master.png)


## Prerequisites

Base mode:
- node.js
- npm
- express.js
- postgresql (.sql file provided)

feature-time-completed:
- moment.js

## Installation

1. Create a database called "weekend-to-do-app"
2. Run the query provided in weekend-to-do-app.sql
3. Open the project in your editor of choice and run `npm install`
4. Install express with `npm i express`
5. Install postgresql with `npm i pg`
6. Install moment.js with `npm i moment` (optional, for use with feature-time-completed branch)
7. Open server with `npm start`

## Usage

`master` branch:
- Type a new to-do list task into the input field and click `Submit`
- Mark items as completed with corresponding `Complete` buttons
- Delete items with corresponding `Delete` buttons

`feature-styling-boostrap` is functionally the same as the `master` branch, just prettier!
`feature-confirm-delete` adds an additional confirmation pop-up when the user clicks the delete button to prevent accidental deletions.
`feature-ordering-task-query` keeps the order of the to-do list in descending order based on time added, even when marked as "completed"
`feature-time-complted` adds a Time Completed column to the table that will display a timestamp of when each task was marked as "completed"

## Built With
- [node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [express.js](https://expressjs.com/)
- [postgresql](https://www.postgresql.org/)
- [moment.js](https://momentjs.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [SweetAlert2](https://sweetalert2.github.io/)

## TODO:

Here's the TO-DO list for my TO-DO list! (whoa, meta!)

- [x] set up SQL database
    - db name 'weekend-to-do-app'
    - table name 'todo'
        - id SERIAL PRIMARY KEY
        - taskname VARCHAR(250) NOT NULL
        - completed BOOLEAN DEFAULT 'FALSE'
        - time DATE
    - [x] include .sql file for reference

- [x] set up server-side code:
    /server
        /public
        - [x] html
        - [x] css
            /scripts
            - [x] client.js
            - [x] jquery.js
        /modules
        - [x] pool.js
        /routes
        - [x] todo.router.js
    - [x] server.js
    .gitignore
- [x] npm init --yes
- [x] npm i pg
- [x] npm i express

- [x] front end that allows a user to create a task
    - [x] client.js ajax POST request
    - [x] client.js append function

- [x] each task should be stored inside of SQL database
    - [x] todo.router.js POST request

- [x] front end should refresh to show all tasks
    - [x] client.js ajax GET request
    - [x] todo.router.js GET request

- [x] each task should have an option to 'complete' or 'delete'
    - [x] client.js append function
    - [x] client.js ajax PUT request
    - [x] client.js ajax DELETE request
    - [x] onReady click handlers

- [x] change visual representation when task changed to complete
    - [x] style.css .notcomplete class
    - [x] style.css .complete class
    - [x] client.js addClass / removeClass

- [x] 'completed' status should be stored in database
    - [x] todo.router.js PUT request

- [x] deleting a task should remove it from front end AND database
    - [x] todo.router.js DELETE request

### Stylin'

- [x] change background color of page
- [x] font family and size
- [x] text color & background color of tasks based on completed status

### STRETCH GOALS

USE BRANCHES

- [x] feature-styling-bootstrap
    - [x] add bootstrap CDN to the front end
        - [x] source CDN links into index.html
        - [x] research bootstrap classes and edit html
    - [x] buttons (create green, delete red)
    - [x] inputs
    - [x] responsive
        - [x] reference [layout section](https://getbootstrap.com/docs/4.1/layout/overview/)

- [x] feature-confirm-delete
    - [x] Sweetalert (CDN) "are you sure? y/n" alert on delete

- [x] feature-ordering-task-query
    - [x] figure out how to use req.query to have the GET request reverse the order of returned todos

- [x] feature-time-completed
    - [x] add the ability to record the time when a task was completed. Show the complted date on the frontend in a purdy format (moment.js)
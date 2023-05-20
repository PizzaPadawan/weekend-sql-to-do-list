# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## TODO:
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
    - [x] html task input / button
    - [x] client.js ajax POST request
    - [x] client.js append function

- [x] each task should be stored inside of SQL database
    - [x] todo.router.js POST request

- [x] front end should refresh to show all tasks
    - [x] html table
    - [x] client.js ajax GET request
    - [x] todo.router.js GET request

- [x] each task should have an option to 'complete' or 'delete'
    - [x] client.js append function
    - [x] client.js ajax PUT request
    - [x] client.js ajax DELETE request
    - [x] onReady click handlers

- [x] change visual representation when task changed to complete
    - [x] style.css .complete class
    - [x] client.js conditional append

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

- [] feature-styling-bootstrap
    - [x] add bootstrap CDN to the front end
        - [x] source CDN links into index.html
        - [] research bootstrap classes and edit html
    - [] buttons (create green, delete red)
    - [] inputs
    - [] responsive
        - [] reference [layout section](https://getbootstrap.com/docs/4.1/layout/overview/)

- [] feature-confirm-delete
    - [] Sweetalert (CDN) "are you sure? y/n" alert on delete

- [] feature-ordering-task-query
    - [] figure out how to use req.query to have the GET request reverse the order of returned todos

- [] feature-time-completed
    - [] add the ability to record the time when a task was completed. Show the complted date on the frontend in a purdy format (moment.js)
# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## TODO:
- [] set up SQL database
    - db name 'weekend-to-do-app'
    - table name 'todo'
        - id SERIAL PRIMARY KEY
        - taskname VARCHAR(250) NOT NULL
        - completed BOOLEAN DEFAULT 'FALSE'
        - time DATE
    - [] include .sql file for reference

- [] set up server-side code:
    /server
        /public
        - [] html
        - [] css
            /scripts
            - [] client.js
            - [] jquery.js
        /modules
        - [] pool.js
        /routes
        - [] todo.router.js
    - [] server.js
    .gitignore
- [] npm init --yes
- [] npm i pg
- [] npm i express

- [] front end that allows a user to create a task
    - [] client.js ajax POST request
    - [] client.js append function

- [] each task should be stored inside of SQL database
    - [] todo.router.js POST request

- [] front end should refresh to show all tasks
    - [] client.js ajax GET request

- [] each task should have an option to 'complete' or 'delete'
    - [] client.js append function
    - [] client.js ajax PUT request
    - [] client.js ajax DELETE request
    - [] onReady click handlers

- [] change visual representation when task changed to complete
    - [] style.css .notcomplete class
    - [] style.css .complete class
    - [] client.js addClass / removeClass

- [] 'completed' status should be stored in database
    - [] todo.router.js PUT request

- [] deleting a task should remove it from front end AND database
    - [] todo.router.js DELETE request

### Stylin'

- [] change background color of page
- [] font family and size
- [] text color & background color of tasks based on completed status

### STRETCH GOALS

USE BRANCHES

- [] feature-styling-bootstrap
    - [] add bootstrap CDN to the front end
        - [] source CDN links into index.html
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
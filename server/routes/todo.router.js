const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    console.log('get TODO list')
    let query = 'SELECT * FROM "todo";'

    pool.query(query)
    .then(result => {
        console.log('in GET result')
        res.send(result.rows);
    }).catch(error => {
        console.log('error on GET') 
        res.sendStatus(500)
    });
});

router.post('/', (req, res) => {
    console.log('post TODO list', req.body)
    let query = `INSERT INTO "todo" ("taskname","completed","time")
    VALUES ($1, $2, $3);`

    pool.query(query, [req.body.taskname, req.body.completed, req.body.time])
    .then(result => {
        console.log(result);
        res.sendStatus(201);
    }).catch(error => {
        console.log('error on POST', error);
        res.sendStatus(500);
    });
});

router.put('/:id/complete', (req, res) => {
    console.log('pootis', req.params.id);
    let query = `UPDATE "todo" SET "completed"=TRUE WHERE "id"=$1;`

    pool.query(query, [req.params.id])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error on pootis :(', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    console.log('YEET', req.params.id);
    let query = `DELETE FROM "todo" WHERE "id"=$1;`

    pool.query(query, [req.params.id])
    .then(result => {
        res.sendStatus(204);
    }).catch(error => {
        console.log('IT LIVES >:(', error);
        res.sendStatus(500);
    });
});

module.exports = router;
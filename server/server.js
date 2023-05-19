const express = require('express')
const app = express();
const PORT = 5000;
const todoRouter = require('./routes/todo.router');

app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/todo', todoRouter);

app.listen(PORT, () =>{
    console.log('listening on port', PORT);
});
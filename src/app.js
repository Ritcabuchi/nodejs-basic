const express = require('express');
const morgan = require('morgan');
const todos = require('./routes/todos');
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Hello World');
 });

app.use('/todos', todos);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
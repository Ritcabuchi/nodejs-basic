const path = require('path');
const ejs = require('ejs');
const express = require('express');
const morgan = require('morgan');
const todos = require('./routes/todos');
const app = express()
const port = process.env.PORT || 3000

//parse a
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
//logger
if(app.get('env') === 'development'){
}
app.use(express.static('public'));
//view engine setup
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route
app.get('/', (req, res) => {
    res.render('index', {name: "Riduwan"});
 });

app.use('/todos', todos);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here

  let todoList = {
      title: 'Todo'
    , messages: [
          'Learn Node basics'
        , 'Learn Express basics'
        , 'Learn mustache'
        , 'Learn HTML forms with Express'
        , 'Learn about authentication'
        , 'Learn how to connect PostgreSQL'
        , 'Learn how to crete databases'
        , 'Learn SQL'
        , 'Learn How connect to PostgreSQL from Node'
        , 'Learn how to use Sequelize'
      ]
  }

  res.render('todo.mustache', todoList);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})

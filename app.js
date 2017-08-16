const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function(req, res) {
  // TODO write your code here


  let todoList = {
    title: 'Todo',
    items: [{
        'name': "Learn Node basics",
        'done': true
      },
      {
        'name': "Learn Express basics",
        'done': true
      },
      {
        'name': "Learn Mustache",
        'done': true
      },
      {
        'name': "Learn HTML forms with Express",
        'done': false
      },
      {
        'name': "Learn about authentication",
        'done': false
      },
      {
        'name': "Learn how to connect to PostgreSQL",
        'done': false
      },
      {
        'name': "Learn how to create databases",
        'done': false
      },
      {
        'name': "Learn SQL",
        'done': false
      },
      {
        'name': "Learn how to connect to PostgreSQL from Node",
        'done': false
      },
      {
        'name': "Learn how to use Sequelize",
        'done': false
      },
    ]
  }

  res.render('todo', todoList);
})

app.listen(3000, function() {
  console.log('Successfully started express application!');
})

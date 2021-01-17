const express = require('express');
const pug = require('pug');
const people = require('./people.json');

const app = express();
const port = 8080;

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

//app.get('/', (req, res) => res.send('Hello DevOps World!'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        people: people.profiles
    })
});

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
  });

app.get('/addNumbers', (req, res) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    var total = (num1 - 0) + (num2 - 0);
    console.log('total is ' + total);
    //res.send('total is ' + total);
    res.render('addNumbers', {
        num1: num1, num2: num2, total: total});
})

app.listen(port);
console.log(`App running on http://localhost:${port}`);

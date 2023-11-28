const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

//Loads the handlebars module
const handlebars = require('express-handlebars');
const exp = require('constants');

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  extname: 'hbs',
  defaultLayout: 'index'
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('homepage', { layout: 'index' });
});

app.get('/auth', (req, res) => {
  res.render('auth');
});


app.listen(port, () => console.log(`App listening to port ${port}`));

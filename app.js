const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('Connected to database'))
  .catch((err) => console.log('Datbase connection error:', err));


  //Middlewares
  app.set('view engine', 'ejs');
  app.use(express.static('public'));
  app.use(express.json());
  app.use(cookieParser());


//Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/recipes', (req, res) => {
    res.render('recipes');
});

app.use(authRoutes);












const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});
const express = require('express');
const path = require('path');

// Init app
const autoskola = express();

// Load view engine (pug) from views folder
autoskola.set('views', path.join(__dirname, 'views'));
autoskola.set('view engine', 'pug');

// Setting up public folder for stylesheet
autoskola.use(express.static(__dirname + '/public'));

// Port
const PORT = process.env.PORT || 5000;

// Homepage route
autoskola.get('/', (req, res) => {
    res.render('index');
});

// Skupina A route
autoskola.get('/skupina-a', (req, res) => {
    res.render('skupina_a');
});

// Skupina B route
autoskola.get('/skupina-b', (req, res) => {
    res.render('skupina_b');
});

// Skupina C route
autoskola.get('/skupina-c', (req, res) => {
    res.render('skupina_c');
});

// Skupina D route
autoskola.get('/skupina-d', (req, res) => {
    res.render('skupina_d');
});

// Starting server...
autoskola.listen(PORT, () => console.log(`Server started on port ${PORT}`));
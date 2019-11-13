const express = require('express');
const path = require('path');

// Init app
const autoskola = express();

// Load view engine (pug) from views folder
autoskola.set('views', path.join(__dirname, 'views'));
autoskola.set('view engine', 'pug');

// Port
const PORT = process.env.PORT || 5000;

// Homepage route
autoskola.get('/', (req, res) => {
    res.render('index')
});

// Starting server...
autoskola.listen(PORT, () => console.log(`Server started on port ${PORT}`));
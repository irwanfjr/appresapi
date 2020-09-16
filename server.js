const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();

// PARSE APPLICATION/JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// PANGGIL ROUTES
var routes = require('./routes');
routes(app);

// DAFTARKAN MENU ROUTES DARI INDEX
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});
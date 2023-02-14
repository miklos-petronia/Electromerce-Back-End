
const express = require('express');
const routes = require('./routes');

// Get sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Combine sequelize framework to the database information, then turn the server on
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on ' + PORT));
});
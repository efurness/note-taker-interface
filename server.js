const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api_routes.js');
const htmlRoute = require('./routes/html_routes');

const PORT = process.env.PORT || 3001;


const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', htmlRoute);
app.use('/api', apiRoutes);
app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

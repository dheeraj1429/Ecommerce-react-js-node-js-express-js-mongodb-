const express = require('express');

// database
require('./models/db');

const indexRouter = require('./routes/indexRouter');

const app = express();
const port = process.env.POST || 5000;

// Middlware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products/', indexRouter);

// Server
app.listen(port, () => {
  console.log('server start');
});

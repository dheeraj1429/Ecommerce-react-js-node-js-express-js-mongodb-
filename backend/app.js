const express = require('express');
const cors = require('cors');

const app = express();

// database
require('./models/db');

// Routers
const indexRouter = require('./routes/indexRouter');

// Middleware
app.use(cors());
app.use(express.json());

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

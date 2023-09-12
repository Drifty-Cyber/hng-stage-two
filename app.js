const express = require('express');
const xss = require('xss');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');

// Create Express app
const app = express();

// Set up Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Express Body Parser
app.use(express.json());

// app.use(xss());

// Mount the Router
app.use('/api', userRouter);

module.exports = app;

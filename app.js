const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const personRouter = require('./routes/personRoutes');

// Create Express app
const app = express();

// Set up Morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Express Body Parser
app.use(express.json());

// Use XSS
app.use(xss());

// Mount the Router
app.use('/api', personRouter);

module.exports = app;

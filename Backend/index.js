const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const routes = require('./src/routes/lf.routes');
const mbController = require('./src/controllers/lf.controllers');
const { testDatabaseConnection } = require('./src/config/db.config');
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set it to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time (in milliseconds)
  },
}));


// Routes
app.use('/', routes);

//
testDatabaseConnection();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express   = require('express');
const chalk     = require('chalk');
const debug     = require('debug')('app'); 
const morgan    = require('morgan');
const path      = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// Sets up middleware to provide performance outputs
app.use(morgan('tiny'));

// The directory to use as source of view templates
app.set("views", path.join(__dirname, "views"));

// Sets the express view engine as pug
app.set("view engine", "pug");

// Middleware static serving with express
app.use(express.static(path.join(__dirname, "public")));

// Pug views are not client responses
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

// App listening on port value
app.listen(PORT, () => {
    debug(`listening on port ${chalk.green(PORT)}`); 
});
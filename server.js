const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');
const path = require ('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: tre }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// create routes 
app.use(require("./routes/api.js"));

// port listener
app.listen(PORT, () => {
    console.log(`App is listening and running on port ${PORT}. Be quiet, the app might hear you!`);
});
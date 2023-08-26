const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

var api = require('./routes/house')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


app.use('/api/houses', api);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers


// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    console.log(err.status)
    res.status(err.status || 500);
    res.send(err.status);

});

module.exports = app;
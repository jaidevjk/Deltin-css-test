console.log("Application Started");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jwtRuter = require('./routes/jwt');

var imgRuter = require('./routes/img');
var transactionRuter = require('./routes/transaction');

var app = express();

app.use(cors());
//app.use(express.json());

// Parses urlencoded bodies
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json());

// Set EJS as templating engine 
app.set("view engine", "ejs");


let mongoConnUrl = "mongodb+srv://jaidevk:4AL15ME715@cluster0.kmhzh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("Error came in connecting" + error);
});
db.on("open", function () {
  console.log(`yes, we are connected to mongodb and the database`);
});


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jwt',jwtRuter);
app.use('/transaction',transactionRuter);

app.use('/img',imgRuter);

//For cors error-policy
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.disable('etag');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// mongodb+srv://jaidevk:<password>@cluster0.kmhzh.mongodb.net/?retryWrites=true&w=majority

// mongodb://localhost/deltinuser
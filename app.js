var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// My imports
var fs = require('fs');
var es = require('event-stream');
var mongoose = require('mongoose');

// var MongoClient = require('mongodb').MongoClient;
// var db;


var app = express();

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
// MongoClient.connect("mongodb://localhost:27017/integration_test", function(err, database) {
//   if(err) return console.error(err);

//   db = database;

//   // the Mongo driver recommends starting the server here because most apps *should* fail to start if they have no DB.  If yours is the exception, move the server startup elsewhere. 
// });

// mongoose.connect('mongodb://localhost:27017/AzamTVDB',{useNewUrlParser: true,
// useUnifiedTopology: true});
// mongoose.connection.on('connected', function(){
//   console.log('MongoDB Connected');
//   read()
//   // mongoose.connection.db.command({})
//   // mongoose.connection.db.command(read(),function(err,res){
//   //   if(err){
//   //     console.log('err-----------',err);
//   //   } else {
//   //     console.log('--------------res',res);
//   //   }
//   // })
// })

read()

function read(){
var  k =0 
var lineNr =0
var total = ''
var s = fs.createReadStream('../../../Downloads/PROD-out-7.log')
    .pipe(es.split())
    .pipe(es.mapSync(function(line){
      var toLine =line.toString().toLowerCase()
        // pause the readstream
        // if(line.indexOf('Mongoose:')>1 && .indexOf('.insert') > 1 && .indexOf('ratelimitflex') < 0){
        // if(line.indexOf('Mongoose:')>1 && (toLine.indexOf('.update') > 1|| toLine.indexOf('.findoneandupdate') > 1|| toLine.indexOf('._findandmodify') > 1 )&& toLine.indexOf('ratelimitflex') < 0){
         if(line.indexOf('Mongoose:')>1 && (toLine.indexOf('.delete') > 1|| toLine.indexOf('.findoneanddelete') > 1|| toLine.indexOf('.remove') > 1 )&& toLine.indexOf('ratelimitflex') < 0){
          line = 'db.'+line.toString().replace('Mongoose:','');
          // if(line.indexOf('._findandmodify')>1){
          //   line = line.toString().replace('._findandmodify','')
          // }
          console.log("line---->",k,'-----',line);
          total = total+line+'\n';
          k++
        } else {
          // console.log('Non mongoose line   ----------->',line);
        }
        s.pause();
        lineNr += 1;
        
        s.resume();
        // resume the readstream, possibly from a callback
       
    })
    .on('error', function(err){
        console.log('Error while reading file.', err);
    })
    .on('end', function(){
      console.log("final count of file ",k)
        console.log('Read entire file.')
    })
);
}

module.exports = app;

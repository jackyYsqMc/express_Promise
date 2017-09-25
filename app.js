var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const EventRouter = require('./routes/EventRouter')

//环境变量端口或则手动设置端口
const  port =process.env.port||3000

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api",EventRouter)





// app.get("/",function(){
//
// })
// app.post("/login.do",function(){
//
// })
// app.get("reg.do",function(){
//
// })
//
// app.get("addUser.do",function(){
//
// })

app.listen(port,()=>{
  console.log("服务器启动……………………")
})
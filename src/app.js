const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookiecheck = require('./middlewares/cookieChecker')
const localsUser = require('./middlewares/localsUserCheck')
const passport = require('passport')
const { loginGoogleInitialize } = require('./services/googleServices');

/* Router */
const mainRouter = require('./routes/main');
const userRouter = require('./routes/users');
const productRouter = require('./routes/product');
const adminRouter = require('./routes/admin');
const authRouter = require('./routes/auth');
/* Router Api */
const {admin,users,product,main,cartApi} = require('./routes/api/index')

const app = express();
loginGoogleInitialize()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..','public')));
app.use(methodOverride('_method'));
app.use(session({
  secret:"hyperStoreForEver",
  resave:false,
  saveUninitialized:true
}));
app.use(cookiecheck) //checkea si hay cookie y la manda a session
app.use(localsUser) //checkea si hay session y lo manda a locals
app.use(passport.initialize())
app.use(passport.session())

/* Rutas */
app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter); 
app.use('/product', productRouter);
app.use('/auth', authRouter)

/* Api */
app.use('/api/admin',admin);
app.use('/api/main',main);
app.use('/api/product',product);
app.use('/api/users',users);
app.use('/api/cart',cartApi);

// catch 404 and forward to error handler
app.use('*', function(req, res) {
  res.render('404');
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
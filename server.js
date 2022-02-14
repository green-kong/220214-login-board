const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const boardRouter = require('./routes/boardRouter.js')

const app = express();

const maxAge = 1000 * 60 * 5;

const sessionObj = {
  secret: 'kong',
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore({ checkPeriod: maxAge }),
  cookie: {
    maxAge,
  },
};

app.use(session(sessionObj));

app.set('view engine', 'html');
nunjucks.configure('views', { express: app });

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello server');
});
app.use('/board',boardRouter)
app.listen(3000);

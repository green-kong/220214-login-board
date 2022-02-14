const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const userRouter = require('./routes/userRouter');
const { Router } = require('express');
const router = require('./routes/userRouter');

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
nunjucks.configure({ express: app });

app.use(express.urlencoded('views', { extended: true }));

app.get('/', (req, res) => {
  res.send('hello server');
});

app.listen(3000);

router.use(`/user`,userRouter)
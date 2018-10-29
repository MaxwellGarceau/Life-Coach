require('./config/config');
const _ = require('lodash');
const moment = require('moment');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
const { authenticate } = require('./middleware/user-authentication');

// Models
const { User } = require('./models/user');

const publicPath = path.join(__dirname, '..', 'public');

let port;
// Listens on a port exactly one number higher than specified in .env.development/.env.development
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  port = parseInt(process.env.PORT, 10) + 1 || 8081;

  // Replace with events data

  // const friendTestData = require('./tests/fixtures/friends-data').friends;
  // friendTestData.map((testFriend) => {
  //   return mongoose.connection.collection('friends').replaceOne({ _id: testFriend._id }, testFriend, { upsert: true });
  // });
} else {
  port = process.env.PORT;
}

app.use(cors());

app.use(bodyParser.json());

// User Sign Up
app.post('/api/users', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password', 'signUpDate']);
    const user = new User(body);

    await user.save();

    const token = await user.generateAuthToken();
    const cookieProperties = {
      // httpOnly: true,
      // secure: true,
      expires: moment().add(1, 'h').toDate(),
      maxAge: moment().add(1, 'h').valueOf() - moment().valueOf()
    };
    res.cookie('jwtToken', token, cookieProperties);
    res.header('x-auth', token).send(user);
  } catch (e) {
    if (e.code === 11000 || e.code === 11001) {
      e.message = 'A user with this email already exists.';
    }
    res.status(400).send({ errorMessage: e.message });
  }
});

// POST /users/login {email, password} (Login)
app.post('/api/users/login', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    const cookieProperties = {
      // COOKIE DOESN'T WORK WITH "HTTPONLY" OR "SECURE" SET
      // httpOnly: true,
      // secure: true,
      expires: moment().add(1, 'h').toDate(),
      maxAge: moment().add(1, 'h').valueOf() - moment().valueOf()
    };
    res.cookie('jwtToken', token, cookieProperties);
    res.header('x-auth', token).send(user);
  } catch (e) {
    res.status(400).send({ errorMessage: e });
  }
});

// POST /users/me (Get User Info)
app.get('/api/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

// DELETE /users/me/token (Logout)
app.delete('/api/users/me/token', authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.clearCookie('jwtToken');
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});

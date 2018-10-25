require('./config/config');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
const { authenticate } = require('./middleware/user-authentication');

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

app.use('/graphql', graphqlHTTP({
  schema,
  // rootValue: root,
  graphiql: true
}));

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});

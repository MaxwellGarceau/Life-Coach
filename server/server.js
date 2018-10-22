const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8081;
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const UserRepository = require('./tests/fixtures/user-repository');
const userRepository = new UserRepository();

const schema = buildSchema(`
  "A user."
  type User {
    id: Int!
    login: String!
    firstName: String!
    lastName: String!
  }

  "The root of it all"
  type Query {
    "Returns a list of users."
    users: [User]

    "Returns a single user matching an ID."
    user(id: Int!): User
  }
`);

const root = {
  users: () => {
    return userRepository.findAll();
  },
  user: ({ id }) => {
    return userRepository.getOneById(id);
  }
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});

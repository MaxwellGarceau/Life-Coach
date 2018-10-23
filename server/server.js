const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8081;
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const UserRepository = require('./tests/fixtures/user-repository');
const userRepository = new UserRepository();

// const schema = buildSchema(`
//   "A user."
//   type User {
//     id: Int!
//     login: String!
//     firstName: String!
//     lastName: String!
//   }

//   "The root of it all"
//   type Query {
//     "Returns a list of users."
//     users: [User]

//     "Returns a single user matching an ID."
//     user(id: Int!): User
//   }
// `);

// const root = {
//   users: () => {
//     return userRepository.findAll();
//   },
//   user: ({ id }) => {
//     return userRepository.findOneById(id);
//   }
// }

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    login: {
      type: new GraphQLNonNull(GraphQLString)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        login: {
          type: new GraphQLNonNull(GraphQLString)
        },
        firstName: {
          type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (args) => {
        return userRepository.create(args);
      }
    }
  }
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return userRepository.findAll();
      }
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (user, args) => {
        return userRepository.findOneById(args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

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

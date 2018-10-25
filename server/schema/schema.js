const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID
} = graphql;
const UserRepository = require('../tests/fixtures/user-repository');
const userRepository = new UserRepository();

// Models
const { User } = require('../models/user');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return User.find();
      }
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (user, args) => {
        return User.findOne({_id: args.id});
      }
    }
  }
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: async (parent, args) => {
        try {
          const user = new User(args);
          await user.save();
          return user;
        } catch (e) {
          console.log('Error: ', e);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

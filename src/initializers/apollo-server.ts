import { schema } from '../graphql/schema';

const { ApolloServer } = require('apollo-server-koa');

export const server = new ApolloServer({
    schema:schema,
    playground: true,
    context: ({ req }) => ({
      user: req.user,
    }),
  })
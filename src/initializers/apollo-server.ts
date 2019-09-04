import { schema } from '../graphql/schema';

import { ApolloServer } from 'apollo-server-koa';

export const server = new ApolloServer({
    schema: schema,
    playground: true,
});

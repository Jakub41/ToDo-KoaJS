import { schema } from '../graphql/schema';

import { ApolloServer } from 'apollo-server-koa';

export const server = new ApolloServer({
    schema: schema,
    playground: true,

    // formatError: error => {
    //     console.log(error);
    //     return error;
    // },

    // formatResponse: response => {
    //     console.log(response);
    //     return response;
    // },
});

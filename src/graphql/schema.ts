import { makeExecutableSchema } from 'graphql-tools';

import { Query } from './types/card/query';
import { Mutation } from './types/card/mutation';
import { UserQuery } from './types/user/query';
import { UserMutation } from './types/user/mutation';
import { types } from '../graphql/types';
import { resolvers } from '../graphql/resolvers';

const schemaDefinition = `
    schema {
        query     : Query
        mutation  : Mutation
    }
`;

const typeDefs = [schemaDefinition, Query, UserQuery, Mutation, UserMutation, ...types];

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    logger: { log: e => console.log(e) },
});

import { makeExecutableSchema } from 'graphql-tools';

import { Query }     from '../graphql/types/query';
import { Mutation }  from '../graphql/types/mutation';
import { types }     from '../graphql/types';
import { resolvers } from '../graphql/resolvers';

const schemaDefinition = `
    schema {
        query    : Query
        mutation : Mutation
    }
`;

const typeDefs = [
    scalar Date,
    scalar DateTime,
    schemaDefinition,
    Query,
    Mutation,
    ...types,
];

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
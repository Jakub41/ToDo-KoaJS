import { makeExecutableSchema } from 'graphql-tools';
const { gql } = require('apollo-server-koa')


import { Query }     from './types/query';
import { Mutation }  from './types/mutation';
import { types }     from './types';
import { resolvers } from './resolvers';


const schemaDefinition = gql`
    schema {
        query    : Query
        mutation : Mutation
    }
`;


const typeDefs = [
    schemaDefinition,
    Query,
    Mutation,
    ...types,
];


export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
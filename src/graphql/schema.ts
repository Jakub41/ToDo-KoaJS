import { makeExecutableSchema } from 'graphql-tools';
import { Types } from './types/types';
import { types } from '../graphql/types';
import { resolvers } from '../graphql/resolvers';

const schemaDefinition = `
    schema {
        query         : Query
        mutation      : Mutation
    }
`;

const typeDefs = [
    schemaDefinition,
    Types.cardTypes.query,
    Types.userTypes.query,
    Types.cardTypes.mutation,
    Types.userTypes.mutation,
    ...types,
];

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    logger: { log: e => console.log(e) },
});

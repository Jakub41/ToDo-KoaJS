import { makeExecutableSchema } from 'graphql-tools';
import TypeDefs from './typedefs/typedefs';
import { resolvers } from '../graphql/resolvers';

export const schema = makeExecutableSchema({
    typeDefs: TypeDefs,
    resolvers,
    logger: { log: e => console.log(e) },
});

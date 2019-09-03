import { makeExecutableSchema } from 'graphql-tools';
import { TypeDefs } from './typedefs/typedefs';
import { resolvers } from '../graphql/resolvers';

const typeDefs: Array<string> = TypeDefs;

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    logger: { log: e => console.log(e) },
});

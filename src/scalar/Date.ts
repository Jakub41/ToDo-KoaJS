import { GraphQLScalarType, GraphQLError } from 'graphql';
import { Kind } from 'graphql/language';
import { isISO8601 } from 'validator';

export default new GraphQLScalarType({
    name: 'Date',
    description: 'Date type',
    parseValue(value): Date {
        if (isISO8601(value))
            // value comes from the client
            return new Date(value); // sent to resolvers
        throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
    },
    serialize(value): Promise<string> {
        if (isISO8601(value))
            // value comes from resolvers
            return value.toISOString(); // sent to the client
        throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
    },
    parseLiteral(ast): Date {
        // ast comes from parsing the query
        // this is where you can validate and transform
        if (ast.kind !== Kind.STRING) {
            throw new GraphQLError(`Query error: Can only parse dates strings, got a: ${ast.kind}`, [ast]);
        }
        if (isNaN(Date.parse(ast.value))) {
            throw new GraphQLError(`Query error: not a valid date`, [ast]);
        }

        if (isISO8601(ast.value)) return new Date(ast.value);

        throw new Error('DateTime cannot represent an invalid ISO-8601 Date string');
    },
});

import { types } from '../../graphql/types';
import { Types } from '../types/types';

const schemaDefinition = `
    schema {
        query         : Query
        mutation      : Mutation
    }
`;

const TypeDefs = [
    schemaDefinition,
    // Card Type Def
    Types.cardTypes.query,
    Types.cardTypes.mutation,

    // User Type Def
    Types.userTypes.query,
    Types.userTypes.mutation,

    // Profile Type Def

    ...types,
];

export { TypeDefs as default };

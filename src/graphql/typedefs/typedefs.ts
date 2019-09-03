import { types } from '../../graphql/types';
import { Types } from '../types/types';

const schemaDefinition = `
    schema {
        query         : Query
        mutation      : Mutation
    }
`;

export const TypeDefs = {
    schemaDefinition,
    // Card Type Def
    cardDef: [Types.cardTypes.query, Types.cardTypes.mutation],

    // User Type Def
    userDef: [Types.userTypes.query, Types.userTypes.mutation],

    ...types,
};

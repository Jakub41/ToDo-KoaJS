import { gql } from 'apollo-server-koa';

export const CardPatch = gql`
    input CardPatch {
        title: String
        description: String
        done: Boolean
    }
`;

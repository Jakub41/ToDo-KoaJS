import { gql } from 'apollo-server-koa';

export const NewCardPatch = gql`
    input NewCardPatch {
        # title is required
        title: String!
        description: String
        done: Boolean
    }
`;

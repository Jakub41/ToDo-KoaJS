import { gql } from 'apollo-server-koa';

export const NewUserPatch = gql`
    input NewUserPatch {
        email: String!
        password: String!
        confirmed: Boolean
    }
`;

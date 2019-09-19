import { gql } from 'apollo-server-koa';

export const NewUserPatch = gql`
    input NewUserPatch {
        name: String
        last_name: String
        email: String!
        confirmed: String
    }
`;

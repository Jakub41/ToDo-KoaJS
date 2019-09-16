import { gql } from 'apollo-server-koa';

export const UserPatch = gql`
    input UserPatch {
        name: String
        last_name: String
        email: String
        confirmed: String
    }
`;

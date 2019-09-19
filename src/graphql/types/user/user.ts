import { gql } from 'apollo-server-koa';

export const User = gql`
    type User {
        id: String!
        email: String
        password: String
        confirmed: Boolean
        created_at: Date!
        updated_at: Date!
        profile: Profile
    }
`;

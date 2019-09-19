import { gql } from 'apollo-server-koa';

export const User = gql`
    type User {
        id: String
        name: String
        last_name: String
        email: String
        confirmed: Boolean
        created_at: Date
        updated_at: Date
        profile: Profile
    }
`;

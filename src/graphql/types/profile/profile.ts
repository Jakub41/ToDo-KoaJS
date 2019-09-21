import { gql } from 'apollo-server-koa';

export const Profile = gql`
    type Profile {
        id: String!
        first_name: String
        last_name: String
        date_of_birth: String
        avatar_url: String
        description: String
        created_at: Date
        updated_at: Date
    }
`;

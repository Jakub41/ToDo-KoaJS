import { gql } from 'apollo-server-koa';

export const ProfilePatch = gql`
    input ProfilePatch {
        first_name: String
        last_name: String
        date_of_birth: String
        avatar_url: String
        description: String
    }
`;

import { gql } from 'apollo-server-koa';

export const Profile = gql`
    type Profile {
        id: String!
        age: Int
    }
`;

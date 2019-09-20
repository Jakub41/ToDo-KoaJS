import { gql } from 'apollo-server-koa';

export const CreatedUserResponse = gql`
    type CreatedUserResponse {
        id: String
        responseCode: Int!
        message: String!
        user: User
        profile: Profile
    }
`;

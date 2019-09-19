import { gql } from 'apollo-server-koa';

export const DeleteUserResponse = gql`
    type DeleteUserResponse {
        id: String
        responseCode: Int!
        message: String!
        user: User
    }
`;

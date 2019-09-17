import { gql } from 'apollo-server-koa';

export const DeleteUserResponse = gql`
    type DeleteUserResponse {
        success: Int!
        message: String!
        deletedUser: User!
    }
`;

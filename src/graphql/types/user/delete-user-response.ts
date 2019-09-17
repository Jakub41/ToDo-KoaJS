import { gql } from 'apollo-server-koa';

export const DeleteUserResponse = gql`
    type DeleteUserResponse {
        responseCode: number!
        message: string!
        user: any!
    }
`;

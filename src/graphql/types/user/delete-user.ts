import { gql } from 'apollo-server-koa';

export const DeleteUser = gql`
    input DeleteUser {
        id: String!
    }
`;

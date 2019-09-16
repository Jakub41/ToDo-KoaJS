import { gql } from 'apollo-server-koa';

export const UserQuery = gql`
    extend type Query {
        users: [User]
        user(id: String!): User
    }
`;

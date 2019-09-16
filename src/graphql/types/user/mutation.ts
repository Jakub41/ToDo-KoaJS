import { gql } from 'apollo-server-koa';

export const UserMutation = gql`
    extend type Mutation {
        createUser(user: NewUserPatch!, profile: NewProfile!): User
        updateUser(id: String!, patch: UserPatch!): User
        deleteUser(id: String!): User
    }
`;

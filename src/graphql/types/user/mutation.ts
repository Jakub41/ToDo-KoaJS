import { gql } from 'apollo-server-koa';

export const UserMutation = gql`
    extend type Mutation {
        createUser(user: NewUserPatch!, profile: NewProfile!): CreatedUserResponse
        updateUser(id: String!, patch: UserPatch!): User
        deleteUser(id: String!): DeleteUserResponse
    }
`;

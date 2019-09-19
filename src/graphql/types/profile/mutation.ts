import { gql } from 'apollo-server-koa';

export const ProfileMutation = gql`
    extend type Mutation {
        updateProfile(id: String!, patch: ProfilePatch!): Profile
    }
`;

import { gql } from 'apollo-server-koa';

export const ProfileMutation = gql`
    extend type Mutation {
        NewProfile(profile: NewProfile!): Profile
    }
`;

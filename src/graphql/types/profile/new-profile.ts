import { gql } from 'apollo-server-koa';

export const NewProfile = gql`
    input NewProfile {
        age: Int
    }
`;

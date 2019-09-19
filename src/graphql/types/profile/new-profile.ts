import { gql } from 'apollo-server-koa';

export const NewProfile = gql`
    input NewProfile {
        first_name: String
        last_name: String
    }
`;

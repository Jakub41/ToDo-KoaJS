import { gql } from 'apollo-server-koa';

export const Card = gql`
    scalar Date

    type Card {
        id: String
        title: String
        description: String
        done: Boolean
        created_at: Date
        updated_at: Date
    }
`;

import { gql } from 'apollo-server-koa';

export const CardQuery = gql`
    type Query {
        cards: [Card]
        card(id: String!): Card
    }
`;

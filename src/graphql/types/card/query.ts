export const CardQuery = `
    type Query {
        cards: [Card]
        card(id: String!): Card
    }
`;

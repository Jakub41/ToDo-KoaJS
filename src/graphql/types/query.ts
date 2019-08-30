export const Query = `
    type Query {
        cards: [Card]
        card(id: String!): Card
        daysAgo(when: Date!): Int
        hoursAgo(when: DateTime!): Int
    }
`;
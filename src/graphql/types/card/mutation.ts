export const CardMutation = `
    type Mutation {
        toggleCard (
            id: String!
        ): Card
        updateCard (
            id: String!
            patch: CardPatch!
        ): Card
        # add mutation here
        createCard (
            card: NewCardPatch!
        ): Card
    }
`;

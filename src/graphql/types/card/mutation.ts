import { gql } from 'apollo-server-koa';

export const CardMutation = gql`
    type Mutation {
        toggleCard(id: String!): Card
        updateCard(id: String!, patch: CardPatch!): Card
        createCard(card: NewCardPatch!): Card
        deleteCard(id: String!): Card
    }
`;

import { Card } from './card';
import { NewCardPatch } from './new-card-patch';
import { CardPatch } from './card-patch';
import { CardQuery } from './query';
import { CardMutation } from './mutation';

export const CardType = {
    card: Card,
    newCard: NewCardPatch,
    updateCard: CardPatch,
    query: CardQuery,
    mutation: CardMutation,
};

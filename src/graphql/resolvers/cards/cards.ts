import { getRepository } from 'typeorm';
import { Card } from '../../../entities/card';

export const cardsResolver = {
    async cards(): Promise<Card[]> {
        const repository = getRepository(Card);
        return await repository.find();
    },
};

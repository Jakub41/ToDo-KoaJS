import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const cardsResolver = {
    async cards(): Promise<typeof cardsResolver[]> {
        const repository = getRepository(Entities.card);
        return await repository.find();
    },
};

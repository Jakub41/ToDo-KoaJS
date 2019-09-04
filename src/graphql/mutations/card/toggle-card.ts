import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const toggleCardMutation = {
    async toggleCard(_, { id }): Promise<typeof card> {
        const repository = getRepository(Entities.card);
        const card = await repository.findOne({ id });
        const done = !card.done;
        const result = await repository.update(id, { done });
        return {
            ...card,
            done,
        };
    },
};

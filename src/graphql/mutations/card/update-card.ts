import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const updateCardMutation = {
    async updateCard(_, { id, patch }): Promise<typeof card> {
        const repository = getRepository(Entities.card);
        const card = await repository.findOne({ id });
        const result = await repository.update(id, { ...patch });
        return {
            ...card,
            ...patch,
        };
    },
};

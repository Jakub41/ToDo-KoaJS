import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const deleteCardMutation = {
    async deleteCard(_, { id }): Promise<typeof card> {
        const repository = getRepository(Entities.card);
        const card = await repository.findOne({ id });
        await repository.delete({ id });
        return {
            ...card,
        };
    },
};

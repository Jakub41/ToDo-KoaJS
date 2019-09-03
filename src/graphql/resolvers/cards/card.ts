import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const cardResolver = {
    async card(obj, { id }, context, info): Promise<typeof cardResolver> {
        const repository = getRepository(Entities.card);
        return await repository.findOne({ id });
    },
};

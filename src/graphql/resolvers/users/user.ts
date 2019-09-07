import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const userResolver = {
    async card(obj, { id }, context, info): Promise<typeof userResolver> {
        const repository = getRepository(Entities.user);
        return await repository.findOne({ id });
    },
};

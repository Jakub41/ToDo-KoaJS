import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const userResolver = {
    async card(_, { id }): Promise<typeof userResolver> {
        const repository = getRepository(Entities.user);
        return await repository.findOne({ id });
    },
};

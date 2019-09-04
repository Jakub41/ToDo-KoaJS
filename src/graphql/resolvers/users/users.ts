import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const usersResolver = {
    async users(): Promise<typeof usersResolver[]> {
        const repository = getRepository(Entities.user);
        return await repository.find();
    },
};

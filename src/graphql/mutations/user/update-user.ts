import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const updateUserMutation = {
    async updateUser(_, { id, patch }): Promise<typeof user> {
        const repository = getRepository(Entities.user);
        const user = await repository.findOne({ id });
        const result = await repository.update(id, { ...patch });
        return {
            ...user,
            ...patch,
        };
    },
};

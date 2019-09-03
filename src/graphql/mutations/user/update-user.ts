import { getRepository } from 'typeorm';
import { User } from '../../../entities/user';

export const updateUserMutation = {
    async updateUser(_, { id, patch }): Promise<User> {
        const repository = getRepository(User);
        const user = await repository.findOne({ id });
        const result = await repository.update(id, { ...patch });
        return {
            ...user,
            ...patch,
        };
    },
};

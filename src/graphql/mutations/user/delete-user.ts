import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const deleteUserMutation = {
    async deleteUser(_, { id }): Promise<typeof user> {
        const repository = getRepository(Entities.user);
        const user = await repository.findOne({ id });
        await repository.delete({ id });
        return {
            ...user,
        };
    },
};

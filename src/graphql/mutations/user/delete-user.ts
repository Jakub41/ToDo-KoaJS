import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const deleteUserMutation = {
    async deleteUser(_, { id }): Promise<typeof user> {
        const repository = getRepository(Entities.user);
        const user = await repository.findOne({ id });

        const success = 500;
        const message = 'Error not deleted';

        if (user) {
            success: 200;
            message: 'User deleted successfully';
            await repository.delete({ id });
        }

        const response = {
            success: success,
            deletedUser: user,
        };

        return response;
    },
};

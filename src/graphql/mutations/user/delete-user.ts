import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const deleteUserMutation = {
    async deleteUser(_, { id }): Promise<typeof deleteUserMutation> {
        const response = {
            responseCode: 500,
            message: 'Error, user not deleted',
            user: null,
        };

        const repository = getRepository(Entities.user);
        const user = await repository.findOne({ id });

        if (user && repository.delete({ id })) {
            response.responseCode = 200;
            response.message = 'User deleted successfully';
            response.user = user;
        }

        return response;
    },
};

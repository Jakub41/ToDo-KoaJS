import { getRepository } from 'typeorm';
import { User } from '../../../entities/user';

export const userResolver = {
    async card(obj, { id }, context, info): Promise<User> {
        const repository = getRepository(User);
        return await repository.findOne({ id });
    },
};

import { getRepository } from 'typeorm';
import { User } from '../../../entities/user';

export const usersResolver = {
    async users(): Promise<User[]> {
        const repository = getRepository(User);
        return await repository.find();
    },
};

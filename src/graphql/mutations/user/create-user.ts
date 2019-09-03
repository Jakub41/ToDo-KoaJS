import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { User } from '../../../entities/user';

export const createUserMutation = {
    async createUser(_, { user: attrs }): Promise<User> {
        const repository = getRepository(User);
        const user = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(user);
        return user;
    },
};

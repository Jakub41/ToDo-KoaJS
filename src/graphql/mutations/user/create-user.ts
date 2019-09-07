import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createUserMutation = {
    async createUser(_, { user: attrs }): Promise<typeof user> {
        const repository = getRepository(Entities.user);
        const user = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(user);
        return user;
    },
};

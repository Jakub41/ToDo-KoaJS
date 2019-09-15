import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createUserMutation = {
    async createUser(_, { user: attrs, profile: args }): Promise<typeof user> {
        const repository = getRepository(Entities.user);
        const profile = Entities.profile.create(args);
        const user = {
            id: uuid(),
            profile: profile,
            ...attrs,
        };
        await repository.save(user);
        return user;
    },
};

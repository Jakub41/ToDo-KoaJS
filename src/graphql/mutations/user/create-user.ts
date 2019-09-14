import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createUserMutation = {
    async createUser(_, { user: attrs }): Promise<typeof user> {
        const repository = getRepository(Entities.user);
        const profile = Entities.profile.create(attrs.profile);
        const user = {
            id: uuid(),
            profile: profile,
            ...attrs,
        };
        await profile.save();
        await repository.save(user);
        console.log(user);
        return user;
    },
};

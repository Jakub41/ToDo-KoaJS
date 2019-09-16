import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createUserMutation = {
    async createUser(_, { user: attrs, profile: args }): Promise<typeof user> {
        const repositoryUser = getRepository(Entities.user);
        const repositoryProfile = getRepository(Entities.profile);

        const user = {
            id: uuid(),
            ...attrs,
        };

        const profile = {
            id: uuid(),
            user: user,
            ...args,
        };

        await repositoryUser.save(user);
        await repositoryProfile.save(profile);

        return user;
    },
};

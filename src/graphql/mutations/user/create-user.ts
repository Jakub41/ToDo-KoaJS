import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createUserMutation = {
    async createUser(_, { user: attrs, profile: args }): Promise<typeof user> {
        const repositoryUser = getRepository(Entities.user);

        const profile = {
            id: uuid(),
            ...args,
        };

        const user = {
            id: uuid(),
            ...attrs,
            profile: profile,
        };

        await repositoryUser.save(user);

        console.log(user);

        return user;
    },
};

import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createUserMutation = {
    async createUser(_, { user: attrs, profile: args }): Promise<typeof user> {
        const response = {
            responseCode: 500,
            message: 'Error, user and profile not created',
            user: null,
            profile: null,
        };

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

        if (user && profile && repositoryUser.save(user)) {
            response.responseCode = 200;
            response.message = 'User and Profile created successfully';
            response.user = user;
            response.user = profile;
        }

        return response;
    },
};

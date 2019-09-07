import uuid = require('uuid/v4');

import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const createCardMutation = {
    async createCard(_, { card: attrs }): Promise<typeof card> {
        const repository = getRepository(Entities.card);
        const card = {
            id: uuid(),
            ...attrs,
        };
        await repository.save(card);
        return card;
    },
};

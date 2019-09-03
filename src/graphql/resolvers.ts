import { cardResolver } from './resolvers/cards/card';
import { cardsResolver } from './resolvers/cards/cards';

import { userResolver } from './resolvers/users/user';
import { usersResolver } from './resolvers/users/users';

import { toggleCardMutation } from './mutations/card/toggle-card';
import { updateCardMutation } from './mutations/card/update-card';
import { createCardMutation } from './mutations/card/create-card';

import { updateUserMutation } from './mutations/user/update-user';
import { createUserMutation } from './mutations/user/create-user';

import Date from '../scalar/Date';

export const resolvers = {
    Query: {
        ...cardsResolver,
        ...cardResolver,
        ...usersResolver,
        ...userResolver,
    },

    Mutation: {
        ...toggleCardMutation,
        ...updateCardMutation,
        ...createCardMutation,
        ...updateUserMutation,
        ...createUserMutation, // <-- add mutation to schema
    },

    Date,
};

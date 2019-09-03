import { cardResolver } from './resolvers/cards/card';
import { cardsResolver } from './resolvers/cards/cards';

import { userResolver } from './resolvers/users/user';
import { usersResolver } from './resolvers/users/users';

import { Mutations } from './mutations/mutations';

// import { toggleCardMutation } from './mutations/card/toggle-card';
// import { updateCardMutation } from './mutations/card/update-card';
// import { createCardMutation } from './mutations/card/create-card';

// import { updateUserMutation } from './mutations/user/update-user';
// import { createUserMutation } from './mutations/user/create-user';

import Date from '../scalar/Date';

export const resolvers = {
    Query: {
        ...cardsResolver,
        ...cardResolver,
        ...usersResolver,
        ...userResolver,
    },

    Mutation: {
        // Card Muations
        ...Mutations.card.create,
        ...Mutations.card.update,
        ...Mutations.card.toggle,

        // User Mutations
        ...Mutations.user.create,
        ...Mutations.user.update, // <-- add mutation to schema
    },

    // Custom Scalars
    Date,
};

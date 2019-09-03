import { Resolvers } from './resolvers/resolvers';

import { Mutations } from './mutations/mutations';

import Date from '../scalar/Date';

export const resolvers = {
    Query: {
        // Card Resolvers
        ...Resolvers.card.cards,
        ...Resolvers.card.card,

        // User Resolvers
        ...Resolvers.user.users,
        ...Resolvers.user.user,
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

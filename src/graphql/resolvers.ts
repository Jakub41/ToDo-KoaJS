import { cardResolver }  from '../graphql/resolvers/card';
import { cardsResolver } from '../graphql/resolvers/cards';

import { toggleCardMutation } from '../graphql/mutations/toggle-card';
import { updateCardMutation } from '../graphql/mutations/update-card';
import { createCardMutation } from '../graphql/mutations/create-card';

const { GraphQLDate, GraphQLDateTime } = require('graphql-iso-date');

export const resolvers = {
    
    Date: GraphQLDate,
    DateTime: GraphQLDateTime,

    Query: {
        ...cardsResolver,
        ...cardResolver,

        daysAgo: (root, args) => {
            return Math.trunc((Date.now() - args.when) / 1000 / 60 / 60 / 24);
          },
          hoursAgo: (root, args) => {
            return Math.trunc((Date.now() - args.when) / 1000 / 60 / 60);
          }
    },

    Mutation: {
        ...toggleCardMutation,
        ...updateCardMutation,
        ...createCardMutation, // <-- add mutation to schema
    },
};
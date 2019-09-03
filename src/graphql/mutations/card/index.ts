import { createCardMutation } from './create-card';
import { updateCardMutation } from './update-card';
import { toggleCardMutation } from './toggle-card';

export const CardMutation = {
    create: createCardMutation,
    update: updateCardMutation,
    toggle: toggleCardMutation,
};

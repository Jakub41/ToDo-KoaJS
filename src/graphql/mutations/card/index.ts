import { createCardMutation } from './create-card';
import { updateCardMutation } from './update-card';
import { toggleCardMutation } from './toggle-card';
import { deleteCardMutation } from './delete-card';

export const CardMutation = {
    create: createCardMutation,
    update: updateCardMutation,
    toggle: toggleCardMutation,
    delete: deleteCardMutation,
};

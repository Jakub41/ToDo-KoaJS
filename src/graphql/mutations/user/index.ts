import { createUserMutation } from './create-user';
import { updateUserMutation } from './update-user';
import { deleteUserMutation } from './delete-user';

export const UserMutation = {
    create: createUserMutation,
    update: updateUserMutation,
    delete: deleteUserMutation,
};

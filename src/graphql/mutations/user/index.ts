import { createUserMutation } from './create-user';
import { updateUserMutation } from './update-user';

export const UserMutation = {
    create: createUserMutation,
    update: updateUserMutation,
};

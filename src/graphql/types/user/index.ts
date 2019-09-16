import { User } from './user';
import { NewUserPatch } from './new-user-patch';
import { UserPatch } from './user-patch';
import { DeleteUser } from './delete-user';

import { UserQuery } from './query';
import { UserMutation } from './mutation';

export const UserType = {
    user: User,
    newUser: NewUserPatch,
    updateUser: UserPatch,
    deletedUser: DeleteUser,
    query: UserQuery,
    mutation: UserMutation,
};

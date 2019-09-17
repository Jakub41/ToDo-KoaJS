import { User } from './user';
import { NewUserPatch } from './new-user-patch';
import { UserPatch } from './user-patch';
import { DeleteUser } from './delete-user';

import { UserQuery } from './query';
import { UserMutation } from './mutation';
import { DeleteUserResponse } from './delete-user-response';

export const UserType = {
    user: User,
    newUser: NewUserPatch,
    updateUser: UserPatch,
    deleteUser: DeleteUser,
    deletedUser: DeleteUserResponse,
    query: UserQuery,
    mutation: UserMutation,
};

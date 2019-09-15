import { User } from './user';
import { NewUserPatch } from './new-user-patch';
import { UserPatch } from './user-patch';
import { DeleteUserPayload } from './delete-user-payload';
import { UserQuery } from './query';
import { UserMutation } from './mutation';

export const UserType = {
    user: User,
    newUser: NewUserPatch,
    updateUser: UserPatch,
    deleteUser: DeleteUserPayload,
    query: UserQuery,
    mutation: UserMutation,
};

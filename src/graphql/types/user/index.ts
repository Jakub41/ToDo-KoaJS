import { User } from './user';
import { NewUserPatch } from './new-user-patch';
import { UserPatch } from './user-patch';
import { UserQuery } from './query';
import { UserMutation } from './mutation';

export const UserType = {
    user: User,
    newUser: NewUserPatch,
    updateUser: UserPatch,
    query: UserQuery,
    mutation: UserMutation,
};

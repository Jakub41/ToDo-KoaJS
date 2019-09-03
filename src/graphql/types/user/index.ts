import { User } from './user';
import { NewUserPatch } from './new-user-patch';
import { UserPatch } from './user-patch';

export const UserType = {
    user: User,
    newUser: NewUserPatch,
    updateUser: UserPatch,
};

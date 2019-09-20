import { CreatedUserResponse } from './created-user-response';
import { User } from './user';
import { NewUserPatch } from './new-user-patch';
import { UserPatch } from './user-patch';
import { DeleteUser } from './delete-user';

import { UserQuery } from './query';
import { UserMutation } from './mutation';
import { DeleteUserResponse } from './delete-user-response';

export const UserType = {
    // CRUD
    user: User,
    newUser: NewUserPatch,
    updateUser: UserPatch,
    deleteUser: DeleteUser,

    //Responses
    deletedUser: DeleteUserResponse,
    createdUserResponse: CreatedUserResponse,

    // Queries & Mutations
    query: UserQuery,
    mutation: UserMutation,
};

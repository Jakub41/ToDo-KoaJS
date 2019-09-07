import { userResolver } from './user';
import { usersResolver } from './users';

export const UserResolvers = {
    user: userResolver,
    users: usersResolver,
};

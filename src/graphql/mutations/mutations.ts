import { ProfileMutation } from './profile/index';
import { CardMutation } from './card/index';
import { UserMutation } from './user/index';

export const Mutations = {
    card: CardMutation,
    user: UserMutation,
    profile: ProfileMutation,
};

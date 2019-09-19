import { ProfilePatch } from './profile-patch';
import { Profile } from './profile';
import { NewProfile } from './new-profile';
import { ProfileMutation } from './mutation';

export const ProfileType = {
    profile: Profile,
    newProfile: NewProfile,
    profilePatch: ProfilePatch,
    mutation: ProfileMutation,
};

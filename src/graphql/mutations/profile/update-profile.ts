import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const updateProfileMutation = {
    async updateProfile(_, { id, patch }): Promise<typeof profile> {
        const repository = getRepository(Entities.profile);
        const profile = await repository.findOne({ id });
        const result = await repository.update(id, { ...patch });
        return {
            ...profile,
            ...patch,
        };
    },
};

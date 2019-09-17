import { getRepository } from 'typeorm';
import { Entities } from '../../../entities/entities';

export const usersResolver = {
    async users(): Promise<typeof usersResolver[]> {
        const repository = getRepository(Entities.user);

        const user = repository
            .createQueryBuilder('user')
            .innerJoinAndSelect('user.profile', 'profile')
            .getMany();

        return user;
    },
};

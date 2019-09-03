import { Card } from './types/card/card';
import { CardPatch } from './types/card/card-patch';
import { NewCardPatch } from './types/card/new-card-patch';

import { User } from './types/user/user';
import { UserPatch } from './types/user/user-patch';
import { NewUserPatch } from './types/user/new-user-patch';

export const types = [
    Card,
    CardPatch,
    NewCardPatch,
    User,
    UserPatch,
    NewUserPatch, // <-- add type here
];

import { createConnection } from 'typeorm';
import { Entities } from '../entities/entities';

import { config } from './config';

export const databaseInitializer = async (): Promise<void> => {
    return await createConnection({
        type: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUsername,
        password: config.dbPassword,
        database: config.database,
        entities: [Entities.user, Entities.card, Entities.profile],
        logging: ['query', 'error'],
        synchronize: true,
    })
        .then(async () => {
            console.log(`Database connection established on port: ${config.dbPort}`);
        })
        .catch(error => console.log('Connection error: ', error));
};

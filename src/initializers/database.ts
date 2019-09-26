import { createConnection } from 'typeorm';
import { Entities } from '../entities/entities';

import { config } from './config';

import { clk, log } from '../helpers/console-helper';

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
            log(clk.bold(`Database connection established on Port:`, clk.magenta(`${config.dbPort}`)));
        })
        .catch(error => log(clk.bold.underline('Connection error: ', clk.red(error))));
};

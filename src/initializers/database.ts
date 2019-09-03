import { createConnection } from 'typeorm';
import { Card } from '../entities/card';
import { User } from '../entities/user';

import { config } from './config';

export const databaseInitializer = async (): Promise<void> => {
    return await createConnection({
        type: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUsername,
        password: config.dbPassword,
        database: config.database,
        entities: [Card, User],
        logging: ['query', 'error'],
        synchronize: true,
    })
        .then(async connection => {
            console.log(`Database connection established on port: ${config.dbPort}`);

            /** To Create Some Fake Data Example **/

            // Create new instance
            // const card = new Card();
            // card.title = 'First card';
            // card.done  = false;

            // Persist to database
            // const card_1 = await connection.manager
            //       .save(card);
            //   console.log('card saved');
        })
        .catch(error => console.log('Connection error: ', error));
};

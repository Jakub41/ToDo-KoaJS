import { createConnection } from 'typeorm';
import { Card } from '../entities/card';

import { HOST, USERRNAME, PASSWORD, DB } from './config';

export const databaseInitializer = async () => {

    return await createConnection({

        type: 'postgres',
        host: HOST,
        port: 5432, // PORT .env not working here ???
        username: USERRNAME,
        password: PASSWORD,
        database: DB,
        entities: [
            Card,
        ],
        logging: ['query', 'error'],
        synchronize: true,
      }).then(async (connection) => {
        console.log('Database connection established');
        
        /** To Create Some Fake Data Example **/

        // Create new instance
        // const card = new Card();
        // card.title = 'First card';
        // card.done  = false;
        
        // Persist to database
        // const card_1 = await connection.manager
        //       .save(card);
        //   console.log('card saved');
    });
};
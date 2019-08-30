import { createConnection } from 'typeorm';
import { Card } from '../entities/card';

import { HOST, PORT, USERRNAME, PASSWORD, DB } from './config';

export const databaseInitializer = async (): Promise<void> => {
    return await createConnection({
        type: 'postgres',
        host: HOST,
        port: Number(PORT),
        username: USERRNAME,
        password: PASSWORD,
        database: DB,
        entities: [Card],
        logging: ['query', 'error'],
        synchronize: true,
    })
        .then(async connection => {
            console.log(`Database connection established on port: ${PORT}`);

            /** To Create Some Fake Data Example **/

<<<<<<< HEAD
        // Create new instance
        // const card = new Card();
        // card.title = 'Card 2';
        // card.done  = false;
        
        // Persist to database
        // const card_1 = await connection.manager
        //       .save(card);
        //   console.log('card saved');
=======
            // Create new instance
            // const card = new Card();
            // card.title = 'First card';
            // card.done  = false;
>>>>>>> master

            // Persist to database
            // const card_1 = await connection.manager
            //       .save(card);
            //   console.log('card saved');
        })
        .catch(error => console.log('Connection error: ', error));
};

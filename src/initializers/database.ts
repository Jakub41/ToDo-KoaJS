import { createConnection } from 'typeorm';
import { Card } from '../entities/card';

export const databaseInitializer = async () => {

    return await createConnection({

        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432, // .env not working here ???
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
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
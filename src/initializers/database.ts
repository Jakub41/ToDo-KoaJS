import { createConnection } from 'typeorm';
import { Card } from '../entities/card';

export const databaseInitializer = async () => {

    return await createConnection({

        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'node_docker_example',
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
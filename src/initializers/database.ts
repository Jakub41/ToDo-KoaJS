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
      }).then((...args) => {
        console.log('Database connection established');
    });
};
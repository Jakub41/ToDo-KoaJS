import dotenv = require('dotenv');
dotenv.config();

export interface Config {
    //Server set
    serverPort: number;

    // Database set
    dbPort: number;
    dbHost: string;
    dbUsername: string;
    dbPassword: string;
    database: string;
}

const config: Config = {
    // Server
    serverPort: +process.env.SERVER_PORT || 4000,

    // Database
    dbPort: +process.env.DB_PORT || 5432,
    dbHost: process.env.DB_HOST,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

export { config };

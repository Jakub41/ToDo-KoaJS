import dotenv = require('dotenv');
dotenv.config();

export interface Config {
    //Server set
    serverPort: number;
    serverUrl: string;

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
    serverUrl: process.env.SERVER_URL,

    // Database
    dbPort: +process.env.DB_PORT || 5432,
    dbHost: process.env.DB_HOST,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

/* Env Errors */
if (!isFinite(config.serverPort) || config.serverPort < 1 || config.serverPort > 65535)
    throw new Error('Enviroment SERVER_PORT is not valid');
if (!config.serverUrl) throw new Error('Environment variable "SERVER_URL" is not defined');
if (!config.dbHost) throw new Error('Environment variable "DB_HOST" is not defined');
if (!config.dbUsername) throw new Error('Environment variable "DB_USERNAME" is not defined');
if (!config.dbPassword) throw new Error('Environment variable "DB_PASSWORD" is not defined');
if (!config.database) throw new Error('Environment variable "DB_DATABASE" is not defined');

export { config };

const dotenv = require('dotenv');
dotenv.config();

export const HOST = process.env.DB_HOST;
export const PORT = process.env.DB_PORT;
export const USERRNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.DB_PASSWORD;
export const DB = process.env.DB_DATABASE;
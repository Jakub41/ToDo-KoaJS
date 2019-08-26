const dotenv = require('dotenv');
dotenv.config();

// Server
export const SERVER_PORT = process.env.SERVER_PORT || 4000;

// DB set up
export const HOST = process.env.DB_HOST;
export const PORT = process.env.DB_PORT || 5432;
export const USERRNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.DB_PASSWORD;
export const DB = process.env.DB_DATABASE;

import * as Koa from 'koa';
import { databaseInitializer } from './initializers/database';

const dotenv = require('dotenv');
dotenv.config();

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app.use(async ctx => {
        ctx.body = "It works!\n";
    });

    app.listen(process.env.DB_PORT);
};

bootstrap();
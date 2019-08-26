import * as Koa from 'koa';
import { databaseInitializer } from './initializers/database';
import { SERVER_PORT } from './initializers/config';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app.use(async ctx => {
        ctx.body = "It works!\n";
    });

    app.listen(SERVER_PORT);
};

bootstrap();
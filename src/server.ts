import * as Koa from 'koa';
import { databaseInitializer } from './initializers/database';
import { PORT } from './initializers/config';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app.use(async ctx => {
        ctx.body = "It works!\n";
    });

    app.listen(PORT);
};

bootstrap();
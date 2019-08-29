import * as Koa from 'koa';

import { databaseInitializer } from './initializers/database';
import { SERVER_PORT } from './initializers/config';
import { server } from './initializers/apollo-server';
import { routes,  } from './routes';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app
        .use(routes.routes())
        .use(routes.allowedMethods())
        .listen(SERVER_PORT);
    
    server.applyMiddleware({ app });
};

bootstrap();
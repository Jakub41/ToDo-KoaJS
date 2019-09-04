import Koa = require('koa');
import * as logger from 'koa-logger';
import * as json from 'koa-json';

import { databaseInitializer, server, config } from './initializers/index';
import { routes } from './routes';

const bootstrap = async (): Promise<void> => {
    await databaseInitializer();

    const app = new Koa();

    app.use(routes.routes())
        .use(routes.allowedMethods())
        .use(json())
        .use(logger())
        .listen(config.serverPort, () =>
            console.log(`Server running at ${config.serverUrl} ${server.graphqlPath} Port: ${config.serverPort}`),
        );

    server.applyMiddleware({ app });
};

bootstrap();

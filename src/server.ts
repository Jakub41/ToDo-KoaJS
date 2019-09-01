import Koa = require('koa');

import { databaseInitializer, server, config } from './initializers/index';
import { routes } from './routes';

const bootstrap = async (): Promise<void> => {
    await databaseInitializer();

    const app = new Koa();

    app.use(routes.routes())
        .use(routes.allowedMethods())
        .listen(config.serverPort, () =>
            console.log(`The app is listening on ${server.graphqlPath}! Port: ${config.serverPort}`),
        );

    server.applyMiddleware({ app });
};

bootstrap();

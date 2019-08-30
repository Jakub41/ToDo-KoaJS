import * as Koa from 'koa';

import { databaseInitializer, server, SERVER_PORT } from './initializers/index';
import { routes } from './routes';

const bootstrap = async (): Promise<void> => {
    await databaseInitializer();

    const app = new Koa();

    app.use(routes.routes())
        .use(routes.allowedMethods())
        .listen(SERVER_PORT, () => console.log(`The app is listening on ${server.graphqlPath}! Port: ${SERVER_PORT}`));

    server.applyMiddleware({ app });
};

bootstrap();

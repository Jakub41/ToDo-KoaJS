import * as Koa from 'koa';

import { databaseInitializer } from './initializers/database';
import { SERVER_PORT } from './initializers/config';
import { routes } from './routes';
import { ApolloServer } from 'apollo-server-koa';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();
    const server = new ApolloServer({});

    app
        .use(routes.routes())
        .use(routes.allowedMethods())
        .listen(SERVER_PORT);

    server.applyMiddleware({ app });
};

bootstrap();
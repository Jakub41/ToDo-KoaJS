import Koa = require('koa');
import * as json from 'koa-json';

import { databaseInitializer, server, config } from './initializers';
import { routes } from './routes';

import { clk, log } from './helpers/console-helper';

const bootstrap = async (): Promise<void> => {
    await databaseInitializer();

    const app = new Koa();

    app.use(routes.routes())
        .use(routes.allowedMethods())
        .use(json())
        .listen(config.serverPort, () =>
            log(
                clk.bold(
                    `Server running at`,
                    clk.green.bold(
                        `${config.serverUrl}`,
                        clk.white.bold(`Port:`),
                        `${config.serverPort}`,
                        clk.white.bold(`GraphQL:`),
                        `${server.graphqlPath}`,
                    ),
                ),
            ),
        );

    server.applyMiddleware({ app });
};

bootstrap();

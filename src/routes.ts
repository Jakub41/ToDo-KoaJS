import * as koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';

import { schema } from './graphql/scheema';
const { ApolloServer, gql } = require('apollo-server-koa');

const app = new koa();
export const routes = new Router();

app.use(koaBody());

// API entrypoint
const apiEntrypointPath = '/graphql';

routes.post('/graphql', new ApolloServer({ schema: schema }));
routes.get('/graphql', new ApolloServer({ schema: schema }));


import * as koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';

const app = new koa();
export const routes = new Router();

app.use(koaBody());

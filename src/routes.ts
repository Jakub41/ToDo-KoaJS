import * as koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from 'koa-bodyparser';

const app = new koa();
export const routes = new Router();

app.use(koaBody());

routes.get('/', async (ctx, next) => {
    ctx.body = {
        title: 'To Do GrapQL API',
        author: 'Jakub Lemiszewski',
        link: 'http://localhost:8080/graphql',
        gitHub: 'https://github.com/Jakub41/ToDo-KoaJS',
        status: 'Running',
    };
    await next();
});

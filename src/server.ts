import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
    ctx.body = "It works!\n";
});

app.listen(4000);
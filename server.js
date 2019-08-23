// To test server running
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// BodyParser Middleware
app.use(bodyParser());

// Example it works
app.use(async ctx => ctx.body = { msg:'Server running...' });

// Server Listner
app.listen(4000, () => console.log('Server Started...'));
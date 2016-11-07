import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
const app = new Koa();
const router = new Router();

// Logger
app.use(logger());
app.use(json());

router.get('/', function *(next) {
  this.body = {demo: 'Demo'};
});

app.use(router.routes())
  .use(router.allowedMethods());


app.listen(8000, () => console.log('server started 8000'));

export default app;

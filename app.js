import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
const app = new Koa();
const router = new Router();

// Logger
app.use(logger());
app.use(json());

router.get('/api/v1/get', function *(next) {
  const todos = {
    todos: [
      {id: 0, title: "write this", done: true},
      {id: 1, title: "read this", done: false},
      {id: 2, title: "do something", done: false}
    ]
  }
  this.body = todos;
});



app.use(router.routes())
  .use(router.allowedMethods());


app.listen(8000, () => console.log('server started 8000'));

export default app;

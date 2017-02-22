#!/usr/bin/env node

const Koa  = require('koa'),
      User = require('./services/user-service');

const app = new Koa();

app.use(async(ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.body   = {msg: e.message};
    ctx.status = e.status || 500;
  }
});

app.use(async ctx => {
  ctx.body = await User.getById(1);
});

app.listen(3002);
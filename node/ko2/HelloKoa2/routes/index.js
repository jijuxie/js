var router = require('koa-router')();

router.prefix('/index');

router.get('/', function (ctx, next) {
  ctx.body = '/index/';
});

router.get('/haha', function (ctx, next) {
  ctx.body = '/index/haha';
});

module.exports = router;

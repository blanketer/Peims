var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('/pages/index', {
    title: 'Hello World Koa!',
    rldata: 'active',
    samplePoint:[{name:'123'},{name:'345'}]
  });
});

router.get('/foo', function *(next) {
  yield this.render('/pages/index', {
    title: 'Hello World foo!',
    rldata: 'active',
    samplePoint:[{name:'123'},{name:'345'}]
  });
});

module.exports = router;

const router = require('koa-router')();
const controller = require('../controller/c-signup')

// post 注册
router.post('/api/signup', controller.postSignup)

module.exports = router
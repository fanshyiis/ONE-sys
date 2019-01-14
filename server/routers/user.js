const router = require('koa-router')();
const controller = require('../controller/c-user')

// 个人账户信息
router.get('/api/me', controller.getUserInfo)

module.exports = router
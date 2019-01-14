const router = require('koa-router')();
const controller = require('../controller/c-record')

// 增加模块
router.post('/api/addPart', controller.addPart)

// 查找模块
router.get('/api/findAllPart', controller.findAllPart)

//删除模块
router.post('/api/deletePart', controller.DeletePart)

module.exports = router
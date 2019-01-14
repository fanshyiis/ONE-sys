const userModel = require('../lib/mysql.js')
const md5 = require('md5')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin

exports.getUserInfo = async ctx => {
    await checkLogin(ctx)
    await userModel.findDataByName(ctx.session.user)
        .then(result => {
            let res = result
            let a = result[0]
            a.pass = true
            if (res.length) {
                ctx.body = {
                    code: 200,
                    message: '登录成功',
                    data: a
                }
                console.log(res)
            } else {
                ctx.body = {
                    code: 500,
                    message: '用户名或密码错误'
                }
                console.log('用户名或密码错误!')
            }
        }).catch(err => {
            console.log(err)
        })
}

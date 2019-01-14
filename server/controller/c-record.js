const DataModel = require('../lib/mysql.js')
const moment = require('moment')
const checkLogin = require('../middlewares/check.js').checkLogin

exports.addPart = async ctx => {
    console.log(ctx.request.body)
    let { name, dis, url, who } = ctx.request.body
    let new_time = moment().format('YYYY-MM-DD HH:mm:ss')
    let pid = Math.random().toString(36).substr(2)
    await DataModel.insertPart([name, dis, url, who, pid, new_time])
        .then(() => {
            ctx.body = {
                code: 200,
                message: '记录成功',
                data: pid
            }
        }).catch((err) => {
            console.log(err)
            ctx.body = {
                code: 500,
                message: '记录失败'
            }
        })
}

exports.findAllPart = async ctx => {
    await checkLogin(ctx)
    await DataModel.findAllPart()
        .then((res) => {
            ctx.body = {
                code: 200,
                message: '成功',
                data: res
            }
        }).catch((err) => {
            console.log(err)
            ctx.body = {
                code: 500,
                message: '失败'
            }
        })
}

exports.DeletePart = async ctx => {
    let id = ctx.request.body.id
    await DataModel.DeletePart(id)
        .then((res) => {
            ctx.body = {
                code: 200,
                message: '删除成功'
            }
        }).catch((err) => {
            console.log(err)
            ctx.body = {
                code: 500,
                message: '删除失败'
            }
        })
}

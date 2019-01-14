const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const moment = require('moment');
const fs = require('fs')

exports.postSignup = async ctx => {
    let { name, password } = ctx.request.body
    console.log(typeof password)
    await userModel.findDataCountByName(name)
        .then(async (result) => {
            console.log(result)
            if (result[0].count >= 1) {
                // 用户存在
                ctx.body = {
                    code: 500,
                    message: '用户存在'
                };
            } else {
                await userModel.insertData([name, md5(password), moment().format('YYYY-MM-DD HH:mm:ss')])
                    .then(res => {
                        console.log('注册成功', res)
                        //注册成功
                        ctx.body = {
                            code: 200,
                            message: '注册成功'
                        };
                    })
            }
        })
}
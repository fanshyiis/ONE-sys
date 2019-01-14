// 检查登录中间件
module.exports = {
  checkLogin: (ctx) => {
    if (!ctx.session || !ctx.session.user) { 
      ctx.status = 401    
      ctx.body = {
        code: 401,
        message: '请登录'
      }
      return false;
    }
    return true
  }
}

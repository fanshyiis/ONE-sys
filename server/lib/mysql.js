var table = require('./table')
var sql = require('./base')

let query = sql.query 

// 建表
table.map(val => {
  sql.createTable(val)
})

// 增加模块
exports.insertPart = (value) => {
  let _sql = "insert into part set name=?,dis=?,url=?,who=?,pid=?,new_time=?"
  return query(_sql, value)
}
// 寻找所有模块
exports.findAllPart = () => {
  let _sql = `select * from part;`
  return query(_sql)
}
// 删除模块
exports.DeletePart = (id) => {
  let _sql = `delete from part where id="${id}";`
  return query(_sql)
}
// 注册用户
exports.insertData = ( value ) => {
  let _sql = "insert into users set name=?,pass=?,moment=?;"
  return query( _sql, value )
}
// 删除用户
exports.deleteUserData = ( name ) => {
  let _sql = `delete from users where name="${name}";`
  return query( _sql )
}
// 查找用户
exports.findUserData = ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return query( _sql )
}
// 通过名字查找用户
exports.findDataByName =  ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return query( _sql)
}
// 通过名字查找用户数量判断是否已经存在
exports.findDataCountByName =  ( name ) => {
  let _sql = `select count(*) as count from users where name="${name}";`
  return query( _sql)
}



let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     pass VARCHAR(100) NOT NULL COMMENT '密码',
     moment VARCHAR(100) NOT NULL COMMENT '注册时间',
     PRIMARY KEY ( id )
    );`

let part =
    `create table if not exists part(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '名称',
     dis VARCHAR(100) NOT NULL COMMENT '描述',
     url VARCHAR(100) NOT NULL COMMENT '地址',
     who VARCHAR(100) NOT NULL COMMENT '负责人',
     pid VARCHAR(100) NOT NULL COMMENT '唯一ID',
     new_time VARCHAR(100) NOT NULL COMMENT '修改时间',
     PRIMARY KEY ( id )
    );`

module.exports = [users, part]
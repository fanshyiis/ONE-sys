#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
const shell = require('shelljs')
const help = require('./help.js')
const config = require('../config/host_config')

// 定义版本和参数选项
program
  .version('0.1.0', '-v, --version', '输出版本信息')
  .option('-b, --build', '构建上传静态项目')
  .option('-p, --prod', '上传服务器项目')
  .option('-s, --start', '启动项目')
  .option('-l, --lint', '代码校验')
  .option('-a, --all', '构建并上传所有项目')

program.on('--help', () => {
  help()
});

program.parse(process.argv);

if (program.all) {
  if (shell.exec('yarn run build').code === 0) {
    shell.exec(`scp -r dist/ ${config.USER}@${config.HOST}:${config.SERVER_FILE}`)
    shell.exec(`rsync -avP --exclude=node_modules/ server ${config.USER}@${config.HOST}:${config.SERVER_FILE}`)
    console.log(
      chalk.yellow(
        figlet.textSync('ONE SYS', { horizontalLayout: 'full' }),
      )
    )
  }
  console.log(chalk.red('亲~ 部署完了哦~'))
}

if (program.build) {
  shell.exec('yarn run prod')
}

if (program.prod) {
  shell.exec('yarn run online')
}

if (program.lint) {
  shell.exec('yarn run lint')
}

if (program.start) {
  console.log('启动项目');
  shell.exec('yarn run serve')
}

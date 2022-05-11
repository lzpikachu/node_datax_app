/**
 * API Service
 * Author： Yabi
 *  
 */
'use strict';

const Service = require('egg').Service;
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;

class UserService extends Service {
  async RunMysql2DDB() {
    // 异步执行调用py脚本
    // exec('python ../datax/bin/datax.py ../datax/job/job.json ',function(error,stdout,stderr){
    //     if(error) {
    //         console.info('stderr : '+stderr);
    //     }
    //     console.log('result: ' + stdout);
    // })
    // 同步执行
    //调起datax job Service
    const output = execSync('python ../datax/bin/datax.py ../datax/job/job.json ')
    const result =  output.toString();
    const code = "200";
    return { code,result };//输出状态码以及log
  }
}

module.exports = UserService;
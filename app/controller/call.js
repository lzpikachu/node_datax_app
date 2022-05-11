/**
 * API controller 
 * Author：Yabi
 * Time：2021-11-18
 *  
 */
'use strict';

const Controller = require('egg').Controller;

class usersController extends Controller {
  async RunMysql2DDB() {
    const data = await this.service.call.RunMysql2DDB();//程序入口
    this.ctx.body = data;
  }
 
}

module.exports = usersController;


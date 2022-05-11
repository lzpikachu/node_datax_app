'use strict';

const Controller = require('egg').Controller;

class usersController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, yabi';
  }
  async findAll() {
    const data = await this.service.user.findAll();
    this.ctx.body = data;
  }
 
}

module.exports = usersController;


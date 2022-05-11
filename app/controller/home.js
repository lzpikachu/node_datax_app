/**
 * home
 * Author： LiangZhuo
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, yabi';
  }
}

module.exports = HomeController;

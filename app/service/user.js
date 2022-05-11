'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findAll() {
  // 
    const user = 'ALL';
    return { user };
  }

}

module.exports = UserService;

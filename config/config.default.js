/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636011794791_7728';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    client: {
      // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
      
      // host
      host: '',
      // 端口号
      port: '',
      // 用户名
      user: '',
      // 密码
      password: '',
      // 数据库名
      database: '',
   
      // ...
    },

  
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
  };
};

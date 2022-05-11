/**
 * API routers
 * Author： Yabi
 * @param {*} app
 *  
 */
module.exports = app => {
    const { router, controller } = app;
    router.prefix('/api/users')
    router.get('/', controller.users.index);
    router.get('/findall', controller.users.findAll);//返回string
    router.get('/runjob', controller.call.RunMysql2DDB);//call py脚本的API
  };
 
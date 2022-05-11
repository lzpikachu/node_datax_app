// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCall = require('../../../app/controller/call');
import ExportHome = require('../../../app/controller/home');
import ExportUsers = require('../../../app/controller/users');

declare module 'egg' {
  interface IController {
    call: ExportCall;
    home: ExportHome;
    users: ExportUsers;
  }
}

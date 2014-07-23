/* 
 * Application Configurations here
 */

define(['jquery', 'backbone'], function() {
    var appConfig = {};
    appConfig.Porotocol = 'http://';
    appConfig.Host = '127.0.0.1';
    appConfig.ApiBasePath = '/user/api/';
    appConfig.RootApiUrl = appConfig.Porotocol + appConfig.Host + appConfig.ApiBasePath;
    appConfig.UserListApiUrl = appConfig.RootApiUrl + 'userList.json';
    return appConfig;
});

